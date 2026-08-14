import { useState } from 'react';
import { Package, ShieldAlert, CheckCircle2, Wrench, ArrowRight, Zap, Layers, Sparkles, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';

export function ProductMatrix() {
  const [activeTab, setActiveTab] = useState<'grampos' | 'raspadores' | 'alinhadores' | 'vedacao'>('grampos');

  const products = {
    grampos: {
      title: 'Grampos de Emenda Mecânica de Precisão (Linha R2, R5, Solid Plate & Alligator)',
      models: 'FLEXCO R2 Rivet Hinged • R5 Inpasa • Bolt Solid Plate • Alligator Ready Set',
      badge: 'Case Real em Inpasa & Usinas',
      badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
      description: 'Solução mecânica fria de alta durabilidade para união de correias transportadoras de alta tensão. Permite reparos imediatos em menos de 30 minutos sem vulcanização.',
      specs: [
        { label: 'Tempo de Reparo (MTTR)', value: '15 a 30 Minutos (Redução de 90%)' },
        { label: 'Modelos Principais', value: 'R2 (Leve/Média), R5 Heavy-Duty, Solid Plate' },
        { label: 'Ferramental de Campo', value: 'Kits de instalação mecânica rápida' },
        { label: 'Compatibilidade', value: '100% compatível com raspadores primários' }
      ],
      painVsSolution: {
        pain: 'Vulcanização a quente demora 8h-12h, exige cola/tempo de cura e paralisa a moenda no meio da safra.',
        solution: 'Instalação mecânica fria pela própria equipe interna em 25 minutos. A fábrica volta a moer imediatamente.'
      },
      objectionKiller: 'Objeção: "O grampo danifica a correia ou o raspador" $\rightarrow$ O grampo FLEXCO R2/R5 comprime as fibras da correia com grampos chanfrados, passando suavemente sob a lâmina do raspador.',
      image: '/assets/W-2025-09 - Emendas Mecânicas1.jpg'
    },
    raspadores: {
      title: 'Limpiadores y Pre-Limpiadores Heavy Duty para Cintas',
      models: 'Linha Rockline / Mineline / P-Type / U-Type',
      badge: 'Zero Limpeza Manual no Chassi',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      description: 'Sistemas de limpeza de alta performance instalados no tambor de descarga. Eliminam a volta de material (carryback) e protegem roletes e estruturas.',
      specs: [
        { label: 'Eficiência de Limpeza', value: '95%+ do material removido na descarga' },
        { label: 'Economia de Mão de Obra', value: 'Libera 2 a 4 operadores por turno' },
        { label: 'Proteção de Roletes', value: 'Aumento de 3x na vida útil dos roletes' },
        { label: 'Lâminas de Troca Rápida', value: 'Poliuretano Especial e Carbeto de Tungstênio' }
      ],
      painVsSolution: {
        pain: 'Material acumulado no chassi quebra roletes, trava tambores e exige limpeza manual perigosa.',
        solution: 'Raspagem contínua automática. Mantém o chassi limpo e reduz o risco de acidentes e passivo trabalhista.'
      },
      objectionKiller: 'Objeção: "A lâmina risca a correia" $\rightarrow$ Tensionadores auto-ajustáveis com amortecimento mantêm a pressão ideal sem agredir a fita.',
      image: '/assets/Flexco-Mix-Iparaná.jpg'
    },
    alinhadores: {
      title: 'Equipos Alineadores Dinámicos & Camas de Impacto',
      models: 'Linha Positioner / Tracker / Mesa de Impacto / Perfil Alumínio-Borracha',
      badge: 'Proteção Estrutural da Fita',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      description: 'Sistemas de alinhamento dinâmico instantâneo e mesas de impacto que absorvem a queda de material na zona de carga, prevenindo o desgaste lateral da correia.',
      specs: [
        { label: 'Ação de Alinhamento', value: 'Guiagem dinâmicam automática por pivô' },
        { label: 'Mesa de Impacto', value: 'Perfis de Alumínio + Borracha de Alta Absorção' },
        { label: 'Preservação de Borda', value: 'Evita cortes e rasgos nas bordas da correia' },
        { label: 'Vedação da Zona de Carga', value: 'Zero perda de grãos por desalinhamento' }
      ],
      painVsSolution: {
        pain: 'Correia desalinhada rasga a borda no aço do chassi e derruba toneladas de grãos/bagaço fora da calha.',
        solution: 'Giro dinâmico que mantém a correia centralizada e mesa de impacto que absorve o choque de rochas e carga pesada.'
      },
      objectionKiller: 'Objeção: "Mesa de impacto segura o motor" $\rightarrow$ Os perfis possuem revestimento UHMW de baixíssimo atrito, permitindo deslizamento suave.',
      image: '/assets/W-2025-09 - Emendas Mecânicas2.jpg'
    },
    vedacao: {
      title: 'Sistemas de Sellado & Revestimiento de Tambores',
      models: 'Revestimento de Tambores • Saia de Vedação Lateral • Detectores Eriez',
      badge: 'Proteção Total e Eficiência',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      description: 'Revestimentos de borracha/cerâmica para tambores de tração e vedações laterais de alta flexibilidade que impedem derramamento e poeira combustível.',
      specs: [
        { label: 'Revestimento de Tambor', value: 'Borracha/Cerâmica com ranhuras em V/Losango' },
        { label: 'Vedação de Chute', value: 'Dupla retenção contra pó e granulados' },
        { label: 'Atrito de Tração', value: 'Zero patinagem do tambor em ambiente úmido' },
        { label: 'Segurança contra Pó', value: 'Elimina atmosferas de poeira combustível' }
      ],
      painVsSolution: {
        pain: 'Tambor patinando sob chuva/umidade paralisa a carga e derramamento de pó causa risco de explosão.',
        solution: 'Trabalho contínuo sem patinagem e vedação hermética da zona de transferência.'
      },
      objectionKiller: 'Objeção: "Revestimento de tambor solta fácil" $\rightarrow$ Aplicação industrial com vulcanização e adesivo especial MRO de altíssima adesão.',
      image: '/assets/W-2025-09 - Emendas Mecânicas3.jpg'
    }
  };

  const current = products[activeTab];

  return (
    <section id="produtos" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-400 border border-cyan-500/30 uppercase tracking-wider mb-3">
            <Package className="h-4 w-4" />
            Catálogo Tático do Estoque FLEXCO (BR & PY)
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Linhas de Produto & Casos de Aplicação em Campo
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
            Conheça as especificações reais da linha FLEXCO representada pela IPARANÁ e os argumentos técnicos incontestáveis para venda direta.
          </p>
        </div>

        {/* Mix Banner Showcase Image */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-white/10 bg-[#0B0B0F] p-4 ids-glass-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4">
            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
                Portfólio Oficial Representado pela IPARANÁ
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                FLEXCO Product Mix & Engenharia de Campo
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
                Grampos R2/R5, Alligator, Raspadores Rockline, Camas de Impacto, Revestimento de Tambores e Detectores de Metal.
              </p>
            </div>
            <div className="w-full md:w-80 h-32 rounded-2xl overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center">
              <img 
                src="/assets/Flexco-Mix-Iparaná.jpg" 
                alt="Flexco Product Mix Iparaná" 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['grampos', 'raspadores', 'alinhadores', 'vedacao'] as const).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`py-3.5 px-6 rounded-2xl font-bold text-sm border transition-all flex items-center gap-2 ${
                activeTab === tabKey
                  ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 border-orange-500 text-white shadow-[0_0_20px_rgba(234,88,12,0.25)]'
                  : 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Layers className={`h-4 w-4 ${activeTab === tabKey ? 'text-orange-400' : 'text-zinc-500'}`} />
              {tabKey === 'grampos' && 'Emendas R2/R5/Solid Plate'}
              {tabKey === 'raspadores' && 'Raspadores & Limpiadores'}
              {tabKey === 'alinhadores' && 'Alinhadores & Camas de Impacto'}
              {tabKey === 'vedacao' && 'Revestimento & Vedação'}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#0D0D10] border border-white/10 rounded-3xl p-6 sm:p-10 ids-glass-card shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${current.badgeColor}`}>
                  {current.badge}
                </span>
                <span className="text-xs text-zinc-500 font-mono">{current.models}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {current.title}
              </h3>

              <p className="text-zinc-300 text-base leading-relaxed">
                {current.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {current.specs.map((spec, idx) => (
                  <div key={idx} className="bg-black/50 border border-white/10 p-3.5 rounded-xl">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">{spec.label}</span>
                    <span className="text-sm font-semibold text-white font-mono">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Objection Killer */}
              <div className="p-4 rounded-2xl bg-orange-950/20 border border-orange-500/30 text-xs sm:text-sm text-orange-200">
                <strong className="text-orange-400 block mb-1 flex items-center gap-1">
                  <Sparkles className="h-4 w-4" /> Matador de Objeções Comercial:
                </strong>
                {current.objectionKiller}
              </div>
            </div>

            {/* Right Column (Image + Pain/Solution) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Product Photo Graphic */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/60 h-44">
                <img 
                  src={current.image} 
                  alt={current.title} 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="bg-red-950/20 border border-red-900/30 p-5 rounded-2xl">
                <div className="flex items-center gap-2 text-red-400 font-bold text-xs mb-1.5">
                  <ShieldAlert className="h-4 w-4" /> A Dor da Usina sem FLEXCO
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {current.painVsSolution.pain}
                </p>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-500/30 p-5 rounded-2xl">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1.5">
                  <CheckCircle2 className="h-4 w-4" /> Solução Comprovada IPARANÁ x FLEXCO
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {current.painVsSolution.solution}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

