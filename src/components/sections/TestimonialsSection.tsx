import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Marco V.",
    role: "Digital Agency Owner",
    avatar: "👨‍💻",
    before: "Stuck at €8K/month for 18 months",
    after: "Scaled to €18K/month in 12 weeks",
    quote: "Alberto helped me see the bottlenecks I was blind to. The clarity I gained in just 6 sessions was worth 10x the investment.",
    highlight: "Increased revenue by 125%",
    rating: 5,
  },
  {
    id: 2,
    name: "Sofia L.",
    role: "Freelance Consultant",
    avatar: "👩‍💼",
    before: "Working 60+ hours, earning €6K",
    after: "Working 35 hours, earning €12K",
    quote: "I thought I needed to work harder. Alberto showed me I needed to work smarter. My margins doubled while my hours halved.",
    highlight: "Doubled income, halved hours",
    rating: 5,
  },
  {
    id: 3,
    name: "Thomas K.",
    role: "E-commerce Founder",
    avatar: "👨‍🚀",
    before: "Overwhelmed and scattered",
    after: "Focused strategy, consistent growth",
    quote: "The strategic clarity I got was game-changing. For the first time, I know exactly what to focus on and what to ignore.",
    highlight: "From chaos to clarity",
    rating: 5,
  },
  {
    id: 4,
    name: "Elena R.",
    role: "Marketing Studio Owner",
    avatar: "👩‍🎨",
    before: "€10K ceiling for 2 years",
    after: "€22K/month and growing",
    quote: "Alberto doesn't just give advice—he gives you a complete system for thinking about your business differently.",
    highlight: "Broke 2-year plateau",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-glow opacity-20" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-primary mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Real Entrepreneurs.{" "}
            <span className="text-gradient">Real Results.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what founders like you have achieved.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="glass rounded-2xl p-8 md:p-12"
              >
                {/* Quote icon */}
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                
                {/* Quote text */}
                <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                  "{activeTestimonial.quote}"
                </blockquote>

                {/* Before/After */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                    <span className="text-xs text-red-400 font-medium uppercase tracking-wider">Before</span>
                    <p className="text-sm mt-1">{activeTestimonial.before}</p>
                  </div>
                  <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                    <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">After</span>
                    <p className="text-sm mt-1">{activeTestimonial.after}</p>
                  </div>
                </div>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-8">
                  <Star className="w-4 h-4 fill-current" />
                  {activeTestimonial.highlight}
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-2xl">
                      {activeTestimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{activeTestimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{activeTestimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex 
                        ? "bg-primary w-6" 
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
