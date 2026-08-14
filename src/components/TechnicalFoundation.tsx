import { Activity, ShieldCheck, Wrench, BarChart3, ArrowRight } from 'lucide-react';

export function TechnicalFoundation() {
  return (
    <section id="embasamento" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Embasamento Técnico & Científico</h2>
              <p className="text-zinc-400 text-lg">
                Engenharia de Confiabilidade & TPM aplicada na prática para provar o ROI da tecnologia FLEXCO.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5">
                <div className="text-blue-400 mb-2"><Activity className="h-6 w-6" /></div>
                <h4 className="text-white font-medium mb-1">Metodologia TPM</h4>
                <p className="text-sm text-zinc-400">Total Productive Maintenance focado em zero paradas e zero defeitos.</p>
              </div>
              <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-5">
                <div className="text-blue-400 mb-2"><BarChart3 className="h-6 w-6" /></div>
                <h4 className="text-white font-medium mb-1">Análise LCC</h4>
                <p className="text-sm text-zinc-400">Life Cycle Costing: provando que o mais barato custa mais caro a longo prazo.</p>
              </div>
            </div>

            <div className="bg-blue-900/10 border border-blue-900/30 rounded-xl p-6">
              <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Métricas Industriais Alvo
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="text-zinc-300">Redução de MTBF</span>
                  <span className="text-emerald-400 font-mono text-sm">(Tempo Médio Entre Falhas)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-zinc-300">Otimização de MTTR</span>
                  <span className="text-emerald-400 font-mono text-sm">(Tempo Médio de Reparo)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative rounded-2xl bg-[#0F0F11] border border-zinc-800 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 border border-emerald-500/20 mb-6">
                  <ShieldCheck className="h-4 w-4" />
                  ROI Comprovado em Campo
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">Case: Liberação de Mão de Obra</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold">
                      Antes
                    </div>
                    <div>
                      <p className="text-zinc-400">3 funcionários alocados exclusivamente na limpeza pesada de descarga de correia.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-zinc-700" />
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold">
                      Depois
                    </div>
                    <div>
                      <p className="text-white font-medium">Equipamento FLEXCO instalado.</p>
                      <p className="text-zinc-400 mt-1">Funcionários liberados para funções produtivas, eliminando gargalos operacionais.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold mb-1">Garantia Oficial</p>
                    <p className="text-emerald-400 font-bold text-xl">3 Anos de Cobertura</p>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/FLEXCO_logo.svg/2560px-FLEXCO_logo.svg.png" alt="Flexco" className="h-6 opacity-50 grayscale" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
