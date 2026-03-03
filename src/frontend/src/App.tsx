import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import SectorsSection from "./components/SectorsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TrustBadgesSection from "./components/TrustBadgesSection";
import WhyICSection from "./components/WhyICSection";
import { useScrollAnimation } from "./hooks/useIntersectionObserver";

export default function App() {
  useScrollAnimation();

  // Re-run scroll animations after a short delay for elements that might be below fold
  useEffect(() => {
    const timer = setTimeout(() => {
      const targets =
        document.querySelectorAll<HTMLElement>(".animate-on-scroll");
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );
      for (const target of targets) {
        if (!target.classList.contains("in-view")) {
          observer.observe(target);
        }
      }
      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main>
        <HeroSection />
        <SectorsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WhyICSection />
        <TrustBadgesSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
