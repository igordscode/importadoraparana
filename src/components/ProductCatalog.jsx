import React, { useState } from 'react';
import { Wrench, Layers, RefreshCw, Layers3, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProductCatalog({ onOpenInspectionModal }) {
  const [activeTab, setActiveTab] = useState('limpadores');

  const products = {
    limpadores: [
      {
        id: 'ezp1-primario',
        name: 'Raspador Primário FLEXCO® Modelo EZP1',
        badge: 'CEMA CLASSE 3',
        tag: 'Tambor de Descarga',
        description: 'Instalado na polia de descarga com lâmina sólida Conshear™ em uretano de perfil facetado renovável. Sistema de tensionamento por mola auto-ajustável e troca sem ferramentas.',
        specs: [
          'Velocidade máxima da correia: 3,5 m/s',
          'Lâmina sólida Conshear™ uretano (90 Shore) com dureza renovável',
          'Faixa de temperatura: -35º C a 82º C',
          'Base extrudada de alumínio com fixação por pino'
        ],
        roi: 'Elimina o acúmulo primário no tambor e reduz em até 85% o tempo de limpeza pesada.'
      },
      {
        id: 'fms-secundario',
        name: 'Raspador Secundário FLEXCO® Modelo FMS',
        badge: 'CEMA CLASSE 4',
        tag: 'Área de Retorno',
        description: 'Lâminas segmentadas tipo "C" de 6" (150mm) em carboneto de tungstênio de alta resistência ao impacto. Fixação por brasagem de cobre para máxima vida útil.',
        specs: [
          'Velocidade máxima da correia: 5.0 a 6.0 m/s',
          'Ponteiras em carboneto de tungstênio brasadas a cobre',
          'Tensor duplo por mola e ajuste micrométrico',
          'Faixa de temperatura: -35º C a 148º C'
        ],
        roi: 'Protege os roletes de retorno contra incrustação, preservando a carcaça da correia.'
      },
      {
        id: 'cbv-interno',
        name: 'Raspador Interno / V-Plow FLEXCO® Modelo CBV',
        badge: 'PROTEÇÃO INTERNA',
        tag: 'Lado de Retorno Interno',
        description: 'Design de lâmina angular que descarrega simultaneamente resíduos, pedras e água para ambos os lados da correia em espiral antes de atingir a polia de retorno.',
        specs: [
          'Elimina resíduos e água acumulada na parte interna',
          'Encaixa em qualquer estrutura de transportador',
          'Tensor de ponta para ajuste fino de pressão na instalação'
        ],
        roi: 'Evita a perfuração da correia por pedras presas no tambor de retorno.'
      }
    ],
    alinhadores: [
      {
        id: 'pts-r-retorno',
        name: 'Alinhador de Retorno FLEXCO® Modelo PTS-R',
        badge: 'SISTEMA PIVOTADO',
        tag: 'Retorno da Correia',
        description: 'Sistema gira/inclina patenteado que atua nos eixos horizontal e vertical simultaneamente, corrigindo a trajetória pela diferença de tensão sem agredir as bordas.',
        specs: [
          'Mecanismo pivotado em aço cirúrgico blindado',
          'Roletes ajustáveis que atuam como sensores de desalinhamento',
          'Para correias de até 1.600 PIW e velocidade máx de 5 m/s',
          'Faixa de temperatura: -40° C a 71° C'
        ],
        roi: 'Elimina o rasgamento lateral de correias desgastadas ou desalinhadas.'
      },
      {
        id: 'ptma-carga',
        name: 'Alinhador de Carga FLEXCO® Modelo PTMA',
        badge: 'TECNOLOGIA PIVOT & TILT',
        tag: 'Zona de Carregamento',
        description: 'Tecnologia exclusiva "pivô e inclinação" que reage instantaneamente ao desalinhamento da correia sob carga pesada, mantendo o material centralizado.',
        specs: [
          'Para larguras de correia de 24" a 84" (600 a 2.100 mm)',
          'Velocidade máxima da correia: 6,0 m/s',
          'Roletes duplos que protegem a borda e mantêm o nivelamento',
          'Compatível com emendas mecânicas e vulcanizadas'
        ],
        roi: 'Evita derramamento de carga pesada ao longo do chute de alimentação.'
      }
    ],
    mesas: [
      {
        id: 'ezsb-mesa-vedacao',
        name: 'Mesa de Vedação FLEXCO® Modelo EZSB',
        badge: 'ALTO RENDIMENTO',
        tag: 'Chute de Alimentação',
        description: 'Mesa com roletes especiais ajustáveis e barras deslizantes de UHMW de baixo atrito que suportam a correia, eliminando a folga sob as guarnições laterais.',
        specs: [
          'Material das barras: UHMW com base em alumínio extrudado',
          'Braços ajustáveis para ângulos de 20°, 35° e 45°',
          'Para correias de até 72" (1.800 mm) e velocidade máx de 5 m/s',
          'Compatível com emendas mecânicas'
        ],
        roi: 'Veda o pó e elimina vazamento de graos e finos na zona de carga.'
      },
      {
        id: 'skpu-guarnicao',
        name: 'Guarnição Lateral SKPU & Fixador RMC1',
        badge: '3-4X MAIS DURÁVEL',
        tag: 'Vedação Lateral de Chute',
        description: 'Guarnição em poliuretano macio (65A) de altíssima resistência a rasgos com kit fixador RMC1 que permite ajuste rápido e seguro pela lateral do transportador.',
        specs: [
          'Poliuretano dureza 65A sem danificar a cobertura da correia',
          'Vida útil 3 a 4 vezes superior à borracha convencional',
          'Kit fixador RMC1 com presilhas de aperto rápido'
        ],
        roi: 'Economia direta nos custos de limpeza e manutenção de contenção de pó.'
      }
    ],
    emendas: [
      {
        id: 'flexco-sr-rebite',
        name: 'Grampos de Emenda FLEXCO® Sistema SR (Zip-Lock)',
        badge: 'SETOR DE GRÃOS',
        tag: 'Emenda por Rebite',
        description: 'Grampos articulados fixados por rebites estagiados para correias de borracha e desgastadas. Instalação rápida manual com ferramenta de alumínio MSRT.',
        specs: [
          'Para tambores a partir de 125mm (5")',
          'Espessuras de correia de 3,5 mm a 10 mm com mesmo grampo',
          'Fixação por rebite articulado para máxima flexibilidade'
        ],
        roi: 'Permite reparar a correia sem esperar vulcanização externa.'
      },
      {
        id: 'solid-plate-140ee',
        name: 'Grampos Solid Plate FLEXCO® 140EE (Parafusados)',
        badge: 'REPARO DE RASGOS',
        tag: 'Usina / Túneis',
        description: 'Placa sólida aparafusada com projeto piloto de alinhamento imediato. Disponível em modelos antifaísca ideais para túneis e transportadores enclausurados.',
        specs: [
          'Para correias de 5 a 11 mm e tambores a partir de 360mm (14")',
          'Parafusos piloto de alta tensão e pré-montados',
          'Modelos antifaísca para segurança em ambiente combustível'
        ],
        roi: 'Repara furos e rasgos longitudinais na correia em minutos.'
      },
      {
        id: 'flex-lag-tambor',
        name: 'Revestimento de Tambores FLEX-LAG® (12ND & 12FRD)',
        badge: 'TRAÇÃO ELEVADA',
        tag: 'Emborrachamento de Polia',
        description: 'Placas de emborrachamento vulcanizadas em borracha natural SBR (68 Shore) ou sintética FRAS anti-chamas/anti-estática. Opção com trilho soldável.',
        specs: [
          'Composto SBR (12ND) ou FRAS anti-chamas (12FRD)',
          'Temperatura de trabalho: -15º C a 85º C',
          'Disponível em tiras ou placas com perfil Diamond de alto arraste'
        ],
        roi: 'Elimina o patinamento da correia no tambor motriz mesmo sob chuva.'
      }
    ]
  };

  return (
    <section id="produtos" className="py-20 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-bold text-amber-400 mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>CATÁLOGO TÉCNICO OFICIAL FLEXCO®</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tecnologia de Confiabilidade para Transportadores de Correia
          </h2>
          <p className="text-base text-slate-400 mt-3">
            Garantia de 3 Anos da Importadora Paraná. Estoque imediato no Paraguai (Ciudad del Este/Asunción) e Brasil (Foz do Iguaçu).
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-12 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('limpadores')}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'limpadores'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>Raspadores (EZP1, FMS, CBV)</span>
          </button>

          <button
            onClick={() => setActiveTab('alinhadores')}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'alinhadores'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            <span>Alinhadores (PTS-R, PTMA)</span>
          </button>

          <button
            onClick={() => setActiveTab('mesas')}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'mesas'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Vedações (EZSB, SKPU, RMC1)</span>
          </button>

          <button
            onClick={() => setActiveTab('emendas')}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'emendas'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Layers3 className="w-4 h-4" />
            <span>Emendas & Flex-Lag®</span>
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products[activeTab].map((product) => (
            <div key={product.id} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all shadow-xl">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                    {product.tag}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2.5 leading-snug">{product.name}</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">{product.description}</p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Especificações Técnicas:</span>
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-800 flex flex-col items-start gap-4">
                <div className="text-left w-full">
                  <span className="text-[10px] text-slate-400 block font-medium uppercase">Retorno do Investimento (ROI):</span>
                  <span className="text-xs font-bold text-emerald-400">{product.roi}</span>
                </div>

                <button
                  onClick={onOpenInspectionModal}
                  className="w-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>Solicitar Cotação / Teste de 90 Dias</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
