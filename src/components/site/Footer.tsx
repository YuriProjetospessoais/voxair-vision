import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Container } from "./Section";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Sistemas autônomos e robótica aplicada à agricultura: hardware, software e dados
              integrados para pulverização agrícola de precisão.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="eyebrow">Navegação</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { to: "/sobre", label: "Sobre" },
                { to: "/solucoes", label: "Soluções" },
                { to: "/tecnologia", label: "Tecnologia" },
                { to: "/mercado", label: "Mercado" },
                { to: "/contato", label: "Contato" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Contato</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:voxairsystems@gmail.com"
                  className="transition-colors hover:text-foreground"
                >
                  voxairsystems@gmail.com
                </a>
              </li>
              <li>
                <Link to="/contato" className="transition-colors hover:text-foreground">
                  Formulário de contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VoxAir Systems. Todos os direitos reservados.</p>
          <p>Empresa em estágio inicial de desenvolvimento tecnológico (TRL 3–4).</p>
        </div>
      </Container>
    </footer>
  );
}
