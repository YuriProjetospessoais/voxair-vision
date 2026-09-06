import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Prose, Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ShareButton } from "@/components/site/ShareButton";
import { SystemDiagram } from "@/components/site/SystemDiagram";
import {
  ArrowRight,
  CircleCheck,
  CircleDashed,
  Clock3,
  Cpu,
  Database,
  Layers,
  Radio,
  Rocket,
  ShieldAlert,
  Target,
  TriangleAlert,
} from "lucide-react";

export const Route = createFileRoute("/investidores")({
  head: () => ({
    meta: [
      { title: "Investidores — VoxAir Systems" },
      {
        name: "description",
        content:
          "Tese de investimento da VoxAir Systems: problema, solução, diferenciação tecnológica, modelo de negócio, estágio TRL 3–4, riscos, roadmap e uso de capital.",
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Investidores — VoxAir Systems",
          description:
            "Visão para investidores da VoxAir Systems: tese, tecnologia, modelo de negócio, estágio e roadmap.",
          url: "https://voxairsystems.com/investidores",
        }),
      },
    ],
  }),
  component: InvestidoresPage,
});

const problema = [
  "A aplicação agrícola ainda depende de execução manual, com disponibilidade de operadores como gargalo recorrente.",
  "Janelas de aplicação são curtas e sensíveis a clima e condição da cultura; atraso operacional tem custo direto.",
  "A pulverização convencional oferece pouca rastreabilidade do que foi aplicado, onde e quando.",
  "Máquinas terrestres e aviação agrícola têm restrições de acesso, custo e disponibilidade em parte das propriedades.",
];

const whyNow = [
  "Drones agrícolas já são uma categoria em adoção no Brasil — a tecnologia de voo está madura o suficiente para operação real.",
  "O que ainda está em formação é a camada de sistema: coordenação de frota, infraestrutura de solo e dados operacionais integrados.",
  "O arcabouço regulatório brasileiro para operações com drones evolui, e quem se preparar cedo ganha tempo regulatório.",
  "Escassez de mão de obra rural torna automação uma necessidade operacional, não apenas uma melhoria de eficiência.",
];

const camadas = [
  {
    icon: Rocket,
    t: "Drone",
    d: "Aeronaves de pulverização como unidades de execução. Hardware sobre tecnologias abertas, com integração própria.",
  },
  {
    icon: Layers,
    t: "Dock",
    d: "Infraestrutura de solo para recarga e preparação — a peça que transforma drones em operação contínua.",
  },
  {
    icon: Cpu,
    t: "Software de missão",
    d: "Planejamento centralizado, divisão de missões e coordenação sincronizada da frota.",
  },
  {
    icon: Database,
    t: "Dados",
    d: "Registro estruturado de cada operação: o que foi aplicado, onde, quando e por qual aeronave.",
  },
];

const landscape = [
  {
    cat: "Máquinas terrestres",
    como: "Pulverizadores autopropelidos e tratorados.",
    limite: "Acesso restrito em áreas alagadas ou íngremes, compactação de solo, dependência de operador.",
    voxair: "Acesso por via aérea, sem contato com o solo, com execução coordenada por software.",
  },
  {
    cat: "Aviação agrícola",
    como: "Aeronaves tripuladas de pulverização.",
    limite: "Custo por hora de voo, disponibilidade limitada e precisão menor em talhões pequenos ou irregulares.",
    voxair: "Operação em escala de talhão, com precisão de aplicação e registro por missão.",
  },
  {
    cat: "Drone único operado manualmente",
    como: "Um drone, um piloto, uma operação por vez.",
    limite: "Escala limitada pela disponibilidade de pilotos; sem infraestrutura de solo, a operação para para recarga e preparação.",
    voxair: "Frota coordenada por software com Dock para recarga e preparação — o sistema é o produto, não o drone isolado.",
  },
];

const fases = [
  {
    fase: "Fase 1",
    t: "Serviço B2B",
    sub: "Pulverização como serviço",
    d: "A VoxAir opera a própria tecnologia. Entrada de mercado com ciclo curto de validação técnica e operacional, sem exigir que o produtor compre equipamento. Gera dados operacionais reais e receita de serviço.",
    status: "Estratégia de entrada",
  },
  {
    fase: "Fase 2",
    t: "Hardware + SaaS",
    sub: "Drones + Dock + assinatura de software",
    d: "Com a operação validada, o sistema passa a ser fornecido a terceiros — operações agrícolas, cooperativas e prestadores de serviço — combinando hardware e receita recorrente de software.",
    status: "Visão de médio prazo",
  },
  {
    fase: "Fase 3",
    t: "Fleet Platform",
    sub: "Plataforma de frotas e dados",
    d: "Expansão para uma camada de plataforma: gestão de frotas de terceiros, dados operacionais agregados e serviços complementares sobre a base instalada.",
    status: "Visão de longo prazo",
  },
];

