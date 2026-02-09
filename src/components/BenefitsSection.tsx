import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Cloud, FileText, Building2, BookOpen, GraduationCap } from "lucide-react";

const benefits = [
  { icon: Cloud, text: "Cloud exposure with real AWS environments" },
  { icon: FileText, text: "Resume-ready portfolio projects" },
  { icon: Building2, text: "Internship and placement opportunities" },
  { icon: BookOpen, text: "Lifetime GUVI learning platform access" },
  { icon: GraduationCap, text: "Academic advantage through KEC partnership" },
];

const BenefitsSection = () => {
  return (
    <AnimatedSection id="benefits">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-3 block">STUDENT BENEFITS</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Students <span className="gradient-text">Love It</span>
          </h2>
        </div>

        <div className="space-y-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-5 bg-card rounded-xl p-5 gradient-border card-hover"
            >
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                <b.icon size={18} className="text-primary-foreground" />
              </div>
              <span className="font-medium">{b.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BenefitsSection;
