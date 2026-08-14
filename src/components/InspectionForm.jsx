import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, PhoneCall, AlertCircle } from 'lucide-react';

export default function InspectionForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: 'Gerente de Manutenção',
    sector: 'Cerealista / Grãos',
    phone: '',
    city: '',
    beltDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate instant n8n / Evolution API webhook dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-2xl p-6 sm:p-8 relative shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 p-1 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>INSPEÇÃO TÉCNICA GRATUITA NA PLANTA</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-100 mb-2">
              Agende a Auditoria do Transportador
            </h3>

            <p className="text-xs text-slate-400 mb-6">
              Engenheiros da Iparaná Export farão a avaliação in-loco sem custo para emissão do Laudo "Zero Down-Time".
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Seu Nome Completo *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Eng. Carlos Silva"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Empresa / Planta *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ex: Cooperativa Agro"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Seu Cargo *</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Gerente de Manutenção">Gerente de Manutenção</option>
                    <option value="Engenheiro de Processo">Engenheiro de Processo</option>
                    <option value="Gerente de Operação">Gerente de Operação</option>
                    <option value="Comprador / Suprimentos">Comprador / Suprimentos</option>
                    <option value="Diretor / Proprietário">Diretor / Proprietário</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Setor Industrial *</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Cerealista / Grãos">Cerealista / Grãos</option>
                    <option value="Usina Açúcar / Álcool">Usina Açúcar / Álcool</option>
                    <option value="Frigorífico / Ração">Frigorífico / Ração</option>
                    <option value="Pedreira / Cimento">Pedreira / Cimento</option>
                    <option value="Fertilizantes / Mineração">Fertilizantes / Mineração</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp de Contato *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(45) 99999-0000"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Cidade / Estado ou País *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Ex: Foz do Iguaçu - PR ou Ciudad del Este - PY"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Detalhes do Transportador (Opcional)</label>
                <textarea
                  rows="2"
                  value={formData.beltDetails}
                  onChange={(e) => setFormData({ ...formData, beltDetails: e.target.value })}
                  placeholder="Largura da correia, velocidade m/s ou problema principal de acúmulo..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <span>Sincronizando no ClickUp CRM...</span>
                ) : (
                  <>
                    <PhoneCall className="w-4 h-4" />
                    <span>Confirmar Agendamento da Inspeção Gratuita</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-slate-100">Solicitação Recebida!</h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              Nosso engenheiro técnico entrará em contato via WhatsApp no número <strong className="text-amber-400">{formData.phone}</strong> para agendar a auditoria presencial na planta <strong className="text-slate-100">{formData.company}</strong>.
            </p>

            <div className="bg-slate-950 p-4 rounded-xl text-xs text-slate-400 border border-slate-800">
              Caso precise de atendimento imediato de emergência, chame direto pelo WhatsApp do Fernando Libos.
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-6 py-2.5 rounded-lg text-xs"
            >
              Fechar Janela
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
