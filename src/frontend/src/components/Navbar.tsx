import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Features", to: "/features", ocid: "nav.features.link" },
  { label: "Sectors", to: "/sectors", ocid: "nav.sectors.link" },
  { label: "How It Works", to: "/how-it-works", ocid: "nav.howitworks.link" },
  { label: "Pricing", to: "/pricing", ocid: "nav.pricing.link" },
  { label: "About", to: "/about", ocid: "nav.about.link" },
  { label: "Contact", to: "/contact", ocid: "nav.contact.link" },
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
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu whenever path changes
  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

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
        <Link
          to="/"
          data-ocid="nav.logo.link"
          className="flex items-center gap-2.5 group"
          aria-label="SecureVault IC — home"
        >
          <ShieldLogo />
          <span className="font-display font-bold tracking-tight text-[1.1rem]">
            <span className="text-foreground">SecureVault</span>
            <span className="gradient-text-blue"> IC</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = currentPath === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  data-ocid={link.ocid}
                  className={`px-3.5 py-2 text-sm font-medium transition-colors rounded hover:bg-white/[0.04] ${
                    isActive
                      ? "text-foreground bg-white/[0.04]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            data-ocid="nav.request_access.button"
            className="btn-primary-glow px-5 py-2 rounded text-sm font-semibold text-white"
          >
            Request Access
          </Link>
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
          {navLinks.map((link) => {
            const isActive = currentPath === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={link.ocid}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors rounded hover:bg-white/[0.04] ${
                  isActive
                    ? "text-foreground bg-white/[0.04]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-border/50">
            <Link
              to="/contact"
              data-ocid="nav.request_access.button"
              className="btn-primary-glow block w-full px-5 py-3 rounded text-sm font-semibold text-white text-center"
            >
              Request Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
