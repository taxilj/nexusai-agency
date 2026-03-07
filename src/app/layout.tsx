import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Agentryx — AI Automation & WordPress Agency",
  description:
    "Agentryx builds WordPress websites, AI Agents and Agentic AI Automation systems that help businesses scale on complete autopilot.",
  keywords: [
    "AI Agency India",
    "WordPress Development",
    "AI Agents",
    "AI Automation",
    "n8n Automation",
    "Agentic AI",
    "Business Automation",
    "Chatbot Development",
  ],
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
