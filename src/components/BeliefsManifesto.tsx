import { Flame, ShieldCheck, Zap, Award, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function BeliefsManifesto() {
  const pillars = [
    {
      title: '1. Vender Disponibilidade, Não Peças',
      text: 'O comprador de usina não quer comprar grampos. Ele quer a garantia de que a esteira transportadora não vai rasgar no pico da moagem.'
    },
    {
      title: '2. Engenharia de Confiabilidade (LCC/TPM)',
      text: 'O equipamento mais barato da prateleira é o mais caro no chão de fábrica. Provamos matematicamente o Total Cost of Ownership para o gerente de PCM.'
    },
    {
      title: '3. Inversão Total do Risco Comercial',
      text: 'Entramos oferecendo Inspeção Gratuita na Planta e Teste de 90 Dias com retirada garantida se não performar. O cliente não tem motivo para dizer não.'
    },
    {
      title: '4. Motor de Tração IDS Flows OS',
      text: 'Substituímos a ligação fria e o catálogo passivo por um ecossistema inteligente de prospecção ABM, Ads focados e CRM automatizado de resposta rápida.'
    }
  ];

  return (
    <section id="manifesto" className="py-24 bg-[#050508] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-400 border border-orange-500/30 uppercase tracking-wider mb-3">
            <Flame className="h-4 w-4" />
            Capítulo 03 • O Que Acreditamos (Tese de Valor)
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            O Manifesto IDS Flows: A Mudança de Jogo no B2B
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
            Os princípios inegociáveis que transformam estoques imobilizados em máquinas aceleradas de receita industrial.
          </p>
        </div>

        {/* 4 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="bg-[#0B0B0E] border border-white/10 p-6 sm:p-8 rounded-3xl ids-glass-card hover:border-orange-500/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Manifesto Banner */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-orange-950/40 via-purple-950/20 to-cyan-950/40 border border-orange-500/30 text-center shadow-2xl">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2">
            Compromisso de Performance
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
            "Quando colocamos a engenharia de valor no centro, o produto estocado deixa de ser custo e vira a solução de emergência mais desejada da região."
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
            É assim que marchamos juntos: unindo a autoridade da IPARANÁ com a tecnologia de fluxo da IDS Flows OS.
          </p>
        </div>

      </div>
    </section>
  );
}
