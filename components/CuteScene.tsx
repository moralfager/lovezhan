import { motion } from "framer-motion";
import { useEffect } from "react";

interface CuteSceneProps {
  onComplete: () => void;
}

export function CuteScene({ onComplete }: CuteSceneProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 3500);
    return () => clearTimeout(t);
  }, [onComplete]);

  const float = {
    animate: {
      y: [-6, 4, -6],
      rotate: [-2, 2, -2]
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative mx-4 flex max-w-md flex-col items-center text-center">
        <div className="absolute -inset-12 rounded-full bg-hotpink/20 blur-3xl" />
        <motion.div
          className="relative flex flex-col items-center rounded-3xl border border-white/10 bg-black/60 px-8 py-10 shadow-soft-pink backdrop-blur-2xl"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="mb-4 rounded-full bg-gradient-to-tr from-hotpink to-softpink/90 p-1 shadow-soft-pink"
            {...float}
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black/80">
              <span className="text-5xl">🐱</span>
            </div>
          </motion.div>

          <motion.div
            className="mb-1 text-sm font-medium uppercase tracking-[0.25em] text-softpink/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Cute cosmic cat
          </motion.div>
          <motion.p
            className="max-w-xs text-xs text-softpink/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            A tiny space-kitty, playing a soft melody only your heart can hear.
          </motion.p>

          {/* Guitar / heart / notes */}
          <div className="relative mt-6 h-24 w-full">
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              {...float}
            >
              <span className="text-4xl">🎸</span>
            </motion.div>

            {["💗", "💕", "💓"].map((heart, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ opacity: 0, scale: 0.3, y: 10 }}
                animate={{ opacity: [0, 1, 0], scale: [0.4, 1, 1.2], y: [16, -10, -22] }}
                transition={{
                  duration: 2.5,
                  delay: 0.4 + i * 0.4,
                  repeat: Infinity,
                  repeatDelay: 0.6
                }}
                style={{
                  left: `${35 + i * 15}%`,
                  bottom: "12%"
                }}
              >
                <span className="text-2xl">{heart}</span>
              </motion.div>
            ))}

            {["♪", "♩", "♫"].map((note, i) => (
              <motion.div
                key={note}
                className="absolute text-softpink"
                initial={{ opacity: 0, y: 10, scale: 0.6 }}
                animate={{ opacity: [0, 0.9, 0], y: [12, -18, -26], scale: [0.6, 1, 1.1] }}
                transition={{
                  duration: 2.4,
                  delay: 0.8 + i * 0.35,
                  repeat: Infinity,
                  repeatDelay: 0.8
                }}
                style={{
                  left: `${34 + i * 18}%`,
                  top: "38%"
                }}
              >
                <span className="text-xl">{note}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

