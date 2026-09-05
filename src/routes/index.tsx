import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SystemDiagram } from "@/components/site/SystemDiagram";
import { MissionFlow } from "@/components/site/MissionFlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VoxAir Systems — Sistemas autônomos para a agricultura" },
      {
        name: "description",
        content:
          "A VoxAir Systems desenvolve uma plataforma integrada de hardware, software e dados para pulverização agrícola de precisão com frotas de drones coordenadas.",
      },
      { property: "og:title", content: "VoxAir Systems — Sistemas autônomos para a agricultura" },
      {
        property: "og:description",
        content:
          "Robótica aplicada à agricultura: drones, Dock, software de coordenação de frota e dados operacionais em um único sistema.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "VoxAir Systems",
          description:
            "Empresa de sistemas autônomos e robótica aplicada à agricultura, desenvolvendo uma plataforma integrada de hardware, software e dados para pulverização agrícola de precisão.",
          email: "voxairsystems@gmail.com",
          url: "/",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <Problema />
      <Solucao />
      <ComoFunciona />
      <PorQue />
      <Mercado />
      <Modelo />
      <OndeEstamos />
      <Roadmap />
      <Equipe />
      <CTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border tech-grid">
      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
        <div>
          <Reveal>
            <p className="eyebrow">Autonomous Systems · Robotics · AgTech</p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem]">
              Sistemas autônomos para uma nova geração da agricultura.
            </h1>
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
              A VoxAir Systems desenvolve uma plataforma integrada de hardware, software e dados
              para pulverização agrícola de precisão — frotas de drones coordenadas por software,
              apoiadas por um Dock e por um registro completo de cada aplicação.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#problema"
              className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Conheça a VoxAir
            </a>
            <Link
              to="/contato"
              className="rounded-md border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Fale conosco
            </Link>
          </Reveal>
          <Reveal delay={200} className="mt-9 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <span>Hardware + Software + Dados</span>
            <span>Frota coordenada com supervisão humana</span>
            <span>Estágio: TRL 3–4</span>
          </Reveal>
        </div>

        <Reveal delay={140} className="rounded-xl border border-border bg-card p-4 sm:p-6">
          <SystemDiagram className="w-full text-border" />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Arquitetura do sistema VoxAir — representação esquemática.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function Problema() {
  return (
    <Section id="problema" tone="surface">
      <SectionHeader
        index="01"
        eyebrow="O problema"
        title="A pulverização convencional é cara, imprecisa e dependente de janelas curtas"
        description="Aplicar insumos no momento certo, na dose certa e no lugar certo continua sendo um dos maiores gargalos operacionais do campo."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          [
            "Janela operacional curta",
            "Condições de clima e estágio da cultura limitam o período útil de aplicação; atrasos custam produtividade.",
          ],
          [
            "Precisão limitada",
            "Aplicações uniformes em áreas heterogêneas geram desperdício de insumo e tratamento inadequado de parte do talhão.",
          ],
          [
            "Custo e disponibilidade de operação",
            "Máquinas de grande porte, deslocamento, compactação de solo e dependência de mão de obra qualificada elevam o custo por hectare.",
          ],
          [
            "Pouco registro do que foi feito",
            "Boa parte das operações termina sem dado estruturado sobre onde, quando e como o insumo foi aplicado.",
          ],
        ].map(([t, d], i) => (
          <Reveal key={t} delay={i * 60} className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-[15px] font-semibold">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Solucao() {
  return (
    <Section id="solucao">
      <SectionHeader
        index="02"
        eyebrow="A solução"
        title="Um sistema integrado — não apenas um drone"
        description="A VoxAir combina quatro componentes que só entregam valor quando funcionam juntos."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Drones", "Aeronaves de aplicação projetadas para operar como frota, dirigidas por missão."],
            ["Dock", "Infraestrutura de solo para recarga e preparação entre missões."],
            ["Software", "Planejamento, divisão e coordenação sincronizada das missões."],
            ["Dados", "Registro operacional de cada aplicação, por talhão e por missão."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 60} className="rounded-lg border border-border bg-card p-6">
              <p className="eyebrow text-accent">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="rounded-lg border border-border bg-surface p-7">
          <h3 className="text-lg font-semibold">O valor está na integração</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Drones existem no mercado. O que a VoxAir constrói é o sistema que faz uma frota operar
            de forma coordenada, se manter em ciclo com o Dock e transformar cada aplicação em dado
            utilizável. Essa engenharia de integração é o produto.
          </p>
          <Link
            to="/solucoes"
            className="mt-6 inline-flex text-sm font-medium underline-offset-4 hover:underline"
          >
            Ver soluções em detalhe →
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}

function ComoFunciona() {
  return (
    <Section id="como-funciona" tone="surface">
      <SectionHeader
        index="03"
        eyebrow="Como funciona"
        title="Do plano de missão ao dado de aplicação"
        description="A operação é executada por uma frota coordenada por software — capaz de dividir e executar missões de forma sincronizada — com operador e monitoramento humano, conforme o ambiente operacional e regulatório aplicável."
      />
      <MissionFlow />
    </Section>
  );
}

function PorQue() {
  const items = [
    {
      tipo: "Capacidade técnica",
      title: "Coordenação de múltiplos drones",
      body: "Dividir e executar uma missão entre várias aeronaves de forma sincronizada é um problema de software e engenharia de sistemas, não de hardware isolado.",
    },
    {
      tipo: "Capacidade técnica",
      title: "Integração hardware/software",
      body: "Aeronave, Dock e software desenvolvidos como um sistema único, e não como peças integradas depois.",
    },
    {
      tipo: "Vantagem competitiva potencial",
      title: "Ciclo operacional com Dock",
      body: "A infraestrutura de solo é o que permite operações mais longas e menos manuais. Se validada em campo, tende a ser difícil de replicar rapidamente.",
    },
    {
      tipo: "Vantagem competitiva potencial",
      title: "Dados operacionais acumulados",
      body: "Cada missão executada gera histórico. Com volume, esse acervo pode sustentar inteligência operacional própria — potencial ainda a ser construído.",
    },
  ];
  return (
    <Section id="diferenciais">
      <SectionHeader
        index="04"
        eyebrow="Por que VoxAir"
        title="Onde estamos construindo nossa vantagem competitiva"
        description="Distinguimos o que já é capacidade técnica do que ainda é vantagem competitiva potencial. Não chamamos nada de barreira de entrada sem que exista justificativa validada."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 60} className="rounded-lg border border-border bg-card p-7">
            <p className="eyebrow">{it.tipo}</p>
            <h3 className="mt-3 text-lg font-semibold">{it.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Mercado() {
  return (
    <Section id="mercado" tone="deep">
      <SectionHeader
        index="05"
        invert
        eyebrow="Mercado"
        title="Um dos maiores mercados agrícolas do mundo, num segmento ainda em formação"
        description="O Brasil concentra uma operação de aplicação de insumos em escala continental, e a pulverização por drones é um segmento recente dentro dessa cadeia. É onde a VoxAir se posiciona."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          [
            "Escala do problema",
            "Aplicação de insumos é uma operação recorrente, obrigatória e crítica em praticamente toda a área cultivada.",
          ],
          [
            "Segmento em formação",
            "A pulverização por drones ainda está em consolidação — tecnologia, operação e regulação evoluem em paralelo.",
          ],
          [
            "Espaço para sistemas",
            "A oferta atual concentra-se em equipamentos. Sistemas integrados de operação são um espaço menos ocupado.",
          ],
        ].map(([t, d], i) => (
          <Reveal key={t} delay={i * 70} className="rounded-lg border border-deep-foreground/15 p-7">
            <h3 className="text-lg font-semibold">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-deep-foreground/70">{d}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm text-deep-foreground/60">
          Estimativas de TAM, SAM e SOM e projeções financeiras são compartilhadas com fonte e
          metodologia em materiais dedicados a investidores.
        </p>
        <Link
          to="/mercado"
          className="inline-flex shrink-0 rounded-md border border-deep-foreground/25 px-5 py-3 text-sm font-medium transition-colors hover:bg-deep-foreground/10"
        >
          Ver mercado e modelo
        </Link>
      </Reveal>
    </Section>
  );
}

function Modelo() {
  const fases = [
    ["Fase 1", "Serviço B2B", "Pulverização como serviço, operada pela própria VoxAir.", "Estratégia de entrada"],
    ["Fase 2", "Hardware + SaaS", "Drones + Dock + software fornecidos a terceiros.", "Visão de médio prazo"],
    ["Fase 3", "Ecossistema", "Dados, insumos e serviços complementares.", "Visão de longo prazo"],
  ];
  return (
    <Section id="modelo">
      <SectionHeader
        index="06"
        eyebrow="Modelo de negócio"
        title="Entrar operando, escalar como plataforma"
        description="Primeiro validamos a tecnologia operando nós mesmos. Depois, fornecemos o sistema. As fases seguintes são visão estratégica, não operação existente."
      />
      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {fases.map(([fase, title, body, status], i) => (
          <Reveal as="li" key={fase} delay={i * 70} className="rounded-lg border border-border bg-card p-7">
            <p className="eyebrow text-accent">{fase}</p>
            <h3 className="mt-3 text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            <p className="mt-5 inline-flex rounded border border-border px-2.5 py-1 text-xs text-muted-foreground">
              {status}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

function OndeEstamos() {
  const cols = [
    {
      t: "Validado / desenvolvido",
      s: "Concluído",
      items: [
        "Definição da arquitetura do sistema integrado (drone, Dock, software, dados)",
        "Concepção e prova de conceito dos componentes centrais em ambiente controlado",
        "Formulação técnica do conceito operacional de frota coordenada",
      ],
    },
    {
      t: "Em desenvolvimento",
      s: "Em andamento",
      items: [
        "Camada de software de planejamento e coordenação de missões",
        "Desenvolvimento do Dock como parte do ciclo operacional",
        "Integração entre hardware e software em bancada e testes iniciais",
      ],
    },
    {
      t: "Próximo marco",
      s: "A validar",
      items: [
        "Demonstração integrada do ciclo completo: missão → operação → retorno ao Dock → dados",
        "Testes em ambiente representativo de campo",
        "Preparação regulatória para operação assistida",
      ],
    },
  ];
  return (
    <Section id="onde-estamos" tone="surface">
      <SectionHeader
        index="07"
        eyebrow="Estágio atual"
        title="Onde estamos"
        description="A VoxAir está em estágio inicial de desenvolvimento tecnológico (TRL 3–4). Não há, até o momento, operação comercial, receita ou clientes pagantes — e não apresentamos nada disso como se houvesse."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cols.map((c, i) => (
          <Reveal key={c.t} delay={i * 70} className="rounded-lg border border-border bg-card p-7">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[15px] font-semibold">{c.t}</h3>
              <span className="rounded border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                {c.s}
              </span>
            </div>
            <div aria-hidden="true" className="mt-4 h-1 w-full rounded bg-border">
              <div
                className="h-1 rounded bg-accent"
                style={{ width: i === 0 ? "100%" : i === 1 ? "55%" : "12%" }}
              />
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {c.items.map((it) => (
                <li key={it} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-muted-foreground">{it}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Roadmap() {
  const marcos = [
    ["Hoje", "Desenvolvimento tecnológico", "Arquitetura definida e componentes em desenvolvimento e integração (TRL 3–4)."],
    ["Próximo marco", "Demonstração integrada", "Validar o ciclo completo do sistema em ambiente representativo, com supervisão humana."],
    ["Escala", "Operação e plataforma", "Operar como serviço, ampliar a frota e evoluir para fornecimento de hardware + software."],
  ];
  return (
    <Section id="roadmap">
      <SectionHeader
        index="08"
        eyebrow="Roadmap"
        title="Hoje → próximo marco → escala"
        description="Sem datas especulativas: publicamos apenas a sequência de marcos que orienta o desenvolvimento."
      />
      <ol className="mt-10 space-y-4">
        {marcos.map(([fase, title, body], i) => (
          <Reveal as="li" key={fase} delay={i * 70}>
            <div className="grid gap-3 rounded-lg border border-border bg-card p-6 sm:grid-cols-[160px_1fr] sm:items-start">
              <p className="eyebrow text-accent">{fase}</p>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

function Equipe() {
  return (
    <Section id="equipe" tone="surface">
      <SectionHeader
        index="09"
        eyebrow="Equipe"
        title="Quem está construindo a VoxAir"
        description="Um núcleo técnico enxuto, dedicado a engenharia de sistemas, integração hardware/software e operação."
      />
      <Reveal className="mt-8 rounded-lg border border-dashed border-border bg-card p-8">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Os perfis públicos da equipe ainda não foram divulgados neste site. Preferimos não
          publicar informações incompletas — investidores e parceiros podem solicitar o
          detalhamento do time diretamente.
        </p>
        <Link
          to="/contato"
          className="mt-5 inline-flex rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Solicitar informações da equipe
        </Link>
      </Reveal>
    </Section>
  );
}

function CTA() {
  return (
    <Section tone="deep">
      <Reveal className="max-w-3xl">
        <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
          Construindo a próxima geração da agricultura autônoma.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-deep-foreground/70">
          Estamos em estágio inicial e desenvolvendo a tecnologia. Se você é investidor, parceiro
          estratégico ou produtor interessado em acompanhar o desenvolvimento, fale com a gente.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contato"
            className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Fale com a VoxAir
          </Link>
          <a
            href="mailto:voxairsystems@gmail.com"
            className="rounded-md border border-deep-foreground/25 px-5 py-3 text-sm font-medium transition-colors hover:bg-deep-foreground/10"
          >
            voxairsystems@gmail.com
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
