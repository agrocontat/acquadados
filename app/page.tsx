import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import FuncionalidadesSection from "@/components/FuncionalidadesSection";
import DemonstracaoSection from "@/components/DemonstracaoSection";
import NumerosSection from "@/components/NumerosSection";
import EcossistemaSection from "@/components/EcossistemaSection";
import ContatoSection from "@/components/ContatoSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SobreSection />
      <FuncionalidadesSection />
      <DemonstracaoSection />
      <NumerosSection />
      <EcossistemaSection />
      <ContatoSection />
      <WhatsAppButton />
    </main>
  );
}
