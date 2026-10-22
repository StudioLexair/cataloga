import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import StatsBand from "@/components/sections/StatsBand";
import Pillars from "@/components/sections/Pillars";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Showcase from "@/components/sections/Showcase";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <LogoMarquee />
        <StatsBand />
        <Pillars />
        <Features />
        <HowItWorks />
        <Showcase />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
