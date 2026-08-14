import { BarChart3, Database, Search, TrendingUp, AlertCircle, CheckCircle2, Factory, PieChart } from 'lucide-react';
import { motion } from 'motion/react';

export function ResearchInsights() {
  return (
    <section id="pesquisa" className="py-24 bg-[#08080C] border-y border-white/10 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-400 border border-cyan-500/30 uppercase tracking-wider mb-3">
            <Database className="h-4 w-4" />
            Capítulo 02 • Pesquisa 360° & Mapeamento de Campo
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Dados Mapeados: O Universo de Oportunidade no BR & PY
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
            Levantamento quantitativo dos polos industriais agrícolas e do volume de demanda reprimida por soluções de confiabilidade.
          </p>
        </div>

        {/* 4 Core Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          <div className="bg-[#0F0F14] border border-white/10 p-6 rounded-3xl ids-glass-card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Polos Alvo Brasil</span>
              <Factory className="h-5 w-5 text-zinc-500" />
            </div>
            <p className="text-3xl font-black text-white font-mono mb-1">85+ Usinas</p>
            <p className="text-xs text-zinc-400">
              Plantas de açúcar, etanol e bioenergia ativas no PR, MS e SP.
            </p>
          </div>

          <div className="bg-[#0F0F14] border border-white/10 p-6 rounded-3xl ids-glass-card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Polos Alvo Paraguay</span>
              <Factory className="h-5 w-5 text-zinc-500" />
            </div>
            <p className="text-3xl font-black text-white font-mono mb-1">45+ Silos VIP</p>
            <p className="text-xs text-zinc-400">
              Grandes terminais graneleiros em Alto Paraná, Itapúa e CDE.
            </p>
          </div>

          <div className="bg-[#0F0F14] border border-white/10 p-6 rounded-3xl ids-glass-card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Custo Médio Parada</span>
              <TrendingUp className="h-5 w-5 text-zinc-500" />
            </div>
            <p className="text-3xl font-black text-orange-400 font-mono mb-1">R$ 150k<span className="text-xs text-zinc-400 font-normal">/h</span></p>
            <p className="text-xs text-zinc-400">
              Perda média por hora de esteira parada no pico da moagem/safra.
            </p>
          </div>

          <div className="bg-[#0F0F14] border border-white/10 p-6 rounded-3xl ids-glass-card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Potencial de Giro</span>
              <PieChart className="h-5 w-5 text-zinc-500" />
            </div>
            <p className="text-3xl font-black text-emerald-400 font-mono mb-1">90 Dias</p>
            <p className="text-xs text-zinc-400">
              Janela estimada para rotação completa do estoque imobilizado FLEXCO.
            </p>
          </div>

        </div>

        {/* Detailed Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-6 bg-[#0E0E12] border border-white/10 p-6 sm:p-8 rounded-3xl ids-glass-card">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Search className="h-5 w-5 text-cyan-400" />
              O Que o Mercado Procura no Google e LinkedIn
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
              Identificamos centenas de buscas mensais de supervisores de manutenção por soluções urgentes de emenda de correia e substituição de raspadores danificados.
            </p>
            <div className="space-y-2.5">
              {[
                'Busca por "grampo de emergência correia transportadora usina"',
                'Busca por "raspador de correia flexco fornecedor paraguai / brasil"',
                'Procura por "emenda mecânica fria para correia de alta tensão"',
                'Procura por "empresa de alinhamento e inspeção técnica de esteiras"'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-black/60 border border-white/5 text-xs text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0E0E12] border border-white/10 p-6 sm:p-8 rounded-3xl ids-glass-card">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-400" />
              O Gargalo da Dependência Terceirizada
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
              A maioria das usinas hoje é refém de serviços de vulcanização terceirizados. Quando a correia rasga na madrugada, a espera paralisa a moagem por horas.
            </p>
            <div className="p-4 rounded-2xl bg-orange-950/20 border border-orange-500/30 text-xs sm:text-sm text-orange-200">
              <strong className="text-orange-400 block mb-1">Conclusão da Pesquisa de Campo:</strong>
              Quem oferece o <strong>Kit de Emenda Mecânica Rápida FLEXCO + Treinamento da Equipe Interna da Usina</strong> vence a corrida comercial sem disputar preço por catálogo.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
