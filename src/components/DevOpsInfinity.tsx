import { motion } from "framer-motion";

const devLabels = ["Plan", "Code", "Build", "Test"];
const opsLabels = ["Release", "Deploy", "Operate", "Monitor"];

const DevOpsInfinity = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-64 md:h-80 select-none">
      <svg
        viewBox="0 0 600 280"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Infinity path glow */}
        <defs>
          <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
            <stop offset="50%" stopColor="hsl(185, 80%, 50%)" />
            <stop offset="100%" stopColor="hsl(152, 76%, 42%)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Infinity shape - static track */}
        <path
          d="M300 140 C300 60, 140 20, 120 140 C100 260, 300 220, 300 140 C300 60, 500 20, 480 140 C460 260, 300 220, 300 140"
          stroke="hsl(220, 15%, 18%)"
          strokeWidth="3"
          fill="none"
        />

        {/* Animated flowing path */}
        <motion.path
          d="M300 140 C300 60, 140 20, 120 140 C100 260, 300 220, 300 140 C300 60, 500 20, 480 140 C460 260, 300 220, 300 140"
          stroke="url(#infinityGrad)"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          strokeDasharray="20 10"
          animate={{ strokeDashoffset: [0, -120] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Animated dot */}
        <motion.circle
          r="6"
          fill="url(#infinityGrad)"
          filter="url(#glow)"
          animate={{
            cx: [300, 210, 140, 120, 140, 210, 300, 390, 460, 480, 460, 390, 300],
            cy: [140, 80, 60, 140, 220, 200, 140, 80, 60, 140, 220, 200, 140],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Dev labels (left loop) */}
        {devLabels.map((label, i) => {
          const positions = [
            { x: 210, y: 62 },
            { x: 108, y: 100 },
            { x: 108, y: 180 },
            { x: 210, y: 218 },
          ];
          return (
            <motion.g
              key={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.15 + 0.5 }}
            >
              <text
                x={positions[i].x}
                y={positions[i].y}
                textAnchor="middle"
                className="fill-primary font-mono text-xs font-semibold"
                fontSize="13"
              >
                {label}
              </text>
            </motion.g>
          );
        })}

        {/* Ops labels (right loop) */}
        {opsLabels.map((label, i) => {
          const positions = [
            { x: 390, y: 62 },
            { x: 492, y: 100 },
            { x: 492, y: 180 },
            { x: 390, y: 218 },
          ];
          return (
            <motion.g
              key={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.15 + 1 }}
            >
              <text
                x={positions[i].x}
                y={positions[i].y}
                textAnchor="middle"
                className="fill-secondary font-mono text-xs font-semibold"
                fontSize="13"
              >
                {label}
              </text>
            </motion.g>
          );
        })}

        {/* Center labels */}
        <text x="190" y="145" textAnchor="middle" className="fill-primary font-bold" fontSize="16" fontFamily="Inter">
          Dev
        </text>
        <text x="410" y="145" textAnchor="middle" className="fill-secondary font-bold" fontSize="16" fontFamily="Inter">
          Ops
        </text>
      </svg>
    </div>
  );
};

export default DevOpsInfinity;
