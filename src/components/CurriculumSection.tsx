import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  { title: "Linux & Networking", desc: "Master Linux fundamentals, shell scripting, networking protocols, and system administration essentials." },
  { title: "Git & GitHub", desc: "Version control workflows, branching strategies, pull requests, and collaborative development practices." },
  { title: "Docker", desc: "Containerization concepts, Dockerfile creation, Docker Compose, image optimization, and container orchestration basics." },
  { title: "Kubernetes", desc: "Pod management, deployments, services, ingress controllers, Helm charts, and cluster administration." },
  { title: "CI/CD Pipelines", desc: "Build automated pipelines with Jenkins and GitHub Actions. Implement continuous integration and delivery workflows." },
  { title: "AWS Cloud", desc: "Core AWS services — EC2, S3, IAM, VPC, Lambda, RDS — with hands-on labs and architecture patterns." },
  { title: "Terraform", desc: "Infrastructure as Code principles, HCL syntax, state management, modules, and multi-cloud provisioning." },
  { title: "Monitoring & Logging", desc: "Set up Prometheus, Grafana dashboards, ELK stack, alerting systems, and observability best practices." },
  { title: "DevSecOps", desc: "Security scanning in CI/CD, container security, secrets management, compliance automation, and shift-left security." },
];

const CurriculumSection = () => {
  return (
    <AnimatedSection id="curriculum">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-3 block">CURRICULUM</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Comprehensive <span className="gradient-text">Learning Modules</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {modules.map((mod, i) => (
            <AccordionItem
              key={mod.title}
              value={`module-${i}`}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:glow-mixed"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-primary w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold">{mod.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-12 pb-5">
                {mod.desc}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
};

export default CurriculumSection;
