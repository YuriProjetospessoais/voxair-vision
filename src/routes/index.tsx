import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SystemDiagram } from "@/components/site/SystemDiagram";
import { MissionFlow } from "@/components/site/MissionFlow";
import { StatCard, ComparisonCard, TechnicalCard, StatusTag } from "@/components/site/Cards";

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
      <Mercado />
      <Competitividade />
      <Tecnologia />
      <Roadmap />
      <Modelo />
      <UsoDeCapital />
      <Riscos />
      <Equipe />
      <Validacao />
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
        description="Aplicar insumos no momento certo, na dose certa e no lugar certo continua sendo um dos maiores gargalos. Drones já resolvem parte dessa equação em propriedades médias/pequenas, mas grandes áreas seguem presas à ineficiência dos autopropelidos."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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

      <Reveal className="mt-14">
        <h3 className="text-xl font-semibold">Dimensionamento do problema</h3>
        <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-muted-foreground">
          Os indicadores abaixo refletem nossa estratégia de coleta de dados. Serão atualizados progressivamente com métricas operacionais verificadas.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          status="A validar"
          label="Custo por hectare"
          value="—"
          description="Custo da aplicação convencional comparado à operação com frota coordenada. Será medido em testes próprios."
        />
        <StatCard
          delay={60}
          status="A validar"
          label="Área tratada por dia"
          value="—"
          description="Capacidade operacional por ciclo de missão com apoio do Dock. Depende da demonstração integrada."
        />
        <StatCard
          delay={120}
          status="A validar"
          label="Redução de insumo"
          value="—"
          description="Ganho potencial de aplicação dirigida por missão frente à aplicação uniforme."
        />
        <StatCard
          delay={180}
          status="A validar"
          label="Rastreabilidade da aplicação"
          value="—"
          description="Percentual de operações com registro estruturado por talhão e por missão."
        />
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
        description="A VoxAir combina quatro componentes que só entregam valor quando funcionam juntos: drone, Dock, software e dados."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <TechnicalCard
          index="01"
          tag="Hardware aéreo"
          title="Drone"
          body="Aeronave de aplicação projetada para operar como parte de uma frota, dirigida por missão definida em software."
          items={["Aplicação dirigida por missão", "Telemetria de cada voo"]}
        />
        <TechnicalCard
          delay={60}
          index="02"
          tag="Infraestrutura de solo"
          title="Dock"
          body="Ponto de apoio que concentra recarga e preparação entre missões, reduzindo o trabalho manual repetitivo."
          items={["Ciclo contínuo entre voos", "Menos intervenção manual"]}
        />
        <TechnicalCard
          delay={120}
          index="03"
          tag="Software"
          title="Coordenação de frota"
          body="Camada que transforma uma área em missões executáveis e as distribui entre múltiplas aeronaves de forma sincronizada."
          items={["Divisão automática da missão", "Supervisão humana da operação"]}
        />
        <TechnicalCard
          delay={180}
          index="04"
          tag="Dados"
          title="Registro operacional"
          body="Cada missão gera histórico do que foi aplicado, onde e quando — base para gestão agronômica e rastreabilidade."
          items={["Histórico por talhão", "Base para inteligência futura"]}
        />
      </div>

      <Reveal delay={120} className="mt-8 rounded-lg border border-border bg-surface p-7">
        <h3 className="text-lg font-semibold">O valor está na integração</h3>
        <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-muted-foreground">
          Drones existem no mercado. O que a VoxAir constrói é o sistema que faz uma frota operar de
          forma coordenada, se manter em ciclo com o Dock e transformar cada aplicação em dado
          utilizável. Essa engenharia de integração é o produto.
        </p>
        <Link
          to="/solucoes"
          className="mt-6 inline-flex text-sm font-medium underline-offset-4 hover:underline"
        >
          Ver soluções em detalhe →
        </Link>
      </Reveal>
    </Section>
  );
}

