import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, DollarSign, Calendar, Cog, Users, ChevronDown } from "lucide-react";

const features = [
  {
    id: "mindset",
    icon: Brain,
    title: "Mindset Reset",
    shortDesc: "Shift from technician to CEO",
    fullDesc: "Most founders are stuck working IN their business instead of ON it. We'll rewire how you think about your role, your time, and your value. This isn't woo-woo motivation—it's practical mental frameworks that change how you operate.",
    outcomes: ["Think strategically, not reactively", "Value your time correctly", "Make decisions faster and with more confidence"],
  },
  {
    id: "profit",
    icon: DollarSign,
    title: "Profit-Driven Decisions",
    shortDesc: "Every choice aligned with revenue",
    fullDesc: "Stop making decisions based on gut feelings or what competitors are doing. We'll install a profit-first operating system that ensures every major decision moves you toward your revenue goals.",
    outcomes: ["Clear criteria for opportunity evaluation", "Say no to the wrong things", "Double down on what actually works"],
  },
  {
    id: "action",
    icon: Calendar,
    title: "60-Day Action Plan",
    shortDesc: "Your roadmap to €15K/month",
    fullDesc: "No vague goals or wishy-washy to-do lists. You'll leave with a concrete, week-by-week action plan for the 60 days following our sprint. Every action is prioritized by impact.",
    outcomes: ["Weekly milestones and targets", "Clear priority ordering", "Built-in checkpoints and adjustments"],
  },
  {
    id: "systems",
    icon: Cog,
    title: "Business Systems Overhaul",
    shortDesc: "Build leverage, not dependency",
    fullDesc: "We'll identify and build the systems that create leverage—so your business can grow without requiring proportionally more of your time. This is how you break the ceiling without burning out.",
    outcomes: ["Repeatable processes for key activities", "Automation opportunities identified", "Delegation frameworks in place"],
  },
  {
    id: "mentoring",
    icon: Users,
    title: "1:1 Mentoring & Accountability",
    shortDesc: "Personal guidance every step",
    fullDesc: "This isn't a course you consume alone. You get direct access to me throughout the sprint. I'll keep you accountable, answer questions, and help you navigate obstacles as they arise.",
    outcomes: ["6 focused 1:1 sessions", "Async support between sessions", "Someone in your corner who gets it"],
  },
];

export const FeaturesSection = () => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>("mindset");

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-indigo/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-primary mb-4">
            What's Inside
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="text-primary">scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The Break the Ceiling sprint is designed to give you everything you need—nothing you don't.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                className={`w-full glass rounded-xl p-6 text-left transition-all duration-300 ${
                  expandedFeature === feature.id ? "ring-1 ring-primary/50" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg transition-colors ${
                      expandedFeature === feature.id ? "bg-primary text-primary-foreground" : "bg-secondary"
                    }`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.shortDesc}</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${
                    expandedFeature === feature.id ? "rotate-180" : ""
                  }`} />
                </div>

                <AnimatePresence>
                  {expandedFeature === feature.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-border/50">
                        <p className="text-muted-foreground mb-4">{feature.fullDesc}</p>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {feature.outcomes.map((outcome, i) => (
                            <div key={i} className="bg-secondary/50 rounded-lg p-3">
                              <p className="text-sm">{outcome}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
