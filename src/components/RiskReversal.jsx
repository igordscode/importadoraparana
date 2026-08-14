import React from 'react';
import { ShieldAlert, Award, FileSearch, RotateCcw, Users, TrendingUp } from 'lucide-react';

export default function RiskReversal({ onOpenInspectionModal }) {
  return (
    <section id="garantias" className="py-20 bg-slate-950/60 relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            REVERSÃO TOTAL DE RISCO
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Por que o Modelo de "Venda de Catálogo" Falhou no Setor Agroindustrial?
          </h3>
          <p className="text-base text-slate-400 mt-4 leading-relaxed">
            Comprar limpadores genéricos ou improvisados por preço de prateleira custa barato na nota fiscal, mas devora o lucro da sua planta em paradas de emergência, desvio de correia e desperdício de material.
          </p>
        </div>

        {/* Comparison Grid: Venda Tradicional vs Programa Zero Down-Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Traditional Card */}
          <div className="bg-slate-900/40 border border-red-500/20 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500/10 text-red-400 text-xs font-bold px-4 py-1 rounded-bl-xl border-l border-b border-red-500/20">
              O Modelo Tradicional Falho
            </div>
            
            <h4 className="text-xl font-bold text-slate-200 mb-6 flex items-center space-x-2">
              <ShieldAlert className="w-5 h-5 text-red-400" />
              <span>Venda Passiva de Peças</span>
            </h4>

            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>Vendedor apenas entrega catálogo em PDF e tabela de preços.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>Limpadores que desgastam a correia ou perdem pressão em poucas semanas.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>Alocação contínua de 2 a 4 funcionários para limpeza pesada manual sob a descarga.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>Risco total assumido pela usina/planta em caso de falha.</span>
              </li>
            </ul>
          </div>

          {/* Zero Down-Time Card (Highlight) */}
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black px-4 py-1 rounded-bl-xl shadow-md">
              RECOMENDADO PARA SAFRA
            </div>

            <h4 className="text-xl font-extrabold text-slate-100 mb-6 flex items-center space-x-2">
              <Award className="w-6 h-6 text-amber-400" />
              <span className="text-gradient-amber">Programa Zero Down-Time Agro (Iparaná)</span>
            </h4>

            <ul className="space-y-4 text-sm text-slate-200 font-medium">
              <li className="flex items-start space-x-3">
                <span className="text-amber-400 font-bold">✓</span>
                <span><strong>Inspeção Gratuita na Planta:</strong> Engenheiros auditam o transportador antes da compra.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-400 font-bold">✓</span>
                <span><strong>Teste de 90 Dias sem Risco:</strong> Se não eliminar o acúmulo, devolvemos sem custo.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-400 font-bold">✓</span>
                <span><strong>Garantia de 3 Anos FLEXCO:</strong> Cobertura oficial de fábrica contra qualquer defeito.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-400 font-bold">✓</span>
                <span><strong>Realocação de Mão de Obra:</strong> Redução drástica de horas-homem em raspagem manual.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3 Pillar Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <FileSearch className="w-6 h-6" />
            </div>
            <h5 className="font-bold text-lg text-slate-100 mb-2">1. Auditoria Presencial</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Diagnosticamos angulação, velocidade m/s, umidade do grão/resíduo e estado atual dos roletes de carga.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h5 className="font-bold text-lg text-slate-100 mb-2">2. Garantia de Satisfação 90D</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Você testa o equipamento durante o pico de operação. Retirada garantida se a eficiência prometida não for entregue.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h5 className="font-bold text-lg text-slate-100 mb-2">3. Otimização de Equipes</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Liberte seus operadores da pá e da limpeza sob o tambor para tarefas estratégicas de manutenção preditiva.
            </p>
          </div>

        </div>

        {/* CTA Strip */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenInspectionModal}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
          >
            Agendar Diagnóstico Gratuito com Engenheiro da Iparaná
          </button>
        </div>

      </div>
    </section>
  );
}
