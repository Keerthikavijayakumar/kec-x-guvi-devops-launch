import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => {
  return (
    <AnimatedSection id="cta" className="bg-card/50">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl p-10 md:p-16 gradient-border glow-mixed"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your <span className="gradient-text">DevOps Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">with KEC × GUVI</p>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Join thousands of students who have transformed their careers with our industry-ready DevOps training program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="gradient-bg text-primary-foreground font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-lg"
            >
              Apply Now
            </a>
            <a
              href="#"
              className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-muted transition-colors text-lg"
            >
              Download Brochure
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default CTASection;
