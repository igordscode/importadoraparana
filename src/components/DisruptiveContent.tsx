import { Video, MonitorPlay, Cuboid, Mic2 } from 'lucide-react';

export function DisruptiveContent() {
  const contentPillars = [
    {
      title: 'Extreme Testing',
      icon: Video,
      desc: 'Testes no limite em Super Slow-Motion (240fps) com lama, brita e resíduos pesados sendo limpos em tempo real.',
      highlight: 'Visual impact'
    },
    {
      title: 'Field Docuseries',
      icon: MonitorPlay,
      desc: 'Reality B2B: Mini-documentários gravados direto nas usinas no Brasil e Paraguai mostrando o verdadeiro "Antes x Depois".',
      highlight: 'Social proof'
    },
    {
      title: 'CGI 3D & Raio-X',
      icon: Cuboid,
      desc: 'Exploded View mostrando o desgaste interno das peças concorrentes vs. a superioridade da engenharia FLEXCO.',
      highlight: 'Technical superiority'
    },
    {
      title: 'Lords da Manutenção',
      icon: Mic2,
      desc: 'Podcasts e mesas-redondas com os verdadeiros tomadores de decisão, gerentes de manutenção e líderes do setor.',
      highlight: 'Authority building'
    }
  ];

  return (
    <section className="py-24 bg-[#0F0F11]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Conteúdo Disruptivo & Infotainment B2B</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Elevando o padrão da comunicação B2B. Substituindo catálogos frios por produção audiovisual premium que captura a atenção do engenheiro de fábrica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contentPillars.map((pillar, index) => (
            <div key={index} className="flex gap-6 bg-[#18181B] border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-700 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center text-white">
                  <pillar.icon className="h-8 w-8" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300">
                    {pillar.highlight}
                  </span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
