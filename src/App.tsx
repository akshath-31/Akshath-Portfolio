/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Github, Instagram, FileText } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

// LeetCode Icon component
// FIX: Removed hardcoded width/height attributes from <svg> so the style prop controls sizing,
// matching how Lucide icons scale with the cqw-based style passed from the parent.
const LeetCodeIcon = ({ size = 18, className = "", style = {} }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z" />
  </svg>
);
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoTransitioning, setIsVideoTransitioning] = useState(false);
  // FIX: Start as true so the portal renders directly in its final right position — no center-to-right animation on load.
  const [shiftPortal, setShiftPortal] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [siteLoaded, setSiteLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

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
  const introVideoRefMobile = useRef<HTMLVideoElement>(null);
  const loopVideoRefDesktop = useRef<HTMLVideoElement>(null);
  const loopVideoRefMobile = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isLoading) {
      if (introVideoRefDesktop.current) introVideoRefDesktop.current.play();
      if (introVideoRefMobile.current) introVideoRefMobile.current.play();
      setShowMenu(true);
    }
  }, [isLoading]);

  const handleVideoEnded = () => {
    setIsVideoTransitioning(true);
    if (loopVideoRefDesktop.current) loopVideoRefDesktop.current.play();
    if (loopVideoRefMobile.current) loopVideoRefMobile.current.play();
    // shiftPortal is already true from initial state — no action needed here
  };

  const socialIcons = [
    { Icon: Linkedin, link: "https://www.linkedin.com/in/akshathsenthilkumar/", label: "LinkedIn" },
    { Icon: Github, link: "https://github.com/akshath-31", label: "GitHub" },
    { Icon: Instagram, link: "https://www.instagram.com/akshath.31/", label: "Instagram" },
    { Icon: LeetCodeIcon, link: "https://leetcode.com/u/akshath-31/", label: "LeetCode" },
    { Icon: FileText, link: "https://drive.google.com/file/d/108GOPEmdkp4mM0fX3jYRww7hG3pOISSa/view?usp=sharing", label: "Resume" },
  ];

  return (
    <div className="min-h-screen text-white font-sans selection:bg-white selection:text-black overflow-x-hidden overflow-y-auto lg:overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} isReady={siteLoaded} />
        )}
      </AnimatePresence>

      <div
        className="relative min-h-screen text-white font-sans overflow-hidden bg-zinc-950"
        style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s ease-out" }}
      >
        {/* Outer Background (Desktop Only) */}
        <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,88,12,0.1),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(#ea580c 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
        </div>

        {/* Left-Side Navigation Menu (Desktop Only) */}
        <AnimatePresence>
          {showMenu && (
            <motion.nav
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex absolute left-12 top-0 bottom-0 flex-col justify-center gap-12 z-20"
            >
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                  className="group relative cursor-pointer"
                  onClick={() => navigate(`/${item.toLowerCase()}`)}
                >
                  <span className="text-4xl font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700 group-hover:from-orange-500 group-hover:to-orange-400 transition-all duration-500 uppercase z-10 relative">
                    {item}
                  </span>
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-orange-500 group-hover:w-4 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(234,88,12,0.8)]" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-orange-500/20 transition-opacity duration-700 pointer-events-none" />
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Portal Container (Glassy Box on Desktop) */}
        {/* FIX: duration: 0 ensures no sliding animation plays — portal just renders at x:170 immediately */}
        <motion.div
          animate={{ x: isDesktop && shiftPortal ? 170 : 0 }}
          transition={{ duration: 0, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: "transform" }}
          className="relative w-full min-h-screen lg:absolute lg:inset-0 lg:m-auto lg:w-full lg:max-w-[min(calc(100vw-22rem),calc((100vh-30px)*16/9))] lg:aspect-video lg:h-auto lg:min-h-0 z-10 transform-gpu"
        >
          <div
            className={`relative w-full min-h-screen lg:h-full lg:min-h-0 lg:rounded-[2.5rem] lg:border lg:border-white/10 lg:bg-black/40 lg:shadow-[0_0_60px_-15px_rgba(234,88,12,0.3)] lg:overflow-hidden flex flex-col ${
              isDesktop && shiftPortal ? "lg:backdrop-blur-md" : "lg:backdrop-blur-xl"
            }`}
            style={{ containerType: "inline-size", containerName: "portal" }}
          >
            {/* Black Background Base */}
            <div className="absolute inset-0 bg-black z-[-20] lg:bg-transparent" />

            {/* ── DESKTOP VIDEOS (behind everything) ── */}
            <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none z-[-10]">
              <video
                ref={introVideoRefDesktop}
                muted
                playsInline
                onEnded={handleVideoEnded}
                className={`absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-1000 ${isVideoTransitioning ? "opacity-0" : "opacity-80"}`}
              >
                <source src="/Aks_Tilt.webm" type="video/webm" />
              </video>
              <video
                ref={loopVideoRefDesktop}
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoTransitioning ? "opacity-80" : "opacity-0"}`}
              >
                <source src="/Aks_Blink_Loop.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40" />
            </div>

            {/*
              ══════════════════════════════════════════════════
              UNIFIED DESKTOP OVERLAY
              ══════════════════════════════════════════════════
            */}
            <div className="hidden lg:block absolute inset-0 z-40 pointer-events-none overflow-hidden">

              {/* ── TOP LEFT: Title + Roles + Tagline + Icons ── */}
              <div
                className="absolute pointer-events-auto"
                style={{ top: "7%", left: "5%", width: "38%" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div
                    className="font-bold text-white uppercase leading-tight tracking-tight"
                    style={{ fontSize: "2.6cqw", marginBottom: "0.4cqw" }}
                  >
                    AKSHATH SENTHILKUMAR
                  </div>

                  <div
                    className="font-mono text-white font-bold leading-snug uppercase"
                    style={{ fontSize: "1.9cqw", marginBottom: "1cqw" }}
                  >
                    <div>&lt;FULL STACK DEV/&gt;</div>
                    <div>&lt;DS &amp; ML ENGINEER/&gt;</div>
                  </div>

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-zinc-400 font-light leading-relaxed"
                    style={{ fontSize: "1.05cqw", maxWidth: "28cqw", marginBottom: "1.6cqw" }}
                  >
                    Turning raw data into decisions and ideas into deployed products. Full-stack by craft, data-driven by instinct.
                  </motion.p>

                  {/* Icons → 3-2 grid layout */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.7cqw" }}>
                    {/* Row 1: first 3 icons */}
                    <div className="flex" style={{ gap: "1cqw" }}>
                      {socialIcons.slice(0, 3).map(({ Icon, link, label }, i) => (
                        <motion.a
                          key={i}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.08 }}
                          className="rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group relative flex-shrink-0"
                          style={{ width: "3.2cqw", height: "3.2cqw" }}
                        >
                          <Icon size={undefined} className="group-hover:scale-110 transition-transform" style={{ width: "1.4cqw", height: "1.4cqw" }} />
                          <span
                            className="absolute -top-5 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-zinc-400 whitespace-nowrap"
                            style={{ fontSize: "0.7cqw" }}
                          >
                            {label}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                    {/* Row 2: last 2 icons (LeetCode + Resume) */}
                    <div className="flex" style={{ gap: "1cqw" }}>
                      {socialIcons.slice(3).map(({ Icon, link, label }, i) => (
                        <motion.a
                          key={i + 3}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + (i + 3) * 0.08 }}
                          className="rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group relative flex-shrink-0"
                          style={{ width: "3.2cqw", height: "3.2cqw" }}
                        >
                          <Icon size={undefined} className="group-hover:scale-110 transition-transform" style={{ width: "1.4cqw", height: "1.4cqw" }} />
                          <span
                            className="absolute -top-5 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-zinc-400 whitespace-nowrap"
                            style={{ fontSize: "0.7cqw" }}
                          >
                            {label}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* ── TOP RIGHT: Progress bar + NEXT PRODUCT ── */}
              <div
                className="absolute pointer-events-auto"
                style={{ top: "5%", right: "4%" }}
              >
                <div className="flex flex-col items-end" style={{ gap: "0.5cqw" }}>
                  <div className="flex items-center" style={{ gap: "1.2cqw" }}>
                    <div
                      className="bg-zinc-800 relative overflow-hidden flex-shrink-0"
                      style={{ width: "8cqw", height: "0.15cqw", minHeight: "1px" }}
                    >
                      <div className="absolute top-0 left-0 h-full bg-zinc-200" style={{ width: "35%" }} />
                    </div>
                    <span
                      className="text-zinc-200 hover:text-white cursor-pointer transition-colors font-mono tracking-widest uppercase whitespace-nowrap"
                      style={{ fontSize: "0.8cqw", letterSpacing: "0.2em" }}
                    >
                      NEXT PRODUCT → Skill Swap
                    </span>
                  </div>
                  <span
                    className="text-zinc-200 font-mono"
                    style={{ fontSize: "0.85cqw", alignSelf: "flex-start", marginLeft: "0" }}
                  >
                    35%
                  </span>
                </div>
              </div>

              {/* ── RIGHT PANEL: Current Status ── */}
              {/* CHANGE: "CURRENT STATUS" heading → black; increased gap (1.2cqw → 1.8cqw) and paddingBottom (0.8cqw → 1.2cqw) for more vertical breathing room */}
              <div
                className="absolute"
                style={{ top: "42%", right: "4%", transform: "translateY(-50%)", width: "22%" }}
              >
                <h2
                  className="font-mono font-bold uppercase tracking-widest"
                  style={{ fontSize: "0.9cqw", marginBottom: "2.4cqw", letterSpacing: "0.3em", color: "#000000" }}
                >
                  CURRENT STATUS
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.8cqw" }}>
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
                      className="flex justify-between group cursor-default"
                      style={{
                        borderBottom: "1px solid rgb(24 24 27)",
                        paddingBottom: "1.2cqw",
                      }}
                    >
                      <span
                        className="font-mono font-semibold transition-colors"
                        style={{ fontSize: "0.8cqw", letterSpacing: "0.1em", color: "#000000" }}
                      >
                        {spec.label}
                      </span>
                      <span
                        className="font-mono font-medium text-right"
                        style={{ fontSize: "0.85cqw", color: "#ffffff" }}
                      >
                        {spec.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── BOTTOM LEFT: Current Project Card ── */}
              {/* CHANGE: Vertical padding increased (2.4cqw → 2.8cqw top/bottom) and gap increased (1.1cqw → 1.5cqw) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute pointer-events-auto"
                style={{
                  bottom: "4%",
                  left: "4%",
                  width: "30%",
                  padding: "2.8cqw 2.4cqw",
                  borderRadius: "1.5cqw",
                  background: "rgba(24,24,27,0.40)",
                  border: "1px solid rgba(63,63,70,0.5)",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5cqw" }}>
                  <h3
                    className="font-mono font-semibold uppercase tracking-widest text-zinc-300"
                    style={{ fontSize: "0.75cqw", letterSpacing: "0.2em" }}
                  >
                    CURRENT PROJECT
                  </h3>
                  <div className="text-white font-medium" style={{ fontSize: "0.95cqw" }}>
                    J.A.R.V.I.S
                  </div>
                  <p className="text-zinc-500 font-light leading-relaxed" style={{ fontSize: "0.85cqw" }}>
                    "Just a rather very intelligent system. You know right 😉"
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5cqw", width: "55%" }}>
                    <div
                      className="relative overflow-hidden bg-zinc-800"
                      style={{ width: "100%", height: "0.15cqw", minHeight: "1px" }}
                    >
                      <div className="absolute top-0 left-0 h-full bg-zinc-200" style={{ width: "60%" }} />
                    </div>
                    <span className="text-zinc-200 font-mono tracking-widest" style={{ fontSize: "0.7cqw" }}>60%</span>
                  </div>
                  <a
                    href="https://github.com/akshath-31/jarvis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 active:scale-95 flex items-center justify-center border border-zinc-700 text-white"
                    style={{
                      width: "fit-content",
                      padding: "0.5cqw 1.4cqw",
                      borderRadius: "9999px",
                      fontSize: "0.7cqw",
                      letterSpacing: "0.2em",
                    }}
                  >
                    COLLABORATE
                  </a>
                </div>
              </motion.div>

              {/* ── BOTTOM RIGHT: Nav Pills ── */}
              {/* CHANGE: All three buttons — padding increased (0.4→0.6cqw vertical, 1→1.4cqw horizontal) and fontSize bumped (0.7→0.75cqw) */}
              <div
                className="absolute pointer-events-auto flex"
                style={{ bottom: "5%", right: "4%", gap: "0.8cqw" }}
              >
                <motion.a
                  href="https://drive.google.com/file/d/108GOPEmdkp4mM0fX3jYRww7hG3pOISSa/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="font-mono tracking-widest uppercase flex items-center transition-all duration-300 cursor-pointer hover:text-white"
                  style={{
                    padding: "0.6cqw 1.4cqw",
                    borderRadius: "9999px",
                    fontSize: "0.75cqw",
                    letterSpacing: "0.2em",
                    background: "rgba(24,24,27,0.80)",
                    border: "1px solid rgba(113,113,122,0.8)",
                    color: "rgb(161,161,170)",
                  }}
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
                    className="font-mono tracking-widest uppercase flex items-center transition-all duration-300 cursor-pointer hover:text-white"
                    style={{
                      padding: "0.6cqw 1.4cqw",
                      borderRadius: "9999px",
                      fontSize: "0.75cqw",
                      letterSpacing: "0.2em",
                      background: "rgba(24,24,27,0.80)",
                      border: "1px solid rgba(113,113,122,0.8)",
                      color: "rgb(161,161,170)",
                    }}
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
                    className="font-mono tracking-widest uppercase flex items-center transition-all duration-300 cursor-pointer bg-white text-black border border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    style={{
                      padding: "0.6cqw 1.8cqw",
                      borderRadius: "9999px",
                      fontSize: "0.75cqw",
                      letterSpacing: "0.2em",
                    }}
                  >
                    GET IN TOUCH
                  </Link>
                </motion.div>
              </div>

            </div>
            {/* ══ END UNIFIED DESKTOP OVERLAY ══ */}


            {/* ── MOBILE LAYOUT (unchanged) ── */}
            <main className="relative flex-grow flex flex-col lg:flex-row items-center justify-center z-10 lg:p-0 min-h-screen lg:min-h-0">
              {/* Mobile Video Header */}
              <div className="lg:hidden w-full h-[50vh] relative overflow-hidden mb-12 bg-black">
                <video
                  ref={introVideoRefMobile}
                  muted
                  playsInline
                  onEnded={handleVideoEnded}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoTransitioning ? "opacity-0" : "opacity-80"}`}
                >
                  <source src="/Aks_Tilt.webm" type="video/webm" />
                </video>
                <video
                  ref={loopVideoRefMobile}
                  loop
                  muted
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoTransitioning ? "opacity-80" : "opacity-0"}`}
                >
                  <source src="/Aks_Blink_Loop.webm" type="video/webm" />
                </video>
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent opacity-80" />
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>

              <div className="w-full max-w-md px-6 lg:px-0 flex flex-col items-center">
                {/* Mobile Technical Specs */}
                <div className="lg:hidden w-full mb-12 scale-110">
                  <h2 className="text-[11px] tracking-[0.3em] font-mono text-black mb-6 uppercase font-bold">
                    CURRENT STATUS
                  </h2>
                  <div className="space-y-4 font-mono text-[12px]">
                    {[
                      { label: "STATUS", value: "Available for Internships" },
                      { label: "FOCUS", value: "Data Analysis & AI Products" },
                      { label: "LOCATION", value: "Chennai, India" },
                      { label: "SPECIALTY", value: "Full-Stack + ML Systems" },
                    ].map((spec, i) => (
                      <div key={i} className="flex justify-between border-b border-zinc-900 pb-2">
                        <span className="text-black">{spec.label}</span>
                        <span className="text-white">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-grow" />

                {/* Mobile Card & Tags */}
                <div className="lg:hidden w-full space-y-8 mt-12 pb-12">
                  <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-[11px] font-mono tracking-[0.2em] text-zinc-300 uppercase font-semibold">
                        CURRENT PROJECT
                      </h3>
                      <div className="text-lg text-white font-medium">J.A.R.V.I.S</div>
                      <p className="text-zinc-500 text-[16px] leading-relaxed mb-[7px] font-light">
                        "Just a rather very intelligent system. You know right 😉"
                      </p>
                      <div className="flex flex-col gap-1 mb-[7px]">
                        <div className="w-full h-[2px] bg-zinc-800 relative overflow-hidden">
                          <div className="absolute top-0 left-0 h-full bg-zinc-200 w-[60%]" />
                        </div>
                        <span className="text-zinc-200 text-[10px] font-mono tracking-widest">60%</span>
                      </div>
                      <a
                        href="https://github.com/akshath-31/jarvis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-full border border-zinc-700 text-[10px] font-mono uppercase tracking-[0.2em] hover:bg-white hover:text-black active:bg-white active:text-black transition-all flex items-center justify-center"
                      >
                        COLLABORATE
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    <a
                      href="https://drive.google.com/file/d/108GOPEmdkp4mM0fX3jYRww7hG3pOISSa/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full text-[9px] font-mono tracking-[0.2em] border flex items-center gap-2 bg-zinc-900/40 text-zinc-500 border-zinc-800/50 hover:bg-zinc-800"
                    >
                      MY STACK
                    </a>
                    <Link
                      to="/projects"
                      className="px-4 py-2 rounded-full text-[9px] font-mono tracking-[0.2em] border flex items-center gap-2 bg-zinc-900/40 text-zinc-500 border-zinc-800/50 hover:bg-zinc-800"
                    >
                      PORTFOLIO
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-2 rounded-full text-[9px] font-mono tracking-[0.2em] border flex items-center gap-2 bg-white text-black border-white"
                    >
                      GET IN TOUCH
                    </Link>
                  </div>
                </div>
              </div>
            </main>

            {/* Decorative Background Elements (Mobile Only) */}
            <div className="absolute inset-0 pointer-events-none z-0 lg:hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)]" />
              <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}