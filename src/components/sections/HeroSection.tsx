import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Clock, Zap, Sparkles, CheckCircle2 } from "lucide-react";

const challenges = [
  { id: "revenue", label: "Hitting a revenue ceiling", icon: TrendingUp, color: "from-blue-500 to-indigo-500" },
  { id: "time", label: "Working too many hours", icon: Clock, color: "from-purple-500 to-pink-500" },
  { id: "clarity", label: "Lacking strategic clarity", icon: Zap, color: "from-cyan-500 to-blue-500" },
  { id: "scaling", label: "Struggling to scale", icon: Users, color: "from-indigo-500 to-purple-500" },
];

const trustSignals = [
  { value: "€500K+", label: "Revenue Generated" },
  { value: "50+", label: "Founders Mentored" },
  { value: "6", label: "Session Sprint" },
];

const floatingElements = [
  { size: "w-96 h-96", position: "top-10 -left-20", delay: 0, color: "bg-brand-blue/20" },
  { size: "w-[500px] h-[500px]", position: "-bottom-32 -right-32", delay: 2, color: "bg-brand-purple/15" },
  { size: "w-72 h-72", position: "top-1/3 right-10", delay: 4, color: "bg-brand-cyan/10" },
  { size: "w-64 h-64", position: "bottom-1/4 left-1/4", delay: 1, color: "bg-brand-indigo/10" },
];

export const HeroSection = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      
      {/* Animated floating orbs */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${el.size} ${el.position} ${el.color} rounded-full blur-3xl animate-morph`}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-glow animate-pulse-glow" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise opacity-50" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      <div className="container relative z-10 px-4 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8 group cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              Trusted by ambitious founders across Europe
            </span>
            <Sparkles className="w-4 h-4 text-brand-blue" />
          </motion.div>

          {/* Main headline with gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tight"
          >
            Scale to{" "}
            <span className="relative inline-block">
              <span className="text-gradient-animated">€15K/month</span>
            </span>
            <br />
            <span className="text-foreground/90">with strategic mentoring</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            For ambitious solo founders and small business owners who want to 
            <span className="text-foreground font-medium"> increase revenue</span> and 
            <span className="text-foreground font-medium"> improve margins</span>—without working more hours.
          </motion.p>

          {/* Interactive challenge selector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-14"
          >
            <p className="text-sm font-medium text-muted-foreground mb-5 tracking-wide uppercase">
              What's currently holding your business back?
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {challenges.map((challenge, index) => (
                <motion.button
                  key={challenge.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  onClick={() => setSelectedChallenge(challenge.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-500 group overflow-hidden ${
                    selectedChallenge === challenge.id
                      ? "bg-gradient-to-r " + challenge.color + " text-white shadow-glow-lg"
                      : "glass glass-hover"
                  }`}
                >
                  {/* Hover gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${challenge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <challenge.icon className={`w-5 h-5 relative z-10 ${
                    selectedChallenge === challenge.id ? "text-white" : "text-brand-blue"
                  }`} />
                  <span className="text-sm font-medium relative z-10">{challenge.label}</span>
                  
                  <AnimatePresence>
                    {selectedChallenge === challenge.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="ml-1"
                      >
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button 
              size="lg" 
              className="relative group gradient-primary text-white font-semibold px-10 py-7 text-lg rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-500 overflow-hidden"
              onClick={() => scrollToSection("pricing")}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: isHovering ? ["-100%", "100%"] : "-100%",
                }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center">
                Book Your Free Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-10 py-7 text-lg rounded-2xl border-border/50 bg-background/50 backdrop-blur-sm hover:bg-secondary/50 hover:border-primary/30 transition-all duration-500 group"
              onClick={() => scrollToSection("program")}
            >
              <span className="flex items-center">
                See How It Works
                <ArrowRight className="ml-2 w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </span>
            </Button>
          </motion.div>

          {/* Trust signals with animated counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {trustSignals.map((signal, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                  {signal.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {signal.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          className="w-7 h-12 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2 cursor-pointer hover:border-primary/50 transition-colors"
          onClick={() => scrollToSection("problems")}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 bg-gradient-to-b from-brand-blue to-brand-purple rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};