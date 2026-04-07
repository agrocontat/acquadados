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
              <span className="section-label block mb-4" style={{ color: "rgba(42,174,212,0.7)" }}>Nossa história</span>
              <h2 className="font-['Outfit'] text-2xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: "#F5F3EF" }}>
                De 1994 ao campo —{" "}
                <span style={{ color: "#2AAED4" }}>uma jornada de propósito</span>
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(245,243,239,0.7)" }}>
                  Trabalhando no comércio de insumos agrícolas e cereais desde 1994, vivemos de perto a dificuldade de gestão que as empresas do agronegócio enfrentavam. Foi com esse propósito que, em 2009, iniciamos o desenvolvimento do <strong style={{ color: "#F5F3EF" }}>Agrodados</strong> — nosso próprio sistema ERP para o agronegócio.
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(245,243,239,0.7)" }}>
                  Com o crescimento do Agrodados e a evolução das necessidades dos clientes, surgiu a demanda por uma solução especializada em irrigação. Desenvolvemos então módulos específicos para essa área — dando origem ao <strong style={{ color: "#2AAED4" }}>Acquadados</strong>.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-center gap-6 flex-shrink-0">
              <div className="flex items-center gap-5">
                <div className="px-6 py-5 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.95)", minWidth: "160px" }}>
                  <img src="/logo.png" alt="Acquadados" style={{ width: "140px", height: "auto" }} />
                </div>
                <div className="w-8 h-0.5 flex-shrink-0" style={{ background: "rgba(245,243,239,0.2)" }} />
                <div className="px-6 py-5 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.95)", minWidth: "100px" }}>
                  <img src="/logo-agrodados.png" alt="Agrodados" style={{ width: "80px", height: "80px", objectFit: "contain" }} />
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
