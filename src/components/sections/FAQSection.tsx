import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What if I don't see results?",
    answer: "I offer a value guarantee: if after our first session you don't see the value, I'll refund you in full. I've never had to use it, but it's there for your peace of mind. That said, results require your commitment to implementation—this isn't magic, it's strategic work.",
  },
  {
    question: "What if I'm too busy right now?",
    answer: "Honestly? Being 'too busy' is often part of the problem this sprint solves. The 6 sessions are 60 minutes each, spread over 6-8 weeks. Between sessions, expect 2-4 hours per week implementing. If you genuinely can't commit that, now might not be the right time—and that's okay.",
  },
  {
    question: "What if my business is different?",
    answer: "I've worked with freelancers, consultants, agency owners, digital product creators, and service business owners across dozens of industries. The frameworks are adaptable because they focus on fundamentals: clarity, pricing, leverage, and execution. During the discovery call, we'll assess whether your situation fits.",
  },
  {
    question: "How is this different from other coaching?",
    answer: "Most coaching is either too generic (cookie-cutter frameworks) or too vague (just 'accountability calls'). Break the Ceiling is a structured sprint with clear outcomes. Every session has a purpose, and you leave with concrete deliverables—not just motivation.",
  },
  {
    question: "What if I'm not sure I'm ready?",
    answer: "That's exactly what the free discovery call is for. We'll talk through your situation, goals, and challenges. If I don't think this is the right fit for you right now, I'll tell you honestly—and potentially suggest what to focus on first.",
  },
  {
    question: "How much time do I need to commit?",
    answer: "The 6 sessions are 60 minutes each, spread over 6-8 weeks. Between sessions, expect to spend 2-4 hours per week implementing what we discuss. This isn't passive learning—it's active transformation.",
  },
  {
    question: "What happens after the 6 sessions?",
    answer: "You'll have a complete strategic foundation, systems, and 60-day action plan to continue executing. Many clients continue with monthly check-ins, but the sprint is designed to make you self-sufficient.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we can discuss payment options during the discovery call if needed. My goal is to remove financial barriers for founders who are serious about growth.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Questions?{" "}
            <span className="text-primary">Answered.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Honest answers to the real questions founders ask.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
