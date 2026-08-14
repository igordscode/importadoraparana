import { Cpu, Zap, Globe, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function IDSFlowsNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#050508]/80 backdrop-blur-xl border-b border-white/10 px-4 py-3">
      <div className="container mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand & Subdomain badge */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            ⚡
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-white tracking-tight text-base">IDS FLOWS <span className="text-cyan-400 font-mono text-xs">OS</span></span>
              <span className="text-xs text-zinc-500 font-mono hidden sm:inline">| Executive Proposal</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
              <Globe className="h-3 w-3" />
              <span>importadoraparana.idsflows.com</span>
            </div>
          </div>
        </div>

        {/* Status Pill */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>Proposta Tática Personalizada • IPARANÁ EXPORT</span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-3">
          <a
            href="#historia"
            className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors hidden sm:inline"
          >
            A História
          </a>
          <a
            href="#diagnostico"
            className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors hidden sm:inline"
          >
            Diagnóstico
          </a>
          <a
            href="#proposta"
            className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors hidden sm:inline"
          >
            A Proposta
          </a>
          <a
            href="#calculadora"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex items-center gap-1"
          >
            Simulador LCC <ChevronRight className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </nav>
  );
}
