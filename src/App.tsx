import { useState, useEffect } from 'react';
import { CustomerLandingPage } from './components/CustomerLandingPage';
import { IDSFlowsNavbar } from './components/IDSFlowsNavbar';
import { Header } from './components/Header';
import { CompanyStory } from './components/CompanyStory';
import { ResearchInsights } from './components/ResearchInsights';
import { Diagnosis } from './components/Diagnosis';
import { BeliefsManifesto } from './components/BeliefsManifesto';
import { TechnicalFoundation } from './components/TechnicalFoundation';
import { LCCCalculator } from './components/LCCCalculator';
import { ProductMatrix } from './components/ProductMatrix';
import { GoToMarket } from './components/GoToMarket';
import { IrresistibleOffers } from './components/IrresistibleOffers';
import { DisruptiveContent } from './components/DisruptiveContent';
import { StrategicRoadmap } from './components/StrategicRoadmap';
import { ExecutionArchitecture } from './components/ExecutionArchitecture';
import { MeetingControls } from './components/MeetingControls';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Globe, FileText, Sparkles, Layers } from 'lucide-react';

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

export default function App() {
  // Determine initial view from URL path
  const [currentView, setCurrentView] = useState<'proposal' | 'landing'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('projeto') || path.includes('visao') || path.includes('proposta')) {
        return 'proposal';
      }
    }
    return 'proposal'; // Default to proposal deck if navigating directly
  });

  useEffect(() => {
    // Listen to popstate for browser back/forward
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('projeto') || path.includes('visao') || path.includes('proposta')) {
        setCurrentView('proposal');
      } else {
        setCurrentView('landing');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToProposal = () => {
    setCurrentView('proposal');
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/projeto-visao');
    }
  };

  const navigateToLanding = () => {
    setCurrentView('landing');
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      
      {/* Floating Top Mode Switcher Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0B0E14]/95 border border-cyan-500/40 p-1.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex items-center gap-1 print:hidden">
        <button
          onClick={navigateToLanding}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
            currentView === 'landing'
              ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Globe className="h-3.5 w-3.5" />
          Landing Page Comercial (Clientes)
        </button>

        <button
          onClick={navigateToProposal}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
            currentView === 'proposal'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <FileText className="h-3.5 w-3.5" />
          Proposta do Projeto (/projeto-visao)
        </button>
      </div>

      {currentView === 'landing' ? (
        <CustomerLandingPage onNavigateToProposal={navigateToProposal} />
      ) : (
        <div className="relative">
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
          
          <MeetingControls />

          <footer className="bg-[#030304] border-t border-white/10 py-12 text-center print:hidden relative z-10">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="font-black text-white tracking-widest uppercase text-sm">IDS FLOWS <span className="text-cyan-400 font-mono text-xs">OS</span></span>
                <span className="text-cyan-500 font-mono">•</span>
                <span className="font-mono text-cyan-400">importadoraparana.idsflows.com/projeto-visao</span>
              </div>
              <p>&copy; {new Date().getFullYear()} IDS Flows OS × IPARANÁ EXPORT. Proposta Estratégica Confidencial.</p>
              <div className="flex items-center gap-4 text-zinc-400">
                <span>Linha FLEXCO BR & PY</span>
                <span>Programa Zero Down-Time Agro</span>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
