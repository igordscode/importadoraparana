import { Activity, ArrowUpRight, Sparkles } from 'lucide-react';

export function PartnershipTeaser() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.14),transparent_32%),radial-gradient(circle_at_75%_70%,rgba(249,115,22,0.12),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:52px_52px]" />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-14 lg:py-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
            <span className="text-sm font-black tracking-[0.2em]">IPARANÁ × IDS FLOWS</span>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-zinc-400 sm:flex">
            <Activity className="h-3.5 w-3.5 text-emerald-400" />
            Em preparação
          </div>
        </header>

        <section className="py-20 sm:py-28 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-300">
              <Sparkles className="h-3.5 w-3.5" />
              Uma nova frente está sendo construída
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
              Engenharia, inteligência comercial e execução conectadas.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Iparaná Export e IDS Flows estão estruturando uma nova camada de crescimento para transformar conhecimento técnico, operação e dados em tração comercial mensurável.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Status</span>
                <span className="mt-1 block text-sm font-semibold text-white">Construindo o próximo capítulo</span>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
                <span>Brasil</span>
                <ArrowUpRight className="h-4 w-4 text-cyan-400" />
                <span>Paraguai</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 pt-5 text-[11px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>IPARANÁ Export × IDS Flows</span>
          <span>2026 • Projeto em desenvolvimento</span>
        </footer>
      </main>
    </div>
  );
}
