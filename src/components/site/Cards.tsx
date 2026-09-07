import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/**
 * Cards reutilizáveis do site VoxAir.
 * Todos usam apenas tokens semânticos do design system.
 * A variante `invert` adapta o card a seções de fundo escuro (tone="deep").
 */

type Tone = { invert?: boolean | undefined };

const base = "rounded-lg border p-6 sm:p-7";
const toneCls = (invert?: boolean) =>
  invert ? "border-deep-foreground/15" : "border-border bg-card";
const bodyCls = (invert?: boolean) =>
  invert ? "text-deep-foreground/70" : "text-muted-foreground";

/** Etiqueta de classificação do dado — nunca apresentar número sem ela. */
export type StatStatus =
  | "Fato"
  | "Estimativa"
  | "Benchmark"
  | "Projeção"
  | "Simulação"
  | "A validar";

export function StatusTag({
  children,
  invert,
  accent = false,
}: { children: ReactNode; accent?: boolean } & Tone) {
  return (
    <span
      className={cn(
        "inline-flex rounded border px-2 py-0.5 text-[11px] tracking-wide",
        invert ? "border-deep-foreground/25 text-deep-foreground/70" : "border-border text-muted-foreground",
        accent && "border-accent/40 text-accent",
      )}
    >
      {children}
    </span>
  );
}

/** Card de indicador: valor em destaque + classificação obrigatória. */
export function StatCard({
  value,
  label,
  description,
  status,
  invert,
  delay = 0,
}: {
  value: string;
  label: string;
  description?: string;
  status: StatStatus;
  delay?: number;
} & Tone) {
  return (
    <Reveal delay={delay} className={cn(base, toneCls(invert), "flex flex-col")}>
      <div className="flex items-start justify-between gap-3">
        <p className="eyebrow">{label}</p>
        <StatusTag invert={invert}>{status}</StatusTag>
      </div>
      <p className="mt-4 text-3xl leading-none font-semibold tracking-tight sm:text-4xl">{value}</p>
      {description && (
        <p className={cn("mt-3 text-sm leading-relaxed", bodyCls(invert))}>{description}</p>
      )}
    </Reveal>
  );
}

/** Card de comparação entre abordagens: pontos fortes x limitações. */
export function ComparisonCard({
  title,
  subtitle,
  strengths,
  limits,
  highlight = false,
  invert,
  delay = 0,
}: {
  title: string;
  subtitle?: string;
  strengths: string[];
  limits: string[];
  highlight?: boolean;
  delay?: number;
} & Tone) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className={cn(base, toneCls(invert), highlight && "border-accent/50")}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {subtitle && <p className={cn("mt-1 text-xs", bodyCls(invert))}>{subtitle}</p>}
        </div>
        {highlight && <StatusTag invert={invert} accent>VoxAir</StatusTag>}
      </div>

      <ul className="mt-5 space-y-2 text-sm">
        {strengths.map((s) => (
          <li key={s} className="flex gap-2.5">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            <span className={bodyCls(invert)}>{s}</span>
          </li>
        ))}
      </ul>

      <ul
        className={cn(
          "mt-4 space-y-2 border-t pt-4 text-sm",
          invert ? "border-deep-foreground/15" : "border-border",
        )}
      >
        {limits.map((l) => (
          <li key={l} className="flex gap-2.5">
            <span
              aria-hidden="true"
              className={cn(
                "mt-2 h-px w-3 shrink-0",
                invert ? "bg-deep-foreground/35" : "bg-muted-foreground/50",
              )}
            />
            <span className={bodyCls(invert)}>{l}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/** Card técnico: camada/componente com descrição e itens de engenharia. */
export function TechnicalCard({
  index,
  tag,
  title,
  body,
  items,
  status,
  invert,
  delay = 0,
}: {
  index?: string;
  tag?: string;
  title: string;
  body?: string;
  items?: string[];
  status?: string;
  delay?: number;
} & Tone) {
  return (
    <Reveal as="article" delay={delay} className={cn(base, toneCls(invert))}>
      <div className="flex items-start justify-between gap-3">
        <p className="eyebrow flex items-center gap-2">
          {index && <span className="text-accent">{index}</span>}
          {tag}
        </p>
        {status && <StatusTag invert={invert}>{status}</StatusTag>}
      </div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      {body && <p className={cn("mt-3 text-sm leading-relaxed", bodyCls(invert))}>{body}</p>}
      {items && items.length > 0 && (
        <ul
          className={cn(
            "mt-5 space-y-2 border-t pt-5 text-sm",
            invert ? "border-deep-foreground/15" : "border-border",
          )}
        >
          {items.map((it) => (
            <li key={it} className="flex gap-2.5">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span className={bodyCls(invert)}>{it}</span>
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  );
}
