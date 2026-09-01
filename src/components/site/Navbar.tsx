import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Section";

const links = [
  { to: "/sobre", label: "Sobre" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/tecnologia", label: "Tecnologia" },
  { to: "/mercado", label: "Mercado" },
  { to: "/contato", label: "Contato" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-border bg-background/90 backdrop-blur" : "border-transparent bg-background"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" aria-label="VoxAir Systems — página inicial" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Fale conosco
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-foreground last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-md bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Fale conosco
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
