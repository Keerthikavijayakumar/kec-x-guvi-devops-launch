import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Wrench, FolderGit2, Users, Award, Briefcase } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "Industry-Designed Curriculum", desc: "Crafted with real-world DevOps workflows in mind" },
  { icon: Wrench, title: "Hands-On Cloud Labs", desc: "Practice on live cloud environments and tools" },
  { icon: FolderGit2, title: "Real-World Projects", desc: "Build production-grade CI/CD pipelines and infrastructure" },
  { icon: Users, title: "Expert Mentorship", desc: "Learn directly from GUVI's DevOps professionals" },
  { icon: Award, title: "Joint Certification", desc: "Industry-recognized certificate by KEC and GUVI" },
  { icon: Briefcase, title: "Career Readiness", desc: "Placement prep, resume building, and interview coaching" },
];

const HighlightsSection = () => {
  return (
    <AnimatedSection id="highlights" className="bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-secondary mb-3 block">PROGRAM HIGHLIGHTS</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            What Makes This <span className="gradient-text">Special</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-background rounded-xl p-6 gradient-border card-hover cursor-default"
            >
              <item.icon
                size={28}
                className="text-primary mb-4 group-hover:text-secondary transition-colors duration-300"
              />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HighlightsSection;
