import { ArrowUp, Sparkles, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050816]/90 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-xl tracking-wider text-white">
              MUBEENA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00DBFF]" />
            <span className="text-xs font-mono text-[#915EFF] font-semibold tracking-widest">
              AI & DATA SCIENCE
            </span>
          </div>
          <p className="text-xs font-mono text-gray-400">
            First-Year B.Tech Student & Aspiring AI Engineer
          </p>
        </div>

        {/* Center Credits */}
        <div className="flex flex-col items-center text-center space-y-1.5">
          <p className="text-xs font-mono text-gray-400">
            © 2026 Mubeena. All rights reserved.
          </p>
          <p className="text-[11px] font-mono text-gray-500 max-w-md">
            Built with Next.js, Tailwind CSS, Framer Motion, and Three.js.
          </p>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(145,94,255,0.4)]"
          title="Return to top of page"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#00DBFF]" />
        </button>
      </div>
    </footer>
  );
}
