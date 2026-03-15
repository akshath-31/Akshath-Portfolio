import { motion } from "motion/react";
import TopNav from "../components/TopNav";

export default function Projects() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-white selection:text-black">
      <TopNav />
      
      <main className="pt-32 pb-16 px-8 md:px-16 max-w-7xl mx-auto flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-[10px] tracking-[0.3em] font-mono text-orange-500 uppercase font-medium">
              03 // Portfolio
            </h2>
            <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight">
              Selected Work
            </h1>
          </div>
          
          <div className="w-24 h-px bg-zinc-800" />
          
          <p className="max-w-2xl text-zinc-400 text-sm md:text-base leading-relaxed font-light">
            A curated list of high-performance digital products and tools I have engineered.
            (Content placeholder)
          </p>
        </motion.div>
      </main>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(234,88,12,0.05),transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#ea580c 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      </div>
    </div>
  );
}
