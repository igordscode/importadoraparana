import React from 'react';
import { Award, ShieldCheck, Building2, CheckCircle2, FileText, ArrowRight, Zap, Target, TrendingUp, Users, Calendar, PhoneCall } from 'lucide-react';

export default function ProjectProposalView({ onOpenInspectionModal, onSwitchToLanding }) {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-24 font-sans">
      
      {/* Proposal Top Banner */}
      <div className="bg-gradient-to-r from-ip-navy via-blue-950 to-slate-950 border-b border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              PROPOSTA EXECUTIVA DE PROJETO
            </span>
            <span className="text-xs text-slate-400 font-semibold bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
              IDS Hub × Importadora Paraná
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Programa Zero Down-Time Agro: Estratégia de Tração Comercial para a Linha FLEXCO®
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Documento de alinhamento estratégico, diagnóstico de oportunidade e proposta comercial do piloto de 30 dias elaborado pela <strong className="text-white">IDS Hub</strong> para o cliente <strong className="text-amber-400">Fernando Libos (Iparaná Export)</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-semibold">
            <span className="flex items-center space-x-1.5">
              <Building2 className="w-4 h-4 text-ip-blue" />
              <span>Cliente: Iparaná Export / Importadora Paraná</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>+30 Anos deTradição • Great Place to Work®</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Mercados: Brasil 🇧🇷 & Paraguai 🇵🇾</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Section 1: Diagnóstico e O que Entendemos */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-ip-blue/20 border border-ip-blue/40 flex items-center justify-center text-ip-blue">
              <Target className="w-6 h-6 text-ip-blue" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">DIAGNÓSTICO INICIAL</span>
              <h2 className="text-2xl font-black text-white">1. O Que Entendemos do Negócio</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="font-bold text-base text-amber-400 flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Autoridade Institucional Inquestionável</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <li>• <strong>+30 anos de atuação</strong> no mercado do Paraguai e América Latina.</li>
                <li>• <strong>+15 marcas globais de engenharia</strong> (Flexco, Continental, WEG/Cestari, Eriez, ABB, Chesterton, etc.).</li>
                <li>• <strong>+70 colaboradores diretos</strong> e certificação <strong>Great Place to Work® 2024-2025</strong>.</li>
                <li>• Unidades estratégicas em <strong>Ciudad del Este</strong> (Casa Central), <strong>Asunción</strong> (Sucursal) e <strong>Foz do Iguaçu</strong> (Base Brasil).</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/30 space-y-3">
              <h4 className="font-bold text-base text-amber-400 flex items-center space-x-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>O Desafio Estratégico do Estoque</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                A Iparaná possui um <strong>estoque imobilizado de alta tecnologia FLEXCO®</strong> no Brasil e Paraguai. O modelo tradicional de vendas (envio de catálogos em PDF ou cotações reativas) não transmite o valor real e sofre com a briga por preços.
              </p>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-[11px] text-amber-300 font-medium">
                💡 <strong>Solução IDS Hub:</strong> Transitar da "Venda de Peças de Borracha" para a "Servitização & Engenharia de Confiabilidade (Zero Down-Time)".
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: A Tese Zero Down-Time Agro */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <TrendingUp className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">MECANISMO DE VALOR</span>
              <h2 className="text-2xl font-black text-white">2. A Tese do "Programa Zero Down-Time Agro"</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase">A. LCC & TPM (Confiabilidade)</span>
              <h4 className="font-bold text-sm text-white">Prevenção do Prejuízo de Parada</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Usinas e cerealistas não compram especificações isoladas; compram a garantia de que a esteira não vai quebrar no pico da safra de milho/soja.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase">B. Case de Redução de OPEX</span>
              <h4 className="font-bold text-sm text-white">Eliminação de Limpeza Pesada</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Case comprovado onde a raspagem e vedação FLEXCO® liberou 3 funcionários da varrição contínua para funções produtivas.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase">C. 2 Ofertas Irrecusáveis</span>
              <h4 className="font-bold text-sm text-white">Risk Reversal Total</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                1. Inspeção Gratuita na Planta + 2. Teste de 90 Dias com garantia de devolução caso não atinja o desempenho combinado.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Cronograma de 30 Dias (Sprint de Piloto) */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Calendar className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">PLANO DE EXECUÇÃO</span>
              <h2 className="text-2xl font-black text-white">3. Cronograma da Sprint de 30 Dias (~10h/semana)</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">SEMANA 1</span>
              <h4 className="font-bold text-sm text-white">Arquitetura & LP B2B</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Estruturação da tese Zero Down-Time, copywriting de conversão e publicação da Landing Page bilíngue oficial.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-black text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">SEMANA 2</span>
              <h4 className="font-bold text-sm text-white">Curadoria de Mídia & CRM</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Otimização do acervo de 13 vídeos reais de campo (Inpasa / Usinas) e configuração do funil no CRM ClickUp.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">SEMANA 3</span>
              <h4 className="font-bold text-sm text-white">Ativação de Anúncios</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Lançamento de campanhas no Google Search (demandas diretas) e LinkedIn Ads (gerentes de manutenção e diretores).
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-black text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">SEMANA 4</span>
              <h4 className="font-bold text-sm text-white">Avaliação & Escala</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Análise do pipeline de orçamentos gerados, medição do ROI e elaboração do plano de escala para as demais 14 marcas.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Proposta Comercial & Investimento */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <FileText className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">PROPOSTA COMERCIAL</span>
              <h2 className="text-2xl font-black text-white">4. Opções de Investimento para o Projeto Piloto</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Option 1 */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div className="space-y-4">
                <span className="text-xs font-extrabold text-slate-400 uppercase">OPÇÃO 1 — ENTRADA</span>
                <h3 className="text-xl font-bold text-white">Tração & Landing Page</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Landing Page FLEXCO® de conversão + Estruturação das campanhas de tráfego (Google Search e LinkedIn).
                </p>
                <div className="pt-2">
                  <span className="text-xs text-slate-500 block uppercase">Investimento (Fee Único):</span>
                  <span className="text-xl font-black text-amber-400">R$ 3.500,00 a R$ 5.000,00</span>
                </div>
              </div>
            </div>

            {/* Option 2 (Recomendada) */}
            <div className="bg-slate-950 p-6 rounded-2xl border-2 border-amber-500/50 flex flex-col justify-between relative shadow-2xl">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                RECOMENDADA PELA IDS HUB
              </div>
              <div className="space-y-4 pt-2">
                <span className="text-xs font-extrabold text-amber-400 uppercase">OPÇÃO 2 — INTEGRADA</span>
                <h3 className="text-xl font-bold text-white">LP + Funil CRM + WhatsApp</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Landing Page + Funil de Triagem no ClickUp CRM + Régua de Automação no WhatsApp para os vendedores da Iparaná.
                </p>
                <div className="pt-2">
                  <span className="text-xs text-slate-500 block uppercase">Investimento (Fee Único):</span>
                  <span className="text-2xl font-black text-amber-400">R$ 6.000,00 a R$ 8.500,00</span>
                </div>
              </div>
            </div>

            {/* Option 3 */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div className="space-y-4">
                <span className="text-xs font-extrabold text-purple-400 uppercase">OPÇÃO 3 — COMPLETA</span>
                <h3 className="text-xl font-bold text-white">Hub + Direção de Squad</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Escopo completo com LP, CRM, Triagem por IA e Direção Estratégica do Squad (Tráfego Agro + ABM + UI/UX).
                </p>
                <div className="pt-2">
                  <span className="text-xs text-slate-500 block uppercase">Investimento (Fee Único):</span>
                  <span className="text-xl font-black text-amber-400">R$ 9.000,00 a R$ 12.000,00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Ações Imadiatas */}
        <section className="bg-gradient-to-r from-ip-navy via-slate-900 to-ip-navy border border-slate-800 p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-left">
            <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">PRÓXIMO PASSO</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Visualizar a Landing Page de Conversão Criada</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Clique no botão ao lado para alternar para o modo Landing Page e visualizar a página final pronta que será apresentada aos clientes do agronegócio.
            </p>
          </div>

          <button
            onClick={onSwitchToLanding}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm px-8 py-4 rounded-xl shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center space-x-3 whitespace-nowrap transform hover:-translate-y-0.5"
          >
            <span>Ver Landing Page no Ar</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>

      </div>
    </div>
  );
}
