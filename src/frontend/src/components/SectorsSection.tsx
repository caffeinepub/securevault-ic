import {
  Banknote,
  Building2,
  HeartPulse,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react";

const sectors = [
  {
    icon: Building2,
    title: "Enterprises",
    description:
      "Protect proprietary contracts, IP assets, and corporate records with immutable on-chain storage.",
  },
  {
    icon: Landmark,
    title: "Government Agencies",
    description:
      "Ensure sovereign data custody with zero foreign server dependency and full audit compliance.",
  },
  {
    icon: Banknote,
    title: "Financial Institutions",
    description:
      "Safeguard transaction records, regulatory filings, and client portfolios with cryptographic integrity.",
  },
  {
    icon: Scale,
    title: "Legal Firms",
    description:
      "Maintain chain of custody for case files and confidential client documents with tamperproof logs.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Organizations",
    description:
      "HIPAA-compliant patient record storage with end-to-end encryption and instant authorized retrieval.",
  },
  {
    icon: ShieldCheck,
    title: "Data Protection Agencies",
    description:
      "Lead by example with infrastructure that meets the highest standards for GDPR and data sovereignty.",
  },
];

export default function SectorsSection() {
  return (
    <section id="sectors" className="py-24 relative">
      <div className="section-divider mb-24 -mt-px" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-3">
            Who It's For
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Built for Organizations That{" "}
            <span className="gradient-text-blue">Can't Afford to Fail</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            SecureVault IC is purpose-built for industries where data integrity
            is not just a feature — it's a legal and ethical obligation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                data-ocid={`sectors.item.${i + 1}`}
                className="glass-card animate-on-scroll rounded-xl p-6 group cursor-default transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <Icon size={22} className="text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-brand-blue transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {sector.description}
                    </p>
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
