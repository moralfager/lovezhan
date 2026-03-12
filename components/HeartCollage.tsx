import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeartCollageProps {
  onComplete: () => void;
}

const TOTAL_PHOTOS = 27;

const PHOTOS = Array.from({ length: TOTAL_PHOTOS }).map((_, i) => ({
  id: i,
  src: `/zhan/${i + 1}.jpg`
}));

// Rough heart layout grid positions (x, y from -1 to 1)
const HEART_POINTS = [
  [-0.6, -0.2],
  [-0.3, -0.45],
  [0, -0.55],
  [0.3, -0.45],
  [0.6, -0.2],
  [-0.8, 0.1],
  [-0.5, 0.2],
  [-0.2, 0.25],
  [0.2, 0.25],
  [0.5, 0.2],
  [0.8, 0.1],
  [-0.6, 0.55],
  [-0.3, 0.7],
  [0, 0.8],
  [0.3, 0.7],
  [0.6, 0.55],
  [-0.1, 0.45],
  [0.1, 0.45]
] as const;

export function HeartCollage({ onComplete }: HeartCollageProps) {
  const [visibleCount, setVisibleCount] = useState(0);

  // плавное "нарастание" коллажа — по одному фото за шаг
  useEffect(() => {
    if (visibleCount >= TOTAL_PHOTOS) return;
    const step = setTimeout(() => {
      setVisibleCount((prev) => Math.min(TOTAL_PHOTOS, prev + 1));
    }, 180);
    return () => clearTimeout(step);
  }, [visibleCount]);

  // даём время спокойно рассмотреть сердце перед переходом к следующей сцене
  useEffect(() => {
    if (visibleCount < TOTAL_PHOTOS) return;
    const t = setTimeout(onComplete, 6000);
    return () => clearTimeout(t);
  }, [visibleCount, onComplete]);

  return (
    <div className="flex h-full items-center justify-center">
      <motion.div
        className="relative mx-4 flex h-[320px] w-full max-w-3xl items-center justify-center md:h-[380px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="heart-mask h-64 w-64 bg-gradient-to-b from-hotpink/40 via-softpink/20 to-transparent blur-3xl md:h-80 md:w-80"
            animate={{ scale: [1, 1.05, 1], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {PHOTOS.slice(0, visibleCount).map((photo, index) => {
          const target = HEART_POINTS[index % HEART_POINTS.length];
          const [tx, ty] = target;
          const size = index % 4 === 0 ? 120 : 100;
          const angle = (Math.random() - 0.5) * 18;

          return (
            <motion.div
              key={photo.id}
              className="absolute overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-xl"
              initial={{
                opacity: 0,
                scale: 0.4,
                x: (Math.random() - 0.5) * 600,
                y: (Math.random() - 0.5) * 600,
                rotate: (Math.random() - 0.5) * 50
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: tx * 150,
                y: ty * 140,
                rotate: angle
              }}
              transition={{
                duration: 0.9,
                delay: 0.15 + index * 0.08,
                type: "spring",
                stiffness: 70,
                damping: 16
              }}
              style={{ width: size, height: size * 1.1 }}
            >
              <motion.img
                src={photo.src}
                alt="Love memory"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          );
        })}

        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <motion.div
            className="rounded-full border border-hotpink/40 bg-black/40 px-5 py-2 text-xs uppercase tracking-[0.25em] text-softpink/90 shadow-soft-pink backdrop-blur-xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            I Love You Zhaniyat
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

