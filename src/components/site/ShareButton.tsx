import { Share2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function ShareButton({
  title,
  className,
  label = "Compartilhar",
}: {
  title: string;
  className?: string;
  label?: string;
}) {
  async function onShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      toast.success("Link copiado.");
    } catch {
      /* usuário cancelou ou clipboard indisponível */
    }
  }

  return (
    <button
      type="button"
      onClick={onShare}
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent",
        className,
      )}
    >
      <Share2 className="size-4" aria-hidden="true" />
      {label}
    </button>
  );
}
