import { useState } from 'react';
import { Check, X, Shield, Zap, Cpu, ArrowRight, Calculator, FileText, Globe, CheckCircle2, ChevronRight, Layers, PhoneCall, TrendingUp, Sparkles, AlertTriangle } from 'lucide-react';

export function InteractiveProposalPage() {
  const [selectedPlan, setSelectedPlan] = useState<'essencial' | 'piloto' | 'dominacao'>('piloto');
  const [hoursDowntime, setHoursDowntime] = useState<number>(12);
  const [costPerHour, setCostPerHour] = useState<number>(150000);

  // LCC Loss Calculation
  const totalLoss = hoursDowntime * costPerHour;
  const flexcoSavings = Math.round(totalLoss * 0.9); // 90% savings with cold mechanical splice (30 min vs 12h)

  return (
    <div className="min-h-screen bg-[#05060A] text-zinc-100 font-sans selection:bg-orange-500/30 selection:text-orange-200 py-8 px-4 sm:px-6 lg:px-8">
      
      {/* Background Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-orange-600/10 blur-[140px] pointer-events-none rounded-full"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[300px] bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        
        {/* Header */}
        <header className="bg-[#0B0E17] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-black text-2xl text-white tracking-tight">IDS FLOWS <span className="text-orange-500 font-mono">OS</span></span>
                <span className="text-xs text-zinc-500 font-mono">v3.0</span>
              </div>
              <p className="text-xs text-zinc-400 font-medium">Engenharia de Confiabilidade & Inteligência Comercial B2B</p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3.5 py-1.5 text-xs font-bold text-orange-400 border border-orange-500/30 uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5 text-orange-400" />
              Proposta Executiva • Q4 2026
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white/5 border border-white/5 p-3.5 rounded-2xl">
              <span className="text-zinc-500 font-semibold block uppercase tracking-wider text-[10px] mb-1">Elaborado para</span>
              <strong className="text-white font-bold block text-sm">IPARANÁ Export / Brasil</strong>
            </div>
            <div className="bg-white/5 border border-white/5 p-3.5 rounded-2xl">
              <span className="text-zinc-500 font-semibold block uppercase tracking-wider text-[10px] mb-1">Diretoria & Aprovadores</span>
              <strong className="text-white font-bold block text-sm">Fernando Rodrigues & Lucas Locatelli</strong>
            </div>
            <div className="bg-white/5 border border-white/5 p-3.5 rounded-2xl">
              <span className="text-zinc-500 font-semibold block uppercase tracking-wider text-[10px] mb-1">Período de Validação</span>
              <strong className="text-cyan-400 font-mono block text-sm">120 Dias (Set - Dez/2026)</strong>
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="bg-[#0B0E17] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-400 border border-cyan-500/30 uppercase tracking-wider mb-4">
            <FileText className="h-3.5 w-3.5" />
            01. Resumo Executivo & Diretrizes Aprovadas
          </div>
          <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
            Validação de Demanda & Automação de Vendas FLEXCO®
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Esta proposta formaliza o plano de ação para a validação comercial do portfólio <strong>FLEXCO®</strong> na IPARANÁ Brasil, com expansão para a Importadora Paraná no Paraguai. O objetivo é substituir a venda passiva de peças por uma estratégia ativa de <strong>Garantia de Disponibilidade Operacional (Zero Down-Time Agro)</strong>.
          </p>
        </section>

        {/* 3 Tier Plan Selector */}
        <section className="space-y-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-1">Modalidades de Contratação</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              02. Matriz Comparativa em 3 Planos Táticos
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Selecione uma modalidade abaixo para visualizar os entregáveis detalhados e o investimento correspondente.
            </p>
          </div>

          {/* Tier Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* PLAN 1 */}
            <div 
              onClick={() => setSelectedPlan('essencial')}
              className={`cursor-pointer rounded-3xl p-6 border transition-all flex flex-col justify-between relative ${
                selectedPlan === 'essencial' 
                  ? 'bg-[#0E121E] border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.2)]' 
                  : 'bg-[#0B0E17] border-white/10 hover:border-white/20 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Opção 01</span>
                  {selectedPlan === 'essencial' && <CheckCircle2 className="h-5 w-5 text-cyan-400" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">ESSENCIAL</h3>
                <p className="text-xs text-zinc-400 mb-6">Validação básica de tráfego direto para emergências.</p>

                <div className="bg-black/40 p-4 rounded-2xl border border-white/5 mb-6 text-center">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Setup Inicial</span>
                  <span className="text-lg font-bold text-white font-mono">R$ 3.500,00</span>
                  <div className="text-xs font-bold text-emerald-400 font-mono mt-1">+ R$ 2.000,00 /mês</div>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Landing Page Brasil (versão enxuta)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Google Ads (Fundo de funil emergência)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Formulário Rápido + Botão WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-600 line-through">
                    <X className="h-4 w-4 text-zinc-600 flex-shrink-0" />
                    <span>Calculadora ROI LCC pro Eng. Kevin</span>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-600 line-through">
                    <X className="h-4 w-4 text-zinc-600 flex-shrink-0" />
                    <span>Meta/LinkedIn Ads (Vídeos 240 FPS)</span>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-600 line-through">
                    <X className="h-4 w-4 text-zinc-600 flex-shrink-0" />
                    <span>Módulo ABM Outbound (30 Contas SAP)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-center text-[11px] text-zinc-500">
                Mídia sugerida: R$ 1.200/mês
              </div>
            </div>

            {/* PLAN 2 (RECOMMENDED) */}
            <div 
              onClick={() => setSelectedPlan('piloto')}
              className={`cursor-pointer rounded-3xl p-6 border transition-all flex flex-col justify-between relative ${
                selectedPlan === 'piloto' 
                  ? 'bg-gradient-to-b from-[#14101A] via-[#0E121E] to-[#0A0D15] border-orange-500 shadow-[0_0_40px_rgba(234,88,12,0.3)]' 
                  : 'bg-[#0B0E17] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                Recomendado
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Opção 02</span>
                  {selectedPlan === 'piloto' && <CheckCircle2 className="h-5 w-5 text-orange-400" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">PILOTO GTM</h3>
                <p className="text-xs text-zinc-400 mb-6">Arquitetura completa de validação executiva (120 dias).</p>

                <div className="bg-black/60 p-4 rounded-2xl border border-orange-500/30 mb-6 text-center">
                  <span className="text-[10px] text-orange-300 uppercase tracking-wider block">Setup Inicial (2x R$ 3k)</span>
                  <span className="text-xl font-black text-white font-mono">R$ 6.000,00</span>
                  <div className="text-xs font-bold text-emerald-400 font-mono mt-1">+ R$ 4.500,00 /mês</div>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-200">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Landing Page Brasil + <strong>Calculadora LCC pro Eng. Kevin</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Google Ads + <strong>Meta Ads (Vídeos 240 FPS)</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Módulo ABM Outbound (30 Contas do SAP)</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Rastreamento & Dashboard IDS OS</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Licenças de IA & Softwares inclusos (R$ 500/m)</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-600 line-through">
                    <X className="h-4 w-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                    <span>Série Documental / Podcast em Vídeo</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-orange-500/20 text-center text-[11px] text-orange-300 font-semibold">
                Mídia sugerida: R$ 2.000 a R$ 3.000/mês
              </div>
            </div>

            {/* PLAN 3 */}
            <div 
              onClick={() => setSelectedPlan('dominacao')}
              className={`cursor-pointer rounded-3xl p-6 border transition-all flex flex-col justify-between relative ${
                selectedPlan === 'dominacao' 
                  ? 'bg-[#0E121E] border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)]' 
                  : 'bg-[#0B0E17] border-white/10 hover:border-white/20 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Opção 03</span>
                  {selectedPlan === 'dominacao' && <CheckCircle2 className="h-5 w-5 text-purple-400" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">DOMINAÇÃO</h3>
                <p className="text-xs text-zinc-400 mb-6">Escala total Brasil & Paraguai com produção audiovisual.</p>

                <div className="bg-black/40 p-4 rounded-2xl border border-white/5 mb-6 text-center">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Setup Inicial (2x R$ 4.750)</span>
                  <span className="text-lg font-bold text-white font-mono">R$ 9.500,00</span>
                  <div className="text-xs font-bold text-emerald-400 font-mono mt-1">+ R$ 7.500,00 /mês</div>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-300">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Tudo da Opção 2 (GTM Completo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Tradução e Adaptação Espanhol (Paraguai)</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>ABM Expandido (85 Usinas BR + 45 Silos PY)</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Roteirização de Conteúdo & Docussérie de Campo</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Direção Criativa para Vídeos 3D & Slow-Motion</strong></span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-center text-[11px] text-zinc-500">
                Mídia sugerida: R$ 4.000 a R$ 6.000/mês
              </div>
            </div>

          </div>
        </section>

        {/* Interactive LCC Calculator Component embedded */}
        <section className="bg-[#0B0E17] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/30 uppercase tracking-wider mb-2">
                <Calculator className="h-3.5 w-3.5" />
                03. Calculadora Interativa LCC (Apoio Comercial Eng. Kevin)
              </div>
              <h3 className="text-xl font-bold text-white">Simulador de Economia de Parada de Usina</h3>
            </div>
            <span className="text-xs text-zinc-400 font-mono">Ferramenta Integrada ao Plano 2</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
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
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                  Custo Estimado por Hora Parada (Moenda/Safra): <strong className="text-cyan-400 font-mono">R$ {costPerHour.toLocaleString()} /h</strong>
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

            <div className="bg-black/60 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <span className="text-xs text-red-400 font-semibold uppercase tracking-wider block mb-1">Prejuízo com Vulcanização Tradicional</span>
                <p className="text-2xl font-black text-red-500 font-mono">R$ {totalLoss.toLocaleString()}</p>
              </div>

              <div className="pt-4 border-t border-white/10 mt-4">
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block mb-1">Economia Estimada com Emenda Fria FLEXCO®</span>
                <p className="text-3xl font-black text-emerald-400 font-mono">R$ {flexcoSavings.toLocaleString()}</p>
                <span className="text-[11px] text-zinc-400 mt-1 block">Redução de tempo de parada de {hoursDowntime}h para ~45min.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benchmarking & Price Anchoring Section */}
        <section className="bg-[#0B0E17] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-400 border border-purple-500/30 uppercase tracking-wider mb-2">
            <TrendingUp className="h-3.5 w-3.5" />
            04. Estudo de Ancoragem de Mercado (Benchmarking Tradicional vs IDS OS)
          </div>

          <h3 className="text-xl font-bold text-white">Por que o modelo IDS OS é 10x mais eficiente?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-950/20 border border-red-900/30 p-5 rounded-2xl">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-2">
                ❌ Modelo Tradicional (Equipe Interna ou Agência)
              </span>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li>• 5 Especialistas Dedicados (GTM, Dev, Tráfego, Edição, CRM): <strong>R$ 34.000,00 /mês</strong></li>
                <li>• Encargos Trabalhistas CLT (+60%): <strong>R$ 16.000,00 /mês</strong></li>
                <li>• Custo Total Anual: <strong>~R$ 600.000,00 /ano</strong></li>
                <li>• Tempo de Onboarding: 3 a 6 meses para contratar e alinhar.</li>
              </ul>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-500/30 p-5 rounded-2xl">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                ⚡ Solução IDS Flows OS (Agência de IA)
              </span>
              <ul className="space-y-2 text-xs text-zinc-200">
                <li>• Investimento Mensal Piloto: Apenas <strong>R$ 4.500,00 /mês</strong></li>
                <li>• Setup e Arquitetura: <strong>R$ 6.000,00 (2x R$ 3k)</strong></li>
                <li>• <strong>Economia Anual Direta: Mais de R$ 354.000,00</strong></li>
                <li>• Tempo de Entrega (Speed to Market): <strong>Operação rodando em 14 dias</strong>.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Direct Action Footer CTAs for WhatsApp */}
        <footer className="bg-[#0B0E17] border border-orange-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl text-center space-y-6">
          <div>
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2">Aprovação & Próximos Passos</span>
            <h3 className="text-2xl font-extrabold text-white">Deseja aprovar o Plano 2 (Piloto GTM) agora?</h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl mx-auto">
              Ao confirmar a opção desejada, daremos o start na Sprint 1 com o desenvolvimento da Landing Page Brasil e configuração da Calculadora LCC do Eng. Kevin.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <a
              href={`https://wa.me/5541999999999?text=Olá!%20Aprovamos%20o%20Plano%20${selectedPlan.toUpperCase()}%20do%20Piloto%20FLEXCO.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(234,88,12,0.4)] transition-all flex items-center gap-2"
            >
              <PhoneCall className="h-4 w-4" />
              Aprovar Plano {selectedPlan.toUpperCase()} via WhatsApp
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 text-center text-[11px] text-zinc-500">
            Documento Interativo Executivo • IDS Flows OS × IPARANÁ Export © 2026
          </div>
        </footer>

      </div>
    </div>
  );
}
