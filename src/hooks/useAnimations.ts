"use client";

import { useEffect, useState } from "react";
import { useInView, useMotionValue, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

export function usePrefersReducedMotion() {
    const [prefersReduced, setPrefersReduced] = useState(false);
    useEffect(() => {
        const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReduced(mql.matches);
        const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);
    return prefersReduced;
}

export function useCountUp(end: number, duration: number = 2) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        if (isInView) {
            motionValue.set(end);
        }
    }, [isInView, motionValue, end]);

    useEffect(() => {
        const unsub = spring.on("change", (latest: number) => {
            setDisplay(Math.round(latest).toString());
        });
        return unsub;
    }, [spring]);

    return { ref, display, isInView };
}
