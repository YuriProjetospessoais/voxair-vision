import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Container, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — VoxAir Systems" },
      {
        name: "description",
        content:
          "Fale com a VoxAir Systems: investidores, parceiros estratégicos e produtores agrícolas interessados em pulverização autônoma de precisão.",
      },
      { property: "og:title", content: "Contato — VoxAir Systems" },
      {
        property: "og:description",
        content: "Entre em contato com a VoxAir Systems por formulário ou e-mail.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contato" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const field =
  "mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

function ContatoPage() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    assunto: "Investimento",
    mensagem: "",
  });

  const mailto = `mailto:voxairsystems@gmail.com?subject=${encodeURIComponent(
    `[Site] ${form.assunto}${form.empresa ? ` — ${form.empresa}` : ""}`,
  )}&body=${encodeURIComponent(
    `Nome: ${form.nome}\nEmpresa: ${form.empresa}\nE-mail: ${form.email}\nAssunto: ${form.assunto}\n\n${form.mensagem}`,
  )}`;

  return (
    <main>
      <div className="border-b border-border tech-grid">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow">Contato</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl">
              Fale com a VoxAir
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Investidores, parceiros estratégicos e produtores: envie sua mensagem e retornamos
              pelo e-mail informado.
            </p>
          </Reveal>
        </Container>
      </div>

      <Section>
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <form
              className="rounded-lg border border-border bg-card p-7"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailto;
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="text-sm font-medium">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    required
                    autoComplete="name"
                    className={field}
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="text-sm font-medium">
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    autoComplete="organization"
                    className={field}
                    value={form.empresa}
                    onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={field}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="assunto" className="text-sm font-medium">
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    className={field}
                    value={form.assunto}
                    onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                  >
                    <option>Investimento</option>
                    <option>Parceria estratégica</option>
                    <option>Operação / produtor agrícola</option>
                    <option>Imprensa</option>
                    <option>Outro</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="mensagem" className="text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={6}
                  className={field}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Enviar mensagem
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                O envio abre seu aplicativo de e-mail com a mensagem preenchida para
                voxairsystems@gmail.com.
              </p>
            </form>
          </Reveal>

          <Reveal delay={80} className="space-y-6">
            <div className="rounded-lg border border-border p-6">
              <p className="eyebrow">E-mail</p>
              <a
                href="mailto:voxairsystems@gmail.com"
                className="mt-2 block text-base font-medium underline-offset-4 hover:underline"
              >
                voxairsystems@gmail.com
              </a>
            </div>
            <div className="rounded-lg border border-border p-6">
              <p className="eyebrow">Investidores</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Materiais detalhados sobre tecnologia, estágio de desenvolvimento e equipe são
                compartilhados sob demanda, mediante contato direto.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
