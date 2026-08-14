import { useState } from 'react';
import { Calculator, DollarSign, Clock, ShieldCheck, ArrowRight, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function LCCCalculator() {
  const [plantType, setPlantType] = useState<'usina' | 'silo' | 'mineracao'>('usina');
  const [capacity, setCapacity] = useState<number>(800); // t/h
  const [downtimeHours, setDowntimeHours] = useState<number>(6); // horas de parada tradicional
  const [breakdownCount, setBreakdownCount] = useState<number>(3); // ocorrencias por safra

  // Multipliers based on industry standards
  const costPerTonMap = {
    usina: 180, // R$ per ton of lost crushing capacity + energy
    silo: 45,   // R$ per ton lost load + demurrage
    mineracao: 250 // R$ per ton
  };

  const costPerHour = capacity * costPerTonMap[plantType];
  
  // Traditional repair time (vulcanization/contractor) = downtimeHours (default 6h)
  const traditionalTotalDowntime = downtimeHours * breakdownCount;
  const traditionalCost = traditionalTotalDowntime * costPerHour;

  // FLEXCO mechanical repair time = 0.5h (30 min)
  const flexcoTotalDowntime = 0.5 * breakdownCount;
  const flexcoCost = flexcoTotalDowntime * costPerHour;

  const totalSaved = traditionalCost - flexcoCost;
  const hoursSaved = traditionalTotalDowntime - flexcoTotalDowntime;

  return (
    <section id="calculadora" className="py-24 bg-[#08080A] border-y border-white/10 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-600/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-400 border border-orange-500/30 uppercase tracking-wider mb-3">
            <Calculator className="h-4 w-4" />
            Ferramenta Interativa de Campo
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Simulador de Engenharia de Valor & ROI LCC
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
            Ajuste os parâmetros da planta do cliente durante a reunião e demonstre visualmente a economia financeira imediata obtida com a tecnologia FLEXCO.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Controls Panel (Left Column) */}
          <div className="lg:col-span-6 bg-[#0F0F12] border border-white/10 rounded-3xl p-6 sm:p-8 ids-glass-card shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="h-5 w-5 text-orange-500" />
                Parâmetros Operacionais da Planta
              </h3>

              {/* Plant Type Selection */}
              <div className="mb-6">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                  Tipo de Planta / Operação
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => { setPlantType('usina'); setCapacity(800); }}
                    className={`py-3 px-3 rounded-xl font-medium text-xs sm:text-sm border transition-all ${
                      plantType === 'usina'
                        ? 'bg-orange-500/20 border-orange-500 text-white shadow-[0_0_15px_rgba(234,88,12,0.3)]'
                        : 'bg-white/5 border-white/5 text-zinc-400 hover:bg-white/10'
                    }`}
                  >
                    🌾 Usina Açúcar/Etanol
                  </button>
                  <button
                    onClick={() => { setPlantType('silo'); setCapacity(1500); }}
                    className={`py-3 px-3 rounded-xl font-medium text-xs sm:text-sm border transition-all ${
                      plantType === 'silo'
                        ? 'bg-cyan-500/20 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                        : 'bg-white/5 border-white/5 text-zinc-400 hover:bg-white/10'
                    }`}
                  >
                    🚢 Terminal / Silo Grãos
                  </button>
                  <button
                    onClick={() => { setPlantType('mineracao'); setCapacity(500); }}
                    className={`py-3 px-3 rounded-xl font-medium text-xs sm:text-sm border transition-all ${
                      plantType === 'mineracao'
                        ? 'bg-amber-500/20 border-amber-500 text-white shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'bg-white/5 border-white/5 text-zinc-400 hover:bg-white/10'
                    }`}
                  >
                    ⛏️ Mineração / Agregados
                  </button>
                </div>
              </div>

              {/* Capacity Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Capacidade de Processamento (Toneladas / Hora)
                  </label>
                  <span className="text-orange-400 font-mono font-bold text-lg">{capacity} t/h</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3000"
                  step="50"
                  value={capacity}
                  onChange={(e) => setCapacity(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>

              {/* Traditional Downtime Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Tempo Médio de Parada por Vulcanização Tradicional
                  </label>
                  <span className="text-cyan-400 font-mono font-bold text-lg">{downtimeHours} Horas</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="16"
                  step="1"
                  value={downtimeHours}
                  onChange={(e) => setDowntimeHours(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Number of Breakdowns per Season */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Ocorrências de Rompimento / Rasgo na Safra
                  </label>
                  <span className="text-amber-400 font-mono font-bold text-lg">{breakdownCount}x por safra</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={breakdownCount}
                  onChange={(e) => setBreakdownCount(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-zinc-500">
              * Cálculo baseado em dados LCC/TPM de perdas de oportunidade por moagem, vapor, hora-homem e logística.
            </div>
          </div>

          {/* ROI Live Simulation Results (Right Column) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#120B08] via-[#0F0F14] to-[#081216] border border-orange-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(234,88,12,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                  Resultado Financeiro em Tempo Real
                </span>
                <Clock className="h-5 w-5 text-zinc-500" />
              </div>

              {/* Financial Savings Highlights */}
              <div className="mb-8 p-6 rounded-2xl bg-black/60 border border-orange-500/30 glow-orange">
                <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">
                  Economia Direta Estimada por Safra (R$)
                </span>
                <p className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 font-mono">
                  R$ {totalSaved.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <TrendingUp className="h-4 w-4" />
                  Economia de {hoursSaved} Horas de Parada de Planta
                </div>
              </div>

              {/* Comparative Table */}
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-zinc-400">Custo Hora de Parada da Planta:</span>
                  <span className="font-mono font-bold text-white">R$ {costPerHour.toLocaleString('pt-BR')}/h</span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-red-950/20 border border-red-900/30">
                  <span className="text-red-300">Modelo Tradicional ({traditionalTotalDowntime}h paradas):</span>
                  <span className="font-mono font-bold text-red-400">R$ {traditionalCost.toLocaleString('pt-BR')}</span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                  <span className="text-emerald-300">Modelo FLEXCO ({flexcoTotalDowntime}h paradas):</span>
                  <span className="font-mono font-bold text-emerald-400">R$ {flexcoCost.toLocaleString('pt-BR')}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <p className="text-xs text-zinc-300">
                <strong className="text-white">Argumento de Venda Técnica:</strong> O custo de aquisição do kit FLEXCO equivale a menos de <strong>5% da economia gerada na primeira emergência</strong>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
