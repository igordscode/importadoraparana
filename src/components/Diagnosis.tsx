import { AlertTriangle, Clock, TrendingDown, DollarSign } from 'lucide-react';

export function Diagnosis() {
  return (
    <section id="diagnostico" className="py-24 bg-[#0F0F11]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">O Diagnóstico & Problemas do Modelo Tradicional</h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            A inércia do mercado B2B gera custos invisíveis altíssimos. O modelo tradicional de vendas passivas não suporta a necessidade de giro rápido e previsibilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl border border-zinc-800 bg-[#18181B] p-8 shadow-sm">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">O Estoque Parado</h3>
            <p className="text-zinc-400 leading-relaxed">
              Grande compra realizada que necessita de desova rápida no Paraguai e Brasil. O capital imobilizado reduz a capacidade de manobra financeira.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-zinc-800 bg-[#18181B] p-8 shadow-sm">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Erros do B2B Tradicional</h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Vender "peças e raspadores por catálogo PDF"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Guerra por preço de prateleira</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Comunicação fria, passiva e sem apelo visual</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-red-900/30 bg-gradient-to-b from-[#18181B] to-red-950/20 p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <TrendingDown className="h-24 w-24 text-red-500" />
            </div>
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 relative z-10">
              <DollarSign className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 relative z-10">O Custo Invisível da Inércia</h3>
            <p className="text-zinc-400 leading-relaxed relative z-10">
              Usinas e cooperativas perdem <strong>milhões com paradas não programadas</strong> durante a safra devido a falhas em transportadores que poderiam ser evitadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
