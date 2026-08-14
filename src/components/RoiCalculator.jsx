import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Sparkles, CheckCircle } from 'lucide-react';

export default function RoiCalculator({ onOpenInspectionModal }) {
  // Calculator States
  const [workersForCleaning, setWorkersForCleaning] = useState(2);
  const [hourlyWageBrl, setHourlyWageBrl] = useState(35);
  const [cleaningHoursPerDay, setCleaningHoursPerDay] = useState(4);
  const [downtimeHoursPerMonth, setDowntimeHoursPerMonth] = useState(6);
  const [downtimeCostPerHourBrl, setDowntimeCostPerHourBrl] = useState(1500);

  // Calculations
  const monthlyLaborCost = workersForCleaning * hourlyWageBrl * cleaningHoursPerDay * 26;
  const yearlyLaborCost = monthlyLaborCost * 12;

  const monthlyDowntimeCost = downtimeHoursPerMonth * downtimeCostPerHourBrl;
  const yearlyDowntimeCost = monthlyDowntimeCost * 12;

  const totalYearlyWaste = yearlyLaborCost + yearlyDowntimeCost;
  const estimatedSavingsWithFlexco = Math.round(totalYearlyWaste * 0.85); // 85% efficiency gain

  return (
    <section id="calculadora-roi" className="py-20 relative bg-slate-900/90 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-bold text-cyan-400 mb-3">
            <Calculator className="w-4 h-4" />
            <span>ANÁLISE DE CUSTO DO CICLO DE VIDA (LCC)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Quanto o Acúmulo de Material e Paradas Custam à Sua Planta por Ano?
          </h2>
          <p className="text-base text-slate-400 mt-3">
            Ajuste os parâmetros abaixo com a realidade da sua fábrica, usina ou cooperativa e veja o retorno financeiro com FLEXCO®.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-6">
            
            {/* Control 1: Workers for cleaning */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-200">
                  Funcionários alocados na limpeza manual de correia:
                </label>
                <span className="text-sm font-bold text-amber-400 bg-amber-500/10 px-3 py-0.5 rounded border border-amber-500/20">
                  {workersForCleaning} pessoas
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={workersForCleaning}
                onChange={(e) => setWorkersForCleaning(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Control 2: Hourly wage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Custo hora/homem médio (R$/h com encargos):
                </label>
                <input
                  type="number"
                  value={hourlyWageBrl}
                  onChange={(e) => setHourlyWageBrl(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-sm font-bold focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Horas de limpeza pesada por dia:
                </label>
                <input
                  type="number"
                  value={cleaningHoursPerDay}
                  onChange={(e) => setCleaningHoursPerDay(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-sm font-bold focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Control 3: Downtime Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Horas de parada não programada/mês:
                </label>
                <input
                  type="number"
                  value={downtimeHoursPerMonth}
                  onChange={(e) => setDowntimeHoursPerMonth(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-sm font-bold focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Custo por hora de linha parada (R$/h):
                </label>
                <input
                  type="number"
                  value={downtimeCostPerHourBrl}
                  onChange={(e) => setDowntimeCostPerHourBrl(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-sm font-bold focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

          </div>

          {/* Results Summary Box (5 Cols) */}
          <div className="lg:col-span-5 glass-card p-8 rounded-2xl space-y-6 relative border-2 border-amber-500/40">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>RESULTADO DA AUDITORIA ESTIMADA</span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-slate-400 block mb-1">Desperdício Anual Atual (Limpeza + Paradas):</span>
                <span className="text-2xl font-bold text-red-400">
                  R$ {totalYearlyWaste.toLocaleString('pt-BR')} /ano
                </span>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-semibold text-slate-300 block mb-1">
                  Economia Estimada com Soluções FLEXCO®:
                </span>
                <span className="text-4xl font-black text-gradient-amber">
                  R$ {estimatedSavingsWithFlexco.toLocaleString('pt-BR')} <span className="text-sm font-normal text-slate-400">/ano</span>
                </span>
              </div>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl text-xs text-slate-300 space-y-2 border border-slate-800">
              <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Payback estimado: menos de 60 dias de operação</span>
              </div>
              <p className="text-slate-400">
                O valor economizado em apenas um mês de safra cobre integralmente o investimento nos limpadores e alinhadores.
              </p>
            </div>

            <button
              onClick={onOpenInspectionModal}
              id="btn-calc-inspecao"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all text-center"
            >
              Confirmar Esses Números na Sua Planta
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
