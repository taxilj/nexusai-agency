import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Tools from "@/components/Tools";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <WhyUs />
      <Tools />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
