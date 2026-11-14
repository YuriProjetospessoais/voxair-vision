import { cn } from "@/lib/utils";

export function Photo({
  src, alt = "", className, priority = false, ratio = "aspect-[16/10]",
}: {
  src?: string; alt?: string; className?: string; priority?: boolean; ratio?: string;
}) {
  if (!src) return null;
  return (
    <figure className={cn("relative overflow-hidden", ratio, className)}>
      <img
        src={src} alt={alt} decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="size-full object-cover"
      />
      <figcaption className="absolute right-2 bottom-2 rounded bg-black/60 px-2 py-0.5 text-[10px] text-white">
        Imagem ilustrativa
      </figcaption>
    </figure>
  );
}

/** Imagem de fundo com overlay. A seção pai precisa de "relative isolate overflow-hidden". */
export function Backdrop({ src, tone = "deep" }: { src: string; tone?: "deep" | "light" }) {
  return (
    <>
      <img src={src} alt="" aria-hidden="true" loading="lazy" decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover" />
      <div aria-hidden="true"
        className={cn("absolute inset-0 -z-10", tone === "deep" ? "bg-deep/85" : "bg-background/90")} />
    </>
  );
}
