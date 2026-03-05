import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  DollarSign,
  Info,
  Layers,
  Mail,
  Shield,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const sections = [
  {
    label: "Features",
    to: "/features",
    icon: Zap,
    description:
      "End-to-end encryption, immutable audit trails, and zero-trust architecture.",
    accent: "blue",
    ocid: "home.features.card",
  },
  {
    label: "Sectors",
    to: "/sectors",
    icon: Building2,
    description:
      "Purpose-built for finance, healthcare, legal, government, and beyond.",
    accent: "gold",
    ocid: "home.sectors.card",
  },
  {
    label: "How It Works",
    to: "/how-it-works",
    icon: Layers,
    description:
      "Three-step pipeline — upload, encrypt, verify — all on-chain.",
    accent: "blue",
    ocid: "home.howitworks.card",
  },
  {
    label: "Why Internet Computer",
    to: "/why-ic",
    icon: Shield,
    description:
      "No AWS, no GCP, no central failure point. Pure sovereign infrastructure.",
    accent: "gold",
    ocid: "home.whyic.card",
  },
  {
    label: "Pricing",
    to: "/pricing",
    icon: DollarSign,
    description:
      "Flexible plans from Starter to Government — with transparent on-chain billing.",
    accent: "blue",
    ocid: "home.pricing.card",
  },
  {
    label: "About",
    to: "/about",
    icon: Info,
    description:
      "Verify every claim independently — canister ID, WASM hash, and IC Dashboard.",
    accent: "gold",
    ocid: "home.about.card",
  },
];

export default function HomePage() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 40%, oklch(0.52 0.20 262 / 0.05) 0%, transparent 65%)",
        }}
      />
      <div className="section-divider" />

      <div className="container mx-auto px-6 max-w-7xl pt-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold mb-4">
            Explore SecureVault IC
          </p>
          <h2 className="section-headline font-display text-foreground mb-5">
            Everything You Need to{" "}
            <span className="gradient-text-blue">Know</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Navigate each section to learn how SecureVault IC delivers
            enterprise-grade document security on the Internet Computer.
          </p>
        </motion.div>

        {/* Section teaser grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section, i) => {
            const Icon = section.icon;
            const isGold = section.accent === "gold";

            return (
              <motion.div
                key={section.to}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 + i * 0.07 }}
              >
                <Link
                  to={section.to}
                  data-ocid={section.ocid}
                  className="group block card-elevated rounded-lg p-7 hover:scale-[1.02] transition-all duration-300 h-full relative overflow-hidden"
                >
                  {/* Hover glow accent */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
                    style={{
                      background: isGold
                        ? "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.74 0.135 83 / 0.07) 0%, transparent 70%)"
                        : "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.52 0.20 262 / 0.08) 0%, transparent 70%)",
                    }}
                  />
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: isGold
                        ? "linear-gradient(90deg, transparent, oklch(0.74 0.135 83 / 0.6), transparent)"
                        : "linear-gradient(90deg, transparent, oklch(0.52 0.20 262 / 0.6), transparent)",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                      style={
                        isGold
                          ? {
                              background: "oklch(0.74 0.135 83 / 0.12)",
                              border: "1px solid oklch(0.74 0.135 83 / 0.28)",
                            }
                          : {
                              background: "oklch(0.52 0.20 262 / 0.12)",
                              border: "1px solid oklch(0.52 0.20 262 / 0.28)",
                            }
                      }
                    >
                      <Icon
                        size={19}
                        className={
                          isGold ? "text-brand-gold" : "text-brand-blue"
                        }
                      />
                    </div>

                    {/* Label */}
                    <h3
                      className={`font-display font-bold text-[1rem] mb-2.5 transition-colors duration-200 ${
                        isGold
                          ? "text-foreground group-hover:text-brand-gold"
                          : "text-foreground group-hover:text-brand-blue"
                      }`}
                    >
                      {section.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {section.description}
                    </p>

                    {/* Arrow CTA */}
                    <div
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 ${
                        isGold
                          ? "text-brand-gold/70 group-hover:text-brand-gold"
                          : "text-brand-blue/70 group-hover:text-brand-blue"
                      }`}
                    >
                      Explore
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-0.5 transition-transform duration-200"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
        >
          <Link
            to="/contact"
            data-ocid="home.contact.primary_button"
            className="btn-primary-glow flex items-center gap-2.5 px-9 py-4 rounded text-base font-bold text-white min-w-[200px] justify-center"
          >
            <Mail size={15} />
            Request Access
          </Link>
          <Link
            to="/pricing"
            data-ocid="home.pricing.secondary_button"
            className="btn-outline-glow flex items-center gap-2.5 px-9 py-4 rounded text-base font-semibold text-foreground/85 min-w-[200px] justify-center"
          >
            View Pricing
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
