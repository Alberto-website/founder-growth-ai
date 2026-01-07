import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const qualifiers = [
  { id: "revenue", label: "You're earning €5K–€15K/month and want to grow sustainably", isFor: true },
  { id: "solo", label: "You're a solo founder, freelancer, or small team leader", isFor: true },
  { id: "stuck", label: "You're seeking clarity and strategic direction", isFor: true },
  { id: "committed", label: "You're ready to invest in yourself and your business", isFor: true },
  { id: "action", label: "You're execution-ready, not just idea-curious", isFor: true },
];

const disqualifiers = [
  { id: "beginner", label: "You're pre-revenue and still validating your idea", isFor: false },
  { id: "quick", label: "You're looking for shortcuts or 'hacks' to get rich quick", isFor: false },
  { id: "passive", label: "You want someone to do the work for you", isFor: false },
  { id: "collector", label: "You collect courses but rarely implement", isFor: false },
];

export const QualificationSection = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const matchCount = qualifiers.filter((q) => checkedItems.has(q.id)).length;
  const isGoodFit = matchCount >= 3;

  return (
    <section id="qualification" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-primary mb-4">
            Is This For You?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Check if you're a{" "}
            <span className="text-primary">good fit</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            This sprint is intentionally not for everyone.
            <br />
            That's what makes it work for the right people.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* This is for you - Clarity-seeking, execution-ready */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold">This is for you if...</h3>
              </div>

              <div className="space-y-4">
                {qualifiers.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 text-left ${
                      checkedItems.has(item.id)
                        ? "bg-emerald-500/20 border border-emerald-500/30"
                        : "bg-secondary/30 hover:bg-secondary/50"
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-all ${
                      checkedItems.has(item.id)
                        ? "bg-emerald-500 text-background"
                        : "border border-border"
                    }`}>
                      {checkedItems.has(item.id) && <Check className="w-4 h-4" />}
                    </div>
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* This is NOT for you - Beginners, shortcut-seekers, course collectors */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold">This is NOT for you if...</h3>
              </div>

              <div className="space-y-4">
                {disqualifiers.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30"
                  >
                    <div className="w-6 h-6 rounded-md flex items-center justify-center bg-red-500/20">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Result message */}
          {matchCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-8 p-6 rounded-xl text-center ${
                isGoodFit 
                  ? "bg-emerald-500/20 border border-emerald-500/30" 
                  : "bg-secondary/50"
              }`}
            >
              {isGoodFit ? (
                <>
                  <h4 className="text-lg font-semibold text-emerald-400 mb-2">
                    You look like a great fit.
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Based on your selections, Break the Ceiling could be exactly what you need. 
                    Book a free call to discuss your specific situation.
                  </p>
                </>
              ) : (
                <>
                  <h4 className="text-lg font-semibold mb-2">
                    Keep checking...
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Select at least 3 items that apply to you to see if you're a good fit.
                  </p>
                </>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
