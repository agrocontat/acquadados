"use client";

import { useState } from "react";
import { DollarSign, FileText, Droplets, Activity, Wrench, BarChart3, Receipt, Link2 } from "lucide-react";

const modulos = [
  { id: "financeiro", icon: DollarSign, titulo: "Gestão Financeira", descricao: "Controle completo de contas a pagar e receber, fluxo de caixa, conciliação bancária e DRE. Visão clara da saúde financeira da sua empresa de irrigação em tempo real.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { id: "faturamento", icon: FileText, titulo: "Faturamento e NF-e", descricao: "Emissão de NF-e, NFS-e e CT-e integrada com SEFAZ. Gestão de pedidos, contratos de manutenção e faturamento recorrente para serviços de irrigação.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" },
  { id: "irrigacao", icon: Droplets, titulo: "Controle de Irrigação", descricao: "Planejamento e controle de lâminas d'água, monitoramento de pivôs centrais, gestão de turno de rega e histórico de consumo hídrico por talhão.", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
  { id: "campo", icon: Activity, titulo: "Monitoramento de Campo", descricao: "Integração com sensores e estações meteorológicas. Acompanhe temperatura, umidade, pressão e status dos equipamentos diretamente do sistema.", img: "https://images.unsplash.com/photo-1587467512961-120760940315?w=800&q=80" },
  { id: "equipamentos", icon: Wrench, titulo: "Gestão de Equipamentos", descricao: "Controle de inventário de equipamentos, histórico de manutenção, OS (ordens de serviço) e planejamento de preventivos para bombeamentos e pivôs.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
  { id: "bi", icon: BarChart3, titulo: "Relatórios e BI", descricao: "Dashboards executivos, relatórios de consumo hídrico, desempenho de equipamentos e análise de produtividade com exportação para Excel e PDF.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { id: "fiscal", icon: Receipt, titulo: "Módulo Fiscal", descricao: "Gestão completa de obrigações acessórias: SPED Fiscal, SPED Contribuições, ICMS, apuração de impostos e geração de arquivos para a contabilidade.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" },
  { id: "integracao", icon: Link2, titulo: "Integração com Agrodados", descricao: "Dados fluem automaticamente entre o Acquadados e o Agrodados. Empresas que atuam em diferentes segmentos do agronegócio têm visão unificada.", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
];

export default function FuncionalidadesSection() {
  const [ativo, setAtivo] = useState(0);
  const moduloAtivo = modulos[ativo];
  const Icon = moduloAtivo.icon;

  return (
    <section id="funcionalidades" className="py-24 md:py-36 px-6" style={{ background: "linear-gradient(180deg, var(--off-white-warm) 0%, var(--off-white) 100%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <span className="section-label block mb-4">Funcionalidades</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold" style={{ color: "var(--dark-blue)" }}>Módulos do sistema</h2>
            <p className="max-w-sm text-base leading-relaxed" style={{ color: "#6A6A6A" }}>Cada módulo foi desenhado para a realidade das empresas de irrigação. Nada genérico.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-[2fr_3fr] gap-6 lg:gap-10">
          {/* Module list */}
          <div className="flex flex-col gap-1">
            {modulos.map((m, i) => {
              const MIcon = m.icon;
              const isAtivo = i === ativo;
              return (
                <button
                  key={m.id}
                  onClick={() => setAtivo(i)}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-200 cursor-pointer"
                  style={{ background: isAtivo ? "var(--dark-blue)" : "transparent", borderLeft: isAtivo ? "3px solid #2AAED4" : "3px solid transparent" }}
                  onMouseEnter={(e) => { if (!isAtivo) e.currentTarget.style.background = "rgba(26,58,74,0.06)"; }}
                  onMouseLeave={(e) => { if (!isAtivo) e.currentTarget.style.background = "transparent"; }}
                >
                  <span className="flex-shrink-0 p-2 rounded-lg" style={{ background: isAtivo ? "rgba(42,174,212,0.2)" : "rgba(42,174,212,0.1)" }}>
                    <MIcon size={18} style={{ color: isAtivo ? "#2AAED4" : "#4A86A0" }} />
                  </span>
                  <span className="text-sm" style={{ color: isAtivo ? "#F5F3EF" : "var(--charcoal)", fontWeight: isAtivo ? 600 : 400 }}>
                    {m.titulo}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="rounded-2xl overflow-hidden relative" style={{ background: "var(--dark-blue)", minHeight: "420px" }}>
            <img key={moduloAtivo.id} src={moduloAtivo.img} alt={moduloAtivo.titulo} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" style={{ opacity: 0.18, filter: "saturate(0.6)" }} />
            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full min-h-[420px]">
              <div className="mt-auto">
                <div className="inline-flex p-3 rounded-xl mb-6" style={{ background: "rgba(42,174,212,0.2)" }}>
                  <Icon size={28} style={{ color: "#2AAED4" }} />
                </div>
                <h3 className="font-['Outfit'] text-2xl md:text-3xl font-bold mb-4" style={{ color: "#F5F3EF" }}>{moduloAtivo.titulo}</h3>
                <p className="text-base leading-relaxed max-w-lg" style={{ color: "rgba(245,243,239,0.75)" }}>{moduloAtivo.descricao}</p>
                <a
                  href="https://wa.me/553597554778?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20os%20m%C3%B3dulos%20do%20Acquadados!"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-semibold transition-colors duration-200"
                  style={{ color: "#2AAED4" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#4DC4E8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#2AAED4")}
                >
                  Saber mais sobre este módulo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
