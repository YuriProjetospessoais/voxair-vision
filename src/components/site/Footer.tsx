import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Container } from "./Section";

const columns = [
  {
    title: "Empresa",
    links: [
      { to: "/sobre", label: "Sobre" },
      { to: "/tecnologia", label: "Tecnologia" },
      { to: "/solucoes", label: "Soluções" },
    ],
  },
  {
    title: "Negócios",
    links: [
      { to: "/mercado", label: "Mercado" },
      { to: "/investidores", label: "Investidores" },
      { to: "/faq", label: "FAQ" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr]">
          <div>
            <Logo invert />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-deep-foreground/60">
              Sistemas autônomos e robótica aplicada à agricultura: hardware, software e dados
              integrados para pulverização agrícola de precisão.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="eyebrow text-deep-foreground/45">{col.title}</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-deep-foreground/70 transition-colors hover:text-deep-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="eyebrow text-deep-foreground/45">Contato</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/contato"
                  className="text-deep-foreground/70 transition-colors hover:text-deep-foreground"
                >
                  Fale conosco
                </Link>
              </li>
              <li>
                <a
                  href="mailto:voxairsystems@gmail.com"
                  className="text-deep-foreground/70 transition-colors hover:text-deep-foreground"
                >
                  voxairsystems@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-7 rounded-md border border-deep-foreground/12 p-4">
              <p className="eyebrow text-deep-foreground/45">Status</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-deep-foreground/80">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                TRL 3–4
              </p>
              <p className="text-xs text-deep-foreground/55">Em desenvolvimento tecnológico</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-deep-foreground/10 pt-6 text-xs text-deep-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VoxAir Systems. Todos os direitos reservados.</p>
          <Link to="/privacidade" className="transition-colors hover:text-deep-foreground">
            Política de Privacidade
          </Link>
        </div>
      </Container>
    </footer>
  );
}
