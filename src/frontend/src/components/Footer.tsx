import { Globe } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why IC", href: "#why-ic" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Security", href: "#" },
  { label: "Compliance", href: "#" },
];

function ShieldLogo() {
  return (
    <svg
      width="28"
      height="32"
      viewBox="0 0 32 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 0L0 6V18C0 27.6 6.8 36 16 36C25.2 36 32 27.6 32 18V6L16 0Z"
        fill="oklch(0.55 0.22 264)"
        fillOpacity="0.2"
      />
      <path
        d="M16 2L2 7.5V18C2 26.5 7.8 34.2 16 34.2C24.2 34.2 30 26.5 30 18V7.5L16 2Z"
        stroke="oklch(0.55 0.22 264)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M16 8L8 11V17C8 22 11.6 26.5 16 27.6C20.4 26.5 24 22 24 17V11L16 8Z"
        fill="oklch(0.55 0.22 264)"
        fillOpacity="0.6"
      />
      <path
        d="M12 17L14.5 19.5L20 14"
        stroke="white"
        strokeWidth="1.8"
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
    <footer className="relative border-t border-border bg-brand-navy/80 backdrop-blur-sm">
      {/* Top gold line */}
      <div className="gold-line" />

      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <ShieldLogo />
              <span className="text-lg font-bold tracking-tight">
                <span className="text-foreground">SecureVault</span>
                <span className="gradient-text-blue ml-1">IC</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
              The world's most secure document vault, powered entirely by the
              Internet Computer blockchain. Sovereign. Tamperproof. Unstoppable.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: SiX, href: "#", label: "X (Twitter)" },
                { icon: SiLinkedin, href: "#", label: "LinkedIn" },
                { icon: SiGithub, href: "#", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
              Platform
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
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
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
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
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} SecureVault IC. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {/* ICP badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-brand-navy-mid/50">
              <Globe size={12} className="text-brand-blue" />
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
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Built with ❤️ using{" "}
              <span className="text-brand-blue font-medium">caffeine.ai</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
