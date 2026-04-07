"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const SocialIcons = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

export default function ContatoSection() {
  const socials = [
    { Icon: SocialIcons.Instagram, href: "https://www.instagram.com/neax.agrodados/", label: "Instagram" },
    { Icon: SocialIcons.LinkedIn, href: "https://linkedin.com/company/neax-agrodados", label: "LinkedIn" },
  ];

  const contacts = [
    { icon: Phone, text: "(35) 99755-4778", href: "tel:+553597554778" },
    { icon: Phone, text: "(35) 3214-3972", href: "tel:+553532143972" },
    { icon: Mail, text: "contato@acquadados.com.br", href: "mailto:contato@acquadados.com.br" },
    { icon: MapPin, text: "Varginha - MG | Campo Mourão - PR", href: "#" },
  ];

  return (
    <footer id="contato" className="py-20 md:py-28 px-6" style={{ background: "#0D2633" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-16 pb-14 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img src="/logo.png" alt="Acquadados" style={{ height: "48px", width: "auto", filter: "brightness(0) invert(1)" }} />
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: "rgba(245,243,239,0.55)" }}>
              Sistema ERP completo para empresas do setor de irrigação agrícola. Desenvolvido pela NEAX Tecnologia.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(245,243,239,0.6)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(42,174,212,0.2)"; e.currentTarget.style.color = "#2AAED4"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(245,243,239,0.6)"; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Outfit'] text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "rgba(245,243,239,0.4)" }}>Contato</h3>
            <ul className="flex flex-col gap-4">
              {contacts.map(({ icon: Icon, text, href }, i) => (
                <li key={i}>
                  <a href={href} className="flex items-center gap-3 text-sm transition-colors duration-200" style={{ color: "rgba(245,243,239,0.65)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#2AAED4")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,243,239,0.65)")}
                  >
                    <Icon size={15} className="flex-shrink-0" style={{ color: "#2AAED4" }} />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-['Outfit'] text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "rgba(245,243,239,0.4)" }}>Fale conosco</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,243,239,0.55)" }}>
              Atendemos empresas de irrigação de todo o Brasil. Entre em contato e agende uma demonstração sem compromisso.
            </p>
            <a
              href="https://wa.me/553597554778?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20Acquadados!"
              target="_blank" rel="noopener noreferrer"
              className="inline-block text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300"
              style={{ background: "#2AAED4", color: "#fff" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#1A8CAD"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#2AAED4"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Agendar demonstração
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs" style={{ color: "rgba(245,243,239,0.3)" }}>
            © {new Date().getFullYear()} Acquadados · NEAX Tecnologia. Todos os direitos reservados.
          </p>
          <a href="https://agrodados.com.br" target="_blank" rel="noopener noreferrer"
            className="text-xs transition-colors duration-200" style={{ color: "rgba(245,243,239,0.3)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(42,174,212,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,243,239,0.3)")}
          >
            agrodados.com.br
          </a>
        </div>
      </div>
    </footer>
  );
}
