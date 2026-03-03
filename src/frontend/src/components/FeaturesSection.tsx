import {
  CheckCircle,
  Database,
  FileSearch,
  Lock,
  RefreshCw,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "Documents are encrypted client-side before upload. Only authorized parties with cryptographic keys can ever access your data.",
    color: "text-brand-blue",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Database,
    title: "100% On-Chain Storage",
    description:
      "Stored entirely on the Internet Computer blockchain. No Amazon S3, no Google Cloud, no Azure — zero centralized dependency.",
    color: "text-brand-gold",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: FileSearch,
    title: "Immutable Audit Trails",
    description:
      "Every document access, modification, and retrieval is cryptographically logged on-chain. Fully verifiable, forever.",
    color: "text-brand-blue",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Zap,
    title: "Instant Retrieval",
    description:
      "Sub-second document access from anywhere in the world. ICP's native throughput ensures no latency bottlenecks.",
    color: "text-brand-gold",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: CheckCircle,
    title: "Compliance Ready",
    description:
      "Architected to meet GDPR, HIPAA, SOC 2, and government data standards out of the box. Audit reports on demand.",
    color: "text-brand-blue",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: RefreshCw,
    title: "Disaster Recovery",
    description:
      "Decentralized redundancy across ICP nodes globally ensures zero single point of failure. Your data survives any catastrophe.",
    color: "text-brand-gold",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.55 0.22 264 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-3">
            Key Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Security Without{" "}
            <span className="gradient-text-blue">Compromise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every feature is designed from first principles around one goal:
            making your documents truly unstoppable.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`card-elevated animate-on-scroll animate-on-scroll-delay-${(i % 3) + 1} rounded-xl p-7 group cursor-default`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className={feature.color} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-brand-blue transition-colors">
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
