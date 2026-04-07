"use client";

import { useEffect, useRef } from "react";
import { Target, Eye, Heart } from "lucide-react";

const mvv = [
  {
    icon: Target,
    titulo: "Missão",
    texto: "Desenvolver soluções de gestão eficientes para empresas de irrigação, proporcionando controle, organização e praticidade no dia a dia.",
  },
  {
    icon: Eye,
    titulo: "Visão",
    texto: "Ser referência em tecnologia para o segmento de irrigação, levando inovação e melhoria contínua na gestão dos negócios.",
  },
  {
    icon: Heart,
    titulo: "Valores",
    texto: "Compromisso com o cliente, transparência, inovação, confiabilidade e parceria.",
  },
];

export default function SobreSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: 0.15 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-24 md:py-36 px-6" style={{ background: "var(--off-white)" }}>
      <style>{`
        .reveal-left { opacity: 0; transform: translateX(-40px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal-right { opacity: 0; transform: translateX(40px); transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s; }
        .reveal-left.animate-in, .reveal-right.animate-in { opacity: 1; transform: translateX(0); }
      `}</style>

      <div className="max-w-7xl mx-auto grid md:grid-cols-[3fr_2fr] gap-16 lg:gap-24 items-start">
        {/* Text column */}
        <div ref={leftRef} className="reveal-left">
          <span className="section-label block mb-4">O que é</span>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "var(--dark-blue)" }}>
            Gestão completa<br />
            <span style={{ color: "#2AAED4" }}>feita para quem irriga</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "#5A5A5A" }}>
            O Acquadados é um software de gestão moderno, desenvolvido para atender com eficiência empresas de pequeno, médio e grande porte do setor de irrigação agrícola.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: "#5A5A5A" }}>
            Sua estrutura em módulos oferece uma experiência completa e intuitiva — do faturamento e fiscal ao controle de campo — simplificando o dia a dia do gestor e tornando a operação mais estratégica.
          </p>

          {/* MVV */}
          <div className="flex flex-col gap-5">
            {mvv.map(({ icon: Icon, titulo, texto }) => (
              <div key={titulo} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(42,174,212,0.1)" }}>
                  <Icon size={17} style={{ color: "#2AAED4" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--dark-blue)" }}>{titulo}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6A6A6A" }}>{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div ref={rightRef} className="reveal-right">
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-full h-full rounded-2xl z-0" style={{ background: "rgba(42,174,212,0.12)" }} />
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5]" style={{ boxShadow: "0 24px 64px rgba(26,58,74,0.18)" }}>
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=85"
                alt="Sistema de irrigação agrícola por pivô central"
                className="w-full h-full object-cover"
                style={{ filter: "saturate(0.85) contrast(1.05)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,58,74,0.35) 0%, transparent 60%)" }} />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 rounded-xl px-5 py-4" style={{ background: "#1A3A4A", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}>
              <p className="text-xs font-medium mb-1" style={{ color: "rgba(245,243,239,0.6)" }}>Desenvolvido pela</p>
              <p className="font-['Outfit'] text-base font-bold" style={{ color: "#2AAED4" }}>NEAX Tecnologia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
