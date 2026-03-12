import { motion } from "framer-motion";
import { useEffect } from "react";

interface CardRevealProps {
  onComplete: () => void;
}

export function CardReveal({ onComplete }: CardRevealProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 4000);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative mx-4 flex max-w-md flex-col items-center text-center">
        <div className="absolute -inset-10 rounded-3xl bg-gradient-to-b from-hotpink/25 via-transparent to-softpink/20 blur-3xl" />

        <motion.div
          className="relative origin-center rounded-3xl bg-gradient-to-br from-white/95 to-softpink/30 px-7 py-9 text-black shadow-[0_0_45px_rgba(255,45,146,0.55)]"
          initial={{ opacity: 0, scale: 0.8, y: 40, rotateX: -25 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="absolute -left-6 -top-6 h-16 w-16 rounded-full bg-hotpink/40 blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <motion.div
            className="absolute -bottom-10 -right-3 h-24 w-24 rounded-full bg-softpink/40 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          />

          <motion.h2
            className="mt-4 font-romantic text-3xl text-hotpink md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            I Love You Zhaniyat
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
}

