import { Rocket, Users, ChevronRight, Check } from 'lucide-react';

export function ExecutionArchitecture() {
  return (
    <section id="arquitetura" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Arquitetura de Execução & Modelo de Squad</h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Da validação rápida à escala. O modelo operacional IDS HUB garante execução precisa com alocação eficiente de recursos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Phase 1 */}
          <div className="relative rounded-3xl bg-[#18181B] border border-zinc-800 p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Rocket className="h-6 w-6" />
              </div>
              <div>
                <span className="text-blue-500 font-bold text-sm tracking-wider uppercase block">Fase 1 (Agora)</span>
                <h3 className="text-2xl font-bold text-white">Projeto Piloto Enxuto</h3>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold mb-2">Foco Operacional</p>
                <p className="text-zinc-300">Validação de demanda, criação da Landing Page de Alta Conversão, integração dos vídeos existentes, estratégia de tração e triagem no WhatsApp Comercial.</p>
              </div>
              
              <div className="bg-[#0A0A0E] rounded-xl p-4 border border-white/10">
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold mb-2">Capacidade & Arquitetura Alocada</p>
                <p className="text-white font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Projeto Estratégico de Inteligência GTM & Arquitetura IDS Flows OS
                </p>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#18181B] to-zinc-900 border border-zinc-800 p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <span className="text-amber-500 font-bold text-sm tracking-wider uppercase block">Fase 2 (Escala)</span>
                <h3 className="text-2xl font-bold text-white">Montagem do Squad de Elite</h3>
              </div>
            </div>

            <p className="text-zinc-300 mb-6">
              Estrutura modular montada sob demanda (Growth, Tech, Audiovisual), dimensionada exatamente para o tamanho do projeto e expansão do portfólio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Arquitetura Modular On-Demand', 'Hub Parceiro (Agência Indústria Maringá)', 'Especialistas alocados por tração', 'Escala flexível (Vídeo, Mídia, Tech)'].map((role, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-zinc-400 bg-zinc-900/50 py-2 px-3 rounded-lg border border-zinc-800/50">
                  <Check className="h-4 w-4 text-emerald-500" />
                  {role}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Cost Division */}
        <div className="bg-[#18181B] border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white mb-2">Divisão de Custos Clara</h4>
            <p className="text-zinc-400">
              Mão de obra operacional, equipe audiovisual, ferramentas e verba de anúncios são custeadas pelo budget da Iparaná.
            </p>
          </div>
          <div className="hidden md:block w-px h-16 bg-zinc-800"></div>
          <div className="flex-1">
            <p className="text-zinc-400">
              O fee da IDS cobre exclusivamente a <strong className="text-white">Direção e Arquitetura do Ecossistema</strong>, garantindo alinhamento estratégico e alta performance.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
