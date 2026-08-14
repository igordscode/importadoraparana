import { useState } from 'react';
import { Zap, ShieldCheck, CheckCircle2, Phone, ArrowRight, Package, FileText, ChevronRight, MapPin, Award, Building2, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export function CustomerLandingPage({ onNavigateToProposal }: { onNavigateToProposal: () => void }) {
  return (
    <div className="min-h-screen bg-[#05060A] text-zinc-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Top Banner with Direct Access to Executive Proposal */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-cyan-600 px-4 py-2 text-center text-xs font-bold text-white flex items-center justify-center gap-2">
        <span>+30 ANOS DE ENGENHARIA • Representação Oficial FLEXCO® Paraguai & Brasil</span>
        <button
          onClick={onNavigateToProposal}
          className="ml-3 px-3 py-0.5 rounded-full bg-black/40 hover:bg-black/60 text-white text-[11px] font-extrabold uppercase tracking-wider border border-white/30 transition-all flex items-center gap-1"
        >
          🔑 Área do Projeto / Proposta IDS Flows <ChevronRight className="h-3 w-3" />
        </button>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-40 bg-[#07090E]/90 backdrop-blur-xl border-b border-white/10 px-4 py-4">
        <div className="container mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-lg">
              IP
            </div>
            <div>
              <h1 className="font-extrabold text-white text-base tracking-tight leading-none">
                IMPORTADORA PARANÁ
              </h1>
              <span className="text-[11px] text-zinc-400 font-medium">Iparaná Export • Programa Zero Down-Time Agro</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-zinc-300">
            <a href="#ofertas" className="hover:text-amber-400 transition-colors">Garantia & Ofertas</a>
            <a href="#flexco" className="hover:text-amber-400 transition-colors">Linha FLEXCO®</a>
            <a href="#marcas" className="hover:text-amber-400 transition-colors">15+ Marcas</a>
            <a href="#casos" className="hover:text-amber-400 transition-colors">Casos em Usinas</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateToProposal}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-zinc-200 hover:bg-white/10 transition-all"
            >
              <FileText className="h-3.5 w-3.5 text-cyan-400" />
              Visão do Projeto
            </button>

            <a
              href="https://wa.me/595981000000?text=Olá!%20Gostaria%20de%20agendar%20uma%20Inspeção%20Técnica%20Gratuita%20FLEXCO%20na%20minha%20planta."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-xs shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center gap-2"
            >
              <Phone className="h-3.5 w-3.5" />
              Inspeção Gratuita na Planta
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 lg:py-28 overflow-hidden bg-[#07090E] border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-black to-cyan-950/20 pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-400 border border-amber-500/30 uppercase tracking-wider mb-6">
            <Zap className="h-3.5 w-3.5" />
            Importadora Paraná +30 Anos de Tradrição • Programa Zero Down-Time Agro 2026
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 max-w-5xl mx-auto leading-tight">
            Elimine Paradas Não Programadas na Safra com a Engenharia FLEXCO®
          </h2>

          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            A **Importadora Paraná (Iparaná Export)** combina 30 anos de liderança técnica no Paraguai e Brasil com a tecnologia americana **FLEXCO®** para entregar **Garantia Total de Disponibilidade Operacional** em transportadores de correia.
          </p>

          {/* 2 Core Offer Cards Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 text-left">
            <div className="bg-[#0B0D14] border border-amber-500/30 p-6 rounded-3xl ids-glass-card shadow-2xl hover:border-amber-500/60 transition-all">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Oferta 1 • Risco Zero</span>
              <h3 className="text-xl font-bold text-white mb-2">Inspeção Técnica Gratuita na Planta</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Nossa equipe de engenharia realiza o raio-x completo do seu transportador de correia in loco sem qualquer custo.
              </p>
            </div>

            <div className="bg-[#0B0D14] border border-cyan-500/30 p-6 rounded-3xl ids-glass-card shadow-2xl hover:border-cyan-500/60 transition-all">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">Oferta 2 • Garantia Total</span>
              <h3 className="text-xl font-bold text-white mb-2">Teste de Aplicação de 90 Dias</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Se os raspadores e alinhadores FLEXCO® não eliminarem o derramamento e limparem a correia, recolhemos sem cobrança.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/595981000000?text=Olá!%20Gostaria%20de%20solicitar%20uma%20Inspeção%20Técnica%20Gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all flex items-center gap-2"
            >
              Solicitar Inspeção Gratuita via WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#flexco"
              className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-sm transition-all"
            >
              Ver Catálogo Técnico FLEXCO®
            </a>
          </div>

        </div>
      </header>

      {/* Official Flexco Product Mix Graphic Banner */}
      <section id="flexco" className="py-20 bg-[#05060A]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">Representação Exclusiva</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Engenharia Completa de Correias Transportadoras
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
              Equipamentos de classe mundial para Usinas de Açúcar/Etanol, Silos Graneleiros, Mineração e Indústria Heavy-Duty.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#0B0E17] p-6 shadow-2xl">
            <img
              src="/assets/Flexco-Mix-Iparaná.jpg"
              alt="FLEXCO Product Mix - Importadora Paraná"
              className="w-full h-auto rounded-2xl object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer & Link to Project View */}
      <footer className="bg-[#030407] border-t border-white/10 py-12 text-center">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <div>
            <span className="font-extrabold text-white tracking-wider">IMPORTADORA PARANÁ</span>
            <span className="text-amber-500 font-mono mx-2">•</span>
            <span>Iparaná Export © {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateToProposal}
              className="text-xs text-cyan-400 font-bold hover:underline flex items-center gap-1"
            >
              <FileText className="h-3.5 w-3.5" />
              Ver Proposta Estratégica do Projeto (/projeto-visao)
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
