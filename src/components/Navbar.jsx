import React, { useState } from 'react';
import { Shield, Wrench, Calculator, Video, PhoneCall, Menu, X, Award, MapPin } from 'lucide-react';

export default function Navbar({ onOpenInspectionModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      
      {/* Top Engineering Authority & GPTW Bar */}
      <div className="bg-gradient-to-r from-ip-navy via-slate-900 to-ip-navy border-b border-slate-800/60 py-1.5 px-4 text-[11px] text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1 text-ip-gptw font-bold">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>+30 ANOS DE ENGENHARIA</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-medium">Great Place To Work® Certificada 2024-2025</span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-slate-400 hidden md:inline">15+ Marcas Globais Representadas</span>
          </div>

          <div className="flex items-center space-x-4 font-semibold text-slate-300">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Ciudad del Este • Asunción • Foz do Iguaçu</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ip-blue via-blue-600 to-ip-navy flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20 border border-blue-400/30">
              IP
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">IMPORTADORA PARANÁ</span>
                <span className="text-[10px] bg-ip-teal/15 text-ip-teal font-extrabold px-2 py-0.5 rounded border border-ip-teal/30 uppercase tracking-wider">
                  FLEXCO® Official
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium flex items-center space-x-1">
                <span>Iparaná Export</span>
                <span>•</span>
                <span className="text-amber-400 font-semibold">Programa Zero Down-Time Agro</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7">
            <a href="#ofertas" className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors flex items-center space-x-1.5">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Garantia & Ofertas</span>
            </a>
            <a href="#produtos" className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors flex items-center space-x-1.5">
              <Wrench className="w-4 h-4 text-ip-teal" />
              <span>Linha FLEXCO®</span>
            </a>
            <a href="#marcas" className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>15+ Marcas</span>
            </a>
            <a href="#calculadora-roi" className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors flex items-center space-x-1.5">
              <Calculator className="w-4 h-4 text-cyan-400" />
              <span>Calculadora LCC</span>
            </a>
            <a href="#docuseries" className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors flex items-center space-x-1.5">
              <Video className="w-4 h-4 text-emerald-400" />
              <span>13 Vídeos de Campo</span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenInspectionModal}
              id="btn-nav-inspecao-gratuita"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Inspeção Gratuita na Planta</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-4 pb-6 space-y-3">
          <a
            href="#ofertas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-200 font-medium py-2 hover:text-amber-400"
          >
            Garantia & Ofertas Irrecusáveis
          </a>
          <a
            href="#produtos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-200 font-medium py-2 hover:text-amber-400"
          >
            Linha FLEXCO® (EZP1, FMS, PTS-R, Solid Plate)
          </a>
          <a
            href="#marcas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-200 font-medium py-2 hover:text-amber-400"
          >
            Portfólio 15+ Marcas Globais
          </a>
          <a
            href="#calculadora-roi"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-200 font-medium py-2 hover:text-amber-400"
          >
            Calculadora LCC Economia
          </a>
          <a
            href="#docuseries"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-200 font-medium py-2 hover:text-amber-400"
          >
            Acervo 13 Vídeos de Campo (Inpasa / Usinas)
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenInspectionModal();
            }}
            className="w-full bg-amber-500 text-slate-950 font-bold py-3 rounded-xl text-center mt-2 shadow-lg shadow-amber-500/20"
          >
            Solicitar Inspeção na Planta (Sem Custo)
          </button>
        </div>
      )}
    </header>
  );
}
