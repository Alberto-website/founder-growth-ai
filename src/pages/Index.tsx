import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProgramSection } from "@/components/sections/ProgramSection";
import { QualificationSection } from "@/components/sections/QualificationSection";
import { MentorSection } from "@/components/sections/MentorSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { Chatbot } from "@/components/Chatbot";
import { SocialButtons } from "@/components/SocialButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ProgramSection />
        <QualificationSection />
        <MentorSection />
        <TestimonialsSection />
        <ProcessSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
      </main>
      <FooterSection />
      <SocialButtons linkedinUrl="https://linkedin.com/in/alberto" />
      <Chatbot webhookUrl="https://joteh59565mucatecom.app.n8n.cloud/webhook/ffcf29b6-19e9-40fd-81a6-132910560043/chat" />
    </div>
  );
};

export default Index;
