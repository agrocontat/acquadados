"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function EcossistemaSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ecossistema" className="py-20 md:py-28 px-6" style={{ background: "var(--off-white-warm)" }}>
      <style>{`
        .eco-content { opacity: 0; transform: translateY(24px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .eco-content.is-visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <div ref={ref} className="eco-content max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden p-10 md:p-14 lg:p-20" style={{ background: "var(--dark-blue)" }}>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{ background: "radial-gradient(ellipse at 80% 50%, #2AAED4, transparent 70%)" }} />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <span className="section-label block mb-4" style={{ color: "rgba(42,174,212,0.7)" }}>Ecossistema</span>
              <h2 className="font-['Outfit'] text-2xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: "#F5F3EF" }}>
                Do mesmo DNA do{" "}
                <span style={{ color: "#2AAED4" }}>Agrodados</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(245,243,239,0.7)" }}>
                O ERP que já gerencia centenas de empresas do agronegócio brasileiro. A mesma solidez, agora com módulos específicos para irrigação. Quem usa o Agrodados já conhece a base. Quem usa o Acquadados tem tudo integrado.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-center gap-6 flex-shrink-0">
              <div className="flex items-center gap-6">
                <div className="px-5 py-3 rounded-xl" style={{ background: "rgba(42,174,212,0.15)" }}>
                  <span className="font-['Outfit'] text-xl font-bold" style={{ color: "#2AAED4" }}>acqua<span style={{ color: "#F5F3EF" }}>dados</span></span>
                </div>
                <div className="w-6 h-0.5" style={{ background: "rgba(245,243,239,0.2)" }} />
                <div className="px-5 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <span className="font-['Outfit'] text-xl font-bold" style={{ color: "#F5F3EF" }}>agro<span style={{ color: "#7DBD4A" }}>dados</span></span>
                </div>
              </div>

              <a
                href="https://agrodados.com.br"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border transition-all duration-300"
                style={{ borderColor: "rgba(42,174,212,0.4)", color: "#2AAED4" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#2AAED4"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#2AAED4"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#2AAED4"; e.currentTarget.style.borderColor = "rgba(42,174,212,0.4)"; }}
              >
                Conheça o Agrodados <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
