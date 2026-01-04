import { useState } from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Settings, Rocket, ChevronRight } from "lucide-react";

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

const sessions = [
  { number: 1, title: "Discovery & Assessment", focus: "Map your current state and define success" },
  { number: 2, title: "Strategic Foundation", focus: "Lock in your direction and positioning" },
  { number: 3, title: "Revenue Architecture", focus: "Design your path to €15K/month" },
  { number: 4, title: "Systems & Leverage", focus: "Build the infrastructure for growth" },
  { number: 5, title: "Execution Sprint", focus: "Implement and iterate rapidly" },
  { number: 6, title: "Scale & Sustain", focus: "Lock in gains and plan what's next" },
];

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
            Structured. Strategic. Anti-hustle.
          </p>
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

        {/* Session Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8">6 Sessions, 6 Weeks, Complete Transformation</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            
            <div className="space-y-8">
              {sessions.map((session, index) => (
                <motion.div
                  key={session.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Session number */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm z-10">
                    {session.number}
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}>
                    <div className="glass rounded-xl p-6">
                      <h4 className="font-semibold mb-1">{session.title}</h4>
                      <p className="text-sm text-muted-foreground">{session.focus}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
