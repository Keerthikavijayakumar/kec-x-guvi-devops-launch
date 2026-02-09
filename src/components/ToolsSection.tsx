import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const tools = [
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "Jenkins", icon: "🔧" },
  { name: "GitHub Actions", icon: "⚡" },
  { name: "AWS", icon: "☁️" },
  { name: "Terraform", icon: "🏗️" },
  { name: "Ansible", icon: "📋" },
  { name: "Prometheus", icon: "📊" },
];

const ToolsSection = () => {
  return (
    <AnimatedSection id="tools" className="bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-secondary mb-3 block">TOOLS & TECHNOLOGIES</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Industry-Standard <span className="gradient-text">Tech Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="bg-background rounded-xl p-6 text-center gradient-border card-hover cursor-default"
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <span className="font-mono text-sm font-medium">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ToolsSection;
