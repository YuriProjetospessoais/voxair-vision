import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/**
 * Container de conteúdo.
 * - "wide" (padrão): grids, cards, diagramas, hero — ocupa ~90–94% da viewport.
 * - "reading": blocos de texto — largura limitada para legibilidade.
 */
export function Container({
  children,
  className,
  width = "wide",
}: {
  children: ReactNode;
  className?: string;
  width?: "wide" | "reading";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-10 xl:px-[3vw]",
        width === "wide" ? "max-w-[1920px]" : "max-w-[80ch]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Bloco de leitura: títulos e parágrafos com largura controlada. */
export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("max-w-[68ch]", className)}>{children}</div>;
}


export function Section({
  id,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "deep";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 border-t border-border py-20 sm:py-28",
        tone === "surface" && "bg-surface",
        tone === "deep" && "bg-deep text-deep-foreground border-transparent",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  invert = false,
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
}) {
  return (
    <Reveal className="max-w-3xl">
      {(index || eyebrow) && (
        <p className={cn("eyebrow flex items-center gap-3", invert && "text-deep-foreground/60")}>
          {index && <span className="text-accent">{index}</span>}
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-3xl leading-tight font-semibold sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            invert ? "text-deep-foreground/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
