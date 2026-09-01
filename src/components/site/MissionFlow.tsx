import { Reveal } from "./Reveal";

const steps = [
  {
    n: "1",
    title: "Planejamento da missão",
    text: "A área e os parâmetros de aplicação são definidos em software; a missão é dividida entre as aeronaves.",
  },
  {
    n: "2",
    title: "Preparação e carregamento",
    text: "O Dock concentra recarga e preparo da aeronave entre missões, reduzindo intervenção manual.",
  },
  {
    n: "3",
    title: "Execução coordenada",
    text: "A frota executa a missão de forma sincronizada, com operador humano monitorando a operação.",
  },
  {
    n: "4",
    title: "Retorno ao Dock",
    text: "As aeronaves retornam para nova preparação e seguem para o próximo trecho da missão.",
  },
  {
    n: "5",
    title: "Dados e acompanhamento",
    text: "Cada aplicação gera registro operacional: o que foi aplicado, onde, quando e como.",
  },
];

export function MissionFlow() {
  return (
    <div className="mt-12">
      {/* Diagrama do fluxo (desktop) */}
      <Reveal className="hidden md:block">
        <svg
          viewBox="0 0 960 90"
          className="w-full text-border"
          role="img"
          aria-label="Fluxo da missão: planejamento, preparação, execução coordenada, retorno ao dock e dados"
        >
          <line
            x1="40"
            y1="45"
            x2="920"
            y2="45"
            stroke="currentColor"
            strokeWidth="1.5"
            className="dash-flow"
          />
          {steps.map((s, i) => {
            const x = 40 + i * (880 / (steps.length - 1));
            return (
              <g key={s.n}>
                <circle cx={x} cy={45} r="16" className="fill-background" />
                <circle
                  cx={x}
                  cy={45}
                  r="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx={x} cy={45} r="4" className="fill-accent" />
              </g>
            );
          })}
        </svg>
      </Reveal>

      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.n} delay={i * 70}>
            <div className="h-full rounded-lg border border-border bg-card p-5">
              <span className="font-display text-sm font-semibold text-accent">0{s.n}</span>
              <h3 className="mt-2 text-[15px] font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
