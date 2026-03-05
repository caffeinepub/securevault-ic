import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features", ocid: "nav.features.link" },
  { label: "Sectors", href: "#sectors", ocid: "nav.sectors.link" },
  { label: "How It Works", href: "#how-it-works", ocid: "nav.howitworks.link" },
  { label: "Pricing", href: "#pricing", ocid: "nav.pricing.link" },
  { label: "About", href: "#about", ocid: "nav.about.link" },
  { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
];

function ShieldLogo() {
  return (
    <svg
      width="30"
      height="34"
      viewBox="0 0 30 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15 0L0 5.5V17C0 26 6.5 33.5 15 34C23.5 33.5 30 26 30 17V5.5L15 0Z"
        fill="oklch(0.52 0.20 262 / 0.15)"
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
      {/* Gold accent corner */}
      <circle cx="26" cy="8" r="2" fill="oklch(0.74 0.135 83)" opacity="0.8" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-brand-navy/96 backdrop-blur-md border-b border-border shadow-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <button
          type="button"
          data-ocid="nav.logo.link"
          className="flex items-center gap-2.5 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="SecureVault IC — back to top"
        >
          <ShieldLogo />
          <span className="font-display font-bold tracking-tight text-[1.1rem]">
            <span className="text-foreground">SecureVault</span>
            <span className="gradient-text-blue"> IC</span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                data-ocid={link.ocid}
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded hover:bg-white/[0.04]"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            type="button"
            data-ocid="nav.request_access.button"
            onClick={() => handleNavClick("#contact")}
            className="btn-primary-glow px-5 py-2 rounded text-sm font-semibold text-white"
          >
            Request Access
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-navy/98 backdrop-blur-xl border-b border-border px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              data-ocid={link.ocid}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded hover:bg-white/[0.04]"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-border/50">
            <button
              type="button"
              data-ocid="nav.request_access.button"
              onClick={() => handleNavClick("#contact")}
              className="btn-primary-glow w-full px-5 py-3 rounded text-sm font-semibold text-white"
            >
              Request Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
