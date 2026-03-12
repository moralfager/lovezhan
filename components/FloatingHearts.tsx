import { motion } from "framer-motion";
import { useMemo } from "react";

const HEART_COUNT = 24;

export function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: HEART_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 6,
        scale: 0.4 + Math.random() * 0.8,
        opacity: 0.15 + Math.random() * 0.4
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-softpink"
          style={{ left: `${h.left}%` }}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "-20%", opacity: [0, h.opacity, 0] }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="soft-glow"
            animate={{ scale: [h.scale, h.scale * 1.2, h.scale] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="block text-2xl md:text-3xl select-none">♥</span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

