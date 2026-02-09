import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { BookOpen, Cloud, Handshake } from "lucide-react";

const points = [
  {
    icon: BookOpen,
    title: "Industry-Driven Curriculum",
    description: "DevOps curriculum designed by industry professionals, aligned with current market demands and best practices.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Learning",
    description: "Hands-on labs and projects on real cloud platforms to build practical, deployable skills.",
  },
  {
    icon: Handshake,
    title: "Academic × Industry Synergy",
    description: "Bridging KEC's academic excellence with GUVI's industry expertise for a holistic learning experience.",
  },
];

const AboutSection = () => {
  return (
    <AnimatedSection id="about">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-3 block">ABOUT THE COLLABORATION</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="gradient-text">KEC × GUVI</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Combining academic rigor with industry relevance to create DevOps engineers ready for the real world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 gradient-border card-hover"
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-5">
                <point.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
