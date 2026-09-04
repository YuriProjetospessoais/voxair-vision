import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, type FaqItem } from "./faq-data";

export function FaqAccordion({ items = faqItems }: { items?: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="mt-10 w-full">
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
          <AccordionTrigger className="text-left text-base font-medium hover:text-accent hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
