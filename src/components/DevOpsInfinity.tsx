import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface Particle {
  id: number;
  progress: number;
  speed: number;
  size: number;
  opacity: number;
}

const stages = [
  { label: "Plan", position: 0.0625, side: "dev" },
  { label: "Code", position: 0.1875, side: "dev" },
  { label: "Build", position: 0.3125, side: "dev" },
  { label: "Test", position: 0.4375, side: "dev" },
  { label: "Release", position: 0.5625, side: "ops" },
  { label: "Deploy", position: 0.6875, side: "ops" },
  { label: "Operate", position: 0.8125, side: "ops" },
  { label: "Monitor", position: 0.9375, side: "ops" },
];

// Infinity path calculation
const getPointOnInfinity = (t: number, width: number, height: number) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const a = width * 0.35;
  const b = height * 0.35;
  
  const angle = t * Math.PI * 2;
  const denominator = 1 + Math.sin(angle) ** 2;
  
  const x = centerX + (a * Math.cos(angle)) / denominator;
  const y = centerY + (b * Math.sin(angle) * Math.cos(angle)) / denominator;
  
  return { x, y };
};

const DevOpsInfinity = () => {
  const { theme } = useTheme();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [dimensions] = useState({ width: 600, height: 280 });
  
  const colors = useMemo(() => ({
    dev: theme === "light-pro" 
      ? "hsl(217, 70%, 50%)" 
      : theme === "dark-pro" 
        ? "hsl(200, 100%, 50%)" 
        : "hsl(217, 91%, 60%)",
    ops: theme === "light-pro" 
      ? "hsl(152, 60%, 35%)" 
      : theme === "dark-pro" 
        ? "hsl(160, 100%, 45%)" 
        : "hsl(152, 76%, 42%)",
  }), [theme]);

  // Initialize particles
  useEffect(() => {
    const initialParticles: Particle[] = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      progress: i / 24,
      speed: 0.002 + Math.random() * 0.001,
      size: 3 + Math.random() * 3,
      opacity: 0.6 + Math.random() * 0.4,
    }));
    setParticles(initialParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    let animationFrame: number;
    
    const animate = () => {
      setParticles(prev => prev.map(p => ({
        ...p,
        progress: (p.progress + p.speed) % 1,
      })));
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const getParticleColor = useCallback((progress: number) => {
    // Dev side: 0-0.5, Ops side: 0.5-1
    const isDev = progress < 0.5;
    return isDev ? colors.dev : colors.ops;
  }, [colors]);

  const getStagePosition = (position: number) => {
    const point = getPointOnInfinity(position, dimensions.width, dimensions.height);
    return point;
  };

  // Generate infinity path
  const generateInfinityPath = () => {
    const points: string[] = [];
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      const { x, y } = getPointOnInfinity(t, dimensions.width, dimensions.height);
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    return points.join(' ') + ' Z';
  };

  const infinityPath = useMemo(generateInfinityPath, [dimensions]);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-64 md:h-80 select-none">
      <svg
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.dev} />
            <stop offset="50%" stopColor={colors.ops} />
            <stop offset="100%" stopColor={colors.dev} />
          </linearGradient>
          
          <filter id="particleGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="stageGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="ripple" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
          </filter>
        </defs>

        {/* Base track */}
        <path
          d={infinityPath}
          stroke="hsl(var(--border))"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />

        {/* Glowing track */}
        <path
          d={infinityPath}
          stroke="url(#infinityGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />

        {/* Particles */}
        {particles.map((particle) => {
          const pos = getPointOnInfinity(particle.progress, dimensions.width, dimensions.height);
          const color = getParticleColor(particle.progress);
          
          return (
            <g key={particle.id}>
              {/* Particle trail */}
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={particle.size * 1.5}
                fill={color}
                opacity={particle.opacity * 0.3}
                filter="url(#particleGlow)"
              />
              {/* Main particle */}
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={particle.size}
                fill={color}
                opacity={particle.opacity}
                filter="url(#particleGlow)"
              />
            </g>
          );
        })}

        {/* Stage nodes */}
        {stages.map((stage, i) => {
          const pos = getStagePosition(stage.position);
          const color = stage.side === "dev" ? colors.dev : colors.ops;
          const isHovered = hoveredStage === stage.label;
          const isPulseStage = ["Build", "Release", "Deploy"].includes(stage.label);
          const isMonitor = stage.label === "Monitor";
          
          return (
            <g
              key={stage.label}
              onMouseEnter={() => setHoveredStage(stage.label)}
              onMouseLeave={() => setHoveredStage(null)}
              style={{ cursor: "pointer" }}
            >
              {/* Pulse effect for key stages */}
              {isPulseStage && (
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isHovered ? 25 : 18}
                  fill={color}
                  opacity={0.15}
                  animate={{
                    r: isHovered ? [25, 35, 25] : [18, 24, 18],
                    opacity: [0.15, 0.05, 0.15],
                  }}
                  transition={{
                    duration: isHovered ? 0.8 : 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              {/* Monitor ripple effect */}
              {isMonitor && (
                <>
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r={12}
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    animate={{
                      r: [12, 30, 12],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r={12}
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                    animate={{
                      r: [12, 30, 12],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.7,
                    }}
                  />
                </>
              )}

              {/* Node background */}
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={isHovered ? 14 : 10}
                fill="hsl(var(--background))"
                stroke={color}
                strokeWidth="2"
                filter={isHovered ? "url(#stageGlow)" : undefined}
                animate={{ r: isHovered ? 14 : 10 }}
                transition={{ duration: 0.2 }}
              />

              {/* Node inner */}
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={isHovered ? 6 : 4}
                fill={color}
                animate={{ r: isHovered ? 6 : 4 }}
                transition={{ duration: 0.2 }}
              />

              {/* Label */}
              <motion.text
                x={pos.x}
                y={pos.y + (i < 4 ? -20 : 28)}
                textAnchor="middle"
                fill={color}
                fontSize="11"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="600"
                animate={{
                  fontSize: isHovered ? "13px" : "11px",
                  y: isHovered ? (i < 4 ? pos.y - 24 : pos.y + 32) : (i < 4 ? pos.y - 20 : pos.y + 28),
                }}
                transition={{ duration: 0.2 }}
              >
                {stage.label}
              </motion.text>
            </g>
          );
        })}

        {/* Center labels */}
        <text
          x={dimensions.width * 0.25}
          y={dimensions.height / 2 + 5}
          textAnchor="middle"
          fill={colors.dev}
          fontSize="18"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
        >
          Dev
        </text>
        <text
          x={dimensions.width * 0.75}
          y={dimensions.height / 2 + 5}
          textAnchor="middle"
          fill={colors.ops}
          fontSize="18"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
        >
          Ops
        </text>
      </svg>

      {/* Hover tooltip */}
      {hoveredStage && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg px-4 py-2 text-sm"
        >
          <span className="text-muted-foreground">Stage: </span>
          <span className="font-mono font-semibold text-foreground">{hoveredStage}</span>
        </motion.div>
      )}
    </div>
  );
};

export default DevOpsInfinity;
