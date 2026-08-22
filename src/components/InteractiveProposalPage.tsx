import { useState } from 'react';
import { Check, X, Shield, Zap, Cpu, ArrowRight, Calculator, FileText, Globe, CheckCircle2, ChevronRight, Layers, PhoneCall, TrendingUp } from 'lucide-react';

export function InteractiveProposalPage() {
  const [selectedPlan, setSelectedPlan] = useState<'essencial' | 'piloto' | 'dominacao'>('piloto');
  const [hoursDowntime, setHoursDowntime] = useState<number>(12);
  const [costPerHour, setCostPerHour] = useState<number>(150000);

  // LCC Loss Calculation
  const totalLoss = hoursDowntime * costPerHour;
  const flexcoSavings = Math.round(totalLoss * 0.9); // 90% savings with cold mechanical splice

  return (
    <div className="min-h-screen bg-[#090A0F] text-zinc-100 font-sans py-10 px-4 sm:px-6 lg:px-8 selection:bg-orange-500/20 selection:text-orange-300">

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* HEADER CORPORATIVO */}
        <header className="bg-[#11131B] border border-[#1E2230] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-xl text-white tracking-tight">IDS FLOWS <span className="text-orange-500 font-mono text-sm">OS</span></span>
                <span className="text-xs text-zinc-500 font-mono">v3.0</span>
              </div>
              <p className="text-xs text-zinc-400">Engenharia de Confiabilidade & Inteligência Comercial B2B</p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-400 border border-orange-500/20">
              Proposta Executiva • Q4 2026
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl">
              <span className="text-zinc-500 font-medium block uppercase tracking-wider text-[10px] mb-1">Elaborado para</span>
              <strong className="text-white font-semibold block text-sm">IPARANÁ Export / Brasil</strong>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl">
              <span className="text-zinc-500 font-medium block uppercase tracking-wider text-[10px] mb-1">Diretoria & Aprovadores</span>
              <strong className="text-white font-semibold block text-sm">Fernando Rodrigues & Lucas Locatelli</strong>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl">
              <span className="text-zinc-500 font-medium block uppercase tracking-wider text-[10px] mb-1">Período de Validação</span>
              <strong className="text-cyan-400 font-mono block text-sm">120 Dias (Set - Dez/2026)</strong>
            </div>
          </div>
        </header>

        {/* RESUMO EXECUTIVO */}
        <section className="bg-[#11131B] border border-[#1E2230] rounded-2xl p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-semibold text-zinc-300 mb-4">
            01. Resumo Executivo & Diretrizes
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
            Validação de Demanda & Automação de Vendas FLEXCO®
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Esta proposta formaliza o plano de ação para a validação comercial do portfólio <strong>FLEXCO®</strong> na IPARANÁ Brasil, com posterior expansão para a Importadora Paraná no Paraguai. O objetivo é migrar da venda passiva de balcão para uma estratégia ativa de <strong>Garantia de Disponibilidade Operacional (Zero Down-Time Agro)</strong>.
          </p>
        </section>

        {/* MATRIZ COMPARATIVA DE 3 PLANOS */}
        <section className="space-y-4">
          <div>
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-1">Modalidades de Contratação</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              02. Matriz Comparativa em 3 Planos
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Clique nos cartões abaixo para selecionar o plano ideal para a operação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* PLANO 1 */}
            <div 
              onClick={() => setSelectedPlan('essencial')}
              className={`cursor-pointer rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                selectedPlan === 'essencial' 
                  ? 'bg-[#141724] border-cyan-500 shadow-lg' 
                  : 'bg-[#11131B] border-[#1E2230] opacity-75 hover:opacity-100'
              }`}
            >
              <div>
                <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider block mb-1">Opção 01</span>
                <h3 className="text-lg font-bold text-white mb-1">ESSENCIAL</h3>
                <p className="text-xs text-zinc-400 mb-5">Validação básica de tráfego direto para emergências.</p>

                <div className="bg-zinc-900 p-3.5 rounded-xl border border-zinc-800 mb-5 text-center">
                  <span className="text-[10px] text-zinc-500 uppercase block">Setup Inicial</span>
                  <span className="text-base font-bold text-white font-mono">R$ 3.500,00</span>
                  <div className="text-xs font-semibold text-emerald-400 font-mono mt-1">+ R$ 2.000,00 /mês</div>
                </div>

                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" /> Landing Page Brasil (versão enxuta)</li>
                  <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" /> Google Ads (Fundo de funil emergência)</li>
                  <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" /> Formulário Rápido + WhatsApp</li>
                  <li className="flex items-center gap-2 text-zinc-600 line-through"><X className="h-3.5 w-3.5 text-zinc-600 flex-shrink-0" /> Calculadora ROI LCC pro Eng. Kevin</li>
                  <li className="flex items-center gap-2 text-zinc-600 line-through"><X className="h-3.5 w-3.5 text-zinc-600 flex-shrink-0" /> Meta/LinkedIn Ads (Vídeos 240 FPS)</li>
                  <li className="flex items-center gap-2 text-zinc-600 line-through"><X className="h-3.5 w-3.5 text-zinc-600 flex-shrink-0" /> Módulo ABM 30 Contas SAP</li>
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t border-zinc-800/60 text-center text-[10px] text-zinc-500">Mídia sugerida: R$ 1.200/mês</div>
            </div>

            {/* PLANO 2 (RECOMENDADO) */}
            <div 
              onClick={() => setSelectedPlan('piloto')}
              className={`cursor-pointer rounded-2xl p-5 border transition-all flex flex-col justify-between relative shadow-lg ${
                selectedPlan === 'piloto' 
                  ? 'bg-[#141724] border-orange-500' 
                  : 'bg-[#11131B] border-[#1E2230]'
              }`}
            >
              <div className="absolute -top-3 right-4 bg-orange-600 text-white font-bold text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                Recomendado
              </div>

              <div>
                <span className="text-[10px] font-semibold text-orange-400 uppercase tracking-wider block mb-1">Opção 02</span>
                <h3 className="text-lg font-bold text-white mb-1">PILOTO GTM</h3>
                <p className="text-xs text-zinc-400 mb-5">Arquitetura completa de validação executiva (120 dias).</p>

                <div className="bg-zinc-900 p-3.5 rounded-xl border border-orange-500/30 mb-5 text-center">
                  <span className="text-[10px] text-orange-300 uppercase block">Setup Inicial (2x R$ 3k)</span>
                  <span className="text-lg font-bold text-white font-mono">R$ 6.000,00</span>
                  <div className="text-xs font-semibold text-emerald-400 font-mono mt-1">+ R$ 4.500,00 /mês</div>
                </div>

                <ul className="space-y-2 text-xs text-zinc-200">
                  <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" /> Landing Page + <strong>Calculadora LCC Kevin</strong></li>
                  <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" /> Google + <strong>Meta Ads (Vídeos 240 FPS)</strong></li>
                  <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" /> <strong>Módulo ABM (30 Contas do SAP)</strong></li>
                  <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" /> <strong>Rastreamento & Dashboard IDS OS</strong></li>
                  <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" /> <strong>Licenças IA inclusas (R$ 500/m)</strong></li>
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t border-orange-500/20 text-center text-[10px] text-orange-300 font-medium">Mídia sugerida: R$ 2.000 a R$ 3.000/mês</div>
            </div>

            {/* PLANO 3 */}
            <div 
              onClick={() => setSelectedPlan('dominacao')}
              className={`cursor-pointer rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                selectedPlan === 'dominacao' 
                  ? 'bg-[#141724] border-purple-500 shadow-lg' 
                  : 'bg-[#11131B] border-[#1E2230] opacity-75 hover:opacity-100'
              }`}
            >
              <div>
                <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider block mb-1">Opção 03</span>
                <h3 className="text-lg font-bold text-white mb-1">DOMINAÇÃO</h3>
                <p className="text-xs text-zinc-400 mb-5">Escala total Brasil & Paraguai com audiovisual.</p>

                <div className="bg-zinc-900 p-3.5 rounded-xl border border-zinc-800 mb-5 text-center">
                  <span className="text-[10px] text-zinc-500 uppercase block">Setup Inicial (2x R$ 4.750)</span>
                  <span className="text-base font-bold text-white font-mono">R$ 9.500,00</span>
                  <div className="text-xs font-semibold text-emerald-400 font-mono mt-1">+ R$ 7.500,00 /mês</div>
                </div>

                <ul className="space-y-2 text-xs text-zinc-300">
                  <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" /> Tudo da Opção 2 (GTM Completo)</li>
                  <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" /> <strong>Adaptação Espanhol (Paraguai)</strong></li>
                  <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" /> <strong>ABM Expandido (85 usinas + 45 silos)</strong></li>
                  <li className="flex items-start gap-2"><Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" /> <strong>Roteiro Docussérie & Podcast</strong></li>
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t border-zinc-800/60 text-center text-[10px] text-zinc-500">Mídia sugerida: R$ 4.000 a R$ 6.000/mês</div>
            </div>

          </div>
        </section>

        {/* CALCULADORA INTERATIVA LCC */}
        <section className="bg-[#11131B] border border-[#1E2230] rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-semibold text-zinc-300 mb-1">
                03. Calculadora LCC (Apoio Comercial Eng. Kevin)
              </div>
              <h3 className="text-lg font-bold text-white">Simulador de Economia de Parada de Usina</h3>
            </div>
            <span className="text-xs text-zinc-500 font-mono">Integrado ao Plano 2</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider block mb-2">
                  Horas de Parada por Vulcanização Quente: <strong className="text-orange-400 font-mono">{hoursDowntime} Horas</strong>
                </label>
                <input 
                  type="range" 
                  min="2" 
                  max="24" 
                  value={hoursDowntime} 
                  onChange={(e) => setHoursDowntime(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider block mb-2">
                  Custo Estimado por Hora Parada (Moenda): <strong className="text-cyan-400 font-mono">R$ {costPerHour.toLocaleString()} /h</strong>
                </label>
                <input 
                  type="range" 
                  min="50000" 
                  max="300000" 
                  step="10000"
                  value={costPerHour} 
                  onChange={(e) => setCostPerHour(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-xs text-red-400 font-medium uppercase tracking-wider block mb-1">Prejuízo com Vulcanização Tradicional</span>
                <p className="text-xl font-bold text-red-400 font-mono">R$ {totalLoss.toLocaleString()}</p>
              </div>

              <div className="pt-3 border-t border-zinc-800 mt-3">
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block mb-1">Economia Estimada com Emenda Fria FLEXCO®</span>
                <p className="text-2xl font-bold text-emerald-400 font-mono">R$ {flexcoSavings.toLocaleString()}</p>
                <span className="text-[10px] text-zinc-500 mt-1 block">Redução de tempo de parada de {hoursDowntime}h para ~45min.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ESTUDO DE ANCORAGEM */}
        <section className="bg-[#11131B] border border-[#1E2230] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-semibold text-zinc-300 mb-1">
            04. Estudo de Ancoragem de Mercado (Benchmarking Tradicional vs IDS OS)
          </div>

          <h3 className="text-lg font-bold text-white">Comparativo de Eficiência & Custo de Operação</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-2">
                Modelo Tradicional (Equipe Interna / Agência)
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li>• 5 Especialistas Dedicados (GTM, Dev, Tráfego, Edição, CRM): <strong>R$ 34.000 /mês</strong></li>
                <li>• Encargos Trabalhistas CLT (+60%): <strong>R$ 16.000 /mês</strong></li>
                <li>• Custo Total Anual: <strong>~R$ 600.000 /ano</strong></li>
                <li>• Tempo de Onboarding: 3 a 6 meses para contratar e treinar.</li>
              </ul>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                Solução IDS Flows OS (Agência de IA)
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-200">
                <li>• Investimento Mensal Piloto: Apenas <strong>R$ 4.500 /mês</strong></li>
                <li>• Setup e Arquitetura: <strong>R$ 6.000 (2x R$ 3k)</strong></li>
                <li>• <strong>Economia Anual Direta: Mais de R$ 354.000 /ano</strong></li>
                <li>• Speed to Market: <strong>Operação rodando em 14 dias</strong>.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <footer className="bg-[#11131B] border border-orange-500/30 rounded-2xl p-6 sm:p-8 text-center space-y-4">
          <div>
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-1">Aprovação de Projeto</span>
            <h3 className="text-xl font-bold text-white">Confirmar Aprovação com a Diretoria</h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-md mx-auto">
              Ao confirmar a opção desejada, daremos o start na Sprint 1 com o desenvolvimento da Landing Page Brasil e configuração da Calculadora LCC.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <a
              href={`https://wa.me/5541999999999?text=Olá!%20Aprovamos%20o%20Plano%20${selectedPlan.toUpperCase()}%20do%20Piloto%20FLEXCO.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Aprovar Plano {selectedPlan.toUpperCase()} via WhatsApp
            </a>
          </div>

          <div className="pt-4 border-t border-zinc-800 text-center text-[10px] text-zinc-500">
            Documento Executivo • IDS Flows OS × IPARANÁ Export © 2026
          </div>
        </footer>

      </div>
    </div>
  );
}
