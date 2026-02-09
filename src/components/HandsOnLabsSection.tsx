import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState, useEffect } from "react";

const labs = [
  {
    title: "Build CI/CD with GitHub Actions",
    command: "git push origin main",
    output: ["✓ Running tests...", "✓ Building Docker image...", "✓ Deploying to production...", "✓ Deployment successful!"],
    tech: ["GitHub Actions", "YAML", "Docker"],
  },
  {
    title: "Dockerize a Full-Stack App",
    command: "docker-compose up -d",
    output: ["Creating network app_default", "Creating app_db_1...", "Creating app_backend_1...", "Creating app_frontend_1...", "All services running ✓"],
    tech: ["Docker", "Docker Compose", "Multi-stage builds"],
  },
  {
    title: "Deploy to AWS EC2",
    command: "terraform apply -auto-approve",
    output: ["aws_instance.web: Creating...", "aws_security_group.web: Created", "aws_instance.web: Created", "Apply complete! Resources: 3 added"],
    tech: ["Terraform", "AWS EC2", "Security Groups"],
  },
  {
    title: "Monitor with Prometheus",
    command: "kubectl apply -f monitoring/",
    output: ["prometheus-server created", "grafana deployment created", "alertmanager configured", "Dashboards ready at :3000"],
    tech: ["Prometheus", "Grafana", "Kubernetes"],
  },
];

const TerminalCard = ({ lab, index }: { lab: typeof labs[0]; index: number }) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleHover = () => {
    if (isTyping) return;
    setIsTyping(true);
    setDisplayedLines([]);
    
    lab.output.forEach((line, i) => {
      setTimeout(() => {
        setDisplayedLines(prev => [...prev, line]);
        if (i === lab.output.length - 1) {
          setTimeout(() => setIsTyping(false), 500);
        }
      }, (i + 1) * 400);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={handleHover}
      className="group"
    >
      <div className="bg-[#0d1117] rounded-xl border border-[#30363d] overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27ca40]" />
          </div>
          <span className="text-xs text-[#8b949e] font-mono ml-2">{lab.title}</span>
        </div>

        {/* Terminal content */}
        <div className="p-4 font-mono text-sm min-h-[180px]">
          {/* Command prompt */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-secondary">$</span>
            <span className="text-[#c9d1d9]">{lab.command}</span>
            <span className={`w-2 h-4 bg-primary ${cursorVisible && !displayedLines.length ? 'opacity-100' : 'opacity-0'}`} />
          </div>

          {/* Output lines */}
          <div className="space-y-1">
            {displayedLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-xs ${
                  line.includes("✓") || line.includes("Created") || line.includes("complete") || line.includes("running")
                    ? "text-secondary"
                    : "text-[#8b949e]"
                }`}
              >
                {line}
              </motion.div>
            ))}
            
            {/* Waiting state */}
            {!displayedLines.length && (
              <div className="text-[#8b949e] text-xs opacity-50">
                Hover to execute command...
              </div>
            )}
          </div>
        </div>

        {/* Tech tags */}
        <div className="px-4 pb-4 flex flex-wrap gap-2">
          {lab.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const HandsOnLabsSection = () => {
  return (
    <AnimatedSection id="labs" className="bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-secondary mb-3 block">PRACTICAL EXPERIENCE</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Hands-on Labs <span className="gradient-text">You'll Work On</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real terminal, real commands, real-world scenarios. No simulations—you'll build actual pipelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {labs.map((lab, index) => (
            <TerminalCard key={lab.title} lab={lab} index={index} />
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full gradient-border bg-card/50">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              20+ hands-on labs across all DevOps domains
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default HandsOnLabsSection;
