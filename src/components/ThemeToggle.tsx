import { motion, AnimatePresence } from "framer-motion";
import { Palette, Moon, Sun, Monitor } from "lucide-react";
import { useTheme, Theme } from "@/contexts/ThemeContext";
import { useState } from "react";

const themeInfo: Record<Theme, { label: string; icon: typeof Moon; colors: string[] }> = {
  devops: {
    label: "DevOps",
    icon: Monitor,
    colors: ["hsl(217, 91%, 60%)", "hsl(152, 76%, 42%)"],
  },
  "dark-pro": {
    label: "Dark Pro",
    icon: Moon,
    colors: ["hsl(200, 100%, 50%)", "hsl(160, 100%, 45%)"],
  },
  "light-pro": {
    label: "Light Pro",
    icon: Sun,
    colors: ["hsl(217, 70%, 50%)", "hsl(152, 60%, 35%)"],
  },
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes: Theme[] = ["devops", "dark-pro", "light-pro"];
  const currentTheme = themeInfo[theme];
  const Icon = currentTheme.icon;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-16 right-0 bg-card border border-border rounded-xl p-2 shadow-2xl min-w-[160px]"
          >
            {themes.map((t) => {
              const info = themeInfo[t];
              const ThemeIcon = info.icon;
              return (
                <button
                  key={t}
                  onClick={() => {
                    setTheme(t);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    theme === t
                      ? "bg-primary/20 text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <ThemeIcon size={18} />
                  <span className="text-sm font-medium">{info.label}</span>
                  <div className="ml-auto flex gap-1">
                    {info.colors.map((color, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full gradient-bg shadow-lg shadow-primary/25 flex items-center justify-center group"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Palette className="text-primary-foreground" size={24} />
        </motion.div>
        
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full gradient-bg opacity-50 animate-ping" />
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
