import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SecureVault IC has completely transformed how we manage sensitive client documents. The blockchain-level security gives our compliance team total confidence. We can demonstrate chain-of-custody to regulators in seconds.",
    author: "James Harrington",
    role: "CTO",
    org: "Meridian Capital Bank",
    sector: "Financial Institution",
    initials: "JH",
  },
  {
    quote:
      "As a government ministry, data sovereignty is non-negotiable. SecureVault IC gives us 100% on-chain storage with no foreign server dependency. For the first time, we can guarantee our citizens' data never leaves our sovereign control.",
    author: "Minister's Office",
    role: "Director of Digital Infrastructure",
    org: "Department of Digital Affairs",
    sector: "Government Agency",
    initials: "DA",
  },
  {
    quote:
      "Our legal team handles thousands of confidential documents across complex international cases. SecureVault IC's immutable audit trails and instant retrieval have been game-changing for both our operational efficiency and client trust.",
    author: "Priya Sharma",
    role: "Managing Partner",
    org: "Sharma & Associates LLP",
    sector: "Legal Firm",
    initials: "PS",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="section-divider mb-0" />

      <div className="container mx-auto px-6 max-w-7xl pt-24">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-3">
            Trusted by Leaders
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            What Our Clients <span className="gradient-text-blue">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Organizations at the forefront of data security have already made
            the switch to sovereign, on-chain document management.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              data-ocid={`testimonials.item.${i + 1}`}
              className={`card-elevated animate-on-scroll animate-on-scroll-delay-${i + 1} rounded-xl p-7 flex flex-col relative group`}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote size={32} className="text-brand-blue" />
              </div>

              {/* Sector badge */}
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-gold/80 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-5 self-start">
                {t.sector}
              </span>

              {/* Quote */}
              <blockquote className="text-sm text-foreground/85 leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center text-xs font-bold text-brand-blue flex-shrink-0">
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
