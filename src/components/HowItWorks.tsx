import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "../data/faq.json";
const HowItWorks = () => {
  return (
    <Accordion type="single" collapsible>
      {faqs.map((faq, i) => (
        <AccordionItem value={`item-${i + 1}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default HowItWorks;