const estagio = [
  {
    icon: CircleCheck,
    tag: "Validado / desenvolvido",
    items: [
      "Arquitetura do sistema definida: aeronave, Dock, software de missão e dados",
      "Seleção de tecnologias de base sobre plataformas abertas",
      "Conceito de operação coordenada de frota especificado",
    ],
  },
  {
    icon: CircleDashed,
    tag: "Em desenvolvimento",
    items: [
      "Integração dos componentes centrais (TRL 3–4)",
      "Software de planejamento e coordenação de missões",
      "Conceito de Dock em alto nível",
    ],
  },
  {
    icon: Target,
    tag: "Próximo marco",
    items: [
      "Demonstração integrada do ciclo completo: missão → operação → retorno ao Dock → dados",
      "Validação técnica e operacional em condições reais de campo",
    ],
  },
];

const roadmap = [
  {
    fase: "Agora",
    t: "Desenvolvimento e integração",
    d: "Conclusão da integração dos componentes centrais do sistema.",
    marco: "TRL 3–4 → integração",
  },
  {
    fase: "Com capital",
    t: "Demonstração e validação",
    d: "Demonstração integrada do ciclo completo e validação operacional em campo.",
    marco: "Ciclo missão → Dock → dados demonstrado",
  },
  {
    fase: "Validado",
    t: "Operação piloto",
    d: "Primeiras operações de serviço B2B em escala controlada, gerando dados operacionais reais.",
    marco: "Operação comercial supervisionada",
  },
  {
    fase: "Escala",
    t: "Expansão do modelo",
    d: "Replicar a operação validada e evoluir para o modelo Hardware + SaaS.",
    marco: "Frota em expansão",
  },
];

const riscos = [
  {
    risco: "Risco tecnológico",
    d: "A integração entre aeronave, Dock e software ainda não foi demonstrada de ponta a ponta.",
    mitigacao:
      "Redução por etapas: cada subsistema é validado isoladamente antes da demonstração integrada. Uso de tecnologias de base abertas e maduras reduz o risco de cada componente individual.",
  },
  {
    risco: "Risco regulatório",
    d: "Operações com drones agrícolas estão sujeitas a regras que ainda evoluem.",
    mitigacao:
      "Estratégia regulatória antecipada: acompanhamento contínuo do arcabouço vigente e preparação para enquadramento antes da operação comercial. Operação atual sempre com supervisão humana.",
  },
  {
    risco: "Risco de mercado",
    d: "A adoção de pulverização por frota coordenada ainda precisa ser provada comercialmente.",
    mitigacao:
      "Entrada por serviço B2B: o produtor não precisa comprar equipamento nem mudar sua estrutura. O risco de adoção fica com a VoxAir, não com o cliente.",
  },
  {
    risco: "Risco de execução",
    d: "Empresa em estágio inicial, com equipe e recursos limitados.",
    mitigacao:
      "Escopo deliberadamente estreito: um único caso de uso (pulverização), um único mercado inicial, um marco de validação claro antes de qualquer expansão.",
  },
];

const useOfFunds = [
  "Engenharia e integração do sistema (aeronave, Dock e software de missão)",
  "Demonstração integrada e validação operacional em campo",
  "Preparação regulatória e enquadramento da operação",
  "Estruturação da operação de serviço B2B",
];

