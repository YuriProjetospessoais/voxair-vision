import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { MissionFlow } from "@/components/site/MissionFlow";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções — VoxAir Systems | Drone, Dock, software e dados" },
      {
        name: "description",
        content:
          "Plataforma integrada da VoxAir Systems para pulverização agrícola de precisão: aeronaves, Dock, software de coordenação de frota e dados operacionais.",
      },
      { property: "og:title", content: "Soluções — VoxAir Systems" },
      {
        property: "og:description",
        content:
          "Drone, Dock, software de missão e dados: como os componentes da plataforma VoxAir funcionam de forma integrada.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solucoes" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solucoes" }],
  }),
  component: SolucoesPage,
});

const blocks = [
  {
    tag: "Hardware aéreo",
    title: "Drone de aplicação",
    body: "Aeronave dedicada à aplicação de insumos, projetada para operar como parte de uma frota coordenada — e não como equipamento isolado pilotado manualmente.",
    points: [
      "Aplicação dirigida por missão definida em software",
      "Operação integrada ao Dock entre voos",
      "Telemetria e registro de cada aplicação",
    ],
  },
  {
    tag: "Infraestrutura de solo",
    title: "Dock",
    body: "Ponto de apoio da operação: concentra recarga e preparação da aeronave entre missões. É o componente que reduz o trabalho manual repetitivo e viabiliza ciclos operacionais mais longos.",
    points: [
      "Ciclo: preparação → operação → retorno → nova missão",
      "Menos intervenção manual entre voos",
      "Base para operações progressivamente mais automatizadas",
    ],
  },
  {
    tag: "Software",
    title: "Planejamento e coordenação de frota",
    body: "Camada que transforma uma área a ser tratada em missões executáveis, distribuídas entre múltiplas aeronaves de forma sincronizada.",
    points: [
      "Divisão automática da missão entre aeronaves",
      "Execução sincronizada com monitoramento humano",
      "Acompanhamento da operação em andamento",
    ],
  },
  {
    tag: "Dados",
    title: "Registro operacional",
    body: "Cada missão gera um histórico do que foi aplicado, onde e quando — insumo para gestão agronômica, rastreabilidade e melhoria contínua da operação.",
    points: [
      "Histórico por talhão e por missão",
      "Base para comparação entre operações",
      "Fundação para inteligência futura da plataforma",
    ],
  },
];

function SolucoesPage() {
  return (
    <main>
      <div className="border-b border-border tech-grid">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow">Soluções</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl">
              Uma plataforma integrada, não um equipamento avulso
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Drone, Dock, software e dados formam um único sistema operacional para aplicação
              agrícola. O ganho está na integração entre eles.
            </p>
          </Reveal>
        </Container>
      </div>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map((b, i) => (
            <Reveal as="article" key={b.title} delay={i * 60} className="rounded-lg border border-border bg-card p-7">
              <p className="eyebrow text-accent">{b.tag}</p>
              <h2 className="mt-3 text-xl font-semibold">{b.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
                {b.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader
          eyebrow="Swarm"
          title="Frota coordenada por software"
          description="Swarm, aqui, significa uma frota coordenada por software, capaz de dividir e executar missões de forma sincronizada — sempre com operador humano monitorando a operação, conforme o ambiente operacional e regulatório aplicável."
        />
        <MissionFlow />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Serviços"
          title="Como a solução chega ao produtor"
          description="A entrada de mercado prevista é pela operação: pulverização como serviço, executada pela própria VoxAir. Isso encurta o ciclo de validação técnica e comercial antes da venda de hardware e software."
        />
        <Reveal className="mt-8">
          <Link
            to="/contato"
            className="inline-flex rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Fale com a VoxAir
          </Link>
        </Reveal>
      </Section>
    </main>
  );
}
