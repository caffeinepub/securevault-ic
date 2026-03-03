import { Globe, Link, Server, ShieldCheck, Wifi } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    label: "Military-Grade Encryption",
    sublabel: "AES-256 + ECDSA",
    color: "text-brand-blue",
    bg: "bg-primary/10",
    border: "border-primary/25",
  },
  {
    icon: Link,
    label: "Blockchain Secured",
    sublabel: "Internet Computer Protocol",
    color: "text-brand-gold",
    bg: "bg-accent/10",
    border: "border-accent/25",
  },
  {
    icon: Wifi,
    label: "Zero Downtime",
    sublabel: "99.99% uptime SLA",
    color: "text-brand-blue",
    bg: "bg-primary/10",
    border: "border-primary/25",
  },
  {
    icon: Globe,
    label: "GDPR Compliant",
    sublabel: "HIPAA · SOC 2 · ISO 27001",
    color: "text-brand-gold",
    bg: "bg-accent/10",
    border: "border-accent/25",
  },
  {
    icon: Server,
    label: "No Central Server",
    sublabel: "Fully decentralized",
    color: "text-brand-blue",
    bg: "bg-primary/10",
    border: "border-primary/25",
  },
];

export default function TrustBadgesSection() {
  return (
    <section id="trust" className="py-16 relative">
      <div className="section-divider mb-0" />

      <div className="container mx-auto px-6 max-w-7xl pt-16">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-10 animate-on-scroll">
          Trusted Security Standards
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className={`animate-on-scroll animate-on-scroll-delay-${(i % 5) + 1} group flex items-center gap-3 px-5 py-4 rounded-xl ${badge.bg} border ${badge.border} hover:border-opacity-60 transition-all duration-300`}
              >
                <div className="flex-shrink-0">
                  <Icon size={20} className={badge.color} />
                </div>
                <div>
                  <div className={`text-sm font-bold ${badge.color}`}>
                    {badge.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {badge.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