function InvestidoresPage() {
  return (
    <main>
      {/* HERO */}
      <div className="bg-deep text-deep-foreground tech-grid-dark">
        <Container className="py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-deep-foreground/50">Investor overview</p>
              <h1 className="mt-5 text-4xl leading-[1.1] font-semibold sm:text-5xl">
                Infraestrutura para operações agrícolas progressivamente autônomas.
              </h1>
              <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-deep-foreground/65">
                A VoxAir Systems desenvolve um sistema integrado de drones, Dock, software de
                missão e dados para pulverização agrícola de precisão. Estágio inicial (TRL 3–4),
                com tese clara de escala — e sem projeções apresentadas como fato.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contato"
                  search={{ assunto: "Investimento" }}
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Falar com a VoxAir <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/tecnologia"
                  className="rounded-md border border-deep-foreground/25 px-5 py-3 text-sm font-medium transition-colors hover:bg-deep-foreground/10"
                >
                  Explorar tecnologia
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-xl border border-deep-foreground/15 bg-card p-5 text-card-foreground sm:p-7">
                <SystemDiagram className="w-full" />
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Arquitetura do sistema: software de missão, frota, Dock e dados.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* TESE */}
      <Section className="border-t-0">
        <SectionHeader
          index="01"
          eyebrow="Investment thesis"
          title="Por que a VoxAir pode se tornar uma empresa escalável"
          description="A tese em três afirmações — cada uma verificável ou claramente marcada como convicção."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            {
              t: "O produto é o sistema, não o drone",
              d: "Drones agrícolas são cada vez mais commodities. A camada que ainda não existe de forma consolidada — coordenação de frota, infraestrutura de solo e dados integrados — é onde a VoxAir constrói. Software e integração escalam; hardware isolado, não.",
            },
            {
              t: "O modelo de entrada reduz o risco de adoção",
              d: "Serviço B2B: o produtor paga pela aplicação, não pelo equipamento. Isso gera operação real, dados reais e aprendizado de campo enquanto a tecnologia amadurece — e cria a base instalada para as fases seguintes.",
            },
            {
              t: "Cada fase financia a credibilidade da próxima",
              d: "Serviço valida a operação → operação validada sustenta Hardware + SaaS → base instalada sustenta plataforma. A escalabilidade não depende de um salto único, mas de degraus de validação sequenciais.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70} className="card-tech p-7">
              <p className="eyebrow text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-lg font-semibold">{c.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <p className="text-sm text-muted-foreground">
            Os itens acima expressam a convicção estratégica da empresa. Não representam resultados
            obtidos.
          </p>
        </Reveal>
      </Section>

      {/* PROBLEMA + WHY NOW */}
      <Section tone="surface">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              index="02"
              eyebrow="Problema"
              title="A aplicação agrícola ainda é um gargalo operacional"
            />
            <ul className="mt-8 space-y-4">
              {problema.map((p, i) => (
                <Reveal as="li" key={i} delay={i * 50} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{p}</p>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader
              index="03"
              eyebrow="Why now"
              title="Por que agora"
            />
            <ul className="mt-8 space-y-4">
              {whyNow.map((w, i) => (
                <Reveal as="li" key={i} delay={i * 50} className="flex gap-3">
                  <Clock3 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{w}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* SOLUÇÃO / DIFERENCIAÇÃO */}
      <Section>
        <SectionHeader
          index="04"
          eyebrow="Solução"
          title="Diferenciação tecnológica: quatro camadas, um sistema"
          description="Cada camada isolada já existe no mercado. A diferenciação está na integração — e é nela que concentramos a engenharia."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {camadas.map((c, i) => (
            <Reveal key={c.t} delay={i * 60} className="card-tech p-6">
              <c.icon className="size-5 text-accent" aria-hidden="true" />
              <h2 className="mt-4 text-base font-semibold">{c.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Prose>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              A frota é coordenada por software — capaz de dividir e executar missões de forma
              sincronizada — sob supervisão humana na operação atual. Operações progressivamente
              mais autônomas são a visão de longo prazo, não a capacidade comercial presente.
            </p>
          </Prose>
        </Reveal>
      </Section>

      {/* COMPETITIVE LANDSCAPE */}
      <Section tone="deep">
        <SectionHeader
          index="05"
          eyebrow="Competitive landscape"
          title="Onde a VoxAir se posiciona"
          description="Comparação com as alternativas de aplicação existentes. Sem alegações de liderança — posicionamento, não ranking."
          invert
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {landscape.map((l, i) => (
            <Reveal key={l.cat} delay={i * 70} className="rounded-lg border border-deep-foreground/15 bg-deep-foreground/5 p-7">
              <h3 className="text-lg font-semibold">{l.cat}</h3>
              <p className="mt-1 text-sm text-deep-foreground/55">{l.como}</p>
              <p className="mt-4 text-xs font-medium tracking-wide text-deep-foreground/50 uppercase">
                Limitação estrutural
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-deep-foreground/70">{l.limite}</p>
              <p className="mt-4 text-xs font-medium tracking-wide text-accent uppercase">
                Posição VoxAir
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-deep-foreground/70">{l.voxair}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* MODELO DE NEGÓCIO */}
      <Section>
        <SectionHeader
          index="06"
          eyebrow="Modelo de negócio"
          title="Service → Hardware + SaaS → Fleet Platform"
          description="Entrar operando, validar com receita de serviço e escalar como plataforma."
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {fases.map((f, i) => (
            <Reveal as="li" key={f.fase} delay={i * 80} className="card-tech relative p-7">
              <p className="eyebrow text-accent">{f.fase}</p>
              <h3 className="mt-3 text-xl font-semibold">{f.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.sub}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              <p className="mt-5 inline-flex rounded border border-border px-2.5 py-1 text-xs text-muted-foreground">
                {f.status}
              </p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-6">
          <p className="text-sm text-muted-foreground">
            As fases 2 e 3 representam estratégia e visão de longo prazo — não operações comerciais
            existentes.
          </p>
        </Reveal>
      </Section>

      {/* ESTÁGIO ATUAL */}
      <Section tone="surface">
        <SectionHeader
          index="07"
          eyebrow="Estágio atual"
          title="TRL 3–4, com honestidade sobre o que isso significa"
          description="O que existe hoje, o que está em desenvolvimento e qual é o próximo marco. Sem uso da palavra tração: não há clientes pagantes ainda."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {estagio.map((e, i) => (
            <Reveal key={e.tag} delay={i * 70} className="card-tech p-7">
              <div className="flex items-center gap-2">
                <e.icon className="size-4 text-accent" aria-hidden="true" />
                <p className="eyebrow text-accent">{e.tag}</p>
              </div>
              <ul className="mt-5 space-y-3">
                {e.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/30" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ROADMAP / CAPITAL → MILESTONES */}
      <Section>
        <SectionHeader
          index="08"
          eyebrow="Roadmap"
          title="Capital → Milestones → Validação → Escala"
          description="Cada etapa destrava a seguinte. Sem datas inventadas — a sequência é o compromisso."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {roadmap.map((r, i) => (
            <Reveal as="li" key={r.fase} delay={i * 70} className="relative border-t-2 border-border pt-6">
              <span
                className="absolute -top-[5px] left-0 size-2 rounded-full bg-accent"
                aria-hidden="true"
              />
              <p className="eyebrow text-accent">{r.fase}</p>
              <h3 className="mt-3 text-lg font-semibold">{r.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              <p className="mt-4 text-xs font-medium text-foreground/70">{r.marco}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* RISCOS */}
      <Section tone="surface">
        <SectionHeader
          index="09"
          eyebrow="Riscos"
          title="Principais riscos e como estão sendo reduzidos"
          description="Uma empresa early-stage que não nomeia seus riscos não os conhece. Estes são os nossos."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {riscos.map((r, i) => (
            <Reveal key={r.risco} delay={i * 60} className="card-tech p-7">
              <div className="flex items-center gap-2.5">
                <TriangleAlert className="size-4 text-accent" aria-hidden="true" />
                <h3 className="text-base font-semibold">{r.risco}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              <p className="mt-4 text-xs font-medium tracking-wide text-accent uppercase">
                Redução
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.mitigacao}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* USE OF FUNDS + TEAM */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              index="10"
              eyebrow="Use of funds"
              title="Para onde vai o capital"
              description="Direções de alocação — sem valores ou percentuais definidos nesta fase."
            />
            <ul className="mt-8 space-y-4">
              {useOfFunds.map((u, i) => (
                <Reveal as="li" key={u} delay={i * 50} className="card-tech flex items-start gap-3 p-5">
                  <span className="eyebrow mt-0.5 text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-relaxed">{u}</p>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader
              index="11"
              eyebrow="Team"
              title="Founder-market fit"
              description="Quem está construindo a VoxAir e por quê."
            />
            <Reveal className="card-tech mt-8 p-7">
              <ShieldAlert className="size-5 text-accent" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Informações sobre a equipe fundadora — formação, trajetória e relação com o
                problema — são compartilhadas diretamente com investidores em conversa.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Informação disponível sob demanda.
              </p>
            </Reveal>
            <Reveal delay={100} className="card-tech mt-5 p-7">
              <Radio className="size-5 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold">Materiais para investidores</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Visão geral da empresa, tecnologia, mercado e roadmap — materiais detalhados
                disponíveis mediante contato.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="deep">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="max-w-xl text-3xl leading-tight font-semibold sm:text-4xl">
              Construir cedo, validar rápido, escalar com evidência.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-deep-foreground/65">
              Estamos em estágio inicial e esta é a fase em que o capital tem mais alavancagem:
              antes da demonstração integrada, antes da operação piloto, antes da escala.
              Conversas com investidores e parceiros técnicos são bem-vindas agora.
            </p>
          </Reveal>
          <Reveal delay={100} className="flex flex-col items-start gap-4 lg:items-end">
            <Link
              to="/contato"
              search={{ assunto: "Investimento" }}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Agendar conversa com a VoxAir <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <ShareButton title="Investidores — VoxAir Systems" />
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
