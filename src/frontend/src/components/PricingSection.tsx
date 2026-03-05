import { useActor } from "@/hooks/useActor";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description:
      "For enterprises beginning their journey to sovereign document security.",
    features: [
      "Up to 50 users",
      "1 TB encrypted storage",
      "End-to-end encryption",
      "Immutable audit trails",
      "Standard compliance reports",
      "Email support (48h SLA)",
    ],
    cta: "Get Started",
    ocid: "pricing.starter.primary_button",
    variant: "default" as const,
    stripeItem: {
      productName: "SecureVault IC Starter",
      priceInCents: 49900n,
      quantity: 1n,
      currency: "usd",
      productDescription:
        "Up to 50 users, 1TB encrypted storage, monthly subscription",
    },
  },
  {
    name: "Professional",
    price: "$1,499",
    period: "/month",
    description:
      "For financial and legal organizations with demanding compliance and scale requirements.",
    features: [
      "Unlimited users",
      "10 TB encrypted storage",
      "All Starter features",
      "Advanced compliance reports",
      "Custom integrations & API",
      "Priority support (4h SLA)",
      "Dedicated onboarding",
    ],
    cta: "Start Free Trial",
    ocid: "pricing.professional.primary_button",
    variant: "featured" as const,
    badge: "Most Popular",
    stripeItem: {
      productName: "SecureVault IC Professional",
      priceInCents: 149900n,
      quantity: 1n,
      currency: "usd",
      productDescription:
        "Unlimited users, 10TB encrypted storage, monthly subscription",
    },
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
    ocid: "pricing.government.primary_button",
    variant: "gold" as const,
    badge: "Most Trusted",
    stripeItem: null,
  },
];

type StripeItem = {
  productName: string;
  priceInCents: bigint;
  quantity: bigint;
  currency: string;
  productDescription: string;
};

export default function PricingSection() {
  const { actor } = useActor();
  const navigate = useNavigate();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [errorPlan, setErrorPlan] = useState<string | null>(null);

  const scrollToContact = () => {
    navigate({ to: "/contact" });
  };

  const handleCheckout = async (planName: string, stripeItem: StripeItem) => {
    setLoadingPlan(planName);
    setErrorPlan(null);
    try {
      if (!actor) throw new Error("Backend not ready");
      const currentUrl = window.location.href;
      const url = await actor.createCheckoutSession(
        [stripeItem],
        currentUrl,
        currentUrl,
      );
      window.location.href = url;
    } catch {
      setErrorPlan(planName);
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <section id="pricing" className="py-28 relative">
      <div className="section-divider mb-0" />

      <div className="container mx-auto px-6 max-w-7xl pt-20">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-brand-gold mb-4">
            Pricing
          </p>
          <h2 className="section-headline font-display text-foreground mb-5">
            Choose Your <span className="gradient-text-blue">Plan</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            From growing enterprises to sovereign governments — SecureVault IC
            scales with your security requirements.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const isFeatured = plan.variant === "featured";
            const isGold = plan.variant === "gold";
            const isLoading = loadingPlan === plan.name;
            const hasError = errorPlan === plan.name;
            const planKey = plan.name.toLowerCase();

            return (
              <div
                key={plan.name}
                data-ocid={`pricing.${planKey}.card`}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} rounded-lg flex flex-col relative overflow-hidden transition-all duration-300 ${
                  isFeatured
                    ? "card-elevated scale-[1.03]"
                    : isGold
                      ? "card-gold"
                      : "glass-card"
                }`}
              >
                {/* Featured top line */}
                {isFeatured && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
                )}
                {/* Gold top line */}
                {isGold && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
                )}

                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="px-4 py-1 text-[10px] font-black uppercase tracking-[0.18em] rounded-full shadow-glow-gold"
                      style={
                        isGold
                          ? {
                              background: "oklch(0.74 0.135 83)",
                              color: "oklch(0.09 0.025 250)",
                            }
                          : {
                              background: "oklch(0.52 0.20 262)",
                              color: "white",
                            }
                      }
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Plan name */}
                  <div className="mb-6">
                    <h3
                      className={`font-display font-bold text-lg mb-1.5 ${
                        isGold
                          ? "gradient-text-gold"
                          : isFeatured
                            ? "text-brand-blue"
                            : "text-foreground"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-7 border-b border-border/50">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black font-display text-foreground">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground text-sm">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    {plan.price === "Custom" && (
                      <p className="text-xs text-muted-foreground mt-1.5">
                        Tailored to your requirements
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <Check
                          size={14}
                          className={`flex-shrink-0 mt-0.5 ${
                            isGold ? "text-brand-gold" : "text-brand-blue"
                          }`}
                        />
                        <span className="text-foreground/82">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div>
                    <button
                      type="button"
                      data-ocid={plan.ocid}
                      disabled={isLoading}
                      onClick={() => {
                        if (plan.stripeItem) {
                          handleCheckout(plan.name, plan.stripeItem);
                        } else {
                          scrollToContact();
                        }
                      }}
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded text-sm font-bold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${
                        isFeatured
                          ? "btn-primary-glow text-white"
                          : isGold
                            ? "btn-gold-glow font-black"
                            : "btn-outline-glow text-foreground"
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <Loader2
                            size={14}
                            className="animate-spin"
                            data-ocid={`pricing.${planKey}.loading_state`}
                          />
                          Processing…
                        </>
                      ) : (
                        <>
                          {plan.cta}
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>

                    {hasError && (
                      <p
                        data-ocid={`pricing.${planKey}.error_state`}
                        className="text-xs text-red-400 text-center mt-2"
                      >
                        Payment unavailable. Please try again.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="text-center text-xs text-muted-foreground/60 mt-10 animate-on-scroll">
          All plans include 30-day free trial · No credit card required · Cancel
          anytime
        </p>
      </div>
    </section>
  );
}
