import { createFileRoute } from "@tanstack/react-router";
import { Container, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — VoxAir Systems" },
      {
        name: "description",
        content:
          "Como a VoxAir Systems trata os dados enviados por meio do formulário de contato e do e-mail institucional.",
      },
      { property: "og:title", content: "Política de Privacidade — VoxAir Systems" },
      {
        property: "og:description",
        content: "Tratamento de dados de contato pela VoxAir Systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: PrivacidadePage,
});

const blocks = [
  {
    t: "Quais dados são coletados",
    d: "Apenas os dados que você informa voluntariamente no formulário de contato: nome, empresa, e-mail, perfil, assunto e a mensagem escrita por você.",
  },
  {
    t: "Como o envio funciona",
    d: "O formulário do site não envia dados para um servidor da VoxAir. Ao enviar, o conteúdo preenchido é transferido para o seu próprio aplicativo de e-mail, que abre uma mensagem endereçada a voxairsystems@gmail.com. O envio é feito por você, a partir do seu provedor de e-mail.",
  },
  {
    t: "Finalidade",
    d: "Os dados recebidos por e-mail são utilizados exclusivamente para responder ao seu contato e conduzir a conversa correspondente (investimento, parceria, operação, fornecimento ou imprensa).",
  },
  {
    t: "Compartilhamento",
    d: "A VoxAir Systems não comercializa nem compartilha esses dados com terceiros para fins de marketing.",
  },
  {
    t: "Cookies e analytics",
    d: "Este site não utiliza cookies de rastreamento nem ferramentas de analytics. Caso isso mude, esta página será atualizada antes da implementação.",
  },
  {
    t: "Seus direitos",
    d: "Você pode solicitar a exclusão das mensagens e dados enviados escrevendo para voxairsystems@gmail.com.",
  },
];

function PrivacidadePage() {
  return (
    <main>
      <div className="bg-deep text-deep-foreground tech-grid-dark">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow text-deep-foreground/50">Legal</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl">
              Política de Privacidade
            </h1>
            <p className="mt-5 max-w-2xl text-base text-deep-foreground/65">
              Última atualização conforme a versão atual do site.
            </p>
          </Reveal>
        </Container>
      </div>

      <Section className="border-t-0">
        <div className="max-w-3xl space-y-8">
          {blocks.map((b, i) => (
            <Reveal key={b.t} delay={i * 50}>
              <h2 className="text-xl font-semibold">{b.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
