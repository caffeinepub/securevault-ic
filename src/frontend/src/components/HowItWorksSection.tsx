import { Download, HardDrive, Upload } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload & Encrypt",
    description:
      "Documents are encrypted end-to-end on your device before anything leaves your network. Your keys never touch external infrastructure.",
    detail: "AES-256 + threshold ECDSA",
    accentClass: "step-card-blue",
    iconColor: "text-brand-blue",
    iconBg: "bg-primary/10 border-primary/25",
    numberColor: "oklch(0.55 0.22 264 / 0.12)",
  },
  {
    number: "02",
    icon: HardDrive,
    title: "Store On-Chain",
    description:
      "Encrypted documents become immutable smart contract data on the Internet Computer — replicated across independent global nodes with no central owner.",
    detail: "13+ independent nodes",
    accentClass: "step-card-blue",
    iconColor: "text-brand-blue",
    iconBg: "bg-primary/10 border-primary/25",
    numberColor: "oklch(0.55 0.22 264 / 0.12)",
  },
  {
    number: "03",
    icon: Download,
    title: "Retrieve Anytime",
    description:
      "Authorized users retrieve documents with cryptographic verification in under 500ms. Every access is permanently logged on-chain.",
    detail: "< 500ms · Full audit trail",
    accentClass: "step-card-gold",
    iconColor: "text-brand-gold",
    iconBg: "bg-accent/10 border-accent/25",
    numberColor: "oklch(0.73 0.12 82 / 0.12)",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="section-divider mb-0" />

      <div className="container mx-auto px-6 max-w-6xl pt-24">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Three Steps to{" "}
            <span className="gradient-text-blue">Sovereign Security</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From upload to retrieval — every step is zero-trust by architecture,
            not by policy.
          </p>
        </div>

        {/* Pipeline — vertical on mobile, horizontal on desktop */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;

            return (
              <div
                key={step.number}
                className="flex flex-col lg:flex-row flex-1 items-stretch"
              >
                {/* Step card */}
                <div
                  className={`step-card ${step.accentClass} animate-on-scroll animate-on-scroll-delay-${i + 1} rounded-xl p-8 flex-1 relative overflow-hidden group`}
                >
                  {/* Ghost number backdrop */}
                  <span
                    className="step-number-outline"
                    style={{
                      WebkitTextStrokeColor: step.numberColor,
                    }}
                  >
                    {step.number}
                  </span>

                  {/* Icon + step indicator */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-11 h-11 rounded-xl ${step.iconBg} border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon size={20} className={step.iconColor} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">
                      Step {i + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Detail chip */}
                  <div className="inline-flex items-center gap-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        step.accentClass === "step-card-gold"
                          ? "bg-brand-gold"
                          : "bg-brand-blue"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold ${
                        step.accentClass === "step-card-gold"
                          ? "text-brand-gold/80"
                          : "text-brand-blue/80"
                      }`}
                    >
                      {step.detail}
                    </span>
                  </div>
                </div>

                {/* Connector between steps */}
                {!isLast && (
                  <>
                    {/* Mobile: vertical dashed line */}
                    <div className="lg:hidden flex justify-center py-1">
                      <div className="step-connector-v" />
                    </div>
                    {/* Desktop: horizontal dashed line with arrow */}
                    <div className="hidden lg:flex items-center px-2 flex-shrink-0">
                      <div className="step-connector-h w-10" />
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M0 5h8M5 1l4 4-4 4"
                          stroke="oklch(0.55 0.22 264 / 0.5)"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom trust line */}
        <div className="mt-16 flex justify-center animate-on-scroll">
          <p className="text-xs text-muted-foreground/60 text-center max-w-md">
            Every operation is executed by smart contracts on the Internet
            Computer — no intermediaries, no exceptions, no single points of
            failure.
          </p>
        </div>
      </div>
    </section>
  );
}
