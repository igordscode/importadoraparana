import { Shield, MapPin, Award, HeartHandshake, Sparkles, Building2, Flame, ArrowRight, CheckCircle2, Users, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export function CompanyStory() {
  return (
    <section id="historia" className="py-24 bg-[#050508] relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-400 border border-cyan-500/30 uppercase tracking-wider mb-3">
            <HeartHandshake className="h-4 w-4" />
            Capítulo 01 • Nossa Visão Sobre a IPARANÁ EXPORT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            A História, O Respeito pelo Legado & A Visão de Escala
          </h2>
          <p className="text-zinc-400 max-w-3xl text-base sm:text-lg leading-relaxed">
            Reconhecemos a força histórica da **IPARANÁ EXPORT (Fernando Libos)** no mercado agroindustrial do Paraguay e Brasil.
          </p>
        </div>

        {/* Official Stats Bar from 2026 Brochure */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#0B0B0F] border border-white/10 p-5 rounded-2xl ids-glass-card">
            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Tradição no Mercado</span>
            <p className="text-3xl font-black text-cyan-400 font-mono">+30 Anos</p>
            <p className="text-xs text-zinc-400 mt-1">Liderança em engenharia e suprimentos.</p>
          </div>

          <div className="bg-[#0B0B0F] border border-white/10 p-5 rounded-2xl ids-glass-card">
            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Equipe Especializada</span>
            <p className="text-3xl font-black text-orange-400 font-mono">+70 Colaboradores</p>
            <p className="text-xs text-zinc-400 mt-1">Engenharia, campo e suporte técnico.</p>
          </div>

          <div className="bg-[#0B0B0F] border border-white/10 p-5 rounded-2xl ids-glass-card">
            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Marcas Mundiais Representadas</span>
            <p className="text-3xl font-black text-amber-400 font-mono">+15 Marcas Líderes</p>
            <p className="text-xs text-zinc-400 mt-1">Representação oficial FLEXCO e Eriez.</p>
          </div>

          <div className="bg-[#0B0B0F] border border-white/10 p-5 rounded-2xl ids-glass-card">
            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Presença Regional</span>
            <p className="text-3xl font-black text-emerald-400 font-mono">BR & PY</p>
            <p className="text-xs text-zinc-400 mt-1">Atendimento em usinas e grandes silos.</p>
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Company Identity & Reach (Left Column) */}
          <div className="lg:col-span-6 bg-[#0B0B0F] border border-white/10 rounded-3xl p-6 sm:p-8 ids-glass-card shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">IPARANÁ EXPORT</h3>
                  <span className="text-xs text-cyan-400 font-mono">Soluções de Engenharia para Agro & Indústria</span>
                </div>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                Com mais de 30 anos de atuação sólida, a IPARANÁ impulsiona os maiores grupos da agroindústria, construção e mineração no Paraguay e Brasil. Mais do que vender produtos, a empresa é referência em **assistência técnica de campo, medição de desgaste de esteiras, instalação de camas de impacto, alinhadores e revestimentos de tambores**.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <span>Distribuidora oficial das soluções industriais <strong>FLEXCO</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <span>Equipe própria de campo pronta para atendimento em usinas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <span>Atendimento nos principais polos (Alto Paraná, Itapúa, CDE, PR, MS)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div className="bg-black/50 p-3.5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400" /> Cobertura Brasil
                  </div>
                  <span className="text-xs font-bold text-white font-mono">Paraná, MS, São Paulo</span>
                </div>
                <div className="bg-black/50 p-3.5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                    <MapPin className="h-3.5 w-3.5 text-orange-400" /> Cobertura Paraguay
                  </div>
                  <span className="text-xs font-bold text-white font-mono">Alto Paraná, Itapúa, CDE</span>
                </div>
              </div>
            </div>
          </div>

          {/* IDS Flows Vision & Visual Brand Card (Right Column) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0F0B14] via-[#0B0F14] to-[#070C10] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 ids-glass-card shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-400 border border-purple-500/30 uppercase tracking-wider mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                A Visão do IDS Flows OS
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                "Não falta capacidade técnica nem portfólio. Falta o motor digital de tração para acelerar o giro do estoque imobilizado."
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                Combinamos a reputação de 30 anos da IPARANÁ com a tecnologia de inteligência comercial do **IDS Flows OS**. O objetivo é transformar o estoque imobilizado FLEXCO em uma oferta agressiva de **Zero Down-Time Agro**, atraindo os decisores das maiores usinas de açúcar, etanol e complexos granelistas da região.
              </p>

              {/* Official Brand Image Graphic */}
              <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 bg-black/60">
                <img 
                  src="/assets/ImParana23_BrandPres.jpg" 
                  alt="IPARANÁ Export Official Brand Presentation" 
                  className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    // Fallback if image path varies
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Metas do Piloto de Inteligência</span>
              <span className="text-xs text-zinc-300 flex items-center gap-1 font-semibold">
                Desovar Estoque com Alta Margem <ArrowRight className="h-3.5 w-3.5 text-cyan-400" />
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