function Mercado() {
  return (
    <Section id="mercado" tone="deep">
      <SectionHeader
        index="03"
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
            "A pulverização por drones é a próxima geração da agricultura tecnologia validada, operação pronta, regulação em evolução.",
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

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <StatCard invert status="A validar" label="TAM" value="—" description="Mercado total endereçável. Será publicado apenas com fonte e metodologia declaradas." />
        <StatCard invert delay={70} status="A validar" label="SAM" value="—" description="Parcela endereçável pela operação com frota coordenada no recorte geográfico inicial." />
        <StatCard invert delay={140} status="A validar" label="SOM" value="—" description="Parcela alcançável no horizonte de operação própria, dependente da capacidade instalada." />
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

function Competitividade() {
  return (
    <Section id="competitividade">
      <SectionHeader
        index="04"
        eyebrow="Competitividade"
        title="Onde estamos construindo nossa vantagem competitiva"
        description="Distinguimos o que já é capacidade técnica do que ainda é vantagem competitiva potencial. Não chamamos nada de barreira de entrada sem justificativa validada."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <ComparisonCard
          title="Máquinas terrestres"
          subtitle="Pulverizadores autopropelidos"
          strengths={["Alta capacidade por operação", "Infraestrutura e assistência consolidadas"]}
          limits={["Compactação de solo", "Restrição em terreno e cultura desenvolvida", "Custo de capital elevado"]}
        />
        <ComparisonCard
          delay={60}
          title="Aviação agrícola"
          subtitle="Aeronaves tripuladas"
          strengths={["Cobertura rápida de grandes áreas", "Operação madura e regulada"]}
          limits={["Custo por operação e logística de pista", "Menor granularidade de aplicação", "Dependência de piloto especializado"]}
        />
        <ComparisonCard
          delay={120}
          title="Drone pilotado manualmente"
          subtitle="Equipamento avulso"
          strengths={["Baixo custo de entrada", "Flexibilidade em áreas pequenas"]}
          limits={["Um operador por aeronave", "Ciclo interrompido por recarga e abastecimento", "Pouco registro estruturado"]}
        />
        <ComparisonCard
          delay={180}
          highlight
          title="Sistema integrado VoxAir"
          subtitle="Drone + Dock + software + dados"
          strengths={["Frota coordenada por software com supervisão humana", "Ciclo operacional apoiado pelo Dock", "Registro estruturado de cada aplicação"]}
          limits={["Em desenvolvimento (TRL 3–4)", "Sem operação comercial validada até o momento"]}
        />
      </div>

      <Reveal className="mt-8 rounded-lg border border-border bg-surface p-6">
        <p className="max-w-[80ch] text-sm leading-relaxed text-muted-foreground">
          A comparação acima é qualitativa e descreve abordagens de aplicação, não empresas
          específicas. Não fazemos alegação de liderança nem de superioridade medida — a
          comprovação depende de testes em campo ainda a serem executados.
        </p>
      </Reveal>
    </Section>
  );
}

function Tecnologia() {
  return (
    <Section id="tecnologia" tone="surface">
      <SectionHeader
        index="05"
        eyebrow="Tecnologia"
        title="Do plano de missão ao dado de aplicação"
        description="A operação é executada por uma frota coordenada por software — capaz de dividir e executar missões de forma sincronizada — com operador e monitoramento humano, conforme o ambiente operacional e regulatório aplicável."
      />
      <MissionFlow />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <TechnicalCard
          tag="Arquitetura"
          title="Engenharia de sistemas"
          status="Em desenvolvimento"
          body="Aeronave, Dock e software desenvolvidos como um sistema único, e não como peças integradas depois."
        />
        <TechnicalCard
          delay={60}
          tag="Autonomia"
          title="Coordenação com supervisão"
          status="Em desenvolvimento"
          body="A operação prevista hoje é assistida, com operador humano monitorando. Autonomia progressiva é visão de futuro, não capacidade comercial validada."
        />
        <TechnicalCard
          delay={120}
          tag="Comunicação"
          title="Telemetria e controle de frota"
          status="Em desenvolvimento"
          body="Camada responsável por manter estado, comandos e telemetria sincronizados entre as aeronaves e o centro de operação."
        />
        <TechnicalCard
          delay={180}
          tag="Stack"
          title="Base aberta, camada própria"
          status="Definido"
          body="Tecnologias abertas e validadas pela indústria formam a base; a integração, a automação e o modelo de dados são desenvolvidos pela VoxAir."
        />
      </div>

      <Reveal className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          to="/tecnologia"
          className="inline-flex rounded-md border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Ver arquitetura completa
        </Link>
        <StatusTag>Estratégia regulatória antecipada, sem parceria com órgãos reguladores</StatusTag>
      </Reveal>
    </Section>
  );
}

function Roadmap() {
  const marcos = [
    ["Hoje", "Protótipo integrado (TRL 3–4)", "Sistema em bancada: arquitetura validada, componentes em integração, ciclo operacional simulado e testes de compatibilidade drone-dock-software."],
    ["Próximo marco", "Validação em campo", "Demonstração completa do swarm em ambiente agrícola real. Testes de recarga automática, análise de dados em tempo real e monitoramento sincronizado com proprietário/agrônomo."],
    ["Escala operacional", "Serviço + Hardware", "Modelo de operação: frota embarcada, dock dedicado, plataforma de análise contínua. Expansão progressiva com dados agrícolas mapeando regiões."],
  ];
  return (
    <Section id="roadmap">
      <SectionHeader
        index="06"
        eyebrow="Roadmap"
        title="Desenvolvimento → Validação → Operação"
        description="Marcos técnicos que guiam o desenvolvimento. Avançamos quando cada fase valida premissas críticas da próxima."
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

function Modelo() {
  const fases = [
    ["Fase 1", "Serviço B2B", "Pulverização como serviço, operada pela própria VoxAir.", "Estratégia de entrada"],
    ["Fase 2", "Hardware + SaaS", "Drones + Dock + software fornecidos a terceiros.", "Visão de médio prazo"],
    ["Fase 3", "Ecossistema", "Dados, insumos e serviços complementares.", "Visão de longo prazo"],
  ];
  return (
    <Section id="modelo" tone="surface">
      <SectionHeader
        index="07"
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

function UsoDeCapital() {
  return (
    <Section id="uso-de-capital">
      <SectionHeader
        index="08"
        eyebrow="Uso de capital"
        title="Para onde o capital é direcionado"
        description="Publicamos apenas as direções de alocação. Valores, percentuais e cronograma são discutidos diretamente com investidores, conforme a estruturação da rodada."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <TechnicalCard
          tag="Prioridade"
          title="Engenharia e desenvolvimento"
          body="Time técnico, integração hardware/software e evolução da camada de coordenação de frota."
        />
        <TechnicalCard
          delay={60}
          tag="Prioridade"
          title="Protótipos e Dock"
          body="Construção e iteração dos protótipos de aeronave e da infraestrutura de solo que sustenta o ciclo operacional."
        />
        <TechnicalCard
          delay={120}
          tag="Prioridade"
          title="Testes e validação em campo"
          body="Execução da demonstração integrada em ambiente representativo e medição dos indicadores hoje marcados como a validar."
        />
        <TechnicalCard
          delay={180}
          tag="Prioridade"
          title="Preparação regulatória e operação"
          body="Acompanhamento regulatório antecipado e estruturação da operação inicial como serviço."
        />
      </div>
      <Reveal className="mt-8">
        <StatusTag>Alocação detalhada: informação disponível sob demanda</StatusTag>
      </Reveal>
    </Section>
  );
}

function Riscos() {
  const riscos = [
    [
      "Risco técnico",
      "Integrar aeronave, Dock e software em um ciclo operacional confiável é um problema de engenharia de sistemas ainda em desenvolvimento.",
      "Desenvolvimento incremental, uso de componentes maduros na base e validação por etapas antes da operação em campo.",
    ],
    [
      "Risco regulatório",
      "A operação de aeronaves não tripuladas e a aplicação de insumos seguem regras em evolução.",
      "Acompanhamento regulatório contínuo e arquitetura desenhada para operação com supervisão humana desde o início.",
    ],
    [
      "Risco de mercado",
      "A adoção depende de demonstrar ganho operacional real ao produtor, e não apenas capacidade tecnológica.",
      "Entrada pela operação como serviço, o que encurta o ciclo de prova antes da venda de hardware e software.",
    ],
    [
      "Risco de execução",
      "Empresa em estágio inicial, com time enxuto e recursos limitados.",
      "Escopo focado no ciclo integrado mínimo, marcos claros e priorização do que precisa ser validado primeiro.",
    ],
  ];
  return (
    <Section id="riscos" tone="deep">
      <SectionHeader
        index="09"
        invert
        eyebrow="Riscos"
        title="O que pode dar errado — e como tratamos"
        description="Apresentar riscos de forma explícita faz parte de uma leitura honesta do estágio da empresa."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {riscos.map(([t, r, m], i) => (
          <Reveal key={t} delay={i * 60} className="rounded-lg border border-deep-foreground/15 p-7">
            <p className="eyebrow text-accent">{t}</p>
            <p className="mt-3 text-sm leading-relaxed text-deep-foreground/80">{r}</p>
            <p className="mt-4 border-t border-deep-foreground/15 pt-4 text-sm leading-relaxed text-deep-foreground/60">
              <span className="font-medium text-deep-foreground/85">Mitigação: </span>
              {m}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Equipe() {
  return (
    <Section id="equipe">
      <SectionHeader
        index="10"
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
          search={{ assunto: "Investimento" }}
          className="mt-5 inline-flex rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Solicitar informações da equipe
        </Link>
      </Reveal>
    </Section>
  );
}

function Validacao() {
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
    <Section id="validacao" tone="surface">
      <SectionHeader
        index="11"
        eyebrow="Validação"
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
            search={{ assunto: "Investimento" }}
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
