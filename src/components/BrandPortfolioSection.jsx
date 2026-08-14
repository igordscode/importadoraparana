import React from 'react';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';

export default function BrandPortfolioSection({ onOpenInspectionModal }) {
  const brands = [
    { name: 'FLEXCO®', role: 'Sistemas de Limpeza, Alinhamento & Emendas de Correias' },
    { name: 'Continental®', role: 'Cintas Transportadoras & Correas Industrial/Agrícola' },
    { name: 'WEG / Cestari®', role: 'Redutores e Motorredutores de Velocidade' },
    { name: 'Chesterton®', role: 'Sistemas de Vedação Rotativa & Revestimentos MRO' },
    { name: 'Eriez®', role: 'Detectores de Metais & Separadores Magnéticos' },
    { name: 'Schioppa®', role: 'Ruedas e Rodilhos de Alta Resistência' },
    { name: 'Tipsa®', role: 'Mangueras e Acoplamentos para Pozos Artesianos e Riego' },
    { name: 'Higra®', role: 'Bombas Submersíveis e Anfíbias & Hidrogeradores' },
    { name: 'Ucelo®', role: 'Cangilones Plásticos & Engenharia para Elevadores de Grãos' },
    { name: 'Faster®', role: 'Acoplamentos Rápidos Hidráulicos & Multi-Acoplamentos' },
    { name: 'Tsubaki®', role: 'Correntes de Rodilhos, Transmissão & Trava Anti-Retorno' },
    { name: 'ABB®', role: 'Motores de Baixa Tensão com Termistor PTC/RTD & Drives' },
    { name: 'ITT Goulds Pumps®', role: 'Bombas Centrífugas de Processo Pesado & Rheinhütte' },
    { name: 'Kanaflex®', role: 'Mangueras Flexíveis de PVC Industrial & Agrícola' }
  ];

  return (
    <section id="marcas" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-ip-blue/15 border border-ip-blue/30 px-3.5 py-1 rounded-full text-xs font-bold text-blue-300 mb-3">
            <Award className="w-4 h-4 text-amber-400" />
            <span>PORTFÓLIO GLOBAL DE ENGENHARIA (+30 ANOS DE MERCADO)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Distribuição Exclusiva das Marcas Líderes Mundiais no Paraguai e Brasil
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Importadora Paraná: garantia oficial, peças originais e assistência técnica especializada.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {brands.map((b, i) => (
            <div key={i} className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl text-center flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-md group">
              <div>
                <span className="font-extrabold text-sm text-white block group-hover:text-amber-400 transition-colors mb-1">{b.name}</span>
                <span className="text-[10px] text-slate-400 leading-tight block">{b.role}</span>
              </div>
              <div className="pt-2 mt-2 border-t border-slate-800/80 flex items-center justify-center space-x-1 text-[9px] text-emerald-400 font-semibold">
                <CheckCircle className="w-2.5 h-2.5" />
                <span>Oficial IP</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dual HQ & GPTW Banner */}
        <div className="bg-gradient-to-r from-ip-navy via-slate-900 to-ip-navy border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300 shadow-xl">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-8 h-8 text-amber-400 flex-shrink-0" />
            <div>
              <h5 className="font-bold text-sm text-white">Great Place to Work® Certificada (2024-2025)</h5>
              <p className="text-slate-400">Certificação oficial em Cultura Inovadora & Alto Paraná. Mais de 70 colaboradores dedicados ao sucesso da sua planta.</p>
            </div>
          </div>

          <button
            onClick={onOpenInspectionModal}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md whitespace-nowrap"
          >
            Falar com Engenharia de Vendas
          </button>
        </div>

      </div>
    </section>
  );
}
