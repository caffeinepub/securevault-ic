import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SecureVault IC transformed how we manage sensitive client documents. The blockchain-level security gives our compliance team total confidence — we can demonstrate chain-of-custody to regulators in seconds.",
    author: "James Harrington",
    role: "CTO",
    org: "Meridian Capital Bank",
    sector: "Financial Institution",
    initials: "JH",
  },
  {
    quote:
      "As a government ministry, data sovereignty is non-negotiable. SecureVault IC gives us 100% on-chain storage with zero foreign server dependency. For the first time, we can guarantee our citizens' data never leaves sovereign control.",
    author: "Director, Digital Infrastructure",
    role: "Director of Digital Affairs",
    org: "Department of Digital Affairs",
    sector: "Government Agency",
    initials: "DA",
  },
  {
    quote:
      "Our legal team handles thousands of confidential documents across complex international cases. SecureVault IC's immutable audit trails and instant retrieval have been game-changing for our operational efficiency and client trust.",
    author: "Priya Sharma",
    role: "Managing Partner",
    org: "Sharma & Associates LLP",
    sector: "Legal Firm",
    initials: "PS",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 relative">
      <div className="section-divider mb-0" />

      <div className="container mx-auto px-6 max-w-7xl pt-20">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-brand-gold mb-4">
            Trusted by Leaders
          </p>
          <h2 className="section-headline font-display text-foreground mb-5">
            What Our Clients <span className="gradient-text-blue">Say</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Organizations at the forefront of data security have made the switch
            to sovereign, on-chain document management.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              data-ocid={`testimonials.item.${i + 1}`}
              className={`card-elevated animate-on-scroll animate-on-scroll-delay-${i + 1} rounded-lg p-7 flex flex-col relative group`}
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 opacity-15 group-hover:opacity-30 transition-opacity duration-300">
                <Quote size={30} className="text-brand-blue" />
              </div>

              {/* Sector badge */}
              <span
                className="inline-block text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full mb-5 self-start"
                style={{
                  background: "oklch(0.74 0.135 83 / 0.10)",
                  border: "1px solid oklch(0.74 0.135 83 / 0.22)",
                  color: "oklch(0.80 0.10 83)",
                }}
              >
                {t.sector}
              </span>

              {/* Quote */}
              <blockquote className="text-sm text-foreground/80 leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/28 flex items-center justify-center text-xs font-bold text-brand-blue flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">
                    {t.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.role}, {t.org}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
