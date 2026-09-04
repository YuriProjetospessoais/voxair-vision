import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ShareButton } from "@/components/site/ShareButton";
import { FileText, Layers, LineChart, Route as RouteIcon } from "lucide-react";

export const Route = createFileRoute("/investidores")({
  head: () => ({
    meta: [
      { title: "Investidores — VoxAir Systems" },
      {
        name: "description",
        content:
          "Visão para investidores da VoxAir Systems: problema, solução, arquitetura, modelo de negócio, estágio TRL 3–4, roadmap e próximos marcos.",
      },
      { property: "og:title", content: "Investidores — VoxAir Systems" },
      {
        property: "og:description",
        content:
          "Investor overview da VoxAir Systems: sistemas autônomos para pulverização agrícola de precisão, em estágio inicial de desenvolvimento tecnológico.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/investidores" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/investidores" }],
  }),
  component: InvestidoresPage,
});

const overview = [
  {
    t: "O problema",
    d: "A aplicação agrícola ainda possui grande dependência operacional: execução manual, janelas curtas e pouca rastreabilidade do que foi aplicado.",
  },
  {
    t: "A solução",
    d: "Sistema integrado de drones, Dock, software de missão e dados operacionais — planejamento centralizado e execução coordenada.",
  },
  {
    t: "Arquitetura",
    d: "Quatro camadas: hardware (aeronave e Dock), comunicação, software de missão e dados. A engenharia de integração entre elas é o núcleo do trabalho.",
  },
  {
    t: "Modelo",
    d: "Entrada por serviço B2B (pulverização como serviço) → Hardware + SaaS → Ecossistema. As fases seguintes são visão estratégica, não operação existente.",
  },
  {
    t: "Estágio atual",
    d: "TRL 3–4. Desenvolvimento e integração dos componentes centrais. Sem operação comercial, receita ou clientes divulgados.",
  },
  {
    t: "Próximo passo",
    d: "Validação técnica e operacional: demonstração integrada do ciclo missão → operação → retorno ao Dock → dados.",
  },
  {
    t: "Oportunidade",
    d: "Construção de uma plataforma de automação para aplicação agrícola, em um segmento ainda em formação dentro de um mercado agrícola de grande escala.",
  },
];

const materiais = [
  { icon: FileText, t: "Visão geral da empresa" },
  { icon: Layers, t: "Tecnologia" },
  { icon: LineChart, t: "Mercado" },
  { icon: RouteIcon, t: "Roadmap" },
];

function InvestidoresPage() {
  return (
    <main>
      <div className="bg-deep text-deep-foreground tech-grid-dark">
        <Container className="py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-deep-foreground/50">Investor overview</p>
            <h1 className="mt-5 text-4xl leading-[1.1] font-semibold sm:text-5xl">
              Construindo a infraestrutura para operações agrícolas progressivamente autônomas.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-deep-foreground/65">
              Uma leitura curta e direta sobre o que a VoxAir Systems está construindo, em que
              estágio está e qual é o próximo marco. Sem projeções apresentadas como fato.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contato"
                search={{ assunto: "Investimento" }}
                className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Solicitar material
              </Link>
              <Link
                to="/tecnologia"
                className="rounded-md border border-deep-foreground/25 px-5 py-3 text-sm font-medium transition-colors hover:bg-deep-foreground/10"
              >
                Explorar tecnologia
              </Link>
            </div>
          </Reveal>
        </Container>
      </div>

      <Section className="border-t-0">
        <SectionHeader
          eyebrow="Resumo"
          title="A empresa em sete blocos"
          description="Cada bloco responde a uma pergunta que um investidor faria nos primeiros minutos."
        />
        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {overview.map((o, i) => (
            <Reveal as="li" key={o.t} delay={i * 50} className="card-tech p-7">
              <p className="eyebrow text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-lg font-semibold">{o.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.d}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="surface">
        <SectionHeader
          eyebrow="Materiais"
          title="Materiais para investidores"
          description="Materiais detalhados disponíveis mediante contato."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {materiais.map((m, i) => (
            <Reveal as="li" key={m.t} delay={i * 50} className="card-tech flex items-start gap-3 p-6">
              <m.icon className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold">{m.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">Disponível sob demanda</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/contato"
            search={{ assunto: "Investimento" }}
            className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar material
          </Link>
          <ShareButton title="Investidores — VoxAir Systems" />
        </Reveal>
      </Section>

      <Section tone="deep">
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
            Falar com a VoxAir
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-deep-foreground/65">
            Estamos em estágio inicial e construindo a tecnologia. Conversas com investidores e
            parceiros técnicos são bem-vindas nesta fase.
          </p>
          <Link
            to="/contato"
            search={{ assunto: "Investimento" }}
            className="mt-8 inline-flex rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Falar com a VoxAir
          </Link>
        </Reveal>
      </Section>
    </main>
  );
}
