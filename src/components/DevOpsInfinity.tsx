import { useMemo } from "react";
import { useTheme } from "@/contexts/ThemeContext";

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
  const a = width * 0.3;
  const b = height * 0.26;
  
  const angle = t * Math.PI * 2;
  const denominator = 1 + Math.sin(angle) ** 2;
  
  const x = centerX + (a * Math.cos(angle)) / denominator;
  const y = centerY + (b * Math.sin(angle) * Math.cos(angle)) / denominator;
  
  return { x, y };
};

const DevOpsInfinity = () => {
  const { theme } = useTheme();
  const dimensions = { width: 600, height: 280 };
  
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
      points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
    }
    return `${points.join(" ")} Z`;
  };

  const infinityPath = useMemo(generateInfinityPath, [dimensions]);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-64 md:h-72 select-none">
      <svg
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="infinityGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={colors.dev} />
            <stop offset="50%" stopColor={colors.ops} />
            <stop offset="100%" stopColor={colors.dev} />
          </linearGradient>
        </defs>

        {/* Faint background infinity symbol */}
        <path
          d={infinityPath}
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="46"
          strokeLinecap="round"
          fill="none"
          opacity="0.08"
        />

        {/* Main gradient band */}
        <path
          d={infinityPath}
          stroke="url(#infinityGradient)"
          strokeWidth="32"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />

        {/* Stage labels placed along the band, simple and static like the reference image */}
        {stages.map((stage, i) => {
          const pos = getStagePosition(stage.position);
          const color = stage.side === "dev" ? colors.dev : colors.ops;

          return (
            <text
              key={stage.label}
              x={pos.x}
              y={i < 4 ? pos.y - 18 : pos.y + 24}
              textAnchor="middle"
              fill="white"
              fontSize={11}
              fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
              fontWeight="600"
              style={{
                paintOrder: "stroke",
                stroke: color,
                strokeWidth: 1,
              }}
            >
              {stage.label}
            </text>
          );
        })}

        {/* Center labels */}
        {/* Center "Dev" */}
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
        {/* Center "Ops" */}
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
    </div>
  );
};

export default DevOpsInfinity;
