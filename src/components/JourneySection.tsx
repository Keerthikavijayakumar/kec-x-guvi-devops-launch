import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  "Enrollment",
  "Live & Recorded Sessions",
  "Hands-on Labs",
  "Mini Projects",
  "Capstone Project",
  "Certification",
  "Career Guidance",
];

const JourneySection = () => {
  return (
    <AnimatedSection id="journey">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-3 block">LEARNING JOURNEY</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Your Path to <span className="gradient-text">DevOps Mastery</span>
          </h2>
        </div>

        {/* Desktop roadmap */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="absolute top-8 left-0 right-0 h-0.5 gradient-bg" />
          <div className="flex justify-between relative">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center text-center w-28"
              >
                <div className="w-4 h-4 rounded-full gradient-bg glow-mixed mb-4 relative z-10" />
                <span className="text-xs font-mono text-muted-foreground mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium leading-tight">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile roadmap */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 gradient-bg" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-center gap-4"
              >
                <div className="absolute left-[-22px] w-3 h-3 rounded-full gradient-bg glow-mixed" />
                <div>
                  <span className="font-mono text-xs text-muted-foreground">Step {i + 1}</span>
                  <p className="font-medium">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default JourneySection;
