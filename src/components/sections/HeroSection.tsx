import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Clock, Zap } from "lucide-react";

const challenges = [
  { id: "revenue", label: "Hitting a revenue ceiling", icon: TrendingUp },
  { id: "time", label: "Working too many hours", icon: Clock },
  { id: "clarity", label: "Lacking strategic clarity", icon: Zap },
  { id: "scaling", label: "Struggling to scale", icon: Users },
];

const trustSignals = [
  "€500K+ in client revenue generated",
  "50+ founders mentored",
  "6-session proven framework",
];

export const HeroSection = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background glow effect */}
      <div className="absolute inset-0 gradient-glow opacity-50" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container relative z-10 px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Trusted by ambitious founders across Europe</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Scale to{" "}
            <span className="text-gradient">€15K/month</span>
            <br />
            with strategic mentoring
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            For ambitious solo founders and small business owners who want to increase revenue 
            and improve margins—without working more hours.
          </motion.p>

          {/* Interactive question */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <p className="text-sm text-muted-foreground mb-4">What's currently holding your business back?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {challenges.map((challenge) => (
                <button
                  key={challenge.id}
                  onClick={() => setSelectedChallenge(challenge.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedChallenge === challenge.id
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "glass glass-hover"
                  }`}
                >
                  <challenge.icon className="w-4 h-4" />
                  <span className="text-sm">{challenge.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="gradient-primary text-foreground font-semibold px-8 py-6 text-lg shadow-glow hover:shadow-elevated transition-all duration-300"
              onClick={() => scrollToSection("pricing")}
            >
              Book Your Free Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg border-border/50 hover:bg-secondary/50"
              onClick={() => scrollToSection("program")}
            >
              See How It Works
            </Button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {signal}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
