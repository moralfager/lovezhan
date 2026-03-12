import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BackgroundStars } from "@/components/BackgroundStars";
import { FloatingHearts } from "@/components/FloatingHearts";
import { Particles } from "@/components/Particles";
import { IntroCountdown } from "@/components/IntroCountdown";
import { LoveTextReveal } from "@/components/LoveTextReveal";
import { CuteScene } from "@/components/CuteScene";
import { CardReveal } from "@/components/CardReveal";
import { PhotoGallery } from "@/components/PhotoGallery";
import { HeartCollage } from "@/components/HeartCollage";
import { LoveMessage } from "@/components/LoveMessage";

type SceneId =
  | "countdown"
  | "love-text"
  | "cute"
  | "card"
  | "photos"
  | "collage"
  | "done";

const SCENE_ORDER: SceneId[] = ["countdown", "love-text", "cute", "card", "photos", "collage", "done"];

export default function HomePage() {
  const [scene, setScene] = useState<SceneId>("countdown");
  const [introSkipped, setIntroSkipped] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const scrollToLoveMessage = () => {
    if (typeof document === "undefined") return;
    const el = document.getElementById("love-message-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goNextScene = useCallback(() => {
    setScene((current) => {
      const currentIndex = SCENE_ORDER.indexOf(current);
      return SCENE_ORDER[Math.min(SCENE_ORDER.length - 1, currentIndex + 1)];
    });
  }, []);

  const handleSkipIntro = () => {
    setIntroSkipped(true);
    setScene("done");
    scrollToLoveMessage();
  };

  const handleReplay = () => {
    setIntroSkipped(false);
    setScene("countdown");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleMusic = () => {
    setMusicOn((prev) => !prev);
  };

  // попытка автоматически включить музыку при загрузке
  useEffect(() => {
    setMusicOn(true);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    if (musicOn) {
      audio.loop = true;
      audio
        .play()
        .then(() => {
          // ok
        })
        .catch(() => {
          // autoplay может быть заблокирован, ничего страшного
        });
    } else {
      audio.pause();
    }
  }, [musicOn]);

  useEffect(() => {
    if (scene === "done") {
      scrollToLoveMessage();
    }
  }, [scene]);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <BackgroundStars />
      <Particles />
      <FloatingHearts />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />

      <main className="relative z-0 flex min-h-screen flex-col">
        <header className="pointer-events-none fixed inset-x-0 top-0 z-20 flex justify-between px-4 py-4 text-[10px] uppercase tracking-[0.3em] text-softpink/70 md:px-8">
          <div className="pointer-events-auto rounded-full border border-white/10 bg-black/40 px-4 py-1 backdrop-blur-xl">
            <span className="text-[10px]">I Love You Zhaniyat</span>
          </div>
          <div className="hidden pointer-events-auto items-center gap-2 md:flex">
            <span className="h-[1px] w-10 bg-softpink/40" />
            <span className="text-[10px] text-softpink/70">I Love You Zhaniyat</span>
          </div>
        </header>

        <section className="relative flex min-h-screen flex-col items-center justify-center pt-16">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />
          <div className="relative z-10 flex h-[520px] w-full max-w-5xl flex-col items-center justify-center px-3 md:h-[580px] md:px-8">
            <AnimatePresence mode="wait">
              {scene === "countdown" && (
                <motion.div
                  key="countdown"
                  className="h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <IntroCountdown onComplete={goNextScene} skipped={introSkipped} />
                </motion.div>
              )}

              {scene === "love-text" && (
                <motion.div
                  key="love-text"
                  className="h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <LoveTextReveal onComplete={goNextScene} />
                </motion.div>
              )}

              {scene === "cute" && (
                <motion.div
                  key="cute"
                  className="h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <CuteScene onComplete={goNextScene} />
                </motion.div>
              )}

              {scene === "card" && (
                <motion.div
                  key="card"
                  className="h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <CardReveal onComplete={goNextScene} />
                </motion.div>
              )}

              {scene === "photos" && (
                <motion.div
                  key="photos"
                  className="h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <PhotoGallery onComplete={goNextScene} />
                </motion.div>
              )}

              {scene === "collage" && (
                <motion.div
                  key="collage"
                  className="h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <HeartCollage onComplete={goNextScene} />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-x-0 bottom-4 z-20 flex justify-center">
              <motion.div
                className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-softpink/70 backdrop-blur-xl"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-[9px]">scene</span>
                <span className="h-[1px] w-5 bg-softpink/40" />
                <span>{SCENE_ORDER.indexOf(scene) + 1}</span>
                <span className="opacity-50">/</span>
                <span>{SCENE_ORDER.length}</span>
              </motion.div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center md:bottom-10">
            <motion.div
              className="h-8 w-[1px] bg-gradient-to-b from-softpink/30 via-softpink/80 to-transparent"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </section>

        {scene === "done" && (
          <motion.section
            className="relative flex flex-1 flex-col items-center pb-16 pt-6 md:pt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <LoveMessage onReplay={handleReplay} onToggleMusic={handleToggleMusic} musicOn={musicOn} />
          </motion.section>
        )}

        <motion.div
          className="pointer-events-none mt-auto pb-6 text-center text-[10px] uppercase tracking-[0.3em] text-softpink/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          I Love You Zhaniyat
        </motion.div>
      </main>

      <div className="fixed bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2 px-4 md:bottom-6">
        <button
          onClick={handleSkipIntro}
          className="rounded-full border border-white/20 bg-black/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-softpink/90 shadow-soft-pink/40 backdrop-blur-xl transition hover:bg-white/10"
        >
          Skip intro
        </button>
        <button
          onClick={handleReplay}
          className="rounded-full border border-hotpink/70 bg-hotpink/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-soft-pink backdrop-blur-xl transition hover:bg-hotpink/60"
        >
          Replay
        </button>
        <button
          onClick={handleToggleMusic}
          className={`rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] shadow-soft-pink/40 backdrop-blur-xl transition ${
            musicOn
              ? "border-softpink bg-softpink/30 text-white hover:bg-softpink/50"
              : "border-white/20 bg-black/70 text-softpink/90 hover:bg-white/10"
          }`}
        >
          {musicOn ? "Music on" : "Music off"}
        </button>
      </div>

      <audio ref={audioRef} src="/zhan/videoplayback.mp3" />
    </div>
  );
}

