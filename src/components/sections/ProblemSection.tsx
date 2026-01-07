import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Brain, Clock, TrendingDown, Zap, ChevronDown } from "lucide-react";

const painPoints = [
  {
    id: "burnout",
    icon: Clock,
    title: "I'm working harder than ever, but revenue feels capped.",
    shortDesc: "60+ hour weeks with no growth in sight.",
    fullDesc: "The hustle mentality that got you started is now holding you back. You're trading time for money with no leverage in sight.",
    color: "text-red-400",
  },
  {
    id: "chaos",
    icon: AlertCircle,
    title: "My business depends too much on me.",
    shortDesc: "Every day feels like putting out fires.",
    fullDesc: "Without systems in place, you're reactive instead of proactive. Growth feels impossible when you can barely keep up.",
    color: "text-orange-400",
  },
  {
    id: "clarity",
    icon: Brain,
    title: "I don't know what to focus on next.",
    shortDesc: "Too many ideas, no clear direction.",
    fullDesc: "Shiny object syndrome is real. You're spread thin across multiple ideas, never going deep enough on any of them.",
    color: "text-yellow-400",
  },
  {
    id: "ceiling",
    icon: TrendingDown,
    title: "I've hit an invisible ceiling I can't break through.",
    shortDesc: "Stuck at the same revenue for months.",
    fullDesc: "You know you're capable of more, but something's holding you back. The ceiling isn't external—it's in your current approach.",
    color: "text-purple-400",
  },
];

const situations = [
  { id: "freelancer", label: "I'm a freelancer ready to productize" },
  { id: "founder", label: "I'm a solo founder hitting a ceiling" },
  { id: "owner", label: "I'm a business owner wanting to scale" },
  { id: "starter", label: "I'm just getting started" },
];

export const ProblemSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null);

  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-glow opacity-30" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-primary mb-4">
            Sound Familiar?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            You're not alone in feeling{" "}
            <span className="text-primary">stuck</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These aren't problems with you. They're problems with your current approach.
          </p>
        </motion.div>

        {/* Pain Point Cards - First person statements */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass glass-hover rounded-xl p-6 cursor-pointer ${
                expandedCard === point.id ? "ring-1 ring-primary/50" : ""
              }`}
              onClick={() => setExpandedCard(expandedCard === point.id ? null : point.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-secondary/50 ${point.color}`}>
                    <point.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 italic">"{point.title}"</h3>
                    <p className="text-muted-foreground text-sm">{point.shortDesc}</p>
                    
                    {expandedCard === point.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-muted-foreground text-sm mt-3 pt-3 border-t border-border/50"
                      >
                        {point.fullDesc}
                      </motion.p>
                    )}
                  </div>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    expandedCard === point.id ? "rotate-180" : ""
                  }`} 
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Situation Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="glass rounded-2xl p-8">
            <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Which best describes your situation?</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Select the option that resonates most with where you are right now.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-3">
              {situations.map((situation) => (
                <button
                  key={situation.id}
                  onClick={() => setSelectedSituation(situation.id)}
                  className={`p-4 rounded-lg text-left transition-all duration-300 ${
                    selectedSituation === situation.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 hover:bg-secondary text-foreground"
                  }`}
                >
                  <span className="text-sm font-medium">{situation.label}</span>
                </button>
              ))}
            </div>

            {selectedSituation && selectedSituation !== "starter" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-sm text-emerald-400"
              >
                ✓ Break the Ceiling might be perfect for you. Keep scrolling to learn more.
              </motion.p>
            )}
            {selectedSituation === "starter" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-sm text-muted-foreground"
              >
                This program is designed for established businesses. Keep building—we'll be here when you're ready!
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
