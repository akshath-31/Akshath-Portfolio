import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
  isReady: boolean;
}

const words = ["Imagine", "Innovate", "Inspire"];

export default function LoadingScreen({ onComplete, isReady }: LoadingScreenProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);
  const isReadyRef = useRef(isReady);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    isReadyRef.current = isReady;
  }, [isReady]);

  // Word rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => {
        if (prev < words.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  // Counter logic
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    const duration = 4000; // 4.0 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

      if (elapsed < duration) {
        setProgress((elapsed / duration) * 100);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        if (isReadyRef.current) {
          setProgress(100);
          setTimeout(() => {
            onCompleteRef.current();
          }, 400);
        } else {
          // If 4 seconds have passed but site isn't ready, freeze at 99
          setProgress(99);
          animationFrameId = requestAnimationFrame(animate);
        }
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Element 1: Portfolio Label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute top-8 left-8 md:top-12 md:left-12 text-lg md:text-xl text-orange-500 font-sans lowercase tracking-[0.3em] flex items-center"
      >
        loading.akshath.dev
        <span className="flex w-4">
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1], delay: 0 }}>.</motion.span>
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1], delay: 0.2 }}>.</motion.span>
          <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1], delay: 0.4 }}>.</motion.span>
        </span>
      </motion.div>

      {/* Element 2: Rotating Words */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-5xl md:text-[4.8rem] lg:text-[6.4rem] font-display italic text-orange-500 font-normal"
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Element 3: Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-[2.4rem] md:text-[4.5rem] lg:text-[5.6rem] font-display italic text-orange-500 tabular-nums font-normal"
      >
        {Math.round(progress).toString().padStart(3, '0')}
      </motion.div>

      {/* Element 4: Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1f1f1f]/50">
        <motion.div
          className="h-full origin-left"
          style={{
            background: "linear-gradient(90deg, #fdba74 0%, #ea580c 100%)",
            boxShadow: "0 0 8px rgba(234, 88, 12, 0.35)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
