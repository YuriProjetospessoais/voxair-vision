import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowLeft } from "lucide-react";
import { Container, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const PERFIS = [
  "Investidor",
  "Parceiro estratégico",
  "Cliente / operação agrícola",
  "Engenharia / tecnologia",
  "Outro",
] as const;

type Perfil = (typeof PERFIS)[number];

/** Mapeia o parâmetro ?assunto= da URL para um perfil do formulário. */
function perfilFromAssunto(assunto?: string): Perfil {
  if (!assunto) return "Investidor";
  const a = assunto.toLowerCase();
  if (a.includes("invest")) return "Investidor";
  if (a.includes("parceria")) return "Parceiro estratégico";
  if (a.includes("opera") || a.includes("agri") || a.includes("cliente") || a.includes("produtor"))
    return "Cliente / operação agrícola";
  if (a.includes("engenharia") || a.includes("tecno")) return "Engenharia / tecnologia";
  return "Outro";
}

type ContatoSearch = { assunto?: string };

export const Route = createFileRoute("/contato")({
  validateSearch: (search: Record<string, unknown>): ContatoSearch => ({
    assunto: typeof search.assunto === "string" ? search.assunto : undefined,
  }),
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
  "mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent aria-invalid:border-destructive";

type FormState = { nome: string; empresa: string; email: string; perfil: Perfil; mensagem: string };
type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  const nome = form.nome.trim();
  const email = form.email.trim();
  const mensagem = form.mensagem.trim();

  if (!nome) errors.nome = "Informe seu nome.";
  else if (nome.length > 100) errors.nome = "Nome deve ter menos de 100 caracteres.";

  if (form.empresa.trim().length > 100) errors.empresa = "Empresa deve ter menos de 100 caracteres.";

  if (!email) errors.email = "Informe seu e-mail.";
  else if (!EMAIL_RE.test(email) || email.length > 255) errors.email = "Informe um e-mail válido.";

  if (!PERFIS.includes(form.perfil)) errors.perfil = "Selecione um perfil.";

  if (!mensagem) errors.mensagem = "Escreva sua mensagem.";
  else if (mensagem.length < 10) errors.mensagem = "Mensagem muito curta — conte um pouco mais.";
  else if (mensagem.length > 2000) errors.mensagem = "Mensagem deve ter menos de 2000 caracteres.";

  return errors;
}

/**
 * Envio de contato. Sem backend configurado no momento: a mensagem é
 * entregue via o cliente de e-mail do usuário (mailto). A estrutura
 * assíncrona já está preparada para uma futura integração de backend —
 * basta substituir o corpo desta função.
 */
async function sendContact(form: FormState): Promise<void> {
  const subject = `[Site] ${form.perfil}${form.empresa.trim() ? ` — ${form.empresa.trim()}` : ""}`;
  const body = [
    `Nome: ${form.nome.trim()}`,
    `Empresa: ${form.empresa.trim() || "—"}`,
    `E-mail: ${form.email.trim()}`,
    `Perfil: ${form.perfil}`,
    "",
    form.mensagem.trim(),
  ].join("\n");

  const mailto = `mailto:voxairsystems@gmail.com?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
  // Pequena pausa para o estado de loading ser perceptível antes do sucesso.
  await new Promise((r) => setTimeout(r, 600));
}

function ContatoPage() {
  const { assunto } = Route.useSearch();
  const initialPerfil = useMemo(() => perfilFromAssunto(assunto), [assunto]);

  const [form, setForm] = useState<FormState>({
    nome: "",
    empresa: "",
    email: "",
    perfil: initialPerfil,
    mensagem: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      await sendContact(form);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm({ nome: "", empresa: "", email: "", perfil: initialPerfil, mensagem: "" });
    setErrors({});
    setStatus("idle");
  };

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
            {status === "success" ? (
              <div
                role="status"
                className="rounded-lg border border-border bg-card p-10 text-center"
              >
                <CheckCircle2 aria-hidden="true" className="mx-auto size-12 text-accent" />
                <h2 className="mt-5 text-2xl font-semibold">Mensagem preparada</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Seu aplicativo de e-mail foi aberto com a mensagem preenchida para
                  voxairsystems@gmail.com. Se não abriu, envie diretamente para{" "}
                  <a
                    href="mailto:voxairsystems@gmail.com"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    voxairsystems@gmail.com
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-7 inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
                >
                  <ArrowLeft aria-hidden="true" className="size-4" />
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                noValidate
                className="rounded-lg border border-border bg-card p-7"
                onSubmit={onSubmit}
              >
                {status === "error" && Object.keys(errors).length === 0 && (
                  <p
                    role="alert"
                    className="mb-5 flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                  >
                    <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
                    Não foi possível preparar o envio. Tente novamente ou escreva diretamente para
                    voxairsystems@gmail.com.
                  </p>
                )}

                <fieldset>
                  <legend className="text-sm font-medium">Seu perfil</legend>
                  <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="Perfil">
                    {PERFIS.map((p) => (
                      <button
                        key={p}
                        type="button"
                        role="radio"
                        aria-checked={form.perfil === p}
                        onClick={() => set("perfil", p)}
                        className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                          form.perfil === p
                            ? "border-accent bg-accent/10 font-medium text-foreground"
                            : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  {errors.perfil && (
                    <p role="alert" className="mt-2 text-xs text-destructive">
                      {errors.perfil}
                    </p>
                  )}
                </fieldset>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nome" className="text-sm font-medium">
                      Nome <span aria-hidden="true" className="text-accent">*</span>
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      autoComplete="name"
                      maxLength={100}
                      aria-invalid={!!errors.nome}
                      aria-describedby={errors.nome ? "erro-nome" : undefined}
                      className={field}
                      value={form.nome}
                      onChange={(e) => set("nome", e.target.value)}
                    />
                    {errors.nome && (
                      <p id="erro-nome" role="alert" className="mt-1.5 text-xs text-destructive">
                        {errors.nome}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="empresa" className="text-sm font-medium">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      autoComplete="organization"
                      maxLength={100}
                      aria-invalid={!!errors.empresa}
                      aria-describedby={errors.empresa ? "erro-empresa" : undefined}
                      className={field}
                      value={form.empresa}
                      onChange={(e) => set("empresa", e.target.value)}
                    />
                    {errors.empresa && (
                      <p id="erro-empresa" role="alert" className="mt-1.5 text-xs text-destructive">
                        {errors.empresa}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-mail <span aria-hidden="true" className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={255}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "erro-email" : undefined}
                    className={field}
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                  {errors.email && (
                    <p id="erro-email" role="alert" className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="mt-5">
                  <label htmlFor="mensagem" className="text-sm font-medium">
                    Mensagem <span aria-hidden="true" className="text-accent">*</span>
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={6}
                    maxLength={2000}
                    aria-invalid={!!errors.mensagem}
                    aria-describedby={errors.mensagem ? "erro-mensagem" : undefined}
                    className={field}
                    value={form.mensagem}
                    onChange={(e) => set("mensagem", e.target.value)}
                  />
                  {errors.mensagem && (
                    <p id="erro-mensagem" role="alert" className="mt-1.5 text-xs text-destructive">
                      {errors.mensagem}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "loading" && (
                    <Loader2 aria-hidden="true" className="size-4 animate-spin" />
                  )}
                  {status === "loading" ? "Preparando envio…" : "Enviar mensagem"}
                </button>
                <p className="mt-3 text-xs text-muted-foreground">
                  O envio abre seu aplicativo de e-mail com a mensagem preenchida para
                  voxairsystems@gmail.com.
                </p>
              </form>
            )}
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
            <div className="rounded-lg border border-border p-6">
              <p className="eyebrow">Operação agrícola</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Produtores interessados na operação de pulverização como serviço podem registrar
                interesse pelo formulário, selecionando o perfil correspondente.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
