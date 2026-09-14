import { useState, useRef, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldAlert,
  Mic,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Volume2,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
  ChevronRight,
  Play,
  Pause,
  X,
  Radio,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function ProjectsSection() {
  const [activeSimulation, setActiveSimulation] = useState<'normal' | 'harassment' | 'threat'>('normal');
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  // 3D Tilt calculation
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Waveform bars count
  const waveformBars = 24;

  const simulationPresets = {
    normal: {
      status: 'SAFE_CONVERSATION',
      confidence: 99.2,
      sentiment: 'Neutral / Polite',
      alertLevel: 'LOW',
      color: '#10B981',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      sampleText: '"Great job on the team presentation, let\'s push the repository commit tonight."',
    },
    harassment: {
      status: 'ABUSIVE_SPEECH_FLAGGED',
      confidence: 94.6,
      sentiment: 'Hostile / Harassment',
      alertLevel: 'ELEVATED',
      color: '#F59E0B',
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      sampleText: '"[Simulated Toxic Insult / Repeated Harassment targeting user]"',
    },
    threat: {
      status: 'DIRECT_THREAT_DETECTED',
      confidence: 98.7,
      sentiment: 'Severe Malicious Threat',
      alertLevel: 'CRITICAL',
      color: '#EF4444',
      badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      sampleText: '"[Simulated High-Severity Physical Threat / Emergency Intervention]"',
    },
  };

  const currentSim = simulationPresets[activeSimulation];

  const handleCaseStudyModal = () => {
    setIsCaseStudyOpen(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#915EFF', '#00DBFF', '#FF4D9D'],
    });
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-[#00DBFF] bg-[#00DBFF]/10 border border-[#00DBFF]/30 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>APPLIED AI ENGINEERING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight"
          >
            Featured Projects
          </motion.h2>

          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl">
            Pioneering AI systems engineered to safeguard users, analyze complex speech patterns, and generate actionable real-time telemetry.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#915EFF] via-[#00DBFF] to-[#FF4D9D] rounded-full mt-4"
          />
        </div>

        {/* FLAGSHIP PROJECT CARD: VocalShield */}
        <div className="perspective-1000">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="relative rounded-3xl p-1 bg-gradient-to-br from-[#915EFF]/50 via-white/10 to-[#00DBFF]/50 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] group"
          >
            <div className="rounded-[22px] bg-[#070b24]/95 p-6 sm:p-10 relative overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#915EFF]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00DBFF]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* LEFT: Project Info & Feature Matrix */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Status Pill */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#915EFF]/20 text-[#915EFF] border border-[#915EFF]/40 shadow-[0_0_12px_rgba(145,94,255,0.4)]">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      FLAGSHIP AI INNOVATION
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-gray-400 bg-white/5 border border-white/10">
                      SPEECH SAFETY SYSTEM
                    </span>
                  </div>

                  {/* Project Title */}
                  <div>
                    <h3 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
                      VocalShield
                    </h3>
                    <p className="text-sm font-mono text-[#00DBFF] mt-1">
                      Intelligent Acoustic Threat Mitigation & Speech Defense
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-base text-gray-300 leading-relaxed font-light">
                    An AI-powered voice safety system designed to identify harmful,
                    abusive, or threatening speech and help protect users from voice-based
                    harassment through intelligent speech analysis.
                  </p>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      {
                        title: 'Real-time Detection',
                        desc: 'Sub-100ms latency stream analysis',
                        icon: Activity,
                      },
                      {
                        title: 'Abuse Recognition',
                        desc: 'Nuanced acoustic aggression parsing',
                        icon: AlertTriangle,
                      },
                      {
                        title: 'Threat Classification',
                        desc: 'Multi-tiered severity evaluation',
                        icon: Cpu,
                      },
                      {
                        title: 'Safety Alerts',
                        desc: 'Automated warnings & user isolation',
                        icon: ShieldAlert,
                      },
                    ].map((feature) => {
                      const FeatIcon = feature.icon;
                      return (
                        <div
                          key={feature.title}
                          className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <FeatIcon className="w-4 h-4 text-[#00DBFF]" />
                            <span className="font-display font-bold text-xs text-white">
                              {feature.title}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-400 leading-snug">
                            {feature.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Button */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      id="view-case-study-btn"
                      onClick={handleCaseStudyModal}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-[#915EFF] to-[#00DBFF] text-white shadow-[0_0_20px_rgba(145,94,255,0.4)] hover:shadow-[0_0_30px_rgba(0,219,255,0.6)] hover:scale-105 transition-all cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                      <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                      <span>Live Simulation Online</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Futuristic Dashboard Mockup & Live Audio Waveform Visualizer */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl bg-[#090e2b] border border-white/15 p-5 sm:p-6 shadow-2xl relative overflow-hidden">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                        <span className="font-mono text-xs text-white font-semibold tracking-wider">
                          VOCALSHIELD // REAL-TIME HUD
                        </span>
                      </div>

                      {/* Simulation Stream Controls */}
                      <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] rounded-lg border border-white/5 text-[10px] font-mono">
                        {(['normal', 'harassment', 'threat'] as const).map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setActiveSimulation(mode)}
                            className={`px-2 py-1 rounded capitalize transition-all cursor-pointer ${
                              activeSimulation === mode
                                ? 'bg-white/15 text-white font-bold'
                                : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* AI Waveform & Audio Spectrum Visualizer */}
                    <div className="bg-[#050816] rounded-xl p-4 border border-white/10 mb-4 relative overflow-hidden">
                      <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                        <span className="flex items-center gap-1.5">
                          <Mic className="w-3.5 h-3.5 text-[#00DBFF]" />
                          ACOUSTIC SPECTRUM ANALYSIS
                        </span>
                        <span className="text-[#915EFF]">SAMPLE_RATE: 44.1kHz</span>
                      </div>

                      {/* Animated Audio Waveform Bars */}
                      <div className="h-20 flex items-center justify-between gap-1 px-1">
                        {Array.from({ length: waveformBars }).map((_, i) => {
                          const baseHeight =
                            activeSimulation === 'threat'
                              ? [40, 85, 95, 70, 90, 100, 80, 95][i % 8]
                              : activeSimulation === 'harassment'
                              ? [30, 60, 75, 45, 70, 80, 50, 65][i % 8]
                              : [20, 35, 45, 25, 40, 30, 20, 35][i % 8];

                          return (
                            <motion.div
                              key={i}
                              animate={{
                                height: isPlayingAudio
                                  ? [`${baseHeight * 0.4}%`, `${baseHeight}%`, `${baseHeight * 0.3}%`]
                                  : '10%',
                              }}
                              transition={{
                                duration: 0.6 + (i % 5) * 0.1,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut',
                              }}
                              className="w-full rounded-full transition-colors duration-300"
                              style={{
                                backgroundColor: currentSim.color,
                                boxShadow: `0 0 8px ${currentSim.color}60`,
                              }}
                            />
                          );
                        })}
                      </div>

                      {/* Live transcription / Simulated sample stream */}
                      <div className="mt-3 pt-2.5 border-t border-white/5 font-mono text-[11px] text-gray-300 flex items-center justify-between">
                        <span className="truncate italic max-w-xs sm:max-w-sm">
                          {currentSim.sampleText}
                        </span>
                        <button
                          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                          className="p-1 rounded bg-white/5 hover:bg-white/10 text-gray-300 cursor-pointer ml-2 shrink-0"
                          title="Toggle simulated audio playback"
                        >
                          {isPlayingAudio ? (
                            <Pause className="w-3 h-3" />
                          ) : (
                            <Play className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Threat Telemetry Rows */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-gray-400 text-[10px] block mb-0.5">
                          CLASSIFICATION
                        </span>
                        <span
                          className="font-semibold text-xs tracking-wider"
                          style={{ color: currentSim.color }}
                        >
                          {currentSim.status}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-gray-400 text-[10px] block mb-0.5">
                          CONFIDENCE
                        </span>
                        <span className="font-bold text-white text-xs">
                          {currentSim.confidence}%
                        </span>
                      </div>

                      <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-gray-400 text-[10px] block mb-0.5">
                          DEFENSE ACTION
                        </span>
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${currentSim.badgeBg}`}
                        >
                          {activeSimulation === 'normal'
                            ? 'PASSTHROUGH'
                            : activeSimulation === 'harassment'
                            ? 'WARN_TRIGGERED'
                            : 'SHIELD_MUTED'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Secondary Project Teaser Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono text-[#00DBFF] bg-[#00DBFF]/10 border border-[#00DBFF]/20">
                UPCOMING RESEARCH
              </span>
              <span className="text-xs font-mono text-gray-500">2026 ROADMAP</span>
            </div>
            <h4 className="text-xl font-display font-bold text-white mb-2">
              NeuroVision: Edge Multimodal Analysis
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Real-time computer vision and acoustic fusion architecture for rapid situational awareness on low-power devices.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <span className="px-2 py-0.5 rounded bg-white/5">Python</span>
              <span className="px-2 py-0.5 rounded bg-white/5">OpenCV</span>
              <span className="px-2 py-0.5 rounded bg-white/5">TensorFlow</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono text-[#FF4D9D] bg-[#FF4D9D]/10 border border-[#FF4D9D]/20">
                HACKATHON PIPELINE
              </span>
              <span className="text-xs font-mono text-gray-500">COLLABORATION</span>
            </div>
            <h4 className="text-xl font-display font-bold text-white mb-2">
              SyntheSense: Generative Audio Sanitization
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Privacy-preserving voice masking using generative adversarial networks to neutralize acoustic biometric tracking.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <span className="px-2 py-0.5 rounded bg-white/5">Data Science</span>
              <span className="px-2 py-0.5 rounded bg-white/5">PyTorch</span>
              <span className="px-2 py-0.5 rounded bg-white/5">Speech AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {isCaseStudyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-[#090d29] border border-white/20 shadow-[0_0_60px_rgba(145,94,255,0.4)] text-white"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-[#00DBFF] tracking-wider uppercase">
                    SYSTEM CASE STUDY // MUBEENA
                  </span>
                  <h3 className="text-2xl font-display font-black text-white mt-1">
                    VocalShield Architecture
                  </h3>
                </div>
                <button
                  onClick={() => setIsCaseStudyOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="font-display font-bold text-base text-[#915EFF] mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> The Problem
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-light">
                    Voice chat platforms, online gaming lobbies, and collaborative digital workspaces suffer from rampant verbal abuse, targeted intimidation, and harassment. Traditional moderation is post-facto, requiring manual reports after psychological harm has already occurred.
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-base text-[#00DBFF] mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> The AI Architecture
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-light mb-3">
                    VocalShield deploys an end-to-end multi-layer pipeline:
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-gray-300">
                    <li className="flex items-start gap-2 bg-white/[0.03] p-2.5 rounded-lg">
                      <span className="text-[#915EFF] font-bold">01.</span>
                      <span>Audio Ingestion & Mel-Spectrogram acoustic feature extraction at 20ms frames.</span>
                    </li>
                    <li className="flex items-start gap-2 bg-white/[0.03] p-2.5 rounded-lg">
                      <span className="text-[#00DBFF] font-bold">02.</span>
                      <span>Deep acoustic tone & prosody evaluation alongside automated speech-to-text token analysis.</span>
                    </li>
                    <li className="flex items-start gap-2 bg-white/[0.03] p-2.5 rounded-lg">
                      <span className="text-[#FF4D9D] font-bold">03.</span>
                      <span>Threat Classification Engine scoring toxicity probability with &gt;94% precision.</span>
                    </li>
                    <li className="flex items-start gap-2 bg-white/[0.03] p-2.5 rounded-lg">
                      <span className="text-emerald-400 font-bold">04.</span>
                      <span>Instantaneous shield action: dynamic mute, haptic user warning, and forensic logging.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-display font-bold text-base text-emerald-400 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Impact & Vision
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-light">
                    Engineered during my first year in B.Tech Artificial Intelligence & Data Science, VocalShield demonstrates how machine learning can serve as an active safeguard for human well-being and digital safety.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setIsCaseStudyOpen(false)}
                  className="px-6 py-2.5 rounded-xl font-mono text-xs font-semibold bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
