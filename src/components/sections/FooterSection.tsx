import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FooterSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openCalendly = () => {
    window.open("https://calendly.com", "_blank");
  };

  return (
    <footer className="relative">
      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="text-gradient">break your ceiling?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Stop trading time for money. Stop hitting invisible walls. 
              Let's build the strategic foundation for sustainable growth.
            </p>
            <Button 
              size="lg"
              onClick={openCalendly}
              className="gradient-primary text-foreground font-semibold px-10 py-6 text-lg shadow-glow hover:shadow-elevated transition-all duration-300"
            >
              Book Your Free Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Limited spots available each month
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer links */}
      <div className="border-t border-border/50">
        <div className="container px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gradient">Break the Ceiling</span>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <button onClick={() => scrollToSection("program")} className="hover:text-foreground transition-colors">
                Program
              </button>
              <button onClick={() => scrollToSection("mentor")} className="hover:text-foreground transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="hover:text-foreground transition-colors">
                Results
              </button>
              <button onClick={() => scrollToSection("pricing")} className="hover:text-foreground transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection("faq")} className="hover:text-foreground transition-colors">
                FAQ
              </button>
            </nav>
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Alberto Delli Carri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
