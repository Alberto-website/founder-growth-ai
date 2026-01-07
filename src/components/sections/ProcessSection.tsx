import { motion } from "framer-motion";
import { Phone, FileText, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Phone,
    title: "Book a Free Call",
    description: "We'll discuss your current situation, goals, and whether Break the Ceiling is the right fit for you.",
    reassurance: "No pressure, no pitch—just an honest conversation.",
  },
  {
    number: 2,
    icon: FileText,
    title: "Get Your Custom Plan",
    description: "If we decide to work together, I'll create a personalized roadmap for your 6-session sprint.",
    reassurance: "Every plan is tailored to your specific business and goals.",
  },
  {
    number: 3,
    icon: Rocket,
    title: "Optimize & Scale",
    description: "Over 6 focused sessions, we'll implement the strategies that will take you to €15K/month and beyond.",
    reassurance: "You'll have my full support throughout the entire process.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-primary mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Three simple steps to{" "}
            <span className="text-primary">break through</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started is simple. Here's how we'll work together.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
            
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-8 h-full flex flex-col">
                  {/* Step number with icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto shadow-glow">
                      <step.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-center mb-4 flex-grow">
                    {step.description}
                  </p>
                  
                  {/* Reassurance */}
                  <div className="bg-secondary/50 rounded-lg p-3 text-center">
                    <p className="text-sm text-muted-foreground italic">
                      {step.reassurance}
                    </p>
                  </div>
                </div>

                {/* Arrow for non-last items */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-24 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
