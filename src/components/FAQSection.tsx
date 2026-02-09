import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Who is this program for?", a: "This program is designed for engineering students at KEC who want to build a career in DevOps and cloud engineering. No prior DevOps experience is required." },
  { q: "What are the prerequisites?", a: "Basic understanding of programming concepts and familiarity with any programming language. Everything else will be taught from scratch." },
  { q: "Is the certification industry-recognized?", a: "Yes! The joint certification by KEC and GUVI is recognized by industry partners and can be added to your professional profile." },
  { q: "What is the duration of the program?", a: "The program spans multiple months with live sessions, recorded content, hands-on labs, and a capstone project." },
  { q: "Will there be placement support?", a: "Absolutely. GUVI provides career guidance, resume reviews, mock interviews, and connects students with hiring partners." },
  { q: "Can I access the content after the program ends?", a: "Yes, you get lifetime access to the GUVI learning platform and all recorded sessions." },
];

const FAQSection = () => {
  return (
    <AnimatedSection id="faq">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-3 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5 font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
};

export default FAQSection;
