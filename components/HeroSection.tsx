"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Drop = { x: number; y: number; size: number; speed: number; opacity: number; opacityDir: number };
    const drops: Drop[] = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.4 + 0.1,
      opacityDir: Math.random() > 0.5 ? 0.004 : -0.004,
    }));

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drops.forEach((d) => {
        d.y += d.speed;
        d.opacity += d.opacityDir;
        if (d.opacity > 0.5 || d.opacity < 0.05) d.opacityDir *= -1;
        if (d.y > canvas.height + 10) { d.y = -10; d.x = Math.random() * canvas.width; }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(42, 174, 212, ${d.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animId); };
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "var(--dark-blue)" }}>
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80')", opacity: 0.18 }} />
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,58,74,0.85) 0%, rgba(26,58,74,0.6) 50%, rgba(26,58,74,0.92) 100%)" }} />
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 md:mb-12">
          <img
            src="/logo.png"
            alt="Acquadados"
            className="mx-auto mb-4"
            style={{ height: "90px", width: "auto", filter: "brightness(0) invert(1)" }}
          />
          <div className="w-16 h-0.5 mx-auto" style={{ background: "#2AAED4" }} />
        </div>

        <h1 className="font-['Outfit'] text-2xl md:text-4xl lg:text-5xl font-light leading-tight mb-6" style={{ color: "rgba(245,243,239,0.92)" }}>
          Inteligência que irriga.{" "}
          <br className="hidden md:block" />
          <span style={{ color: "#2AAED4", fontWeight: 600 }}>Dados que produzem.</span>
        </h1>

        <p className="text-base md:text-lg max-w-2xl mb-10 md:mb-14 leading-relaxed" style={{ color: "rgba(245,243,239,0.65)" }}>
          Sistema ERP completo para empresas de irrigação agrícola — do faturamento ao controle de pivôs, tudo integrado em uma única plataforma.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={scrollToNext}
            className="text-base font-semibold px-8 py-4 rounded-full transition-all duration-300 cursor-pointer"
            style={{ background: "#2AAED4", color: "#fff" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1A8CAD"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(42,174,212,0.35)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#2AAED4"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Conheça o sistema
          </button>
          <a
            href="https://wa.me/553597554778?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20Acquadados!"
            target="_blank" rel="noopener noreferrer"
            className="text-base font-semibold px-8 py-4 rounded-full border transition-all duration-300"
            style={{ borderColor: "rgba(245,243,239,0.3)", color: "rgba(245,243,239,0.9)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2AAED4"; e.currentTarget.style.color = "#2AAED4"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(245,243,239,0.3)"; e.currentTarget.style.color = "rgba(245,243,239,0.9)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Falar no WhatsApp
          </a>
        </div>

        <button onClick={scrollToNext} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity" style={{ color: "#F5F3EF" }}>
          <span className="text-xs tracking-widest uppercase font-medium">scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
