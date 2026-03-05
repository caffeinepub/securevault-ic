import { ExternalLink, Globe, Heart } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const CANISTER_ID = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
const DASHBOARD_URL = `https://dashboard.internetcomputer.org/canister/${CANISTER_ID}`;

const platformLinks = [
  { label: "Features", href: "#features" },
  { label: "Sectors", href: "#sectors" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why IC", href: "#why-ic" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "https://securevaultic.com/privacy" },
  { label: "Terms of Service", href: "https://securevaultic.com/terms" },
  { label: "Security", href: "https://securevaultic.com/security" },
  { label: "Compliance", href: "https://securevaultic.com/compliance" },
];

function ShieldLogo() {
  return (
    <svg
      width="26"
      height="30"
      viewBox="0 0 30 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15 0L0 5.5V17C0 26 6.5 33.5 15 34C23.5 33.5 30 26 30 17V5.5L15 0Z"
        fill="oklch(0.52 0.20 262 / 0.14)"
      />
      <path
        d="M15 1.8L1.5 6.8V17C1.5 25.2 7.2 32.2 15 32.4C22.8 32.2 28.5 25.2 28.5 17V6.8L15 1.8Z"
        stroke="oklch(0.52 0.20 262)"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M15 7.5L7.5 10.5V16C7.5 20.8 10.8 25 15 26C19.2 25 22.5 20.8 22.5 16V10.5L15 7.5Z"
        fill="oklch(0.52 0.20 262 / 0.55)"
      />
      <path
        d="M11 16.5L13.5 19L19 13.5"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-brand-navy/85 backdrop-blur-sm">
      {/* Gold top line */}
      <div className="gold-line" />

      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <ShieldLogo />
              <span className="font-display font-bold text-[1.05rem] tracking-tight">
                <span className="text-foreground">SecureVault</span>
                <span className="gradient-text-blue"> IC</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
              The world's most secure document vault, powered entirely by the
              Internet Computer. Sovereign. Tamperproof. Unstoppable.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {[
                { icon: SiX, href: "#", label: "X (Twitter)" },
                { icon: SiLinkedin, href: "#", label: "LinkedIn" },
                { icon: SiGithub, href: "#", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-5">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-5">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border/40 flex flex-col gap-4">
          {/* Top row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <p className="text-xs text-muted-foreground">
                © {year} SecureVault IC. All rights reserved.
              </p>
              <a
                href="https://securevaultic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-blue hover:text-brand-blue-light transition-colors font-medium"
              >
                securevaultic.com
              </a>
            </div>

            <div className="flex items-center gap-4 flex-wrap justify-center">
              {/* ICP badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-brand-navy-mid/40">
                <Globe size={11} className="text-brand-blue" />
                <span className="text-xs text-muted-foreground">
                  Powered by{" "}
                  <span className="text-foreground font-medium">
                    Internet Computer
                  </span>
                </span>
              </div>

              {/* Caffeine attribution */}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                Built with{" "}
                <Heart size={10} className="text-brand-gold mx-0.5" /> using{" "}
                <span className="text-brand-blue font-medium ml-0.5">
                  caffeine.ai
                </span>
              </a>
            </div>
          </div>

          {/* Canister ID row */}
          <div className="flex items-center justify-center sm:justify-start">
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.canister_id.link"
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded border border-border/40 bg-brand-navy-mid/25 hover:bg-brand-navy-mid/50 hover:border-brand-blue/28 transition-all duration-200"
              aria-label="View canister on IC Dashboard"
            >
              <span className="text-[11px] text-muted-foreground/70 font-medium">
                Canister ID:
              </span>
              <code className="text-[11px] font-mono text-brand-gold/75 group-hover:text-brand-gold transition-colors tracking-wider">
                {CANISTER_ID}
              </code>
              <ExternalLink
                size={10}
                className="text-muted-foreground/45 group-hover:text-brand-blue transition-colors flex-shrink-0"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
