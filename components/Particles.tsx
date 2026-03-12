import { motion } from "framer-motion";
import { useMemo } from "react";

const PARTICLE_COUNT = 40;

export function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 3 + Math.random() * 8,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 6
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-hotpink/40 blur-md"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`
          }}
          animate={{
            x: ["-6%", "6%", "-6%"],
            y: ["-4%", "4%", "-4%"],
            opacity: [0.15, 0.5, 0.15]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

