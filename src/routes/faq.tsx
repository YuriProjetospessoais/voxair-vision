import { createFileRoute } from "@tanstack/react-router";
import { Container, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { faqItems } from "@/components/site/faq-data";
import { ShareButton } from "@/components/site/ShareButton";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — VoxAir Systems" },
      {
        name: "description",
        content:
          "Perguntas frequentes sobre a VoxAir Systems: sistema integrado, Dock, autonomia com supervisão humana, estágio TRL 3–4 e como investidores podem conhecer mais.",
      },
      { property: "og:title", content: "FAQ — VoxAir Systems" },
      {
        property: "og:description",
        content:
          "Respostas objetivas sobre a tecnologia, o estágio e o modelo da VoxAir Systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main>
      <div className="bg-deep text-deep-foreground tech-grid-dark">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow text-deep-foreground/50">FAQ</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl">
              Perguntas frequentes
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-deep-foreground/65">
              Respostas diretas sobre o que a VoxAir Systems constrói, em que estágio está e como o
              sistema funciona.
            </p>
          </Reveal>
        </Container>
      </div>

      <Section className="border-t-0">
        <FaqAccordion />
        <Reveal className="mt-10">
          <ShareButton title="FAQ — VoxAir Systems" />
        </Reveal>
      </Section>
    </main>
  );
}
