import { motion } from "framer-motion";

const TOTAL_PHOTOS = 27;

const photos = Array.from({ length: TOTAL_PHOTOS }).map((_, i) => ({
  id: i,
  src: `/zhan/${i + 1}.jpg`
}));

interface LoveMessageProps {
  onReplay: () => void;
  onToggleMusic: () => void;
  musicOn: boolean;
}

export function LoveMessage({ onReplay, onToggleMusic, musicOn }: LoveMessageProps) {
  return (
    <section
      id="love-message-section"
      className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 pb-20 pt-10 md:pt-16"
    >
      <motion.div
        className="relative rounded-3xl border border-white/10 bg-black/55 px-6 py-8 shadow-soft-pink backdrop-blur-2xl md:px-10 md:py-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-hotpink/20 blur-3xl" />
        <div className="absolute -bottom-16 -right-8 h-40 w-40 rounded-full bg-softpink/20 blur-3xl" />

        <div className="relative">
          <h1 className="mt-4 font-display text-3xl font-semibold text-softpink neon-text md:text-4xl">
            I Love You Zhaniyat
          </h1>
        </div>
      </motion.div>

      <motion.div
        className="relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/5 px-4 py-4 text-xs text-softpink/90 backdrop-blur-xl md:px-6 md:py-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-4">
          <div className="text-[11px] uppercase tracking-[0.25em] text-softpink/80">
            I Love You Zhaniyat
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={onReplay}
              className="rounded-full border border-hotpink/60 bg-hotpink/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-softpink shadow-soft-pink transition hover:bg-hotpink/40"
            >
              Replay intro
            </button>
            <button
              onClick={onToggleMusic}
              className="rounded-full border border-white/20 bg-black/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-softpink/90 transition hover:bg-white/10"
            >
              {musicOn ? "Mute music" : "Toggle music"}
            </button>
          </div>
        </div>

        <motion.div
          className="mt-2 grid w-full grid-cols-3 gap-2 md:grid-cols-6 md:gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-sm"
              whileHover={{ scale: 1.04, rotate: 1.5 }}
              transition={{ type: "spring", stiffness: 140, damping: 16 }}
            >
              <div className="relative w-full pt-[100%]">
                <img
                  src={photo.src}
                  alt="I Love You Zhaniyat"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

