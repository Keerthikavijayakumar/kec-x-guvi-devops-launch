import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Linkedin, Award, Cloud } from "lucide-react";

const MentorSection = () => {
  return (
    <AnimatedSection id="mentor" className="bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-secondary mb-3 block">MEET YOUR MENTOR</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Learn from the <span className="gradient-text">Best</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl p-8 md:p-12 gradient-border card-hover text-center md:text-left md:flex md:items-center md:gap-10"
        >
          <div className="mx-auto md:mx-0 w-32 h-32 rounded-2xl gradient-bg flex items-center justify-center mb-6 md:mb-0 shrink-0">
            <span className="text-5xl font-bold text-primary-foreground">C</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">Mr. Chandru</h3>
            <p className="text-primary font-mono text-sm mb-4">Cloud & DevOps Engineer — GUVI</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Industry expert with deep experience in cloud infrastructure, CI/CD pipelines, and
              real-world DevOps deployments. Passionate about mentoring the next generation of DevOps engineers.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Cloud size={16} className="text-primary" /> Cloud Architecture
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award size={16} className="text-secondary" /> CI/CD Expert
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default MentorSection;
