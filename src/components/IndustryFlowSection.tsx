import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { GitBranch, Package, TestTube, Rocket, Activity, MessageSquare } from "lucide-react";

const flowSteps = [
  { icon: GitBranch, label: "Code", description: "Version control & collaboration" },
  { icon: Package, label: "Build", description: "Compile & package artifacts" },
  { icon: TestTube, label: "Test", description: "Automated quality checks" },
  { icon: Rocket, label: "Deploy", description: "Push to production" },
  { icon: Activity, label: "Monitor", description: "Track performance & health" },
  { icon: MessageSquare, label: "Feedback", description: "Learn & iterate" },
];

const IndustryFlowSection = () => {
  return (
    <AnimatedSection className="bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-secondary mb-3 block">INDUSTRY STANDARD</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            How Industry <span className="gradient-text">Uses DevOps</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, this is the pipeline that powers modern software delivery
          </p>
        </div>

        {/* Horizontal flow diagram */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 z-0" />
          
          {/* Connection line - mobile */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Node */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`relative w-20 h-20 rounded-2xl flex items-center justify-center bg-background border-2 transition-all duration-300 ${
                    index < 3 
                      ? "border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]" 
                      : "border-secondary hover:shadow-[0_0_30px_hsl(var(--secondary)/0.4)]"
                  }`}
                >
                  <step.icon 
                    className={`w-8 h-8 ${index < 3 ? "text-primary" : "text-secondary"}`} 
                    strokeWidth={1.5}
                  />
                  
                  {/* Step number */}
                  <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                    index < 3 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-secondary-foreground"
                  }`}>
                    {index + 1}
                  </span>
                </motion.div>

                {/* Arrow - desktop only */}
                {index < flowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 -translate-x-1/2"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14m0 0l-4-4m4 4l-4 4"
                        stroke={index < 2 ? "hsl(var(--primary))" : "hsl(var(--secondary))"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}

                {/* Label */}
                <div className="mt-4 text-center">
                  <h3 className={`font-bold text-lg ${index < 3 ? "text-primary" : "text-secondary"}`}>
                    {step.label}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 max-w-[120px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feedback loop indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-background/50">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 12a9 9 0 11-9-9"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M3 12a9 9 0 019 9"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
            <span className="text-sm font-mono text-muted-foreground">
              Continuous Integration & Continuous Delivery
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default IndustryFlowSection;
