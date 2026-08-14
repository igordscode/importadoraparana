import { useState, useEffect } from 'react';
import { Printer, Edit3, X, Save, Check, HelpCircle, MessageSquare, Copy, ShieldAlert, FileText, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function MeetingControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'notes' | 'script' | 'objections'>('script');
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Load notes from local storage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('ids_meeting_notes');
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('ids_meeting_notes', notes);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const scripts = [
    {
      title: '1. Script de Abertura & Visão de Valor',
      text: 'O objetivo hoje é definir como vamos destravar o estoque parado da linha FLEXCO no Brasil e Paraguai nos próximos 30-60 dias. Não viemos vender grampos ou raspadores por catálogo PDF, mas vender Zero Down-Time (Zero Parada Não Planejada) para usinas e grandes grupos agrícolas.'
    },
    {
      title: '2. Pergunta de Diagnóstico de Estoque',
      text: 'Qual é o valor financeiro total imobilizado hoje na linha FLEXCO? Quais são os SKUs parados e onde estão fisicamente armazenados (Brasil vs Paraguai)? Existe flexibilidade de preço para liquidação ou lote mínimo?'
    },
    {
      title: '3. Pergunta de Capacidade Operacional de Campo',
      text: 'Se gerarmos 10 solicitações de Inspeção Técnica Gratuita em usinas nesta semana, a IPARANÁ tem equipe técnica pronta para ir à planta fazer a auditoria e o laudo?'
    }
  ];

  const objections = [
    {
      title: 'Objeção 1: "Grampo/Raspador FLEXCO é mais caro que o paralelo"',
      answer: 'Ele é mais caro na compra da peça isolada, mas é 70% mais barato no Custo Total de Operação (LCC). Se o grampo comum quebra em 2 semanas e para a fábrica por 4h (R$ 80k/h de prejuízo), o FLEXCO dura meses e a troca leva 20 min. O custo não é a peça, é a hora parada da usina.'
    },
    {
      title: 'Objeção 2: "Nossos clientes já têm fornecedores homologados há anos"',
      answer: 'Nós não queremos substituir o fornecedor de rotina imediatamente. Entramos como o Kit de Emergência Zero Parada e através da Inspeção Gratuita. Quando a emergência acontece no pico da safra e o fornecedor deles demora 6h para chegar, a solução FLEXCO salva a moagem.'
    },
    {
      title: 'Objeção 3: "O mercado do Paraguai compra tecnologia premium?"',
      answer: 'O agro do Paraguai (Alto Paraná, Itapúa, Chaco) é altíssimamente mecanizado e profissionalizado. Cooperativas e grandes silos não aceitam parada em safra. A proposta de Zero Down-Time é o argumento exato que eles compram.'
    }
  ];

  return (
    <>
      {/* Floating Action Buttons - Hidden during print */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col sm:flex-row gap-3 print:hidden">
        <button
          onClick={handlePrint}
          className="group flex items-center justify-center gap-2 bg-[#0F0F12] hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-full p-3.5 sm:px-5 sm:py-3 shadow-2xl border border-white/10 transition-all"
          title="Exportar Apresentação para PDF"
        >
          <Printer className="w-5 h-5 text-zinc-400 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">Exportar PDF</span>
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-full p-3.5 sm:px-6 sm:py-3 shadow-[0_0_30px_rgba(234,88,12,0.4)] border border-orange-400 transition-all"
          title="Assistente de Reunião & Script Live"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-xs uppercase tracking-wider">Copiloto da Reunião</span>
        </button>
      </div>

      {/* Slide-over Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 450 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 450 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-[#0A0A0E]/95 backdrop-blur-2xl border-l border-white/10 z-[60] shadow-2xl flex flex-col print:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#0F0F14]">
              <div>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest block">IDS HUB Copilot</span>
                <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  Guia Tático de Campo
                </h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-white/10 bg-[#0A0A0C] p-2 gap-1">
              <button
                onClick={() => setActiveTab('script')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'script'
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" /> Script & Roteiro
              </button>
              <button
                onClick={() => setActiveTab('objections')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'objections'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" /> Objeções
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'notes'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" /> Anotações
              </button>
            </div>

            {/* Tab Body */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4 custom-scrollbar">
              
              {/* Tab 1: Script */}
              {activeTab === 'script' && (
                <div className="space-y-4">
                  <p className="text-xs text-zinc-400">
                    Use estes trechos durante a fala para manter o controle da reunião e direcionar a pauta para a Engenharia de Valor.
                  </p>
                  {scripts.map((item, idx) => (
                    <div key={idx} className="bg-[#121216] border border-white/10 rounded-2xl p-4 space-y-2">
                      <h4 className="text-xs font-bold text-orange-400 uppercase tracking-wider">{item.title}</h4>
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">{item.text}</p>
                      <button
                        onClick={() => copyToClipboard(item.text, idx)}
                        className="text-[11px] font-semibold text-zinc-400 hover:text-white flex items-center gap-1 mt-2 pt-2 border-t border-white/5 transition-colors"
                      >
                        {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedIndex === idx ? 'Copiado para área de transferência!' : 'Copiar texto para área de transferência'}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Objections */}
              {activeTab === 'objections' && (
                <div className="space-y-4">
                  <p className="text-xs text-zinc-400">
                    Respostas prontas para matar as 3 principais objeções comerciais da IPARANÁ na reunião.
                  </p>
                  {objections.map((item, idx) => (
                    <div key={idx} className="bg-[#121216] border border-cyan-500/20 rounded-2xl p-4 space-y-2">
                      <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{item.title}</h4>
                      <div className="p-3 bg-black/60 rounded-xl border border-white/5 text-xs text-zinc-200 leading-relaxed">
                        <strong className="text-emerald-400 block mb-1">Resposta Matadora:</strong>
                        {item.answer}
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.answer, idx + 10)}
                        className="text-[11px] font-semibold text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        {copiedIndex === idx + 10 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedIndex === idx + 10 ? 'Copiado!' : 'Copiar Resposta'}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Notes */}
              {activeTab === 'notes' && (
                <div className="h-full flex flex-col gap-3">
                  <p className="text-xs text-zinc-400">
                    Anote valores de estoque, SKUs parados e decisões da reunião. Salvo automaticamente no navegador.
                  </p>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="> Valor total imobilizado citado...&#10;> SKUs prioritários parados...&#10;> Nome do técnico para inspeções...&#10;> Prazos e acordos do contrato..."
                    className="w-full h-64 bg-[#121216] border border-white/10 rounded-2xl p-4 text-zinc-200 focus:outline-none focus:ring-1 focus:ring-orange-500/50 resize-none font-mono text-xs leading-relaxed"
                    spellCheck="false"
                  />
                  <button
                    onClick={handleSave}
                    className={`w-full flex items-center justify-center gap-2 text-white rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                      saved ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500'
                    }`}
                  >
                    {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                    {saved ? 'Anotações Salvas!' : 'Salvar Anotações Localmente'}
                  </button>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Print Only Notes Section */}
      <div className="hidden print:block print:mt-16 print:pt-8 print:border-t print:border-zinc-800">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Edit3 className="w-6 h-6 text-orange-500" />
          Minuta & Acordos da Reunião
        </h2>
        <div className="whitespace-pre-wrap font-mono text-sm text-zinc-300 bg-[#18181B] p-6 rounded-2xl border border-zinc-800">
          {notes || 'Nenhuma anotação registrada durante a reunião.'}
        </div>
      </div>
    </>
  );
}

