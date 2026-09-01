import { createFileRoute } from "@tanstack/react-router";
import { Container, Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SystemDiagram } from "@/components/site/SystemDiagram";

export const Route = createFileRoute("/tecnologia")({
  head: () => ({
    meta: [
      { title: "Tecnologia — VoxAir Systems | Arquitetura e autonomia" },
      {
        name: "description",
        content:
          "Arquitetura tecnológica da VoxAir Systems: hardware, software de coordenação de frota, comunicação, Dock, dados e estratégia de autonomia e preparação regulatória.",
      },
      { property: "og:title", content: "Tecnologia — VoxAir Systems" },
      {
        property: "og:description",
        content:
          "Como a VoxAir combina tecnologias abertas validadas com uma camada proprietária de integração, automação e operação.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tecnologia" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tecnologia" }],
  }),
  component: TecnologiaPage,
});

function TecnologiaPage() {
  return (
    <main>
      <div className="border-b border-border tech-grid">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow">Tecnologia</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl">
              Arquitetura de um sistema autônomo aplicado ao campo
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Esta página é mais técnica que a home, mas mantém a leitura acessível a investidores
              não técnicos. Detalhes sensíveis de propriedade intelectual não são divulgados
              publicamente.
            </p>
          </Reveal>
        </Container>
      </div>

      <Section>
        <SectionHeader
          index="01"
          eyebrow="Arquitetura"
          title="Quatro camadas, um sistema"
          description="Aeronaves, infraestrutura de solo, software de missão e dados operam como camadas de um mesmo sistema. A engenharia de integração entre elas é o núcleo do trabalho da VoxAir."
        />
        <Reveal className="mt-10 overflow-hidden rounded-lg border border-border bg-card p-4 sm:p-8">
          <SystemDiagram className="w-full text-border" />
        </Reveal>
      </Section>

      <Section tone="surface">
        <SectionHeader index="02" eyebrow="Camadas" title="O que cada camada resolve" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            ["Hardware", "Aeronave de aplicação e infraestrutura de solo projetadas para operar em ciclo contínuo, com foco em confiabilidade e manutenção simples."],
            ["Software de missão", "Planejamento da aplicação, divisão da missão entre aeronaves, execução sincronizada e acompanhamento em tempo real da operação."],
            ["Comunicação e coordenação", "Troca de estado entre aeronaves, Dock e estação de operação, permitindo que a frota atue de forma sincronizada e supervisionada."],
            ["Dados", "Registro estruturado de cada aplicação — base para rastreabilidade, gestão agronômica e, no futuro, inteligência operacional."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 60} className="rounded-lg border border-border bg-card p-7">
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          index="03"
          eyebrow="Autonomia"
          title="Autonomia como trajetória, não como promessa"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-lg border border-border bg-card p-7">
            <p className="eyebrow text-accent">Operação atual</p>
            <h3 className="mt-3 text-lg font-semibold">Frota coordenada com supervisão humana</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A operação prevista ocorre com operador e monitoramento humano, conforme o ambiente
              operacional e regulatório aplicável. O software coordena; a pessoa supervisiona.
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-lg border border-border bg-card p-7">
            <p className="eyebrow">Visão futura</p>
            <h3 className="mt-3 text-lg font-semibold">Automação progressiva</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Operações progressivamente mais autônomas conforme a tecnologia amadurece e a
              regulamentação permitir. Trata-se de capacidade-alvo, não de capacidade comercial já
              validada.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-6 rounded-lg border border-border bg-surface p-7">
          <p className="eyebrow">Estratégia regulatória antecipada</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A VoxAir faz acompanhamento regulatório contínuo e desenha sua arquitetura considerando
            os requisitos aplicáveis à operação de aeronaves não tripuladas e à aplicação de insumos
            agrícolas. Não há qualquer relação de parceria comercial com órgãos reguladores.
          </p>
        </Reveal>
      </Section>

      <Section tone="deep">
        <SectionHeader
          index="04"
          invert
          eyebrow="Stack"
          title="Tecnologias abertas na base, camada proprietária no topo"
          description="Tecnologias abertas e amplamente validadas formam parte da base tecnológica, enquanto a VoxAir desenvolve sua própria camada de integração, automação, operação, inteligência e propriedade intelectual."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-lg border border-deep-foreground/15 p-7">
            <h3 className="text-lg font-semibold">Base aberta e validada</h3>
            <p className="mt-3 text-sm leading-relaxed text-deep-foreground/70">
              Usar componentes maduros e testados pela indústria reduz risco técnico e acelera
              desenvolvimento — não é onde a empresa tenta se diferenciar.
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-lg border border-deep-foreground/15 p-7">
            <h3 className="text-lg font-semibold">Camada VoxAir</h3>
            <p className="mt-3 text-sm leading-relaxed text-deep-foreground/70">
              Integração entre aeronaves, Dock e software; lógica de coordenação de frota; ciclo
              operacional; e o modelo de dados da operação. É aqui que a empresa constrói valor
              proprietário.
            </p>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
