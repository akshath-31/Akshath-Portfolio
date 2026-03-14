/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Box, Layers, Zap, ChevronRight } from "lucide-react";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoTransitioning, setIsVideoTransitioning] = useState(false);
  const loopVideoRefDesktop = useRef<HTMLVideoElement>(null);
  const loopVideoRefMobile = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    setIsVideoTransitioning(true);
    if (loopVideoRefDesktop.current) {
      loopVideoRefDesktop.current.play();
    }
    if (loopVideoRefMobile.current) {
      loopVideoRefMobile.current.play();
    }
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-white selection:text-black overflow-x-hidden overflow-y-auto lg:overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div 
        style={{ 
          opacity: isLoading ? 0 : 1, 
          transition: "opacity 0.5s ease-out" 
        }}
      >
        {/* Black Background Base */}
        <div className="fixed inset-0 bg-black z-[-20]" />
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-50 bg-black/50 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none">
        <div className="flex flex-col gap-1">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-2xl font-medium font-mono tracking-[-0.02em] leading-tight uppercase"
          >
            AKSHATH //
            <br />
            <span className="text-zinc-100">DIGITAL ARCHITECT</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-[240px] md:max-w-xs text-[10px] md:text-xs text-zinc-400 mt-2 md:mt-3 leading-relaxed font-light"
          >
            Crafting bespoke web experiences with a focus on high-performance code for those who don't just browse the web—they build it.  Elevate.
          </motion.p>
          
          <div className="flex gap-2 md:gap-3 mt-4 md:mt-6">
            {[Box, Layers, Zap].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group"
              >
                <Icon size={18} className="group-hover:scale-110 transition-transform" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-[11px] tracking-[0.3em] font-mono text-zinc-500 uppercase">
          <span className="text-zinc-400">1/26</span>
          <div className="w-32 h-[1px] bg-zinc-800 relative">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-zinc-300" />
          </div>
          <span className="text-zinc-200 hover:text-white cursor-pointer transition-colors">Next Product</span>
        </div>
      </header>

      {/* Background Video (Desktop) */}
      <div className="hidden lg:block fixed inset-0 overflow-hidden pointer-events-none z-[-10]">
        {/* Intro Video */}
        <video
          autoPlay
          muted
          PlaysInline
          onEnded={handleVideoEnded}
          className={`absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-1000 ${
            isVideoTransitioning ? "opacity-0" : "opacity-80"
          }`}
        >
          <source src="/Aks_Tilt.mp4" type="video/mp4" />
        </video>
        
        {/* Loop Video */}
        <video
          ref={loopVideoRefDesktop}
          loop
          muted
          PlaysInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoTransitioning ? "opacity-80" : "opacity-0"
          }`}
        >
          <source src="/Aks_Blink_Loop.mp4" type="video/mp4" />
        </video>
        {/* Overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40" />
      </div>

      {/* Main Content Area */}
      <main className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center z-10 lg:p-0">
        {/* Mobile Video Header */}
        <div className="lg:hidden w-full h-[50vh] relative overflow-hidden mb-12 bg-black">
          {/* Intro Video Mobile */}
          <video
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoTransitioning ? "opacity-0" : "opacity-80"
            }`}
          >
            <source src="/Aks_Tilt.mp4" type="video/mp4" />
          </video>

          {/* Loop Video Mobile */}
          <video
            ref={loopVideoRefMobile}
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoTransitioning ? "opacity-80" : "opacity-0"
            }`}
          >
            <source src="/Aks_Blink_Loop.mp4" type="video/mp4" />
          </video>
          {/* Top Gradient */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent opacity-80" />
          {/* Bottom Gradient for smooth transition to content */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="w-full max-w-md px-6 lg:px-0 flex flex-col items-center">
          {/* Mobile Technical Specs */}
          <div className="lg:hidden w-full mb-12">
            <h2 className="text-[10px] tracking-[0.3em] font-mono text-zinc-500 mb-6 uppercase font-medium">
              Technical Specs
            </h2>
            <div className="space-y-4 font-mono text-[12px]">
              {[
                { label: "Optics", value: "React & TypeScript" },
                { label: "Logic", value: "Node.js & Express!" },
                { label: "Motion", value: "Vite & Cloud Run" },
                { label: "Build", value: "Production Ready Systems" },
              ].map((spec, i) => (
                <div key={i} className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500">{spec.label}</span>
                  <span className="text-zinc-200">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero content placeholder */}
          <div className="flex-grow" />

          {/* Mobile Card & Tags */}
          <div className="lg:hidden w-full space-y-8 mt-12 pb-12">
            <div className="p-8 rounded-3xl bg-zinc-900/30 backdrop-blur-2xl border border-zinc-800/40">
              <div className="flex flex-col gap-3">
                <h3 className="text-[11px] font-mono tracking-[0.2em] text-zinc-300 uppercase font-semibold">
                  AK-01: SOURCE CODE
                </h3>
                <p className="text-zinc-500 text-[13px] leading-relaxed mb-6 font-light">
                  High-performance logic and a clean stack for speed and clarity.!!
                </p>
                <button className="w-full py-4 rounded-full border border-zinc-700 text-[10px] font-mono uppercase tracking-[0.2em] active:bg-white active:text-black transition-all">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { label: "8K RAW", active: false },
                { label: "A+", active: false },
                { label: "ULTRA-WIDE", active: false },
                { label: "NEURAL-SYNC", active: true },
              ].map((tag, i) => (
                <div
                  key={i}
                  className={`px-4 py-2 rounded-full text-[9px] font-mono tracking-[0.2em] border flex items-center gap-2 ${
                    tag.active 
                      ? "bg-white text-black border-white" 
                      : "bg-zinc-900/40 text-zinc-500 border-zinc-800/50"
                  }`}
                >
                  {tag.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Desktop Technical Specs - Right Side */}
      <div className="hidden lg:block fixed right-10 top-1/2 -translate-y-1/2 w-80 z-40">
        <h2 className="text-[11px] tracking-[0.3em] font-mono text-zinc-500 mb-8 uppercase font-medium">
          Technical Specs
        </h2>
        <div className="space-y-6 font-mono text-[13px]">
          {[
            { label: "Optics", value: "React & TypeScript" },
            { label: "Logic", value: "Node.js & Express!" },
            { label: "Motion", value: "Vite & Cloud Run" },
            { label: "Build", value: "Production Ready Systems" },
          ].map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex justify-between border-b border-zinc-900 pb-3 group cursor-default"
            >
              <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">{spec.label}</span>
              <span className="text-zinc-200 font-medium">{spec.value}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Bottom Left Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="hidden lg:block fixed bottom-10 left-10 p-10 rounded-[2.5rem] bg-zinc-900/30 backdrop-blur-2xl border border-zinc-800/40 w-[420px] z-40"
      >
        <div className="flex flex-col gap-3">
          <h3 className="text-[12px] font-mono tracking-[0.2em] text-zinc-300 uppercase font-semibold">
            AK-01: SOURCE CODE
          </h3>
          <p className="text-zinc-500 text-[14px] leading-relaxed mb-8 font-light">
            High-performance logic and a clean stack for speed and clarity.!!
          </p>
          <button className="w-fit px-8 py-3 rounded-full border border-zinc-700 text-[11px] font-mono uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 active:scale-95">
            Add to Cart
          </button>
        </div>
      </motion.div>

      {/* Desktop Bottom Right Tags */}
      <div className="hidden lg:flex fixed bottom-10 right-10 gap-3 z-40">
        {[
          { label: "8K RAW", active: false },
          { label: "A+", active: false },
          { label: "ULTRA-WIDE", active: false },
          { label: "NEURAL-SYNC", active: true },
        ].map((tag, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
            className={`px-6 py-3 rounded-full text-[10px] font-mono tracking-[0.2em] border flex items-center gap-3 transition-all duration-300 cursor-pointer ${
              tag.active 
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                : "bg-zinc-900/40 text-zinc-500 border-zinc-800/50 hover:border-zinc-600 hover:text-zinc-300"
            }`}
          >
            {tag.label}
            {tag.active && <ChevronRight size={14} className="rotate-[-45deg]" />}
          </motion.div>
        ))}
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      </div>
    </div>
  </div>
);
}
