import { useState } from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Settings, Rocket, ChevronRight, ArrowRight } from "lucide-react";

const pillars = [
  {
    id: "direction",
    icon: Target,
    title: "Strategic Direction",
    description: "Define your north star and create a focused roadmap",
    details: [
      "Clarify your unique value proposition",
      "Identify your most profitable customer segment",
      "Set clear 90-day revenue targets",
    ],
  },
  {
    id: "revenue",
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Increase prices, improve margins, and find hidden profit",
    details: [
      "Audit your current pricing strategy",
      "Identify quick-win revenue opportunities",
      "Create upsell and retention systems",
    ],
  },
  {
    id: "operations",
    icon: Settings,
    title: "Operational Simplification",
    description: "Remove complexity and create leverage",
    details: [
      "Eliminate low-value activities",
      "Build repeatable systems and processes",
      "Automate what can be automated",
    ],
  },
  {
    id: "execution",
    icon: Rocket,
    title: "Execution with Leverage",
    description: "Focus on high-impact actions that compound",
    details: [
      "Weekly accountability check-ins",
      "Priority-based action planning",
      "Course correction when needed",
    ],
  },
];

const journey = {
  before: {
    title: "Before",
    items: ["Confusion about what to focus on", "Revenue feels stuck", "Working in the business, not on it"],
    color: "from-red-500/20 to-red-500/5",
    borderColor: "border-red-500/30",
    textColor: "text-red-400",
  },
  during: {
    title: "During",
    items: ["6 focused strategy sessions", "Clear direction at every step", "Practical decisions, not theory"],
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
    textColor: "text-primary",
  },
  after: {
    title: "After",
    items: ["Confidence in your next moves", "A business that feels lighter", "Sustainable path to €15K+/month"],
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-400",
  },
};

export const ProgramSection = () => {
  const [activePillar, setActivePillar] = useState<string>("direction");

  const activePillarData = pillars.find((p) => p.id === activePillar);

  return (
    <section id="program" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-primary mb-4">
            The Program
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Break the Ceiling
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A focused 6-session sprint to optimize and scale your business to €15K/month.
            <br />
            <span className="text-foreground font-medium">Structured. Strategic. Anti-hustle.</span>
          </p>
        </motion.div>

        {/* Before → During → After Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h3 className="text-xl font-semibold text-center mb-8">The Transformation Journey</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(journey).map(([key, phase], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative rounded-xl p-6 bg-gradient-to-b ${phase.color} border ${phase.borderColor}`}
              >
                <h4 className={`text-lg font-bold mb-4 ${phase.textColor}`}>{phase.title}</h4>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ChevronRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${phase.textColor}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                
                {/* Arrow between cards */}
                {index < 2 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4 Pillars */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-xl font-semibold text-center mb-8">The 4 Optimization Pillars</h3>
          
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {pillars.map((pillar, index) => (
              <motion.button
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActivePillar(pillar.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 ${
                  activePillar === pillar.id
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "glass glass-hover"
                }`}
              >
                <pillar.icon className={`w-8 h-8 mb-4 ${
                  activePillar === pillar.id ? "" : "text-primary"
                }`} />
                <h4 className="font-semibold mb-2">{pillar.title}</h4>
                <p className={`text-sm ${
                  activePillar === pillar.id ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {pillar.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Pillar Details */}
          {activePillarData && (
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <activePillarData.icon className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold">{activePillarData.title}</h4>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {activePillarData.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
