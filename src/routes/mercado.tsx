import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/mercado")({
  head: () => ({
    meta: [
      { title: "Mercado e modelo de negócio — VoxAir Systems" },
      {
        name: "description",
        content:
          "Oportunidade de mercado e modelo de negócio da VoxAir Systems: serviço B2B de pulverização, evolução para hardware + SaaS e visão de ecossistema.",
      },
      { property: "og:title", content: "Mercado e modelo de negócio — VoxAir Systems" },
      {
        property: "og:description",
        content:
          "Como a VoxAir entra no mercado agrícola, valida a tecnologia, monetiza e escala.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mercado" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/mercado" }],
  }),
  component: MercadoPage,
});

const fases = [
  {
    fase: "Fase 1",
    title: "Serviço B2B",
    subtitle: "Pulverização como serviço",
    body: "A VoxAir opera a tecnologia. Entrada de mercado com ciclo curto de validação técnica e operacional, sem exigir que o produtor compre equipamento.",
    status: "Estratégia de entrada",
  },
  {
    fase: "Fase 2",
    title: "Hardware + SaaS",
    subtitle: "Drones + Dock + software",
    body: "Com a operação validada, o sistema passa a ser fornecido a terceiros, combinando hardware e assinatura de software.",
    status: "Visão de médio prazo",
  },
  {
    fase: "Fase 3",
    title: "Ecossistema",
    subtitle: "Dados, insumos e serviços complementares",
    body: "Expansão da plataforma para camadas adicionais de valor a partir dos dados operacionais gerados pela frota.",
    status: "Visão de longo prazo",
  },
];

function MercadoPage() {
  return (
    <main>
      <div className="border-b border-border tech-grid">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow">Mercado</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl">
              Um mercado grande, uma entrada estreita e deliberada
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A agricultura brasileira é uma das maiores operações de aplicação de insumos do mundo,
              e a pulverização por drones é um segmento em formação. A VoxAir entra por um recorte
              específico dessa cadeia: a operação.
            </p>
          </Reveal>
        </Container>
      </div>

      <Section>
        <SectionHeader
          index="01"
          eyebrow="Dimensionamento"
          title="Sobre números de mercado"
          description="Preferimos poucos números confiáveis a muitos números questionáveis. Estimativas de TAM, SAM e SOM, bem como projeções financeiras, são compartilhadas em materiais dedicados a investidores, com fonte e metodologia declaradas — e não publicadas aqui como se fossem fatos consolidados."
        />
        <Reveal className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["Fato", "Dado verificável com fonte declarada."],
            ["Estimativa / benchmark", "Referência de terceiros ou aproximação, sempre identificada."],
            ["Projeção", "Cenário construído pela empresa, nunca apresentado como histórico."],
          ].map(([t, d], i) => (
            <div key={t} className="rounded-lg border border-border p-5" style={{ transitionDelay: `${i * 60}ms` }}>
              <p className="eyebrow text-accent">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </Reveal>
        <Reveal className="mt-8">
          <Link
            to="/contato"
            className="inline-flex rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Solicitar materiais de mercado
          </Link>
        </Reveal>
      </Section>

      <Section tone="surface" id="modelo">
        <SectionHeader
          index="02"
          eyebrow="Modelo de negócio"
          title="Entrar operando, escalar como plataforma"
          description="Como a empresa entra no mercado, valida a tecnologia, monetiza e escala."
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {fases.map((f, i) => (
            <Reveal as="li" key={f.fase} delay={i * 80} className="relative rounded-lg border border-border bg-card p-7">
              <p className="eyebrow text-accent">{f.fase}</p>
              <h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              <p className="mt-5 inline-flex rounded border border-border px-2.5 py-1 text-xs text-muted-foreground">
                {f.status}
              </p>
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted-foreground">
          As fases 2 e 3 representam estratégia e visão de longo prazo — não operações comerciais
          existentes.
        </p>
      </Section>
    </main>
  );
}
