import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Cloud, Server, Shield, Code2, GitBranch, Container, Activity, Terminal } from "lucide-react";

const roles = [
  {
    title: "DevOps Engineer",
    salary: "₹8-20 LPA",
    icon: Container,
    color: "primary",
    skills: ["CI/CD Pipelines", "Docker & Kubernetes", "Cloud Platforms", "Infrastructure as Code"],
    demand: "High",
  },
  {
    title: "Cloud Engineer",
    salary: "₹10-25 LPA",
    icon: Cloud,
    color: "secondary",
    skills: ["AWS/Azure/GCP", "Cloud Architecture", "Cost Optimization", "Security"],
    demand: "Very High",
  },
  {
    title: "Site Reliability Engineer",
    salary: "₹12-30 LPA",
    icon: Activity,
    color: "primary",
    skills: ["System Design", "Monitoring", "Incident Response", "Automation"],
    demand: "High",
  },
];

const skillsToRoles = [
  { skill: "Linux & Scripting", icon: Terminal, roles: ["All Roles"] },
  { skill: "Git & Version Control", icon: GitBranch, roles: ["All Roles"] },
  { skill: "Docker & Containers", icon: Container, roles: ["DevOps Engineer", "SRE"] },
  { skill: "Kubernetes", icon: Server, roles: ["DevOps Engineer", "Cloud Engineer"] },
  { skill: "CI/CD Pipelines", icon: Code2, roles: ["DevOps Engineer"] },
  { skill: "Cloud Platforms", icon: Cloud, roles: ["Cloud Engineer", "SRE"] },
  { skill: "Monitoring & Logging", icon: Activity, roles: ["SRE", "DevOps Engineer"] },
  { skill: "Security & Compliance", icon: Shield, roles: ["All Roles"] },
];

const CareerOutcomesSection = () => {
  return (
    <AnimatedSection id="careers" className="bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-secondary mb-3 block">YOUR FUTURE</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Career <span className="gradient-text">Outcomes</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The skills you learn here map directly to the most in-demand roles in tech
          </p>
        </div>

        {/* Role cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                role.color === "primary" 
                  ? "from-primary/20 to-transparent" 
                  : "from-secondary/20 to-transparent"
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative bg-card rounded-2xl border border-border p-6 h-full hover:border-primary/50 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl ${
                    role.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                  }`}>
                    <role.icon className={`w-8 h-8 ${
                      role.color === "primary" ? "text-primary" : "text-secondary"
                    }`} />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    role.demand === "Very High" 
                      ? "bg-secondary/20 text-secondary" 
                      : "bg-primary/20 text-primary"
                  }`}>
                    {role.demand} Demand
                  </div>
                </div>

                {/* Title & Salary */}
                <h3 className="text-xl font-bold text-foreground mb-1">{role.title}</h3>
                <p className="text-2xl font-extrabold gradient-text mb-6">{role.salary}</p>

                {/* Skills */}
                <div className="space-y-2">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Key Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills to Roles mapping */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl border border-border p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            Skills You'll Learn → Roles You Can Target
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsToRoles.map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground text-sm">{item.skill}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.roles.map((role) => (
                    <span
                      key={role}
                      className={`px-2 py-0.5 text-[10px] rounded-full font-medium ${
                        role === "All Roles"
                          ? "bg-secondary/20 text-secondary"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Join <span className="text-foreground font-semibold">5,000+ students</span> who've launched their DevOps careers
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Start Your Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default CareerOutcomesSection;
