import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description:
      "For small enterprises beginning their journey to sovereign document security.",
    features: [
      "Up to 50 users",
      "1TB encrypted storage",
      "End-to-end encryption",
      "Immutable audit trails",
      "Standard compliance reports",
      "Email support (48h SLA)",
    ],
    cta: "Get Started",
    ocid: "pricing.starter.button",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$1,499",
    period: "/month",
    description:
      "For financial and legal organizations with demanding compliance and scale needs.",
    features: [
      "Unlimited users",
      "10TB encrypted storage",
      "All Starter features",
      "Advanced compliance reports",
      "Custom integrations & API",
      "Priority support (4h SLA)",
      "Dedicated onboarding",
    ],
    cta: "Start Free Trial",
    ocid: "pricing.professional.button",
    highlighted: true,
  },
  {
    name: "Government",
    price: "Custom",
    period: "",
    description:
      "For government agencies and critical national infrastructure with zero-compromise requirements.",
    features: [
      "Unlimited users & storage",
      "Dedicated ICP nodes",
      "Custom SLA guarantee",
      "On-site deployment option",
      "24/7 dedicated support team",
      "Security clearance available",
      "Regulatory liaison support",
    ],
    cta: "Contact Us",
    ocid: "pricing.government.button",
    highlighted: false,
  },
];

export default function PricingSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="section-divider mb-0" />

      <div className="container mx-auto px-6 max-w-7xl pt-24">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Plans for Every{" "}
            <span className="gradient-text-blue">Security Level</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From growing enterprises to sovereign governments — SecureVault IC
            scales with your requirements.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`animate-on-scroll animate-on-scroll-delay-${i + 1} rounded-xl flex flex-col relative overflow-hidden transition-all duration-300 ${
                plan.highlighted ? "card-featured scale-105" : "glass-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
              )}

              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-brand-gold text-brand-navy text-xs font-black uppercase tracking-widest rounded-full shadow-glow-gold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Plan name */}
                <div className="mb-6">
                  <h3
                    className={`text-lg font-bold mb-1 ${
                      plan.highlighted ? "text-brand-blue" : "text-brand-gold"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-border">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground text-sm">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  {plan.price === "Custom" && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Tailored to your requirements
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check
                        size={15}
                        className={`flex-shrink-0 mt-0.5 ${
                          plan.highlighted
                            ? "text-brand-blue"
                            : "text-brand-gold"
                        }`}
                      />
                      <span className="text-foreground/85">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  data-ocid={plan.ocid}
                  onClick={scrollToContact}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                    plan.highlighted
                      ? "btn-primary-glow text-white"
                      : "btn-outline-glow text-foreground"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-muted-foreground mt-10 animate-on-scroll">
          All plans include 30-day free trial · No credit card required · Cancel
          anytime
        </p>
      </div>
    </section>
  );
}
