import { useState } from 'react';
import { Target, Search, Video, RefreshCcw, Layers, ArrowRight, CheckCircle2, Flame, Users, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export function GoToMarket() {
  const [selectedPath, setSelectedPath] = useState<'A' | 'B' | 'C' | 'D'>('A');

  const gtmPaths = [
    {
      id: 'A',
      badge: 'Caminho A • High Ticket',
      title: 'ABM Outbound Cirúrgico',
      subtitle: 'Abordagem direta de Gerentes de Manutenção & PCM em Usinas e Silos (BR & PY)',
      icon: Target,
      color: 'orange',
      badgeStyle: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
      borderStyle: 'border-orange-500/40 glow-orange',
      targets: [
        'Usinas de Açúcar e Etanol (Norte PR, MS, SP)',
        'Cooperativas Agroindustriais (Alto Paraná, Itapúa PY)',
        'Terminais Graneleiros & Portos Fluviais',
        'Decisores: Gerente Industrial, Eng. Confiabilidade, Chefe de PCM'
      ],
      mechanics: 'Mapeamento via LinkedIn Sales Navigator e bases industriais. Contato consultivo focado no envio do Laudo de Risco de Parada e Calculadora LCC.',
      deliverable: 'Agendamento de Inspeção Técnica Gratuita na Planta com a equipe da IPARANÁ.'
    },
    {
      id: 'B',
      badge: 'Caminho B • Intenção Direta',
      title: 'Inbound Google Search Ads',
      subtitle: 'Interceptação de buscas urgentes por peças e manutenção industrial em tempo real',
      icon: Search,
      color: 'cyan',
      badgeStyle: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      borderStyle: 'border-cyan-500/40 glow-cyan',
      targets: [
        'Compradores de emergência com correia quebrada',
        'Supervisores de manutenção procurando grampos e raspadores',
        'Buscadores por "Raspador Flexco Brasil / Paraguay"',
        'Termos: "grampo para correia transportadora usina", "emenda rápida de correia"'
      ],
      mechanics: 'Landing Page de Alta Conversão direcionada para WhatsApp Comercial com resposta imediata em menos de 5 minutos.',
      deliverable: 'Leads quentes de orçamento e desova rápida do estoque parado em depósito.'
    },
    {
      id: 'C',
      badge: 'Caminho C • Infotainment',
      title: 'Conteúdo Disruptivo 240fps & 3D',
      subtitle: 'Demonstração visual extrema de resistência, velocidade e instalação mecânica',
      icon: Video,
      color: 'amber',
      badgeStyle: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      borderStyle: 'border-amber-500/40',
      targets: [
        'Comunidade de Engenharia de Manutenção & Operadores',
        'Técnicos e Mecânicos Industriais no YouTube/Instagram/LinkedIn',
        'Grupos de WhatsApp de Manutenção Agro'
      ],
      mechanics: 'Vídeos em câmera lenta (240fps) comparando rasgo de correia comum vs emenda FLEXCO em teste de tração severo.',
      deliverable: 'Geração de demanda orgânica, autoridade técnica incontestável e atração passiva de clientes.'
    },
    {
      id: 'D',
      badge: 'Caminho D • Recorrência',
      title: 'Servitização Zero Down-Time',
      subtitle: 'Venda de pacotes de continuidade operacional em substituição à venda de peça avulsa',
      icon: RefreshCcw,
      color: 'purple',
      badgeStyle: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      borderStyle: 'border-purple-500/40',
      targets: [
        'Contas estratégicas com múltiplos transportadores',
        'Usinas com contrato de manutenção preventiva anual'
      ],
      mechanics: 'Contrato de fornecimento garantido com estoque consignment na usina + inspeção mensal inclusa.',
      deliverable: 'Receita recorrente previsível e blindagem contra concorrentes.'
    }
  ];

  const current = gtmPaths.find(p => p.id === selectedPath)!;

  return (
    <section id="gtm" className="py-24 bg-[#08080A] border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-400 border border-orange-500/30 uppercase tracking-wider mb-3">
            <Layers className="h-4 w-4" />
            Árvore de Decisão Go-To-Market
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Canais & Estratégias de Ataque ao Mercado (BR & PY)
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
            Quatro vetores complementares projetados para desovar o estoque parado e posicionar a IPARANÁ como referência incontestável de disponibilidade operacional.
          </p>
        </div>

        {/* Path Selection Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {gtmPaths.map((path) => {
            const Icon = path.icon;
            const isSelected = selectedPath === path.id;
            return (
              <button
                key={path.id}
                onClick={() => setSelectedPath(path.id as any)}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? `${path.borderStyle} bg-white/5 shadow-2xl`
                    : 'bg-[#0F0F12] border-white/10 text-zinc-400 hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${path.badgeStyle}`}>
                    {path.id}
                  </span>
                  <Icon className={`h-5 w-5 ${isSelected ? 'text-white' : 'text-zinc-500'}`} />
                </div>
                <h3 className={`font-bold text-base sm:text-lg mb-1 ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                  {path.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Path Details Card */}
        <div className="bg-[#0F0F14] border border-white/10 rounded-3xl p-6 sm:p-10 ids-glass-card shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${current.badgeStyle}`}>
                {current.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                {current.title}
              </h3>
            </div>
            <p className="text-zinc-400 text-sm sm:text-base max-w-lg">
              {current.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Target Accounts & Profile */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Users className="h-4 w-4 text-orange-400" /> Público-Alvo & Perfis Mapeados
              </h4>
              <div className="space-y-2.5">
                {current.targets.map((target, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-black/50 border border-white/5 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0" />
                    <span>{target}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Mechanics & Deliverables */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2 mb-3">
                  <Cpu className="h-4 w-4 text-cyan-400" /> Mecânica de Operação no Piloto
                </h4>
                <p className="text-sm text-zinc-300 bg-white/5 p-4 rounded-2xl border border-white/5 leading-relaxed">
                  {current.mechanics}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-950/30 to-amber-950/30 border border-orange-500/30">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
                  Entregável Esperado
                </span>
                <p className="text-sm font-semibold text-white">
                  {current.deliverable}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

