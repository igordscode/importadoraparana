import { ReactNode } from 'react';

const footer = 'IDS × IPARANÁ · FLEXCO Brasil · Proposta Pós-Alinhamento';

function Page({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="min-h-[78vh] border-b border-white/10 px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {eyebrow && <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-orange-400">{eyebrow}</div>}
        <h2 className="max-w-5xl text-3xl font-black tracking-[-0.03em] text-white sm:text-5xl">{title}</h2>
        {lead && <p className="mt-5 max-w-4xl text-base leading-7 text-zinc-300 sm:text-lg">{lead}</p>}
        {children && <div className="mt-10">{children}</div>}
        <div className="mt-14 border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.14em] text-zinc-600">{footer}</div>
      </div>
    </section>
  );
}

function Cards({ items, cols = 3 }: { items: { k?: string; t: string; d: string }[]; cols?: 2 | 3 | 4 }) {
  const grid = cols === 4 ? 'lg:grid-cols-4' : cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
  return (
    <div className={`grid gap-4 ${grid}`}>
      {items.map((item, i) => (
        <div key={item.t + i} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
          {item.k && <div className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-400">{item.k}</div>}
          <h3 className="text-lg font-bold text-white">{item.t}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{item.d}</p>
        </div>
      ))}
    </div>
  );
}

const hubs = [
  ['NÚCLEO G0', 'CONSULTING', 'estratégia e arquitetura'],
  ['NÚCLEO G0', 'INSIGHTS', 'dados e linha de base'],
  ['NÚCLEO G0', 'OPERATIONS', 'processos e cadência'],
  ['NÚCLEO G0', 'GOVERNANCE', 'riscos e decisões'],
  ['CANDIDATO G1', 'PRODUCT', 'descoberta e protótipo'],
  ['CANDIDATO G1', 'MARKETING', 'mensagem e demanda'],
  ['CANDIDATO G1', 'FLOW', 'automação e IA'],
  ['CANDIDATO G1', 'LABS', 'experimentos e inovação'],
  ['CAPACIDADE', 'TALENT', 'squad e parceiros'],
  ['CONDICIONAL', 'SALES', 'contas e cadências'],
  ['CONDICIONAL', 'CLOUD', 'fundação digital'],
  ['CONDICIONAL', 'SECURITY', 'acessos e proteção'],
  ['ESCALA', 'CUSTOMER SUCCESS', 'onboarding e retenção'],
  ['ESCALA', 'EDUCATION', 'treinamento e adoção'],
  ['ESCALA', 'FINANCE', 'viabilidade e cenários'],
];

export function FinalProposalWeb() {
  return (
    <div className="min-h-screen bg-[#06070a] text-zinc-100 selection:bg-orange-500/30">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#06070a]/90 px-5 py-3 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="text-sm font-black tracking-[0.14em]">IDS × IPARANÁ</div>
          <div className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">FLEXCO Brasil · Proposta Pós-Alinhamento</div>
        </div>
      </header>

      <section className="relative min-h-[88vh] overflow-hidden px-5 py-20 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(249,115,22,.14),transparent_32%),radial-gradient(circle_at_75%_70%,rgba(6,182,212,.11),transparent_30%)]" />
        <div className="relative mx-auto flex min-h-[68vh] max-w-6xl flex-col justify-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">IDS × IPARANÁ · FLEXCO BRASIL</div>
          <div className="mt-2 text-sm uppercase tracking-[0.15em] text-zinc-500">Proposta Pós-Alinhamento</div>
          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">Validar antes de escalar.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Um programa de validação comercial para construir profundidade em FLEXCO no Brasil, sem acelerar demanda além da capacidade operacional.
          </p>
          <div className="mt-12 max-w-3xl rounded-2xl border border-orange-500/20 bg-orange-500/[0.06] p-6">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">Decisão em pauta</div>
            <p className="mt-2 text-xl font-bold text-white">Onde investir para crescer sem escalar incerteza ou saturar a operação?</p>
          </div>
        </div>
      </section>

      <Page eyebrow="01 · A decisão em pauta" title="Não começar pela campanha. Começar pela decisão." lead="O objetivo é reduzir incerteza antes de liberar mais capital, mais canais e mais volume.">
        <Cards items={[
          {k:'01',t:'Reduzir incerteza',d:'Processo, dados, alegações técnicas, canais, capacidade e critérios de sucesso.'},
          {k:'02',t:'Testar em lotes',d:'Hipóteses pequenas, mensuráveis e reversíveis antes de ampliar o risco.'},
          {k:'03',t:'Decidir com evidência',d:'Escalar, ajustar ou encerrar com aprendizado documentado.'},
        ]} />
      </Page>

      <Page eyebrow="02 · Direção confirmada na reunião" title="Profundidade antes de volume." lead="A direção declarada pela IPARANÁ é aprofundar FLEXCO no Brasil e construir referência técnica, não simplesmente aumentar alcance ou quantidade de leads.">
        <Cards cols={2} items={[
          {t:'Venda técnica',d:'Projetos consultivos, contas-chave e ciclos mais longos exigem engenharia, contexto e acompanhamento.'},
          {t:'Demanda recorrente',d:'Periféricos e acessórios podem ser atendidos por uma base interna mais enxuta, desde que qualificação e roteamento estejam estruturados.'},
        ]} />
        <p className="mt-5 text-sm font-semibold text-cyan-300">Tese de trabalho: combinar autoridade técnica, inteligência de contas e capacidade comercial proporcional à demanda.</p>
      </Page>

      <Page eyebrow="03 · O ponto de partida" title="A força técnica já existe. O sistema precisa organizar a validação." lead="A IPARANÁ reúne produto, know-how, relacionamento, histórico e pessoas-chave. O Gate 0 transforma esse contexto em uma base factual para decidir o que construir primeiro.">
        <Cards items={[
          {t:'Conhecimento técnico',d:'Engenharia, aplicações, experiência de campo e repertório de clientes.'},
          {t:'Ativos e histórico',d:'Contas, materiais, vídeos, canais, ERP, WhatsApp e dados disponíveis.'},
          {t:'Capacidade limitada',d:'A operação precisa crescer sem retirar foco das contas-chave ou sobrecarregar a equipe.'},
        ]} />
      </Page>

      <Page eyebrow="04 · Engenharia da solução" title="Seis capacidades. Uma arquitetura de decisão." lead="O valor está na coordenação entre estratégia, contas, dados, experimentos, governança e aprendizado.">
        <Cards cols={3} items={[
          {k:'01',t:'Estratégia',d:'Objetivos, hipóteses, prioridades e critérios.'},
          {k:'02',t:'Contas',d:'Grupo decisor, sinais e próximas ações.'},
          {k:'03',t:'Dados',d:'Rastreamento, painel, memória e origem.'},
          {k:'04',t:'Experimentos',d:'Mensagens, ofertas, canais e lotes.'},
          {k:'05',t:'Governança',d:'Gates, riscos, responsáveis e mudanças.'},
          {k:'06',t:'Aprendizado',d:'Manual, backlog e recomendação final.'},
        ]} />
      </Page>

      <Page eyebrow="05 · Quem coordena a transformação" title="Uma porta de entrada. Um ecossistema por trás." lead="A IDS Consulting reúne contexto, coordena decisões e mobiliza capacidades sem transferir ao cliente o trabalho de gerenciar vários fornecedores.">
        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/[0.04] p-7">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400">IDS / IDS HUB · CONTROL TOWER</div>
          <h3 className="mt-3 text-3xl font-black">IDS Consulting</h3>
          <p className="mt-2 text-zinc-400">Diagnóstico, arquitetura, governança e interface executiva única.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ['1 contrato','escopo e responsabilidade coordenados'],
              ['1 fila','prioridade, owner, prazo e impacto'],
              ['1 memória','evidência, decisão e aprendizado'],
            ].map(([a,b]) => <div key={a} className="rounded-2xl border border-white/10 bg-black/20 p-5"><div className="text-2xl font-black text-white">{a}</div><div className="mt-1 text-sm text-zinc-400">{b}</div></div>)}
          </div>
        </div>
      </Page>

      <Page eyebrow="06 · Arquitetura modular IDS" title="Hubs acendem conforme a evidência." lead="O programa não ativa tudo de uma vez. Cada capacidade entra quando existe problema, hipótese, responsável e orçamento aprovados.">
        <Cards cols={4} items={[
          {k:'01',t:'IDS OS',d:'Método, rastreamento, decisão e memória operacional.'},
          {k:'02',t:'IDS Talent',d:'Especialistas mobilizados por função e necessidade.'},
          {k:'03',t:'15 hubs',d:'Capacidades ativáveis conforme gate e evidência.'},
          {k:'04',t:'Rede regional',d:'Parceiros e presença local quando a escala justificar.'},
        ]} />
      </Page>

      <Page eyebrow="06 · Arquitetura modular IDS" title="Quinze capacidades. Uma única porta de entrada." lead="Todos os hubs representam capacidade disponível. Ativação, equipe e orçamento entram somente quando a evidência e o gate justificarem.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {hubs.map(([group,name,desc]) => (
            <div key={name} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-[10px] font-black uppercase tracking-[0.15em] text-orange-400">{group}</div>
              <div className="mt-1 font-black text-white">{name}</div>
              <div className="mt-1 text-xs text-zinc-500">{desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-orange-500/25 bg-orange-500/[0.05] p-5">
          <div className="font-black text-orange-300">CAPACIDADE DISPONÍVEL NÃO SIGNIFICA MÓDULO CONTRATADO</div>
          <p className="mt-2 text-sm text-zinc-300">A IPARANÁ entra pela IDS Consulting. O Gate 0 define quais módulos acendem, quais permanecem em espera e quais não justificam investimento.</p>
        </div>
      </Page>

      <Page eyebrow="06 · Arquitetura modular IDS" title="A composição muda conforme o problema." lead="A modularidade permite começar pequeno sem limitar a arquitetura futura. Cada cenário combina apenas as capacidades necessárias para aquele estágio.">
        <Cards cols={2} items={[
          {k:'A',t:'DIAGNÓSTICO',d:'Consulting · Insights · Operations · Governance. Transformar contexto, dados, operação e risco em uma decisão executiva.'},
          {k:'B',t:'CONSTRUÇÃO GTM',d:'núcleo + Product · Marketing · Flow · Labs. Montar a base mínima, ativos e instrumentação definidos no Gate 0.'},
          {k:'C',t:'OPERAÇÃO COMERCIAL',d:'núcleo + Sales · Marketing · Insights · Operations. Operar contas, cadências e testes selecionados sem ativar capacidade desnecessária.'},
          {k:'D',t:'ESCALA INTEGRADA',d:'hubs + Cloud · Security · Customer Success · Education · Finance. Expandir tecnologia, adoção, retenção, governança econômica e presença conforme a escala justificar.'},
        ]} />
        <p className="mt-5 text-sm font-semibold text-cyan-300">O ecossistema não cresce por pacote. Cresce por evidência, necessidade e novo gate.</p>
      </Page>

      <Page eyebrow="07 · Capacidade antes de volume" title="Escalar sem saturar a operação." lead="A principal preocupação operacional levantada na reunião foi a capacidade de resposta da equipe. Por isso, demanda não deve crescer mais rápido do que atendimento, qualificação e engenharia conseguem absorver.">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ['Demanda','entradas de canais e contas'],
            ['Qualificação','intenção, aplicação e urgência'],
            ['Roteamento','interno ou técnico'],
            ['Atendimento','televendas / operação'],
            ['Engenharia','contas e casos complexos'],
            ['Aprendizado','gargalos e próxima decisão'],
          ].map(([a,b]) => <div key={a} className="rounded-xl border border-white/10 p-4"><div className="font-bold text-white">{a}</div><div className="text-sm text-zinc-500">{b}</div></div>)}
        </div>
        <p className="mt-5 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.04] p-4 text-sm font-semibold text-cyan-300">Regra operacional: o volume do experimento acompanha a capacidade real da equipe.</p>
      </Page>

      <Page eyebrow="08 · Dois motores comerciais" title="A mesma marca exige ritmos de venda diferentes." lead="A reunião mostrou que FLEXCO combina projetos técnicos de alta complexidade com periféricos e acessórios que podem ter um fluxo mais direto.">
        <Cards cols={2} items={[
          {t:'Motor A · Contas estratégicas',d:'Inteligência de conta → ABM → engenharia / Kevin → diagnóstico técnico → proposta consultiva → acompanhamento de ciclo longo.'},
          {t:'Motor B · Demanda interna',d:'Conteúdo / busca / indicação → qualificação → televendas → venda de periféricos e acessórios → escalonamento técnico quando necessário.'},
        ]} />
        <p className="mt-5 text-sm text-zinc-400">O Gate 0 define o limite entre os dois fluxos, os critérios de qualificação e quando uma oportunidade precisa de engenharia.</p>
      </Page>

      <Page eyebrow="09 · Hipótese identificada na reunião" title="Conhecimento técnico pode virar ativo escalável." lead="Treinamentos e capacitações já aparecem como demanda real e consomem tempo da equipe. A oportunidade é avaliar como transformar parte desse conhecimento em um ativo estruturado da IPARANÁ.">
        <Cards cols={3} items={[
          {t:'Treinamento',d:'presencial ou remoto'},
          {t:'Conteúdo',d:'vídeos, guias e aplicação'},
          {t:'Capacitação',d:'turmas e trilhas'},
          {t:'Certificação',d:'quando fizer sentido'},
          {t:'Autoridade',d:'referência técnica'},
          {t:'Demanda',d:'indicação e novas contas'},
        ]} />
        <div className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-orange-400">Hipótese, não escopo fechado</div>
        <p className="mt-2 text-sm text-zinc-400">A viabilidade, formato e prioridade desse caminho serão avaliados no Gate 0.</p>
      </Page>

      <Page eyebrow="10 · Squad e escritório digital" title="Senioridade na decisão. Especialistas na execução." lead="A IPARANÁ não compra uma pessoa tentando fazer tudo. Compra coordenação sênior e capacidade fracionada que muda conforme o trabalho avança.">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['456 h','capacidade total planejada'],
            ['8','frentes de trabalho'],
            ['3','gates com aceite'],
            ['1','escritório digital coordenado'],
          ].map(([a,b]) => <div key={b} className="rounded-2xl border border-white/10 p-5"><div className="text-3xl font-black text-white">{a}</div><div className="mt-1 text-sm text-zinc-500">{b}</div></div>)}
        </div>
        <Cards cols={3} items={[
          {t:'Condução sênior',d:'Estratégia, arquitetura, solução, risco e revisões críticas. 72 h.'},
          {t:'Liderança operacional',d:'Conta, GTM, ABM, PMO, governança, qualidade e aprovações. 184 h.'},
          {t:'Especialistas',d:'Design, conteúdo, vídeo, mídia, rastreamento, tecnologia e automação leve. 200 h.'},
        ]} />
      </Page>

      <Page eyebrow="11 · Prova do método IDS" title="Prova de processo, não promessa de resultado." lead="O desenho IPARANÁ será próprio, mas a disciplina de transformar contexto em decisão e operação já existe.">
        <Cards items={[
          {k:'01',t:'Botica Guaraní',d:'Operação, dados, agentes, controle humano, testes e roadmap.'},
          {k:'02',t:'IDS Consulting System',d:'Diagnósticos, sínteses, blueprint, roadmap, PMO e controles.'},
          {k:'03',t:'IPARANÁ / FLEXCO',d:'Contexto já consolidado em fatos, hipóteses, lacunas e prioridades.'},
        ]} />
      </Page>

      <Page eyebrow="12 · O que pode sair do diagnóstico" title="O Gate 0 abre caminhos. Não entrega só um relatório." lead="Ao final dos primeiros 30 dias, a IPARANÁ recebe um mapa priorizado do que construir agora, manter na fila, investigar melhor ou não fazer.">
        <Cards cols={4} items={[
          {k:'01',t:'CONSTRUIR AGORA',d:'Base mínima validável'},
          {k:'02',t:'MANTER NA FILA',d:'Próxima capacidade'},
          {k:'03',t:'INVESTIGAR',d:'Hipótese sem evidência'},
          {k:'04',t:'NÃO FAZER',d:'Desperdício evitado'},
        ]} />
      </Page>

      <Page eyebrow="13 · Rotas possíveis" title="Seis famílias de experimento." lead="As rotas são possibilidades, não promessas. O Gate 0 define quais fazem sentido para a capacidade e para a tese comercial.">
        <Cards items={[
          {k:'01',t:'Reativar contas',d:'resposta, conversa e avanço'},
          {k:'02',t:'Contas por segmento',d:'aderência e oportunidade'},
          {k:'03',t:'Procura técnica',d:'contato, custo e velocidade'},
          {k:'04',t:'Ativo interativo',d:'compreensão e pedido técnico'},
          {k:'05',t:'Processo comercial',d:'tempo e passagem de etapa'},
          {k:'06',t:'Autoridade e canais',d:'engajamento e reunião'},
        ]} />
      </Page>

      <Page eyebrow="14 · Modelo de implantação" title="Um programa. Três decisões de avanço." lead="Cada gate reduz incerteza antes de liberar a próxima camada de trabalho.">
        <Cards items={[
          {k:'GATE 0 · DIAS 1 A 30',t:'Diagnóstico e arquitetura',d:'processo, dados, linha de base, perfis, alegações, lacunas e mapa de possibilidades. DECIDIR O QUE CONSTRUIR'},
          {k:'GATE 1 · DIAS 31 A 60',t:'Construção da base',d:'rastreamento, painel, cadências, ativos mínimos, qualificação e plano de ativação. LIBERAR TESTES'},
          {k:'GATE 2 · DIAS 61 A 120',t:'Experimentar, aprender e decidir',d:'experimentos controlados, análise, correções, manual, fila e recomendação. ESCALAR, AJUSTAR OU ENCERRAR'},
        ]} />
      </Page>

      <Page eyebrow="15 · Exemplos de experimentos" title="Pequenos o suficiente para aprender. Reais o suficiente para decidir." lead="Cada teste nasce com lote, responsável, teto de gasto, métrica principal e regra de interrupção.">
        <Cards cols={4} items={[
          {t:'20–40 CONTAS',d:'Reativação orientada'},
          {t:'2 SEGMENTOS × 15–30',d:'Contas-alvo comparadas'},
          {t:'1 APLICAÇÃO · 1 PÁGINA',d:'Demanda técnica capturada'},
          {t:'1 PROTÓTIPO · 5–10 TESTES',d:'Ativo técnico interativo'},
        ]} />
      </Page>

      <Page eyebrow="16 · O número nasce antes da execução" title="Cada teste começa com um contrato de decisão." lead="Hipótese, público, responsável, lote, prazo, mensagem, teto, métrica e regra de interrupção são aprovados antes de executar.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ['2','teses prioritárias'],
            ['15–30','contas por tese'],
            ['2–3','mensagens e ofertas'],
            ['2–4','semanas por ciclo'],
            ['90%+','dentro do prazo'],
          ].map(([a,b]) => <div key={b} className="rounded-2xl border border-white/10 p-5"><div className="text-3xl font-black text-cyan-300">{a}</div><div className="mt-1 text-sm text-zinc-500">{b}</div></div>)}
        </div>
        <p className="mt-4 text-xs text-zinc-500">Faixas iniciais de planejamento, não metas comerciais contratuais.</p>
      </Page>

      <Page eyebrow="17 · Critério de escala" title="Uma nota objetiva. Cinco dimensões de decisão." lead="Demanda, qualidade, avanço comercial, economia e capacidade são avaliadas antes de liberar escala.">
        <Cards items={[
          {k:'8–10',t:'Escalar',d:'Repetir o que funcionou e ampliar progressivamente.'},
          {k:'5–7',t:'Ajustar',d:'Há sinal, mas algum componente precisa de novo ciclo.'},
          {k:'0–4',t:'Encerrar',d:'A hipótese não sustenta novo investimento.'},
        ]} />
      </Page>

      <Page eyebrow="18 · Se a evidência justificar escala" title="O piloto decide o tamanho da próxima decisão." lead="R$ 79 mil não é o teto da relação. É a validação que determina se existe base para liberar uma transformação maior, com novo dimensionamento e novo gate executivo.">
        <Cards cols={4} items={[
          {k:'VALIDAÇÃO · até 120 dias',t:'R$ 79 mil',d:'diagnosticar · construir · experimentar'},
          {k:'ESCALA FOCADA · 6 meses',t:'R$ 250–500 mil',d:'mais contas · segmentos · capacidade'},
          {k:'MÁQUINA NACIONAL · 12 meses',t:'R$ 700 mil–1,5 milhão',d:'demanda contínua · inteligência · operação'},
          {k:'PLATAFORMA INTEGRADA · 12–18 meses',t:'R$ 1,5 milhão+',d:'dados · tecnologia · automação · integrações'},
        ]} />
        <div className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-orange-400">Envelopes preliminares de referência para planejamento</div>
        <p className="mt-2 text-sm text-zinc-400">Não constituem proposta comercial ou compromisso de investimento. Porte, sequência e orçamento são definidos somente após evidência e novo gate executivo.</p>
      </Page>

      <Page eyebrow="19 · Limites do programa" title="Compromisso, condição e exclusão explícitos." lead="O programa separa o que está incluído, condicionado e fora dos honorários-base.">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          {[
            ['Diagnóstico comercial e dados','Incluído','Obrigatório no Gate 0.'],
            ['Perfil, segmentos e decisores','Incluído','Hipóteses até validação.'],
            ['Rastreamento, painel e memória','Incluído','Camada operacional.'],
            ['Ativo interativo','Condicionado','Até um ativo, se recomendado.'],
            ['ABM, mídia, prospecção e conteúdo','Condicionado','Formato definido por evidência.'],
            ['SAP, CRM e API WhatsApp','Fora do fee-base','Descoberta e orçamento próprios.'],
            ['Receita e retorno','Não garantido','Monitorados, dependem de fatores externos.'],
          ].map(([a,b,c],i) => (
            <div key={a} className={`grid gap-2 p-4 md:grid-cols-[1.4fr_.7fr_1.4fr] ${i ? 'border-t border-white/10' : ''}`}>
              <div className="font-semibold text-white">{a}</div><div className="text-cyan-300">{b}</div><div className="text-sm text-zinc-500">{c}</div>
            </div>
          ))}
        </div>
      </Page>

      <Page eyebrow="20 · Governança e mensuração" title="Responsabilidade proporcional ao controle." lead="A IDS conduz, registra, produz, protege a qualidade e recomenda. A IPARANÁ nomeia responsáveis, libera dados, aprova, atende, negocia e fecha.">
        <Cards items={[
          {t:'Controláveis pela IDS',d:'medição e integridade · entregáveis e experimentos · painel e decisões · aprendizados documentados'},
          {t:'Compartilhados',d:'conversas qualificadas · inspeções · oportunidades aceitas · evolução das oportunidades'},
          {t:'Resultados de negócio',d:'propostas e contratos · receita e retorno · expansão · monitorados, não garantidos'},
        ]} />
      </Page>

      <Page eyebrow="21 · Investimento" title="Um programa. Três decisões de avanço." lead="Cada gate possui uma pergunta de decisão, entregáveis de aceite e investimento próprio. Mudanças materiais de escopo identificadas no Gate 0 exigem aprovação prévia e ajuste formal.">
        <Cards items={[
          {k:'GATE 0',t:'R$ 12.000',d:'dias 1 a 30 · Diagnóstico e arquitetura'},
          {k:'GATE 1',t:'R$ 31.000',d:'dias 31 a 60 · Construção da base'},
          {k:'GATE 2',t:'R$ 36.000',d:'dias 61 a 120 · Experimentar e decidir'},
        ]} />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6"><div className="text-xs uppercase tracking-[0.16em] text-zinc-500">Referência integral de escopo e capacidade</div><div className="mt-2 text-4xl font-black text-white">R$ 92.000</div></div>
          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/[0.06] p-6"><div className="text-xs uppercase tracking-[0.16em] text-orange-400">Condição para o programa completo</div><div className="mt-2 text-4xl font-black text-orange-300">R$ 79.000</div></div>
        </div>
      </Page>

      <Page eyebrow="22 · Próxima decisão" title="Aprovar o Gate 0. Nomear os responsáveis." lead="O Gate 0 transforma o contexto atual em base factual, mapa de possibilidades, desenho de experimentos e critérios numéricos de decisão. Gates 1 e 2 só avançam após aceite explícito.">
        <Cards cols={4} items={[
          {k:'01',t:'Confirmar sponsor e aprovadores',d:'Econômico, comercial e técnico.'},
          {k:'02',t:'Fechar condições legais',d:'Emissor, fiscal, contrato e validade.'},
          {k:'03',t:'Assinar e liberar o Gate 0',d:'Pagamento, acessos e reunião inicial.'},
          {k:'04',t:'Iniciar em até cinco dias úteis',d:'Após as condições de início cumpridas.'},
        ]} />
      </Page>
    </div>
  );
}
