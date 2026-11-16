import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
 
/** Esconde a imagem se o arquivo não carregar (404), em vez de mostrar o ícone quebrado. */
function useImageOk() {
  const ref = useRef<HTMLImageElement>(null);
  const [ok, setOk] = useState(true);
  useEffect(() => {
    const el = ref.current;
    // Cobre o caso em que o erro aconteceu antes da hidratação do React.
    if (el && el.complete && el.naturalWidth === 0) setOk(false);
  }, []);
  return { ref, ok, onError: () => setOk(false) };
}
 
export function Photo({
  src,
  alt = "",
  className,
  priority = false,
  ratio = "aspect-[16/10]",
}: {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  ratio?: string;
}) {
  const { ref, ok, onError } = useImageOk();
  if (!src || !ok) return null;
  return (
    <figure className={cn("relative overflow-hidden", ratio, className)}>
      <img
        ref={ref}
        src={src}
        alt={alt}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onError={onError}
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
  const { ref, ok, onError } = useImageOk();
  if (!ok) return null;
  return (
    <>
      <img
        ref={ref}
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        onError={onError}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className={cn("absolute inset-0 -z-10", tone === "deep" ? "bg-deep/85" : "bg-background/90")}
      />
    </>
  );
}
 
