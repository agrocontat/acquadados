"use client";

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";

export default function DemonstracaoSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="demonstracao" className="py-24 md:py-36 px-6 overflow-hidden" style={{ background: "var(--off-white)" }}>
      <style>{`
        .demo-section { opacity: 0; transform: translateY(40px); transition: opacity 0.9s ease, transform 0.9s ease; }
        .demo-section.is-visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <div ref={ref} className="demo-section max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label block mb-4">Preview</span>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold mb-5" style={{ color: "var(--dark-blue)" }}>O sistema na prática</h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#6A6A6A" }}>Interface limpa, dados em tempo real, relatórios prontos para decisão. Sem curva de aprendizado absurda.</p>
        </div>

        {/* Monitor mockup */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 -z-10 blur-3xl opacity-25" style={{ background: "radial-gradient(ellipse, #2AAED4, transparent 70%)" }} />

          <div className="rounded-2xl p-3 md:p-4" style={{ background: "#1A3A4A", boxShadow: "0 40px 100px rgba(26,58,74,0.4), 0 8px 24px rgba(0,0,0,0.2)" }}>
            <div className="rounded-xl overflow-hidden" style={{ background: "#0D2633" }}>
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#0F2D3D" }}>
                <span className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                <span className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
                <div className="ml-4 flex-1 max-w-sm rounded-md px-3 py-1 text-xs" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(245,243,239,0.4)", fontFamily: "monospace" }}>
                  app.acquadados.com.br/dashboard
                </div>
              </div>

              {/* Dashboard */}
              <div className="p-4 md:p-6 grid grid-cols-3 gap-3 md:gap-4" style={{ background: "#0D2633" }}>
                {[
                  { label: "Hectares monitorados", value: "4.820", delta: "+12%", color: "#2AAED4" },
                  { label: "Pivôs ativos", value: "23", delta: "Online", color: "#22C55E" },
                  { label: "Consumo hídrico (m³)", value: "18.450", delta: "-8% vs mês", color: "#F59E0B" },
                ].map((card, i) => (
                  <div key={i} className="rounded-xl p-3 md:p-4" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <p className="text-xs mb-2" style={{ color: "rgba(245,243,239,0.45)" }}>{card.label}</p>
                    <p className="font-['Outfit'] text-xl md:text-2xl font-bold mb-1" style={{ color: "#F5F3EF" }}>{card.value}</p>
                    <p className="text-xs font-medium" style={{ color: card.color }}>{card.delta}</p>
                  </div>
                ))}

                <div className="col-span-2 rounded-xl p-3 md:p-4" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <p className="text-xs mb-3" style={{ color: "rgba(245,243,239,0.45)" }}>Consumo hídrico — últimos 30 dias</p>
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 65].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === 11 ? "#2AAED4" : "rgba(42,174,212,0.3)" }} />
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-3 md:p-4" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <p className="text-xs mb-3" style={{ color: "rgba(245,243,239,0.45)" }}>Status dos pivôs</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { name: "Pivô A1", status: "Ativo", color: "#22C55E" },
                      { name: "Pivô A2", status: "Pausado", color: "#F59E0B" },
                      { name: "Pivô B1", status: "Ativo", color: "#22C55E" },
                      { name: "Pivô B2", status: "Ativo", color: "#22C55E" },
                    ].map((p, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-xs" style={{ color: "rgba(245,243,239,0.7)" }}>{p.name}</span>
                        <span className="text-xs font-medium" style={{ color: p.color }}>● {p.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-24 h-4" style={{ background: "#1A3A4A", borderRadius: "0 0 4px 4px" }} />
          </div>
          <div className="mx-auto w-48 h-2 rounded-full" style={{ background: "#0F2633" }} />
        </div>

        <div className="text-center mt-16">
          <p className="text-base md:text-lg mb-6" style={{ color: "#6A6A6A" }}>Quer ver o sistema rodando de verdade?</p>
          <a
            href="https://wa.me/5535999908460?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20Acquadados!"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-base font-semibold px-8 py-4 rounded-full transition-all duration-300"
            style={{ background: "var(--dark-blue)", color: "#F5F3EF" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#2AAED4"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(42,174,212,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--dark-blue)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <MessageCircle size={20} />
            Quer ver na prática? Fale com a gente
          </a>
        </div>
      </div>
    </section>
  );
}
