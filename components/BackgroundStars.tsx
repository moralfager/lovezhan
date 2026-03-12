import { motion } from "framer-motion";
import { useMemo } from "react";

const STAR_COUNT = 80;

export function BackgroundStars() {
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 4
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 cosmic-gradient" />
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white/80"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.left}%`,
            top: `${star.top}%`
          }}
          animate={{ opacity: [0.1, 1, 0.1], y: ["0%", "-8%", "0%"] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

