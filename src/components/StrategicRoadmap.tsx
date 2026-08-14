import { 
  Target, Rocket, Activity, Network, Briefcase, 
  Search, Video, Handshake, BarChart2, CheckCircle2, 
  Settings2, Users, ArrowDown, GitBranch
} from 'lucide-react';

export function StrategicRoadmap() {
  const Connector = () => (
    <div className="w-px h-8 md:h-12 bg-gradient-to-b from-zinc-700 to-zinc-600 mx-auto relative">
      <ArrowDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 text-zinc-500" />
    </div>
  );

  return (
    <section id="roadmap" className="py-24 bg-[#0F0F11]">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Masterplan & Fluxo de Execução</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            O mapa tático de ponta a ponta: do diagnóstico inicial à escala do Squad de Elite, detalhando a árvore de decisão de Go-To-Market.
          </p>
        </div>

        <div className="flex flex-col w-full">
          {/* Node 1: Diagnóstico */}
          <div className="w-full max-w-2xl mx-auto bg-[#18181B] border border-zinc-800 rounded-2xl p-6 md:p-8 relative z-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 border border-zinc-700 flex-shrink-0">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1 block">Diagnóstico & Objetivo Inicial</span>
                <h3 className="text-xl font-bold text-white mb-2">IDS HUB × IPARANÁ</h3>
                <ul className="text-sm text-zinc-400 space-y-1">
                  <li>• <strong className="text-zinc-300">Linha FLEXCO</strong> (Equipamentos de Correia)</li>
                  <li>• <strong className="text-zinc-300">Estoque Parado</strong> | Mercados: BR & PY | Foco: Agro/Usinas</li>
                </ul>
              </div>
            </div>
          </div>

          <Connector />

          {/* Node 2: Etapa 1 */}
          <div className="w-full max-w-2xl mx-auto bg-blue-900/10 border border-blue-900/30 rounded-2xl p-6 relative z-10 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1 block">Etapa 1 (Agora)</span>
                <h3 className="text-lg font-bold text-white">O Piloto de Inteligência</h3>
                <p className="text-sm text-blue-200/70 mt-1">
                  • Projeto Estratégico de Inteligência GTM & Arquitetura IDS Flows OS
                </p>
              </div>
            </div>
          </div>

          <Connector />

          {/* Node 3: Etapa 2 */}
          <div className="w-full max-w-2xl mx-auto bg-emerald-900/10 border border-emerald-900/30 rounded-2xl p-6 relative z-10 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-1 block">Etapa 2</span>
                <h3 className="text-lg font-bold text-white">Posicionamento & Engenharia de Valor</h3>
                <ul className="text-sm text-emerald-200/70 mt-2 space-y-1">
                  <li>• Conceito <strong>"Zero Down-Time Agro"</strong> (Prevenção de Parada)</li>
                  <li>• Análise LCC/TPM: MTBF + <strong>Economia de 3 Funcionários</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <Connector />

          {/* Node 4 Header: GTM */}
          <div className="w-full max-w-2xl mx-auto bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 relative z-10 text-center">
            <h3 className="text-white font-bold flex items-center justify-center gap-2">
              <GitBranch className="w-5 h-5 text-amber-500" />
              Árvore de Decisão: Estratégias de GTM
            </h3>
          </div>

          {/* Desktop Branching Lines */}
          <div className="hidden md:block relative w-full h-12">
            <div className="absolute top-0 left-[16.66%] right-[16.66%] border-t border-zinc-700"></div>
            <div className="absolute top-0 left-[16.66%] w-px h-full bg-zinc-700">
              <ArrowDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 text-zinc-500" />
            </div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-zinc-700 -translate-x-[0.5px]">
              <ArrowDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 text-zinc-500" />
            </div>
            <div className="absolute top-0 right-[16.66%] w-px h-full bg-zinc-700">
              <ArrowDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 text-zinc-500" />
            </div>
          </div>
          <div className="md:hidden w-px h-8 bg-zinc-700 mx-auto"></div>

          {/* 3 Columns GTM */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-10">
            {/* Caminho A */}
            <div className="bg-[#18181B] border border-blue-500/30 rounded-2xl p-5 hover:border-blue-500/60 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-wider block mb-1">Caminho A</span>
              <h4 className="text-white font-bold mb-3">ABM Outbound</h4>
              <p className="text-xs text-zinc-500 mb-3">(Grandes Usinas/Contas)</p>
              <ul className="text-sm text-zinc-400 space-y-2">
                <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600 mt-2"></div> Mapeamento ICP BR/PY</li>
                <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600 mt-2"></div> Abordagem Cirúrgica</li>
                <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600 mt-2"></div> Foco: Gerente Manutenção</li>
              </ul>
            </div>

            {/* Caminho B */}
            <div className="bg-[#18181B] border border-amber-500/30 rounded-2xl p-5 hover:border-amber-500/60 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
                <Search className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block mb-1">Caminho B</span>
              <h4 className="text-white font-bold mb-3">Inbound Ads</h4>
              <p className="text-xs text-zinc-500 mb-3">(Demanda Direta Google)</p>
              <ul className="text-sm text-zinc-400 space-y-2">
                <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600 mt-2"></div> Landing Page Alta Conv.</li>
                <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600 mt-2"></div> Anúncios Focados Agro</li>
                <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600 mt-2"></div> Oferta: Inspeção Grátis</li>
              </ul>
            </div>

            {/* Caminho C */}
            <div className="bg-[#18181B] border border-purple-500/30 rounded-2xl p-5 hover:border-purple-500/60 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
                <Video className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-purple-500 uppercase tracking-wider block mb-1">Caminho C</span>
              <h4 className="text-white font-bold mb-3">Conteúdo</h4>
              <p className="text-xs text-zinc-500 mb-3">(Infotainment & Mídia)</p>
              <ul className="text-sm text-zinc-400 space-y-2">
                <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600 mt-2"></div> Testes Extremos 240fps</li>
                <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600 mt-2"></div> Docuseries em Campo</li>
                <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600 mt-2"></div> Visualização 3D/CGI</li>
              </ul>
            </div>
          </div>

          {/* Merging Lines */}
          <div className="hidden md:block relative w-full h-12 mt-2">
            <div className="absolute bottom-0 left-[16.66%] right-[16.66%] border-b border-zinc-700"></div>
            <div className="absolute top-0 left-[16.66%] w-px h-full bg-zinc-700"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-zinc-700 -translate-x-[0.5px]"></div>
            <div className="absolute top-0 right-[16.66%] w-px h-full bg-zinc-700"></div>
          </div>
          <div className="hidden md:block w-px h-8 bg-zinc-700 mx-auto relative">
             <ArrowDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 text-zinc-500" />
          </div>
          <div className="md:hidden w-px h-8 bg-zinc-700 mx-auto relative">
             <ArrowDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 text-zinc-500" />
          </div>

          {/* Node 5: Etapa 3 */}
          <div className="w-full max-w-2xl mx-auto bg-amber-900/10 border border-amber-900/30 rounded-2xl p-6 relative z-10 shadow-lg mt-2 md:mt-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Handshake className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-1 block">Etapa 3</span>
                <h3 className="text-lg font-bold text-white mb-2">Conversão & Trapearia Comercial</h3>
                <ul className="text-sm text-amber-200/70 space-y-1">
                  <li>• Oferta 1: <strong>Inspeção Técnica Gratuita na Planta</strong></li>
                  <li>• Oferta 2: <strong>Teste de Aplicação 90 Dias (Zero Risco)</strong></li>
                  <li>• Atendimento & Venda Técnica via WhatsApp/CRM</li>
                </ul>
              </div>
            </div>
          </div>

          <Connector />

          {/* Node 6: Etapa 4 */}
          <div className="w-full max-w-2xl mx-auto bg-zinc-800/80 border border-zinc-700 rounded-xl p-4 relative z-10 text-center">
            <h3 className="text-white font-bold flex items-center justify-center gap-2">
              <BarChart2 className="w-5 h-5 text-blue-400" />
              Etapa 4: Avaliação de Resultados & ROI
            </h3>
          </div>

          {/* Desktop Branching 2 Columns */}
          <div className="hidden md:block relative w-full h-12">
            <div className="absolute top-0 left-[25%] right-[25%] border-t border-zinc-700"></div>
            <div className="absolute top-0 left-[25%] w-px h-full bg-zinc-700">
              <ArrowDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 text-zinc-500" />
            </div>
            <div className="absolute top-0 right-[25%] w-px h-full bg-zinc-700">
              <ArrowDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 text-zinc-500" />
            </div>
          </div>
          <div className="md:hidden w-px h-8 bg-zinc-700 mx-auto"></div>

          {/* 2 Columns Validation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto relative z-10">
            {/* Sucesso */}
            <div className="bg-emerald-900/10 border border-emerald-500/30 rounded-2xl p-5">
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-3" />
                <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Máquina Validada</h4>
                <ul className="text-sm text-emerald-200/70 space-y-2 text-left w-full">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Vendas de pacotes fechadas</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Estoque movimentado no BR/PY</li>
                </ul>
              </div>
            </div>

            {/* Ajuste */}
            <div className="bg-red-900/10 border border-red-500/30 rounded-2xl p-5">
              <div className="flex flex-col items-center text-center">
                <Settings2 className="w-8 h-8 text-red-500 mb-3" />
                <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Ajuste de Gargalo</h4>
                <ul className="text-sm text-red-200/70 space-y-2 text-left w-full">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Recalibragem da oferta</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Troca do canal de mídia</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Merging from 2 Columns */}
          <div className="hidden md:block relative w-full max-w-4xl mx-auto h-12 mt-2">
            <div className="absolute bottom-0 left-[25%] right-[25%] border-b border-zinc-700"></div>
            <div className="absolute top-0 left-[25%] w-px h-full bg-zinc-700"></div>
            <div className="absolute top-0 right-[25%] w-px h-full bg-zinc-700"></div>
            <div className="absolute bottom-0 left-1/2 w-px h-8 bg-zinc-700 translate-y-full -translate-x-[0.5px]">
               <ArrowDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 text-zinc-500" />
            </div>
          </div>
          <div className="md:hidden w-px h-8 bg-zinc-700 mx-auto relative">
             <ArrowDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 text-zinc-500" />
          </div>
          <div className="hidden md:block w-full h-8"></div> {/* Spacer for desktop bottom line */}

          {/* Node 7: Etapa 5 */}
          <div className="w-full max-w-2xl mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/40 rounded-2xl p-6 relative z-10 shadow-lg mt-2 md:mt-0">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 border border-blue-500/30">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 block">Etapa 5 (Pós-Piloto)</span>
                <h3 className="text-xl font-bold text-white mb-3">Escala & Squad de Elite</h3>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span> 
                    <span>Acionamento de Squad Modular (Growth, UX, Tech, Vídeo) alocado conforme o tamanho do projeto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span> 
                    <span>Integração de Hub de Parceiros (ex: Agência Industrial de Maringá)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span> 
                    <span className="font-semibold text-white">Expansão do modelo para o RESTANTE DO PORTFÓLIO</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
