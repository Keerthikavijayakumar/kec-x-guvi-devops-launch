import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: 5000, suffix: "+", label: "Students Trained" },
  { value: 50, suffix: "+", label: "Industry Mentors" },
  { value: 100, suffix: "+", label: "Hiring Partners" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="gradient-text text-5xl md:text-6xl font-extrabold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <AnimatedSection className="bg-card/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-3 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default StatsSection;
