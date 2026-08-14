import { IDSFlowsNavbar } from './IDSFlowsNavbar';
import { Header } from './Header';
import { CompanyStory } from './CompanyStory';
import { ResearchInsights } from './ResearchInsights';
import { Diagnosis } from './Diagnosis';
import { BeliefsManifesto } from './BeliefsManifesto';
import { TechnicalFoundation } from './TechnicalFoundation';
import { LCCCalculator } from './LCCCalculator';
import { ProductMatrix } from './ProductMatrix';
import { GoToMarket } from './GoToMarket';
import { IrresistibleOffers } from './IrresistibleOffers';
import { DisruptiveContent } from './DisruptiveContent';
import { StrategicRoadmap } from './StrategicRoadmap';
import { ExecutionArchitecture } from './ExecutionArchitecture';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

function SectionReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ExecutiveProposalDeck() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      {/* Visual Identity Overlays matching IDS Flows OS */}
      <div className="scanlines"></div>
      <div className="noise-overlay"></div>

      <IDSFlowsNavbar />
      <Header />
      
      <main className="relative z-10 space-y-0">
        <SectionReveal><CompanyStory /></SectionReveal>
        <SectionReveal><ResearchInsights /></SectionReveal>
        <SectionReveal><Diagnosis /></SectionReveal>
        <SectionReveal><BeliefsManifesto /></SectionReveal>
        <SectionReveal><TechnicalFoundation /></SectionReveal>
        <SectionReveal><LCCCalculator /></SectionReveal>
        <SectionReveal><ProductMatrix /></SectionReveal>
        <SectionReveal><GoToMarket /></SectionReveal>
        <SectionReveal><IrresistibleOffers /></SectionReveal>
        <SectionReveal><DisruptiveContent /></SectionReveal>
        <SectionReveal><StrategicRoadmap /></SectionReveal>
        <SectionReveal><ExecutionArchitecture /></SectionReveal>
      </main>

      <footer className="bg-[#030304] border-t border-white/10 py-12 text-center relative z-10">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="font-black text-white tracking-widest uppercase text-sm">IDS FLOWS <span className="text-cyan-400 font-mono text-xs">OS</span></span>
            <span className="text-cyan-500 font-mono">•</span>
            <span className="font-mono text-cyan-400">iparana.idsflows.com/projeto-piloto</span>
          </div>
          <p>&copy; {new Date().getFullYear()} IDS Flows OS × IPARANÁ EXPORT. Proposta Estratégica Confidencial.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Linha FLEXCO BR & PY</span>
            <span>Programa Zero Down-Time Agro</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
