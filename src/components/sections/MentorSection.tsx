import { motion } from "framer-motion";
import { Quote, Globe, Briefcase, GraduationCap, Heart } from "lucide-react";
import albertoImage from "@/assets/alberto.png";

const timeline = [
  {
    year: "2010",
    title: "Started as a Freelancer",
    description: "Began the journey in digital consulting, learning the hard lessons early.",
  },
  {
    year: "2014",
    title: "Built & Scaled Agencies",
    description: "Grew multiple service businesses, discovering what works (and what doesn't).",
  },
  {
    year: "2018",
    title: "Transition to Mentoring",
    description: "Started helping other founders avoid the mistakes I made.",
  },
  {
    year: "2022",
    title: "Break the Ceiling",
    description: "Launched this focused program after refining my methodology.",
  },
];

const philosophy = [
  {
    icon: Heart,
    title: "Sustainable Growth",
    description: "I believe in building businesses that support your life, not consume it.",
  },
  {
    icon: Briefcase,
    title: "Strategic Simplicity",
    description: "Complexity is the enemy of execution. We focus on what actually moves the needle.",
  },
  {
    icon: GraduationCap,
    title: "Learning by Doing",
    description: "No passive consumption here. Every session leads to concrete action.",
  },
];

const languages = [
  { name: "English", flag: "🇬🇧" },
  { name: "Italian", flag: "🇮🇹" },
  { name: "Spanish", flag: "🇪🇸" },
];

export const MentorSection = () => {
  return (
    <section id="mentor" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-primary mb-4">
            Your Mentor
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet{" "}
            <span className="text-primary">Alberto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not a guru. Not a course creator. A fellow founder who's been where you are
            and figured out how to break through.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Photo and quick info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-2xl p-8">
                {/* Alberto's photo */}
                <div className="w-full aspect-square max-w-sm mx-auto rounded-xl overflow-hidden mb-6 relative group">
                  <img 
                    src={albertoImage} 
                    alt="Alberto Delli Carri - Business Mentor & Strategist" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Alberto Delli Carri</h3>
                  <p className="text-primary mb-4">Business Mentor & Strategist</p>
                  
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <div className="flex items-center gap-2">
                      {languages.map((lang) => (
                        <span key={lang.name} className="text-lg" title={lang.name}>
                          {lang.flag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Belief Statement - Philosophy, not just bio */}
                  <div className="glass rounded-lg p-5 text-left">
                    <Quote className="w-5 h-5 text-primary mb-3" />
                    <p className="text-sm text-foreground leading-relaxed mb-3">
                      "I don't believe in hustle, hacks, or overcomplication."
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "I believe most businesses don't need more ideas—they need better decisions. 
                      My job is to help you see clearly and act decisively."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Timeline and Philosophy */}
            <div className="space-y-8">
              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8"
              >
                <h4 className="text-lg font-semibold mb-6">The Journey</h4>
                <div className="relative">
                  <div className="absolute left-3 top-3 bottom-3 w-px bg-border" />
                  <div className="space-y-6">
                    {timeline.map((item, index) => (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-10"
                      >
                        <div className="absolute left-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                        </div>
                        <span className="text-xs text-primary font-medium">{item.year}</span>
                        <h5 className="font-semibold">{item.title}</h5>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid gap-4"
              >
                {philosophy.map((item, index) => (
                  <div key={item.title} className="glass rounded-xl p-6 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">{item.title}</h5>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
