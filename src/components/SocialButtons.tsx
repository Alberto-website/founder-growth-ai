import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface SocialButtonsProps {
  linkedinUrl?: string;
}

export const SocialButtons = ({ 
  linkedinUrl = "https://linkedin.com/in/alberto" 
}: SocialButtonsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed left-6 bottom-6 z-50"
    >
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0A66C2] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Connect on LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </motion.div>
  );
};
