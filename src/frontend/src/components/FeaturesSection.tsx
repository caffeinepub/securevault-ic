import {
  CheckCircle,
  Database,
  FileSearch,
  Lock,
  RefreshCw,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "On-Chain Storage",
    description:
      "Documents stored entirely on the Internet Computer. No Amazon S3, no Google Cloud — zero centralized dependency, ever.",
    gold: false,
  },
  {
    icon: UserCheck,
    title: "Zero-Trust Access",
    description:
      "Every access request is authenticated cryptographically. Access policies are enforced at the protocol level, not the application layer.",
    gold: true,
  },
  {
    icon: FileSearch,
    title: "Immutable Audit Trail",
    description:
      "Every document access, modification, and retrieval is cryptographically logged on-chain. Fully verifiable, permanently.",
    gold: false,
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "Documents are encrypted client-side before upload. Only authorized parties with cryptographic keys can ever access your data.",
    gold: true,
  },
  {
    icon: CheckCircle,
    title: "Compliance Ready",
    description:
      "Architected to meet GDPR, HIPAA, SOC 2, and government data standards from day one. Audit reports generated on-demand.",
    gold: false,
  },
  {
    icon: RefreshCw,
    title: "Full Redundancy",
    description:
      "Decentralized redundancy across ICP nodes globally ensures zero single point of failure. Your vault survives any catastrophe.",
    gold: true,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 50%, oklch(0.52 0.20 262 / 0.05) 0%, transparent 70%)",
        }}
      />
      <div className="circuit-dots absolute inset-0 opacity-[0.12] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-brand-gold mb-4">
            Key Capabilities
          </p>
          <h2 className="section-headline font-display text-foreground mb-5">
            Built for{" "}
            <span className="gradient-text-blue">Maximum Security</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Every feature is designed from first principles around a single
            goal: making your documents truly unstoppable.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                data-ocid={`features.item.${i + 1}`}
                className={`card-elevated animate-on-scroll animate-on-scroll-delay-${(i % 3) + 1} rounded-lg p-7 group cursor-default`}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300"
                  style={
                    feature.gold
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
                      feature.gold ? "text-brand-gold" : "text-brand-blue"
                    }
                  />
                </div>
                <h3
                  className={`font-display font-bold text-base text-foreground mb-3 transition-colors duration-200 ${
                    feature.gold
                      ? "group-hover:text-brand-gold"
                      : "group-hover:text-brand-blue"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
