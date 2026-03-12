import { motion } from "framer-motion";
import { useEffect } from "react";

interface PhotoGalleryProps {
  onComplete: () => void;
}

const TOTAL_PHOTOS = 27;

const photos = Array.from({ length: TOTAL_PHOTOS }).map((_, i) => ({
  id: i,
  src: `/zhan/${i + 1}.jpg`
}));

export function PhotoGallery({ onComplete }: PhotoGalleryProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 4500);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div className="flex h-full items-center justify-center">
      <motion.div
        className="relative mx-4 flex w-full max-w-4xl flex-col items-center gap-6 md:flex-row"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute -inset-14 rounded-3xl bg-gradient-to-tr from-hotpink/20 via-transparent to-softpink/25 blur-3xl" />

        {photos.slice(0, 3).map((photo, index) => (
          <motion.figure
            key={photo.id}
            className="relative z-10 flex-1 overflow-hidden rounded-3xl border border-white/8 bg-white/5 shadow-xl backdrop-blur-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 + index * 0.25, ease: "easeOut" }}
          >
            <div className="relative aspect-[3/4] w-full">
              <motion.img
                src={photo.src}
                alt="Zhaniyat photo"
                className="h-full w-full rounded-[24px] object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.03 }}
                transition={{ duration: 6, ease: "easeOut" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.figure>
        ))}

        {/* маленькие летающие мини-фото вокруг */}
        {photos.slice(3, 12).map((photo, index) => (
          <motion.div
            key={photo.id}
            className="pointer-events-none absolute top-1/2 left-1/2 z-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-xl"
            style={{
              width: 72,
              height: 88
            }}
            initial={{
              opacity: 0,
              scale: 0.4,
              x: (Math.random() - 0.5) * 700,
              y: (Math.random() - 0.5) * 400,
              rotate: (Math.random() - 0.5) * 40
            }}
            animate={{
              opacity: 0.9,
              scale: 1,
              rotate: [0, (Math.random() - 0.5) * 20, 0],
              y: ["-10%", "10%", "-10%"]
            }}
            transition={{
              duration: 3.5 + index * 0.1,
              delay: 0.8 + index * 0.08,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          >
            <img src={photo.src} alt="Zhaniyat mini" className="h-full w-full object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

