import { Zap, ShieldCheck, ChevronRight, Activity, TrendingUp, Cpu, Flame, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  return (
    <header className="relative overflow-hidden border-b border-white/10 bg-[#050505] py-20 md:py-28">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-black to-cyan-950/20 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Top Brand Badges */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-400 border border-cyan-500/30 tracking-wider uppercase">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            IDS FLOWS OS • Business Operating System
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-400 border border-orange-500/30 tracking-wider uppercase">
            <Zap className="h-3.5 w-3.5 text-orange-400" />
            Programa Zero Down-Time Agro
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-300 border border-amber-500/30 tracking-wider uppercase">
            <Flame className="h-3.5 w-3.5 text-amber-400" />
            Projeto Estratégico de Inteligência GTM
          </div>
        </motion.div>
        
        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight"
        >
          IDS FLOWS <span className="text-orange-500 font-serif italic">×</span> IPARANÁ EXPORT
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-lg sm:text-2xl text-zinc-300 font-light leading-relaxed mb-10"
        >
          Arquitetura Estratégica de <strong className="text-orange-400 font-semibold">Go-To-Market</strong>, <strong className="text-cyan-400 font-semibold">Engenharia de Confiabilidade (LCC/TPM)</strong> e <strong className="text-amber-400 font-semibold">Venda Técnica Disruptiva</strong> para a Linha FLEXCO (BR & PY).
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a 
            href="#calculadora" 
            className="rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(234,88,12,0.4)] hover:from-orange-500 hover:to-amber-500 transition-all flex items-center gap-2"
          >
            Simulador de ROI LCC <ChevronRight className="h-4 w-4" />
          </a>
          <a 
            href="#gtm" 
            className="rounded-xl bg-white/5 border border-white/10 px-6 py-3.5 text-sm font-semibold text-zinc-200 hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
          >
            Árvore de Decisão GTM <Layers className="h-4 w-4 text-cyan-400" />
          </a>
          <a 
            href="#ofertas" 
            className="rounded-xl bg-cyan-500/10 border border-cyan-500/30 px-6 py-3.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-all flex items-center gap-2"
          >
            Ver As 2 Ofertas Irrecusáveis <ShieldCheck className="h-4 w-4 text-cyan-400" />
          </a>
        </motion.div>

        {/* Fast Key Metrics Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10"
        >
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-4">
            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Custo Parada Usina</span>
            <p className="text-xl sm:text-2xl font-bold text-orange-500 font-mono">R$ 80k-220k<span className="text-xs text-zinc-400 font-normal">/h</span></p>
          </div>
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-4">
            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Redução MTTR Reparo</span>
            <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">De 8h → 30min</p>
          </div>
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-4">
            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Economia de Mão de Obra</span>
            <p className="text-xl sm:text-2xl font-bold text-amber-400 font-mono">3 Op. Liberados</p>
          </div>
          <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-4">
            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Modelo de Entrega</span>
            <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">Zero Risco 90d</p>
          </div>
        </motion.div>

      </div>
    </header>
  );
}


