import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Globe, Award } from 'lucide-react';

export default function Footer({ onOpenInspectionModal }) {
  return (
    <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ip-blue via-blue-600 to-ip-navy flex items-center justify-center text-white font-black text-xl shadow-md border border-blue-400/30">
                IP
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block">IMPORTADORA PARANÁ</span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Iparaná Export • FLEXCO®</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Há mais de 30 anos fornecendo soluções de engenharia e confiabilidade industrial no Paraguai e Brasil. Distribuidor oficial de 15+ marcas mundiais.
            </p>

            <div className="flex items-center space-x-2 text-xs text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Great Place to Work® Certificada 2024-2025</span>
            </div>
          </div>

          {/* Paraguay Locations */}
          <div>
            <h5 className="font-bold text-sm text-white uppercase tracking-wider mb-3 flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Unidades no Paraguai</span>
            </h5>
            <ul className="space-y-3 text-xs">
              <div>
                <strong className="text-slate-200 block">Casa Central — Ciudad del Este</strong>
                <span className="text-slate-400">Km 3 ½ Calle Cnel. José Sánchez, 263</span>
                <span className="block text-slate-300 font-mono mt-0.5">Tel: +595 61 570 370</span>
              </div>
              <div className="pt-2 border-t border-slate-900">
                <strong className="text-slate-200 block">Sucursal — Asunción</strong>
                <span className="text-slate-400">Avda. Eusebio Ayala c/Avda. Boggiani, 4898</span>
                <span className="block text-slate-300 font-mono mt-0.5">Tel: +595 21 520 000</span>
              </div>
              <div className="pt-1">
                <a href="https://importadoraparana.com.py" target="_blank" rel="noreferrer" className="text-ip-teal hover:underline flex items-center space-x-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>importadoraparana.com.py</span>
                </a>
              </div>
            </ul>
          </div>

          {/* Brazil Base & Contacts */}
          <div>
            <h5 className="font-bold text-sm text-white uppercase tracking-wider mb-3 flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Base Brasil (Exportação)</span>
            </h5>
            <ul className="space-y-3 text-xs">
              <div>
                <strong className="text-slate-200 block">Iparaná Export — Foz do Iguaçu</strong>
                <span className="text-slate-400">Av. Maceió, 110, Jardim Petrópolis, PR</span>
                <span className="block text-slate-300 font-mono mt-0.5">Tel: +55 45 3031 1532</span>
              </div>
              <div className="pt-2 border-t border-slate-900 space-y-1">
                <strong className="text-slate-200 block">Engenharia de Vendas:</strong>
                <span className="block text-slate-300">Kevin Teixeira: +55 44 99147 3755</span>
                <span className="block text-slate-300">Leandro Campos: +55 45 99129 2540</span>
              </div>
              <div className="pt-1">
                <a href="https://iparanaexport.com.br" target="_blank" rel="noreferrer" className="text-ip-teal hover:underline flex items-center space-x-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>iparanaexport.com.br</span>
                </a>
              </div>
            </ul>
          </div>

          {/* Quick CTA */}
          <div>
            <h5 className="font-bold text-sm text-white uppercase tracking-wider mb-3">Atendimento Rápido</h5>
            <p className="text-xs text-slate-400 mb-4">
              Solicite a auditoria gratuita do transportador na sua planta com a equipe de engenheiros da Importadora Paraná.
            </p>
            <button
              onClick={onOpenInspectionModal}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs py-3 px-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 text-center"
            >
              Solicitar Inspeção Gratuita
            </button>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-[11px] text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Importadora Paraná & Iparaná Export. Todos os direitos reservados. Tecnologias FLEXCO®.</p>
          <p className="text-slate-400">Desenvolvido com autoridade por <strong className="text-slate-200">IDS Hub Ecosystem</strong></p>
        </div>
      </div>
    </footer>
  );
}
