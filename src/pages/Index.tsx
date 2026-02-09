import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyDevOpsSection from "@/components/WhyDevOpsSection";
import IndustryFlowSection from "@/components/IndustryFlowSection";
import HighlightsSection from "@/components/HighlightsSection";
import CurriculumSection from "@/components/CurriculumSection";
import HandsOnLabsSection from "@/components/HandsOnLabsSection";
import ToolsSection from "@/components/ToolsSection";
import JourneySection from "@/components/JourneySection";
import MentorSection from "@/components/MentorSection";
import CareerOutcomesSection from "@/components/CareerOutcomesSection";
import BenefitsSection from "@/components/BenefitsSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-500">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyDevOpsSection />
      <IndustryFlowSection />
      <HighlightsSection />
      <CurriculumSection />
      <HandsOnLabsSection />
      <ToolsSection />
      <JourneySection />
      <MentorSection />
      <CareerOutcomesSection />
      <BenefitsSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Index;
