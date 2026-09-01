import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — VoxAir Systems | Robótica aplicada à agricultura" },
      {
        name: "description",
        content:
          "Quem é a VoxAir Systems: empresa de sistemas autônomos e robótica aplicada à agricultura, em estágio inicial de desenvolvimento tecnológico (TRL 3–4).",
      },
      { property: "og:title", content: "Sobre — VoxAir Systems" },
      {
        property: "og:description",
        content:
          "Missão, visão, posicionamento e equipe da VoxAir Systems, empresa de sistemas autônomos para pulverização agrícola de precisão.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sobre" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <main>
      <div className="border-b border-border tech-grid">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow">Sobre</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl">
              Uma empresa de engenharia construindo sistemas autônomos para o campo
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A VoxAir Systems desenvolve uma plataforma integrada de hardware, software e dados
              para pulverização agrícola de precisão. O drone é uma parte do sistema — o valor está
              na integração entre aeronaves, Dock, software de missão e dados operacionais.
            </p>
          </Reveal>
        </Container>
      </div>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal className="rounded-lg border border-border bg-card p-7">
            <p className="eyebrow">Missão</p>
            <p className="mt-3 text-lg leading-relaxed">
              Tornar a aplicação de insumos agrícolas mais precisa, previsível e automatizada por
              meio de sistemas robóticos integrados.
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-lg border border-border bg-card p-7">
            <p className="eyebrow">Visão</p>
            <p className="mt-3 text-lg leading-relaxed">
              Operações agrícolas progressivamente mais autônomas, conforme a maturidade tecnológica
              e o ambiente regulatório permitirem.
            </p>
          </Reveal>
        </div>

        <div className="mt-14">
          <SectionHeader
            eyebrow="Posicionamento"
            title="Sistemas autônomos, não apenas drones"
            description="A VoxAir combina robótica, autonomia, software de coordenação e dados operacionais. Cada componente isolado é uma peça; o produto é o sistema."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Robótica aplicada", "Aeronaves e infraestrutura de solo pensadas como um único sistema."],
              ["Autonomia progressiva", "Nível de automação evolui com a tecnologia e a regulamentação."],
              ["Software próprio", "Camada de planejamento, coordenação e operação desenvolvida internamente."],
              ["Dados operacionais", "Cada missão gera registro utilizável para gestão agronômica."],
            ].map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 60} className="rounded-lg border border-border p-5">
                <h3 className="text-[15px] font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface" id="equipe">
        <SectionHeader
          eyebrow="Equipe"
          title="Quem está construindo a VoxAir"
          description="A empresa é construída por um núcleo técnico enxuto, focado em engenharia de sistemas, integração hardware/software e operação. Os perfis públicos da equipe serão divulgados nesta seção."
        />
        <Reveal className="mt-8 rounded-lg border border-dashed border-border bg-card p-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Ainda não publicamos aqui nomes, cargos e formações da equipe. Preferimos não divulgar
            informações incompletas: investidores e parceiros que precisarem do detalhamento do time
            podem solicitá-lo diretamente.
          </p>
          <Link
            to="/contato"
            className="mt-5 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar informações da equipe
          </Link>
        </Reveal>
      </Section>
    </main>
  );
}
