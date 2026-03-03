import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features", ocid: "nav.features.link" },
  {
    label: "How It Works",
    href: "#how-it-works",
    ocid: "nav.how_it_works.link",
  },
  { label: "Why IC", href: "#why-ic", ocid: "nav.why_ic.link" },
  { label: "Pricing", href: "#pricing", ocid: "nav.pricing.link" },
];

function ShieldLogo() {
  return (
    <svg
      width="32"
      height="36"
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
        {/* Logo — use button for SPA scroll-to-top */}
        <button
          type="button"
          data-ocid="nav.logo.link"
          className="flex items-center gap-3 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="SecureVault IC — scroll to top"
        >
          <ShieldLogo />
          <span className="text-lg font-bold tracking-tight">
            <span className="text-foreground">SecureVault</span>
            <span className="gradient-text-blue ml-1">IC</span>
          </span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                data-ocid={link.ocid}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            data-ocid="nav.request_access.button"
            onClick={() => handleNavClick("#contact")}
            className="btn-primary-glow px-5 py-2 rounded-md text-sm font-semibold text-white"
          >
            Request Access
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-navy/98 backdrop-blur-xl border-b border-border px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              data-ocid={link.ocid}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              type="button"
              data-ocid="nav.request_access.button"
              onClick={() => handleNavClick("#contact")}
              className="btn-primary-glow w-full px-5 py-3 rounded-md text-sm font-semibold text-white"
            >
              Request Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
