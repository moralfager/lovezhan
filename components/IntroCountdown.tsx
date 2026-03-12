import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const numbers = [3, 2, 1];

interface IntroCountdownProps {
  onComplete: () => void;
  skipped?: boolean;
}

export function IntroCountdown({ onComplete, skipped }: IntroCountdownProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (skipped) return;
    if (index >= numbers.length) {
      const timeout = setTimeout(onComplete, 600);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 1300);
    return () => clearTimeout(timeout);
  }, [index, onComplete, skipped]);

  if (skipped) return null;

  const number = numbers[index];

  return (
    <div className="flex h-full items-center justify-center">
      <AnimatePresence mode="wait">
        {index < numbers.length && (
          <motion.div
            key={number}
            initial={{ opacity: 0, scale: 0.6, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.4, filter: "blur(14px)" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-32 rounded-full bg-black/70 backdrop-blur-3xl" />
              <motion.div
                className="h-52 w-52 rounded-full bg-hotpink/25 blur-3xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute grid h-44 w-44 grid-cols-8 grid-rows-8"
                animate={{ rotate: [0, 12, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <div className="h-[5px] w-[5px] rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
                  </div>
                ))}
              </motion.div>
              <motion.span
                className="absolute text-8xl font-semibold tracking-[0.25em] text-softpink neon-text md:text-9xl"
                animate={{ scale: [1.05, 1.15, 1.05], opacity: [1, 1, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                {number}
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

