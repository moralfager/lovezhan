import { motion } from "framer-motion";
import { useEffect } from "react";

interface LoveTextRevealProps {
  onComplete: () => void;
}

export function LoveTextReveal({ onComplete }: LoveTextRevealProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 4500);
    return () => clearTimeout(t);
  }, [onComplete]);

  const wordVariant = {
    hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const renderWord = (text: string, larger?: boolean) => (
    <motion.div
      variants={wordVariant}
      className={`flex flex-wrap justify-center ${larger ? "mt-4 text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariant}
          className={`neon-text px-0.5 font-semibold tracking-[0.2em] ${
            larger ? "text-softpink" : "text-hotpink"
          }`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className="flex h-full items-center justify-center">
      <motion.div
        className="relative mx-4 flex max-w-3xl flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } }
        }}
      >
        <div className="absolute -inset-10 rounded-3xl bg-gradient-to-b from-hotpink/15 via-transparent to-softpink/2 blur-3xl" />
        <motion.div
          className="relative rounded-3xl border border-white/5 bg-black/50 px-6 py-10 shadow-soft-pink backdrop-blur-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {renderWord("I LOVE YOU")}
          {renderWord("ZHANIYAT", true)}
        </motion.div>
      </motion.div>
    </div>
  );
}

