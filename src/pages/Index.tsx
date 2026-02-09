import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HighlightsSection from "@/components/HighlightsSection";
import CurriculumSection from "@/components/CurriculumSection";
import ToolsSection from "@/components/ToolsSection";
import JourneySection from "@/components/JourneySection";
import MentorSection from "@/components/MentorSection";
import BenefitsSection from "@/components/BenefitsSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <CurriculumSection />
      <ToolsSection />
      <JourneySection />
      <MentorSection />
      <BenefitsSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
