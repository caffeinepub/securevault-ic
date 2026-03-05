import { Globe, Lock, Server, Shield, TrendingUp, Wifi } from "lucide-react";

const stats = [
  { value: "99.99%", label: "Network Uptime", icon: TrendingUp },
  { value: "0", label: "Central Servers", icon: Server },
  { value: "100%", label: "On-Chain Storage", icon: Globe },
  { value: "∞", label: "Redundancy", icon: Shield },
];

const advantages = [
  {
    icon: Globe,
    title: "No AWS, GCP, or Azure Dependency",
    description:
      "Traditional cloud can be subpoenaed, hacked, or simply go offline. SecureVault IC runs entirely on the Internet Computer — a sovereign blockchain owned by no single company or government.",
    gold: false,
  },
  {
    icon: Lock,
    title: "Blockchain-Level Security",
    description:
      "ICP uses threshold cryptography and chain-key technology to ensure your data is cryptographically secured at every layer — not just the application level.",
    gold: true,
  },
  {
    icon: Wifi,
    title: "Censorship Resistant",
    description:
      "No entity can compel the shutdown, seizure, or modification of your stored data. Your vault is maintained by a distributed network of independent nodes governed by the NNS DAO.",
    gold: false,
  },
  {
    icon: Shield,
    title: "True Data Sovereignty",
    description:
      "Unlike hybrid or multi-cloud solutions, SecureVault IC provides genuine sovereignty. Your organization controls the keys, and no third party can ever access your documents.",
    gold: true,
  },
];

export default function WhyICSection() {
  return (
    <section id="why-ic" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 25% 55%, oklch(0.52 0.20 262 / 0.07) 0%, transparent 60%)",
        }}
      />
      <div className="section-divider mb-0" />

      <div className="container mx-auto px-6 max-w-7xl pt-20">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-brand-gold mb-4">
            Why Internet Computer?
          </p>
          <h2 className="section-headline font-display text-foreground mb-5">
            The Only Infrastructure{" "}
            <span className="gradient-text-blue">Built for True Security</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Traditional cloud is not sovereign. The Internet Computer is the
            world's first true alternative to Big Tech cloud infrastructure.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} glass-card rounded-lg p-6 text-center group`}
              >
                <Icon
                  size={18}
                  className="text-brand-gold mx-auto mb-3 opacity-65"
                />
                <div className="text-3xl font-black gradient-text-blue mb-1.5 leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.14em]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className={`animate-on-scroll animate-on-scroll-delay-${(i % 2) + 1} card-elevated rounded-lg p-7 group`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                    style={
                      adv.gold
                        ? {
                            background: "oklch(0.74 0.135 83 / 0.12)",
                            border: "1px solid oklch(0.74 0.135 83 / 0.25)",
                          }
                        : {
                            background: "oklch(0.52 0.20 262 / 0.12)",
                            border: "1px solid oklch(0.52 0.20 262 / 0.25)",
                          }
                    }
                  >
                    <Icon
                      size={21}
                      className={
                        adv.gold ? "text-brand-gold" : "text-brand-blue"
                      }
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-display font-bold text-base text-foreground mb-2 transition-colors duration-200 ${
                        adv.gold
                          ? "group-hover:text-brand-gold"
                          : "group-hover:text-brand-blue"
                      }`}
                    >
                      {adv.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ICP attribution badge */}
        <div className="mt-14 flex justify-center animate-on-scroll">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-brand-navy-mid/40">
            <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/35 flex items-center justify-center">
              <Globe size={10} className="text-brand-blue" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Powered by the{" "}
              <span className="text-foreground font-semibold">
                Internet Computer Protocol
              </span>{" "}
              — DFINITY Foundation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
