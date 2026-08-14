import React from 'react';
import { ShieldCheck, CalendarCheck, Play, ArrowRight, CheckCircle2, Award, Building2 } from 'lucide-react';

export default function HeroSection({ onOpenInspectionModal }) {
  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-slate-950">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[320px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges: 30 Years Authority + GPTW + Zero Downtime */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center space-x-2 bg-ip-blue/15 border border-ip-blue/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-300 backdrop-blur-md">
            <Building2 className="w-3.5 h-3.5 text-ip-blue" />
            <span>IMPORTADORA PARANÁ • +30 ANOS DE TRADIÇÃO</span>
          </div>

          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>PROGRAMA ZERO DOWN-TIME AGRO 2026</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Elimine Paradas Não Programadas na Safra com a Engenharia <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">FLEXCO®</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            A <strong className="text-white font-bold">Importadora Paraná (Iparaná Export)</strong> combina 30 anos de liderança técnica no Paraguai e Brasil com a tecnologia americana FLEXCO® para entregar <strong className="text-amber-400 font-bold">Garantia Total de Disponibilidade Operacional</strong> em transportadores de correia.
          </p>

          {/* Risk Reversal Callouts (#ofertas anchor target) */}
          <div id="ofertas" className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto pt-4 scroll-mt-28">
            <div className="bg-slate-900/90 border border-amber-500/40 p-5 rounded-2xl flex items-start space-x-4 text-left hover:border-amber-400 transition-all shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-400 block mb-0.5">OFERTA 1 — RISCO ZERO</span>
                <h4 className="font-bold text-base text-white">Inspeção Técnica Gratuita na Planta</h4>
                <p className="text-xs text-slate-300 mt-1">Nossa equipe de engenharia realiza o raio-x completo do seu transportador sem qualquer custo.</p>
              </div>
            </div>

            <div className="bg-slate-900/90 border border-cyan-500/40 p-5 rounded-2xl flex items-start space-x-4 text-left hover:border-cyan-400 transition-all shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CalendarCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-cyan-400 block mb-0.5">OFERTA 2 — GARANTIA TOTAL</span>
                <h4 className="font-bold text-base text-white">Teste de Aplicação de 90 Dias</h4>
                <p className="text-xs text-slate-300 mt-1">Se os raspadores/alinhadores não eliminarem o derramamento, recolhemos o equipamento sem cobrança.</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenInspectionModal}
              id="btn-hero-inspecao"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-base px-8 py-4 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3"
            >
              <span>Solicitar Inspeção Gratuita via WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#produtos"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-base px-6 py-4 rounded-xl transition-colors text-center"
            >
              Ver Catálogo Técnico FLEXCO®
            </a>
          </div>

          {/* Guarantee Pill */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400 pt-2">
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Garantia Oficial FLEXCO® de 3 Anos</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Estoque Imediato em Ciudad del Este & Foz do Iguaçu</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5 text-amber-400">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Great Place to Work® Certificada</span>
            </span>
          </div>
        </div>

        {/* Video Preview Frame (13 Real Field Videos Showcase) */}
        <div className="mt-14 relative max-w-4xl mx-auto rounded-2xl overflow-hidden glass-card p-2 border border-slate-800 shadow-2xl">
          <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-950 border border-slate-800 flex items-center justify-center group cursor-pointer">
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />
            
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
              alt="Transportador de Correia Industrial Importadora Paraná"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
            />

            {/* Real Field Media Badge */}
            <div className="absolute top-4 left-4 z-20 bg-slate-900/90 border border-amber-500/40 px-3 py-1.5 rounded-lg text-xs font-bold text-amber-400 flex items-center space-x-2 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span>ACERVO VÍDEOS DE CAMPO (INPASA & USINAS)</span>
            </div>

            {/* Play Button Overlay */}
            <div className="relative z-20 flex flex-col items-center space-y-3">
              <a 
                href="#docuseries"
                className="w-20 h-20 rounded-full bg-amber-500/90 group-hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 transition-all transform group-hover:scale-110"
              >
                <Play className="w-8 h-8 fill-slate-950 ml-1" />
              </a>
              <span className="text-sm font-bold text-white tracking-wide">
                Ver Aplicação de Emendas R5 na Usina Inpasa & Revestimento Flex-Lag®
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-6 right-6 z-20 flex justify-between items-center text-xs text-slate-300">
              <span className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 font-medium">
                Case Inpasa: Emendas R5 em transportadores de milho com operação 24/7
              </span>
              <a href="#docuseries" className="font-extrabold text-amber-400 hover:underline">Ver os 13 Vídeos →</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
