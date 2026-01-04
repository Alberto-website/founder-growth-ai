import { motion } from "framer-motion";
import { Check, X, ArrowRight, Shield, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
  "6 x 60-minute 1:1 strategy sessions",
  "Personalized business assessment",
  "Custom 60-day action plan",
  "Full systems & processes audit",
  "Revenue optimization strategies",
  "Async support between sessions",
  "All frameworks, templates & tools",
  "Recording of every session",
];

const notIncluded = [
  "Done-for-you implementation",
  "Cookie-cutter templates",
  "Passive video course content",
  "Generic group coaching",
];

const guarantees = [
  {
    icon: Shield,
    title: "Value Guarantee",
    description: "If after session 1 you don't see value, I'll refund you in full.",
  },
  {
    icon: Clock,
    title: "Lifetime Access",
    description: "All materials, recordings, and frameworks are yours forever.",
  },
  {
    icon: Sparkles,
    title: "ROI Focused",
    description: "Designed to pay for itself within the first 60 days.",
  },
];

export const PricingSection = () => {
  const openCalendly = () => {
    // This will open Calendly - user needs to add their link
    window.open("https://calendly.com", "_blank");
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-glow opacity-30" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-primary mb-4">
            Investment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A sprint that{" "}
            <span className="text-gradient">pays for itself</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One focused investment to unlock sustainable, scalable growth.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl overflow-hidden"
          >
            <div className="gradient-primary p-1">
              <div className="bg-card rounded-xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left: Price and CTA */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Break the Ceiling Sprint</h3>
                    <p className="text-muted-foreground mb-6">
                      6 sessions to optimize and scale your business
                    </p>
                    
                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl md:text-6xl font-bold">€1,250</span>
                        <span className="text-muted-foreground">one-time</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        That's ~€208 per session
                      </p>
                    </div>

                    <Button 
                      size="lg"
                      onClick={openCalendly}
                      className="w-full gradient-primary text-foreground font-semibold py-6 text-lg shadow-glow hover:shadow-elevated transition-all duration-300 mb-4"
                    >
                      Book Your Free Call
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      No payment required for the discovery call
                    </p>
                  </div>

                  {/* Right: What's included */}
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-400" />
                      What's Included
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {included.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold mb-4 flex items-center gap-2 text-muted-foreground">
                      <X className="w-5 h-5 text-red-400" />
                      What's NOT Included
                    </h4>
                    <ul className="space-y-3">
                      {notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guarantees */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <guarantee.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-1">{guarantee.title}</h4>
                <p className="text-sm text-muted-foreground">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
