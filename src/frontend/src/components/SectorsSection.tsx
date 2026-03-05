import {
  Building2,
  Gavel,
  Heart,
  LandmarkIcon,
  Shield,
  TrendingUp,
} from "lucide-react";

const sectors = [
  {
    icon: Building2,
    label: "Government",
    description:
      "Sovereign document management for ministries and agencies. Zero foreign server dependency, full audit compliance, classified archive protection.",
  },
  {
    icon: Heart,
    label: "Healthcare",
    description:
      "HIPAA-aligned patient record storage with immutable access logs, cross-provider secure access, and end-to-end encryption at rest.",
  },
  {
    icon: Gavel,
    label: "Legal",
    description:
      "Timestamped contracts, court filings, and evidence preservation with chain-of-custody integrity across any jurisdiction.",
  },
  {
    icon: TrendingUp,
    label: "Finance",
    description:
      "SEC, MiFID II, and GDPR-compliant regulatory document vaults for banks, asset managers, and fintech firms.",
  },
  {
    icon: Shield,
    label: "Defense",
    description:
      "Air-gap equivalent security for mission-critical documents. No central server, no cloud vendor, no attack surface.",
  },
  {
    icon: LandmarkIcon,
    label: "Enterprise",
    description:
      "Board minutes, IP filings, and M&A documents secured on-chain. Access controls enforced at the protocol level.",
  },
];

export default function SectorsSection() {
  return (
    <section id="sectors" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.10_0.028_252_/_0.25)] to-transparent pointer-events-none" />
      <div className="section-divider mb-0" />

      <div className="container mx-auto px-6 max-w-7xl pt-20">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-brand-gold mb-4">
            Sector Coverage
          </p>
          <h2 className="section-headline font-display text-foreground mb-5">
            Trusted Across{" "}
            <span className="gradient-text-blue">Critical Sectors</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Purpose-built for industries where document integrity is not
            optional — it's existential.
          </p>
        </div>

        {/* Sector grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.label}
                data-ocid={`sectors.item.${i + 1}`}
                className={`glass-card rounded-lg p-7 animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 6)} group cursor-default`}
              >
                <div className="sector-icon-ring w-11 h-11 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-brand-blue" />
                </div>
                <h3 className="font-display font-bold text-[1rem] text-foreground mb-2.5 group-hover:text-brand-blue transition-colors duration-200">
                  {sector.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
