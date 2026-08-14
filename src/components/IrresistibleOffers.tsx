import { Search, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function IrresistibleOffers() {
  return (
    <section id="ofertas" className="py-24 bg-[#0F0F11]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Risk Reversal</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">As Duas Ofertas Irrecusáveis</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Rompendo a barreira de entrada da concorrência através de ações disruptivas que transferem 100% do risco para a Iparaná.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Offer 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6, ease: "easeOut" }} 
            className="group relative rounded-3xl bg-[#18181B] border border-zinc-800 p-8 hover:border-amber-500/50 transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-8 border border-amber-500/20">
                <Search className="h-7 w-7" />
              </div>
              
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-bold px-2 py-1 rounded bg-zinc-800 text-zinc-300 uppercase tracking-wider">Oferta 01</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Inspeção Técnica Gratuita na Planta</h3>
              
              <p className="text-zinc-400 mb-6 min-h-[80px]">
                O vendedor técnico vai até a fábrica do cliente, realiza a auditoria completa do transportador de graça e entrega um laudo de confiabilidade detalhado.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span>Auditoria in loco sem compromisso</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span>Mapeamento de gargalos e riscos de parada</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span>Entrega de Laudo de Confiabilidade</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Offer 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} 
            className="group relative rounded-3xl bg-[#18181B] border border-emerald-500/30 p-8 shadow-[0_0_40px_-15px_rgba(16,185,129,0.2)]"
          >
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                Game Changer
              </span>
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8 border border-emerald-500/20">
                <ShieldAlert className="h-7 w-7" />
              </div>
              
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-bold px-2 py-1 rounded bg-zinc-800 text-zinc-300 uppercase tracking-wider">Oferta 02</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Teste de Aplicação de 90 Dias (Zero Risco)</h3>
              
              <p className="text-zinc-400 mb-6 min-h-[80px]">
                O cliente instala o equipamento FLEXCO e testa em regime severo por até 90 dias. Se não houver o resultado prometido, a Iparaná retira sem custos.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span>Instalação e setup inicial inclusos</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span>Prova de conceito em ambiente real</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white font-medium bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span>Garantia de retirada 100% gratuita se falhar</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
