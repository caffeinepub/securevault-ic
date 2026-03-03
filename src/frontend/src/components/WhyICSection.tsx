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
      "Traditional cloud providers can be subpoenaed, hacked, or simply go offline. SecureVault IC runs entirely on the Internet Computer — a sovereign blockchain network owned by no single company or government.",
  },
  {
    icon: Lock,
    title: "Blockchain-Level Security",
    description:
      "ICP's architecture uses threshold cryptography and chain-key technology to ensure your data is cryptographically secured at every layer — not just at the application level.",
  },
  {
    icon: Wifi,
    title: "Censorship Resistant",
    description:
      "No entity can compel the shutdown, seizure, or modification of your stored data. Your vault is maintained by a distributed network of independent nodes governed by the NNS DAO.",
  },
  {
    icon: Shield,
    title: "True Data Sovereignty",
    description:
      "Unlike hybrid or multi-cloud solutions, SecureVault IC provides genuine data sovereignty. Your organization controls the keys, and no third party can ever access your documents.",
  },
];

export default function WhyICSection() {
  return (
    <section id="why-ic" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 50%, oklch(0.55 0.22 264 / 0.07) 0%, transparent 60%)",
        }}
      />
      <div className="section-divider mb-0" />

      <div className="container mx-auto px-6 max-w-7xl pt-24">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-3">
            Why Internet Computer?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            The Only Infrastructure{" "}
            <span className="gradient-text-blue">Built for True Security</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Traditional cloud is not sovereign. The Internet Computer is the
            world's first true alternative to Big Tech cloud.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} glass-card rounded-xl p-6 text-center group`}
              >
                <Icon
                  size={20}
                  className="text-brand-gold mx-auto mb-3 opacity-70"
                />
                <div className="text-3xl font-black gradient-text-blue mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className={`animate-on-scroll animate-on-scroll-delay-${(i % 2) + 1} card-elevated rounded-xl p-7 group`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <Icon size={22} className="text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-brand-blue transition-colors">
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

        {/* ICP badge */}
        <div className="mt-16 flex justify-center animate-on-scroll">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-brand-navy-mid/50">
            <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Globe size={12} className="text-brand-blue" />
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
