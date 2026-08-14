import React from 'react';
import { Video, Film, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DocuseriesSection({ onOpenInspectionModal }) {
  const fieldVideos = [
    {
      id: 'inpasa-r5-04',
      title: '1. Teste de Emendas R5 na Usina Inpasa (24/7)',
      tag: 'USINA ETHANOL & MILHO',
      badge: 'CASE INPASA 2025',
      desc: 'Aplicação de emendas mecânicas Flexco R5 em transportadores pesados operando continuamente com cargas de milho e biomassa na fábrica da Inpasa.',
      specs: 'Vídeos 04 e 05 — Inpasa Agrobusiness'
    },
    {
      id: 'revestimento-tambores-01',
      title: '2. Emborrachamento de Tambor com Flex-Lag®',
      tag: 'MANUTENÇÃO INDUSTRIAL',
      badge: 'ALTA TRAÇÃO',
      desc: 'Aplicação de tiras vulcanizadas Flex-Lag® Diamond (68 Shore) sem necessidade de desmonte da estrutura do transportador na planta do cliente.',
      specs: 'Vídeos 01 e 08 — Revestimento de Polia'
    },
    {
      id: 'detector-eriez-13',
      title: '3. Detector de Metal Eriez® Xtreme em Ação',
      tag: 'PROTEÇÃO MAGNÉTICA',
      badge: 'TECNOLOGIA ERIEZ',
      desc: 'Inspeção e detecção automatizada de contaminação metálica em linhas de transporte de matéria-prima agrícola e mineral.',
      specs: 'Vídeo 13 — Eriez México & Importadora Paraná'
    },
    {
      id: 'emenda-r2-ferramenta-09',
      title: '4. Instalação de Emenda R2 com Ferramenta MSRT',
      tag: 'TEMPO DE RESPOSTA',
      badge: 'INSTALAÇÃO RÁPIDA',
      desc: 'Demonstração de instalação manual com ferramentas de alumínio MSRT e grampos articulados para redução do tempo de parada de 12h para 45 min.',
      specs: 'Vídeos 02, 09, 10, 12 — Grampos SR / R2'
    },
    {
      id: 'perfil-aluminio-06',
      title: '5. Perfil de Alumínio e Borracha em Mesa de Vedação',
      tag: 'CONTENÇÃO DE PÓ',
      badge: 'ZERO VAZAMENTO',
      desc: 'Encaixe hermético de guarnições laterais em chute de alimentação para controle de poeira suspensa e eliminação de perdas de produto.',
      specs: 'Vídeos 06 e 07 — Mesas & Guarnições'
    },
    {
      id: 'compatibilidade-limpador-11',
      title: '6. Compatibilidade de Emendas R2 com Raspadores',
      tag: 'ENGENHARIA FLEXCO',
      badge: 'PASSE SUAVE',
      desc: 'Teste do comportamento das lâminas de poliuretano Conshear™ ao passarem sobre a junção metálica R2 em alta velocidade.',
      specs: 'Vídeo 11 — Compatibilidade Raspador x Grampo'
    }
  ];

  return (
    <section id="docuseries" className="py-20 bg-slate-900/60 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400 mb-3">
            <Video className="w-4 h-4 text-emerald-400" />
            <span>ACERVO DE MÍDIA E VÍDEOS DE CAMPO (13 REELS/VIDEOS)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Assista à Engenharia FLEXCO® em Ação Real de Campo
          </h2>
          <p className="text-base text-slate-400 mt-3">
            Sem fotos de banco de dados: aplicações documentadas diretamente nas usinas, cooperativas e pedreiras do Brasil e Paraguai.
          </p>
        </div>

        {/* 6 Real Field Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {fieldVideos.map((video) => (
            <div key={video.id} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden group hover:border-amber-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                  />
                  <div className="absolute inset-0 bg-slate-950/40" />
                  
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded uppercase tracking-wider">
                    {video.badge}
                  </div>

                  <Film className="w-12 h-12 text-amber-400 relative z-10 opacity-80 group-hover:opacity-100 transition-all transform group-hover:scale-110" />
                </div>

                <div className="p-6">
                  <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">{video.tag}</div>
                  <h4 className="font-bold text-base text-white mb-2 leading-snug">{video.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{video.desc}</p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{video.specs}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout to Request Videos */}
        <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left space-y-1">
            <h4 className="font-bold text-lg text-white">Deseja receber os vídeos completos de teste no WhatsApp?</h4>
            <p className="text-xs text-slate-400">Nossa equipe envia as demonstrações em alta resolução de acordo com a sua aplicação específica.</p>
          </div>

          <button
            onClick={onOpenInspectionModal}
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap"
          >
            Solicitar Acervo no WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}
