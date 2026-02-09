import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Award, Cloud, Users, Lightbulb, Target, Code2 } from "lucide-react";

const learnings = [
  { icon: Cloud, text: "Cloud architecture best practices" },
  { icon: Code2, text: "Production-grade CI/CD pipelines" },
  { icon: Target, text: "Real-world troubleshooting techniques" },
  { icon: Users, text: "Industry collaboration workflows" },
];

const MentorSection = () => {
  return (
    <AnimatedSection id="mentor" className="bg-card/50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-secondary mb-3 block">MEET YOUR MENTOR</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Learn from the <span className="gradient-text">Best</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Mentor profile - left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-50" />
              
              <div className="relative bg-card rounded-3xl border border-border p-8 text-center">
                {/* Avatar */}
                <div className="mx-auto w-32 h-32 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-lg shadow-primary/25">
                  <span className="text-5xl font-bold text-primary-foreground">C</span>
                </div>

                {/* Name with animated underline */}
                <h3 className="text-2xl font-bold mb-1 relative inline-block group">
                  <span className="relative">
                    Mr. Chandru
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </span>
                </h3>
                
                <p className="text-primary font-mono text-sm mb-4">
                  Cloud & DevOps Engineer — GUVI
                </p>

                {/* Credentials */}
                <div className="flex justify-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Cloud size={16} className="text-primary" />
                    <span>AWS Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award size={16} className="text-secondary" />
                    <span>5+ Years</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  <div>
                    <p className="text-2xl font-extrabold gradient-text">1000+</p>
                    <p className="text-xs text-muted-foreground">Students Mentored</p>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold gradient-text">50+</p>
                    <p className="text-xs text-muted-foreground">Workshops Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content - right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Quote */}
            <div className="relative">
              <Lightbulb className="absolute -top-2 -left-2 w-8 h-8 text-primary/30" />
              <blockquote className="pl-6 border-l-2 border-primary">
                <p className="text-xl md:text-2xl text-foreground italic leading-relaxed">
                  "DevOps isn't just about tools—it's about{" "}
                  <span className="gradient-text not-italic font-bold">transforming how teams deliver value</span>. 
                  I teach you the mindset that top companies look for."
                </p>
                <cite className="block mt-4 text-sm font-mono text-primary not-italic">
                  — Mr. Chandru
                </cite>
              </blockquote>
            </div>

            {/* What you'll learn */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-secondary" />
                What You'll Learn From Me
              </h4>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {learnings.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Teaching style */}
            <div className="p-6 rounded-xl gradient-border bg-card/50">
              <h4 className="text-lg font-bold text-foreground mb-3">Teaching Philosophy</h4>
              <p className="text-muted-foreground leading-relaxed">
                Industry expert with deep experience in cloud infrastructure, CI/CD pipelines, and
                real-world DevOps deployments. My approach combines{" "}
                <span className="text-foreground font-medium">hands-on labs</span>,{" "}
                <span className="text-foreground font-medium">live debugging sessions</span>, and{" "}
                <span className="text-foreground font-medium">industry case studies</span> to 
                prepare you for actual DevOps challenges.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default MentorSection;
