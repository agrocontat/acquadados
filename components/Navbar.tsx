"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#sobre", label: "O sistema" },
  { href: "#funcionalidades", label: "Módulos" },
  { href: "#demonstracao", label: "Preview" },
  { href: "#numeros", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(26, 58, 74, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(42, 174, 212, 0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")} className="flex items-center">
          <img src="/logo.png" alt="Acquadados" style={{ maxWidth: "180px", width: "auto", height: "42px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "rgba(245, 243, 239, 0.8)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2AAED4")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245, 243, 239, 0.8)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/553597554778?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20Acquadados!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
            style={{ background: "#2AAED4", color: "#fff" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1A8CAD"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#2AAED4"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Falar com consultor
          </a>
        </nav>

        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 py-6 flex flex-col gap-5" style={{ background: "rgba(26, 58, 74, 0.99)" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-base font-medium" style={{ color: "rgba(245, 243, 239, 0.85)" }}>
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/553597554778?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20Acquadados!"
            target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-3 rounded-full text-center mt-2"
            style={{ background: "#2AAED4", color: "#fff" }}
          >
            Falar com consultor
          </a>
        </div>
      )}
    </header>
  );
}
