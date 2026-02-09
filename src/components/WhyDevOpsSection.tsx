import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Rocket, Cloud, Zap, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    stat: "200%",
    label: "Faster Deployments",
    description: "Organizations using DevOps deploy 200x more frequently than traditional approaches",
  },
  {
    icon: Cloud,
    stat: "99.9%",
    label: "Uptime Guaranteed",
    description: "Cloud-native systems with proper DevOps achieve near-perfect availability",
  },
  {
    icon: Zap,
    stat: "60%",
    label: "Less Downtime",
    description: "Mean time to recovery is 168x faster with DevOps practices",
  },
  {
    icon: TrendingUp,
    stat: "₹12L+",
    label: "Average Salary",
    description: "DevOps engineers are among the highest-paid tech professionals in India",
  },
];

const WhyDevOpsSection = () => {
  return (
    <AnimatedSection id="why-devops" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative">
        {/* Asymmetric header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-sm text-secondary mb-4 block tracking-wider">
              THE INDUSTRY SHIFT
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Why{" "}
              <span className="gradient-text">DevOps</span>?
              <br />
              Why <span className="text-primary">Now</span>?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            <p className="mb-4">
              The software industry has fundamentally changed. Companies that once took{" "}
              <strong className="text-foreground">months to release</strong> now deploy{" "}
              <strong className="text-foreground">hundreds of times per day</strong>.
            </p>
            <p>
              DevOps isn't just a methodology—it's the{" "}
              <span className="text-primary font-semibold">competitive advantage</span> that separates 
              industry leaders from the rest.
            </p>
          </motion.div>
        </div>

        {/* Stats grid with varied sizes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl bg-card border border-border group hover:border-primary/50 transition-all duration-300 ${
                index === 0 ? "lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <reason.icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
                  {reason.stat}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {reason.label}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-muted-foreground italic">
            "Every company is becoming a{" "}
            <span className="text-foreground not-italic font-semibold">software company</span>, 
            and DevOps is how they{" "}
            <span className="gradient-text not-italic font-bold">deliver value faster</span>."
          </p>
          <cite className="block mt-4 text-sm font-mono text-primary not-italic">
            — Industry Insight, 2024
          </cite>
        </motion.blockquote>
      </div>
    </AnimatedSection>
  );
};

export default WhyDevOpsSection;
