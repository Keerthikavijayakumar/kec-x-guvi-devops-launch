import { motion } from "framer-motion";
import DevOpsInfinity from "./DevOpsInfinity";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block font-mono text-sm text-muted-foreground border border-border rounded-full px-4 py-1.5 mb-8">
            KEC × GUVI Collaboration
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          Industry-Ready{" "}
          <span className="gradient-text">DevOps</span>
          <br />
          Training Program
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          A collaborative initiative by Kongu Engineering College and GUVI
          to bridge the gap between academia and industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#highlights"
            className="gradient-bg text-primary-foreground font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Explore Program
          </a>
          <a
            href="#cta"
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-muted transition-colors text-lg"
          >
            Enroll Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <DevOpsInfinity />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
