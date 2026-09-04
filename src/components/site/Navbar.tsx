import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Section";

const links = [
  { to: "/sobre", label: "Sobre" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/tecnologia", label: "Tecnologia" },
  { to: "/mercado", label: "Mercado" },
] as const;

/** Seções da Home usadas pelo indicador de seção ativa. */
const homeSections = [
  { id: "problema", label: "Problema" },
  { id: "solucao", label: "Solução" },
  { id: "tecnologia", label: "Tecnologia" },
  { id: "roadmap", label: "Roadmap" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueia o scroll do body enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      setActive(null);
      return;
    }
    const els = homeSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.6] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-deep-foreground/10 bg-deep/95 backdrop-blur-md"
          : "border-transparent bg-deep"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="VoxAir Systems — página inicial">
          <Logo invert />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-deep-foreground/65 transition-colors hover:text-deep-foreground"
              activeProps={{ className: "text-sm text-deep-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/investidores"
            className="text-sm text-deep-foreground/65 transition-colors hover:text-deep-foreground"
            activeProps={{ className: "text-sm text-deep-foreground font-medium" }}
          >
            Investidores
          </Link>
          <Link
            to="/contato"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Fale com a VoxAir
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-deep-foreground/15 text-deep-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Indicador discreto de seção ativa (apenas na Home, desktop) */}
      {isHome && (
        <div className="hidden border-t border-deep-foreground/10 bg-deep/95 lg:block">
          <Container className="flex h-9 items-center gap-6">
            {homeSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={`flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase transition-colors ${
                  active === s.id
                    ? "text-deep-foreground"
                    : "text-deep-foreground/40 hover:text-deep-foreground/70"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`size-1.5 rounded-full transition-colors ${
                    active === s.id ? "bg-accent" : "bg-deep-foreground/25"
                  }`}
                />
                {s.label}
              </a>
            ))}
          </Container>
        </div>
      )}

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-deep lg:hidden"
        >
          <Container className="flex flex-col py-4">
            {[...links, { to: "/investidores", label: "Investidores" } as const].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-deep-foreground/10 py-4 text-base text-deep-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/faq"
              onClick={() => setOpen(false)}
              className="border-b border-deep-foreground/10 py-4 text-base text-deep-foreground"
            >
              FAQ
            </Link>
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-md bg-accent px-4 py-3.5 text-center text-sm font-medium text-accent-foreground"
            >
              Fale com a VoxAir
            </Link>
            <p className="mt-6 text-xs text-deep-foreground/45">
              Estágio atual: TRL 3–4 — desenvolvimento tecnológico.
            </p>
          </Container>
        </div>
      )}
    </header>
  );
}
