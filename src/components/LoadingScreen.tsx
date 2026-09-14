import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING NEURAL CORE...');
  const nameLetters = ['M', 'U', 'B', 'E', 'E', 'N', 'A'];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 450);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        const clamped = Math.min(next, 100);

        if (clamped > 25 && clamped <= 50) {
          setStatusText('CALIBRATING TENSOR ENGINES...');
        } else if (clamped > 50 && clamped <= 80) {
          setStatusText('CONNECTING SYNAPSE NODES...');
        } else if (clamped > 80 && clamped < 100) {
          setStatusText('OPTIMIZING MODEL PARAMETERS...');
        } else if (clamped >= 100) {
          setStatusText('SYSTEM ONLINE');
        }

        return clamped;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816] text-white select-none overflow-hidden"
      >
        {/* Futuristic background grid & radial glow */}
        <div className="absolute inset-0 bg-cyber-grid opacity-30" />
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#915EFF]/20 via-[#00DBFF]/15 to-transparent rounded-full blur-3xl animate-pulse-glow" />

        {/* Ambient floating particle rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-80 h-80 rounded-full border border-[#915EFF]/20 border-dashed animate-spin-slow" />
          <div className="absolute w-96 h-96 rounded-full border border-[#00DBFF]/15 animate-spin-reverse-slow" />
        </div>

        {/* Brand Container */}
        <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
          {/* Top Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 mb-8 rounded-full text-xs font-mono tracking-widest text-[#00DBFF] bg-[#00DBFF]/10 border border-[#00DBFF]/30"
          >
            <Cpu className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
            <span>AI & DATA SCIENCE ARCHITECTURE</span>
          </motion.div>

          {/* Animated Letters: MUBEENA */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
                className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(145,94,255,0.6)]"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm font-mono text-gray-400 mb-8 tracking-widest uppercase flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF4D9D]" />
            First-Year B.Tech Student Portfolio
          </motion.p>

          {/* Progress Line */}
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden p-[1px] border border-white/10 mb-3 shadow-[0_0_15px_rgba(145,94,255,0.3)]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#915EFF] via-[#00DBFF] to-[#FF4D9D]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Status & percentage */}
          <div className="w-full flex items-center justify-between text-xs font-mono text-gray-400">
            <span className="text-[#00DBFF] tracking-wider">{statusText}</span>
            <span className="text-white font-semibold">{progress}%</span>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-8 text-[11px] font-mono text-gray-500 tracking-wider">
          SYSTEM_VER: 2026.1 // QUANTUM_AI_PORTFOLIO
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
