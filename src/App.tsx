/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Github, Instagram, FileText, ChevronRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

// LeetCode Icon component string
const LeetCodeIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z" />
  </svg>
);
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [siteLoaded, setSiteLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Track which video is active (intro vs loop) — purely visual, no layout effect
  const [showLoopVideo, setShowLoopVideo] = useState(false);

  useEffect(() => {
    const handleLoad = () => setSiteLoaded(true);
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const introVideoRefDesktop = useRef<HTMLVideoElement>(null);
  const loopVideoRefDesktop = useRef<HTMLVideoElement>(null);

  // Trigger video playback when loading screen disappears
  useEffect(() => {
    if (!isLoading) {
      if (introVideoRefDesktop.current) introVideoRefDesktop.current.play();
    }
  }, [isLoading]);

  // When intro video ends, crossfade to loop — NO layout changes
  const handleVideoEnded = () => {
    setShowLoopVideo(true);
    if (loopVideoRefDesktop.current) {
      loopVideoRefDesktop.current.play();
    }
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-white selection:text-black overflow-x-hidden overflow-y-auto lg:overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} isReady={siteLoaded} />
        )}
      </AnimatePresence>

      <div 
        className="relative min-h-screen text-white font-sans overflow-hidden bg-zinc-950"
        style={{ 
          opacity: isLoading ? 0 : 1, 
          transition: "opacity 0.5s ease-out" 
        }}
      >
        {/* Outer Background (Desktop Only) */}
        <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,88,12,0.1),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(#ea580c 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
        </div>

        {/* Left-Side Navigation Menu (Desktop Only) — Renders immediately, no gate */}
        <nav
          className="hidden lg:flex absolute top-0 bottom-0 flex-col justify-center z-20"
          style={{
            left: 'clamp(24px, 3vw, 48px)',
            gap: 'clamp(12px, 2vw, 48px)',
          }}
        >
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <div
              key={item}
              className="group relative cursor-pointer"
              onClick={() => navigate(`/${item.toLowerCase()}`)}
            >
              <span
                className="font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700 group-hover:from-orange-500 group-hover:to-orange-400 transition-all duration-500 uppercase z-10 relative block"
                style={{
                  fontSize: 'clamp(14px, 2vw, 36px)',
                }}
              >
                {item}
              </span>
              {/* Glowing Orange Line on Hover */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-orange-500 group-hover:w-4 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(234,88,12,0.8)]" />
              {/* Subtle Text Reflection Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-orange-500/20 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </nav>

        {/* Portal Container (Glassy Box on Desktop) — fixed at final position */}
        <motion.div
          initial={false}
          style={{
            willChange: "transform",
            transform: isDesktop ? 'translateX(170px)' : 'translateX(0px)',
          }}
          className="relative w-full min-h-screen lg:absolute lg:inset-0 lg:m-auto lg:w-full lg:max-w-[min(calc(100vw-22rem),calc((100vh-30px)*16/9))] lg:aspect-video lg:h-auto lg:min-h-0 z-10 transform-gpu"
        >
        <div
          className="relative w-full min-h-screen lg:h-full lg:min-h-0 lg:rounded-[2.5rem] lg:border lg:border-white/10 lg:bg-black/40 lg:shadow-[0_0_60px_-15px_rgba(234,88,12,0.3)] lg:overflow-hidden flex flex-col lg:backdrop-blur-md"
        >
          {/* Black Background Base */}
          <div className="absolute inset-0 bg-black z-[-20] lg:bg-transparent" />
          
      <div className="hero-wrapper" style={{ containerType: 'inline-size', position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', display: 'block' }}>
        {/* Canvas / Video Array */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block' }}>
          <video
            ref={introVideoRefDesktop}
            muted
            playsInline
            onEnded={handleVideoEnded}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              showLoopVideo ? "opacity-0" : "opacity-80"
            }`}
          >
            <source src="/Aks_Tilt.webm" type="video/webm" />
          </video>
          
          <video
            ref={loopVideoRefDesktop}
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              showLoopVideo ? "opacity-80" : "opacity-0"
            }`}
          >
            <source src="/Aks_Blink_Loop.webm" type="video/webm" />
          </video>
          {/* Overlays to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40" />
        </div>

        {/* hero-overlay */}
        <div className="hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
          
          {/* Top-left zone / Left Sidebar */}
          <div style={{ position: 'absolute', top: '5%', left: '4%', width: '32%', height: '91%', pointerEvents: 'auto', display: 'flex', flexDirection: 'column' }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="tracking-[-0.02em] leading-[1.1] uppercase cursor-default"
            >
              {/* Name — single line, font-mono bold */}
              <span
                className="font-mono font-bold text-white block whitespace-nowrap"
                style={{ fontSize: '2.9cqw', marginBottom: '0.5cqw' }}
              >
                AKSHATH SENTHILKUMAR
              </span>
              {/* Roles — font-mono medium */}
              <div className="flex flex-col font-mono font-medium text-white" style={{ fontSize: '1.7cqw' }}>
                <span>&lt;FULL STACK DEV/&gt;</span>
                <span>&lt;DS &amp; ML ENGINEER/&gt;</span>
              </div>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 leading-relaxed font-light"
              style={{ fontSize: '1.1cqw', marginTop: '0.5cqw' }}
            >
              Turning raw data into decisions and ideas into deployed products. Full-stack by craft, data-driven by instinct.
            </motion.p>
            
            {/* Icons — two rows: 3 + 2, fixed circular buttons */}
            <div className="flex flex-col" style={{ gap: '0.8cqw', marginTop: '1.2cqw' }}>
              {/* Row 1: LinkedIn, GitHub, Instagram */}
              <div className="flex" style={{ gap: '0.8cqw' }}>
                {[
                  { Icon: Linkedin,  link: "https://www.linkedin.com/in/akshathsenthilkumar/", label: "LinkedIn"  },
                  { Icon: Github,    link: "https://github.com/akshath-31",                    label: "GitHub"    },
                  { Icon: Instagram, link: "https://www.instagram.com/akshath.31/",            label: "Instagram" },
                ].map(({ Icon, link, label }, i) => (
                  <motion.a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                    style={{ width: '2.8cqw', height: '2.8cqw', flexShrink: 0 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
              {/* Row 2: LeetCode, Resume */}
              <div className="flex" style={{ gap: '0.8cqw' }}>
                {[
                  { Icon: LeetCodeIcon, link: "https://leetcode.com/u/akshath-31/",                                                          label: "LeetCode" },
                  { Icon: FileText,     link: "https://drive.google.com/file/d/108GOPEmdkp4mM0fX3jYRww7hG3pOISSa/view?usp=sharing",         label: "Resume"   },
                ].map(({ Icon, link, label }, i) => (
                  <motion.a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                    style={{ width: '2.8cqw', height: '2.8cqw', flexShrink: 0 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-zinc-900/40 border border-zinc-800/50 flex flex-col"
              style={{ marginTop: 'auto', width: 'calc((27.5 / 32) * 100%)', padding: '1.5cqw', borderRadius: '1.2cqw' }}
            >
              <h3 className="font-mono text-zinc-300 uppercase font-semibold" style={{ fontSize: '0.85cqw', letterSpacing: '0.2em' }}>
                CURRENT PROJECT
              </h3>
              <div className="text-white font-medium" style={{ fontSize: '1.1cqw', marginTop: '0.5cqw' }}>J.A.R.V.I.S</div>
              <p className="text-zinc-500 font-light" style={{ fontSize: '0.9cqw', marginTop: '0.5cqw', marginBottom: '0.5cqw' }}>
                "Just a rather very intelligent system. You know right 😉"
              </p>
              <div className="flex flex-col" style={{ gap: '0.5cqw', marginBottom: '0.5cqw' }}>
                <div className="w-full bg-zinc-800 relative overflow-hidden" style={{ height: '0.25cqw' }}>
                  <div className="absolute top-0 left-0 h-full bg-zinc-200 w-[60%]" />
                </div>
                <span className="text-zinc-200 font-mono tracking-widest" style={{ fontSize: '0.85cqw' }}>60%</span>
              </div>
              <a href="https://github.com/akshath-31/jarvis" target="_blank" rel="noopener noreferrer" className="border border-zinc-700 font-mono uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 active:scale-95 flex items-center justify-center w-max" style={{ fontSize: '0.85cqw', padding: '0.6cqw 1.2cqw', borderRadius: '0.5cqw' }}>
                COLLABORATE
              </a>
            </motion.div>
          </div>

          {/* Top-right zone */}
          <div style={{ position: 'absolute', top: '4%', right: '3%', pointerEvents: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35cqw' }}>
            <span className="text-zinc-200 hover:text-white cursor-pointer font-mono tracking-[0.3em] uppercase transition-colors" style={{ fontSize: '0.85cqw' }}>NEXT PRODUCT → SKILL SWAP</span>
            <div className="bg-zinc-800 relative overflow-hidden" style={{ width: '100%', height: '0.25cqw' }}>
              <div className="absolute top-0 left-0 h-full bg-zinc-200 w-[35%]" />
            </div>
            <span className="text-zinc-200 font-mono" style={{ fontSize: '0.8cqw' }}>35%</span>
          </div>

          {/* Right panel */}
          <div style={{ position: 'absolute', top: '48%', right: '3%', width: '28%', pointerEvents: 'auto', transform: 'translateY(-50%)' }}>
            <h2 className="font-mono text-black uppercase font-bold" style={{ fontSize: '1cqw', letterSpacing: '0.3em', marginBottom: '1.2cqw' }}>
              CURRENT STATUS
            </h2>
            <div className="flex flex-col" style={{ gap: '0.5cqw' }}>
              {[
                { label: "STATUS", value: "Available for Internships" },
                { label: "FOCUS", value: "Data Analysis & AI Products" },
                { label: "LOCATION", value: "Chennai, India" },
                { label: "SPECIALTY", value: "Full-Stack + ML Systems" },
              ].map((spec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex justify-between border-b border-zinc-900 group cursor-default"
                  style={{ paddingBottom: '0.6cqw' }}
                >
                  <span className="text-black group-hover:text-zinc-800 transition-colors font-mono" style={{ fontSize: '0.85cqw' }}>{spec.label}</span>
                  <span className="text-zinc-200 font-medium text-right font-mono" style={{ fontSize: '1cqw' }}>{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom-center/right */}
          <div style={{ position: 'absolute', bottom: '4%', right: '3%', pointerEvents: 'auto', display: 'flex', gap: '0.5cqw' }}>
            <motion.a
              href="https://drive.google.com/file/d/108GOPEmdkp4mM0fX3jYRww7hG3pOISSa/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="font-mono tracking-[0.2em] border flex items-center justify-center transition-all duration-300 cursor-pointer bg-zinc-900/40 text-zinc-500 border-zinc-800/50 hover:border-zinc-600 hover:text-zinc-300"
              style={{ fontSize: '0.9cqw', padding: '0.6cqw 1.2cqw', borderRadius: '0.5cqw' }}
            >
              MY STACK
            </motion.a>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
            >
              <Link
                to="/projects"
                className="flex font-mono tracking-[0.2em] border items-center justify-center transition-all duration-300 cursor-pointer bg-zinc-900/40 text-zinc-500 border-zinc-800/50 hover:border-zinc-600 hover:text-zinc-300"
                style={{ fontSize: '0.9cqw', padding: '0.6cqw 1.2cqw', borderRadius: '0.5cqw' }}
              >
                PORTFOLIO
              </Link>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 1.2 }}
            >
              <Link
                to="/contact"
                className="flex font-mono tracking-[0.2em] border items-center justify-center transition-all duration-300 cursor-pointer bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-zinc-200"
                style={{ fontSize: '0.9cqw', padding: '0.6cqw 1.2cqw', borderRadius: '0.5cqw' }}
              >
                GET IN TOUCH
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 lg:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      </div>

        </div>
        </motion.div> {/* End Portal Container */}
    </div>
    </div>
  );
}
