import { Download, HardDrive, Upload } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload & Encrypt",
    description:
      "Documents are encrypted end-to-end on your device before leaving your network. Your keys never touch external infrastructure.",
    detail: "AES-256 + Threshold ECDSA",
    variant: "blue" as const,
  },
  {
    number: "02",
    icon: HardDrive,
    title: "Store On-Chain",
    description:
      "Encrypted documents become immutable smart contract data on the Internet Computer — replicated across independent global nodes with no single owner.",
    detail: "13+ Independent Nodes",
    variant: "blue" as const,
  },
  {
    number: "03",
    icon: Download,
    title: "Access & Verify",
    description:
      "Authorized users retrieve documents with cryptographic verification in under 500ms. Every access is permanently logged on-chain.",
    detail: "< 500ms · Full Audit Trail",
    variant: "gold" as const,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 relative">
      <div className="section-divider mb-0" />

      <div className="container mx-auto px-6 max-w-6xl pt-20">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-brand-gold mb-4">
            How It Works
          </p>
          <h2 className="section-headline font-display text-foreground mb-5">
            Simple. <span className="gradient-text-blue">Secure.</span>{" "}
            <span className="gradient-text-gold">Sovereign.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
            From upload to retrieval — every step is zero-trust by architecture,
            not by policy.
          </p>
        </div>

        {/* Pipeline */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            const isGold = step.variant === "gold";

            return (
              <div
                key={step.number}
                className="flex flex-col lg:flex-row flex-1 items-stretch"
              >
                {/* Step card */}
                <div
                  className={`step-card ${isGold ? "step-card-gold" : "step-card-blue"} animate-on-scroll animate-on-scroll-delay-${i + 1} rounded-lg p-8 flex-1 relative overflow-hidden group`}
                >
                  {/* Large ghost step number */}
                  <span
                    className="absolute right-4 bottom-3 text-[5.5rem] font-black leading-none pointer-events-none select-none"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: `1px ${
                        isGold
                          ? "oklch(0.74 0.135 83 / 0.10)"
                          : "oklch(0.52 0.20 262 / 0.10)"
                      }`,
                      letterSpacing: "-0.04em",
                    }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  {/* Icon + label */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                      style={
                        isGold
                          ? {
                              background: "oklch(0.74 0.135 83 / 0.12)",
                              border: "1px solid oklch(0.74 0.135 83 / 0.28)",
                            }
                          : {
                              background: "oklch(0.52 0.20 262 / 0.12)",
                              border: "1px solid oklch(0.52 0.20 262 / 0.28)",
                            }
                      }
                    >
                      <Icon
                        size={19}
                        className={
                          isGold ? "text-brand-gold" : "text-brand-blue"
                        }
                      />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground/55">
                      Step {i + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-foreground mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Detail chip */}
                  <div className="inline-flex items-center gap-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        isGold ? "bg-brand-gold" : "bg-brand-blue"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold ${
                        isGold ? "text-brand-gold/80" : "text-brand-blue/80"
                      }`}
                    >
                      {step.detail}
                    </span>
                  </div>
                </div>

                {/* Connector */}
                {!isLast && (
                  <>
                    <div className="lg:hidden flex justify-center py-1">
                      <div className="step-connector-v" />
                    </div>
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
                          stroke="oklch(0.52 0.20 262 / 0.50)"
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

        {/* Footer note */}
        <div className="mt-14 flex justify-center animate-on-scroll">
          <p className="text-xs text-muted-foreground/55 text-center max-w-md leading-relaxed">
            Every operation is executed by smart contracts on the Internet
            Computer — no intermediaries, no exceptions, no single point of
            failure.
          </p>
        </div>
      </div>
    </section>
  );
}
