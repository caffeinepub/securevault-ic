import {
  Check,
  Copy,
  ExternalLink,
  FileCode,
  Globe,
  Lock,
  Network,
  Shield,
} from "lucide-react";
import { useState } from "react";

const CANISTER_ID = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
const DASHBOARD_URL = `https://dashboard.internetcomputer.org/canister/${CANISTER_ID}`;

const proofPoints = [
  {
    icon: Globe,
    title: "The .icp0.io URL Proves On-Chain Deployment",
    description:
      "Every app on the Internet Computer is served from a canister URL like https://<id>.icp0.io. This URL itself is proof — it cannot exist unless the code is deployed on the IC network.",
    gold: false,
  },
  {
    icon: Shield,
    title: "Canister ID Is Publicly Verifiable",
    description:
      "Look up this canister on the IC Dashboard to confirm it's live, view its cycle balance, and verify it's not controlled by any single entity. No account required.",
    gold: true,
  },
  {
    icon: FileCode,
    title: "WASM Hash Is On-Chain",
    description:
      "The WASM hash of the deployed code is publicly available on-chain. Anyone can verify the hash matches the published source — providing cryptographic proof of code integrity.",
    gold: false,
  },
  {
    icon: Network,
    title: "No AWS or GCP — Only IC Boundary Nodes",
    description:
      "Open your browser's network inspector. You won't find a single AWS, GCP, or Azure endpoint. Every byte is served directly from the decentralized Internet Computer network.",
    gold: true,
  },
];

export default function AboutSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CANISTER_ID);
    } catch {
      const el = document.createElement("textarea");
      el.value = CANISTER_ID;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-28 relative overflow-hidden"
    >
      {/* Background atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 75% 50%, oklch(0.74 0.135 83 / 0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 45% at 15% 55%, oklch(0.52 0.20 262 / 0.06) 0%, transparent 55%)",
        }}
      />
      <div className="section-divider mb-0" />

      <div className="container mx-auto px-6 max-w-7xl pt-20">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-brand-gold mb-4">
            Transparency &amp; Verification
          </p>
          <h2 className="section-headline font-display text-foreground mb-5">
            About SecureVault IC
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            SecureVault IC is built entirely on the Internet Computer Protocol —
            a sovereign blockchain network owned by no single company or
            government. Every claim is publicly verifiable on-chain. No trust
            required.
          </p>
        </div>

        {/* Canister ID hero block */}
        <div className="animate-on-scroll animate-on-scroll-delay-1 mb-14">
          <div
            className="rounded-xl p-8 md:p-10 max-w-3xl mx-auto text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(155deg, oklch(0.16 0.048 264 / 0.95) 0%, oklch(0.12 0.032 252 / 0.98) 100%)",
              border: "1px solid oklch(0.52 0.20 262 / 0.28)",
              boxShadow:
                "0 0 0 1px oklch(0.74 0.135 83 / 0.07), 0 8px 52px oklch(0.04 0.02 252 / 0.7), 0 0 80px oklch(0.52 0.20 262 / 0.09)",
            }}
          >
            {/* Corner gold glow */}
            <div
              className="absolute top-0 right-0 w-52 h-52 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, oklch(0.74 0.135 83 / 0.09) 0%, transparent 65%)",
              }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/22 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.18em]">
                  Live on Internet Computer
                </span>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-muted-foreground mb-3">
                Canister ID
              </p>

              {/* Canister ID + copy */}
              <div className="flex items-center justify-center gap-3 flex-wrap mb-6">
                <a
                  href={DASHBOARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="about.canister_id.link"
                  className="canister-id hover:opacity-80 transition-opacity"
                  aria-label="View canister on IC Dashboard"
                >
                  {CANISTER_ID}
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label={copied ? "Copied!" : "Copy canister ID"}
                  className="flex items-center gap-1.5 px-3 py-2 rounded text-sm font-medium transition-all duration-200 border"
                  style={
                    copied
                      ? {
                          background: "oklch(0.55 0.18 145 / 0.14)",
                          borderColor: "oklch(0.55 0.18 145 / 0.38)",
                          color: "oklch(0.75 0.15 145)",
                        }
                      : {
                          background: "oklch(0.52 0.20 262 / 0.10)",
                          borderColor: "oklch(0.52 0.20 262 / 0.28)",
                          color: "oklch(0.72 0.17 262)",
                        }
                  }
                >
                  {copied ? (
                    <>
                      <Check size={13} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Dashboard link */}
              <a
                href={DASHBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="about.dashboard.link"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 group"
                style={{
                  background: "oklch(0.74 0.135 83 / 0.10)",
                  border: "1px solid oklch(0.74 0.135 83 / 0.32)",
                  color: "oklch(0.86 0.10 83)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "oklch(0.74 0.135 83 / 0.20)";
                  el.style.borderColor = "oklch(0.74 0.135 83 / 0.55)";
                  el.style.boxShadow = "0 0 20px oklch(0.74 0.135 83 / 0.18)";
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "oklch(0.74 0.135 83 / 0.10)";
                  el.style.borderColor = "oklch(0.74 0.135 83 / 0.32)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <Lock size={14} />
                View on IC Dashboard
                <ExternalLink
                  size={12}
                  className="opacity-65 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>

              <p className="text-[11px] text-muted-foreground/55 mt-4">
                Opens the public Internet Computer Dashboard — no account
                required
              </p>
            </div>
          </div>
        </div>

        {/* Proof point cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {proofPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className={`animate-on-scroll animate-on-scroll-delay-${(i % 4) + 1} card-elevated rounded-lg p-7 group`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                    style={
                      point.gold
                        ? {
                            background: "oklch(0.74 0.135 83 / 0.12)",
                            border: "1px solid oklch(0.74 0.135 83 / 0.25)",
                          }
                        : {
                            background: "oklch(0.52 0.20 262 / 0.12)",
                            border: "1px solid oklch(0.52 0.20 262 / 0.25)",
                          }
                    }
                  >
                    <Icon
                      size={21}
                      className={
                        point.gold ? "text-brand-gold" : "text-brand-blue"
                      }
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-display font-bold text-[0.95rem] text-foreground mb-2 transition-colors duration-200 ${
                        point.gold
                          ? "group-hover:text-brand-gold"
                          : "group-hover:text-brand-blue"
                      }`}
                    >
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-12 animate-on-scroll text-center">
          <p className="text-xs text-muted-foreground/50 max-w-xl mx-auto leading-relaxed">
            All verification can be done independently using publicly available
            tools. No account, no registration, no trust required — just math
            and cryptography.
          </p>
        </div>
      </div>
    </section>
  );
}
