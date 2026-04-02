"use client";

import { useEffect, useRef, useState } from "react";

const metricas = [
  { numero: "+500", label: "Empresas atendidas" },
  { numero: "+10.000", label: "Hectares monitorados" },
  { numero: "30%", label: "Economia média de água" },
  { numero: "99.9%", label: "Uptime do sistema" },
];

function Counter({ target, label, visible, delay }: { target: string; label: string; visible: boolean; delay: number }) {
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => setDisplayed(target), delay);
    return () => clearTimeout(timeout);
  }, [visible, target, delay]);

  return (
    <div className="flex flex-col items-center text-center px-4 py-8" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>
      <span className="font-['Outfit'] text-5xl md:text-6xl lg:text-7xl font-bold mb-3 tabular-nums" style={{ color: "#2AAED4" }}>{displayed}</span>
      <span className="text-sm md:text-base font-medium uppercase tracking-widest" style={{ color: "rgba(245,243,239,0.55)" }}>{label}</span>
    </div>
  );
}

export default function NumerosSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setVisible(true); }); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="numeros" ref={ref} className="py-24 md:py-36 px-6 relative overflow-hidden" style={{ background: "var(--dark-blue)" }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #2AAED4 0%, transparent 50%), radial-gradient(circle at 80% 50%, #2AAED4 0%, transparent 50%)" }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <span className="section-label block mb-4" style={{ color: "rgba(42,174,212,0.7)" }}>Resultados</span>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold" style={{ color: "#F5F3EF" }}>Números que falam por si</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {metricas.map((m, i) => (
            <div key={i} className="relative" style={{ borderRight: i < metricas.length - 1 ? "1px solid rgba(42,174,212,0.15)" : "none" }}>
              <Counter target={m.numero} label={m.label} visible={visible} delay={i * 150} />
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-sm" style={{ color: "rgba(245,243,239,0.35)" }}>
          Dados baseados na base de clientes Agrodados/Acquadados · NEAX Tecnologia
        </p>
      </div>
    </section>
  );
}
