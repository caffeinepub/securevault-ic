import { Globe, Link2, Server, ShieldCheck, Wifi } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    label: "Military-Grade Encryption",
    sublabel: "AES-256 + ECDSA",
    gold: false,
  },
  {
    icon: Link2,
    label: "Blockchain Secured",
    sublabel: "Internet Computer Protocol",
    gold: true,
  },
  {
    icon: Wifi,
    label: "Zero Downtime",
    sublabel: "99.99% Uptime SLA",
    gold: false,
  },
  {
    icon: Globe,
    label: "GDPR · HIPAA · SOC 2",
    sublabel: "ISO 27001 Compliant",
    gold: true,
  },
  {
    icon: Server,
    label: "No Central Server",
    sublabel: "Fully Decentralized",
    gold: false,
  },
];

export default function TrustBadgesSection() {
  return (
    <section id="trust" className="py-16 relative">
      <div className="section-divider mb-0" />

      <div className="container mx-auto px-6 max-w-7xl pt-16">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.20em] text-muted-foreground mb-10 animate-on-scroll">
          Security Standards & Compliance
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className={`animate-on-scroll animate-on-scroll-delay-${(i % 5) + 1} flex items-center gap-3 px-5 py-3.5 rounded-lg transition-all duration-300`}
                style={
                  badge.gold
                    ? {
                        background: "oklch(0.74 0.135 83 / 0.07)",
                        border: "1px solid oklch(0.74 0.135 83 / 0.20)",
                      }
                    : {
                        background: "oklch(0.52 0.20 262 / 0.07)",
                        border: "1px solid oklch(0.52 0.20 262 / 0.20)",
                      }
                }
              >
                <Icon
                  size={18}
                  className={badge.gold ? "text-brand-gold" : "text-brand-blue"}
                />
                <div>
                  <div
                    className={`text-sm font-bold ${badge.gold ? "text-brand-gold" : "text-brand-blue"}`}
                  >
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
