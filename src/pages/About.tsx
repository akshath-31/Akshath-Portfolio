import { motion } from "motion/react";
import TopNav from "../components/TopNav";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-white selection:text-black">
      <TopNav />
      
      <main className="pt-32 pb-24 px-8 md:px-16 max-w-5xl mx-auto flex flex-col justify-center min-h-screen relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-16"
        >
          {/* HEADER */}
          <div className="space-y-4">
            <h2 className="text-[10px] tracking-[0.3em] font-mono text-orange-500 uppercase font-medium">
              01 // Profile
            </h2>
            <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight text-orange-500">
              About Me
            </h1>
          </div>
          
          {/* SECTION 01 — BIO + PHOTO */}
          <section className="grid grid-cols-1 md:grid-cols-[11fr_9fr] gap-12 items-center">
            <div className="order-2 md:order-1 text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              <p>
                I'm Aks — a pre-final year CS student at SRM Chennai, 
                building AI-powered full stack products at Arctictern. 
                I turn complex problems into clean, scalable systems. 
                Hackathons are my playground, shipping is my habit.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div 
                id="profile-photo"
                className="w-full max-w-[320px] aspect-square rounded-xl border-2 border-dashed border-orange-500/30 flex items-center justify-center bg-orange-500/5"
              >
                <span className="text-zinc-500 text-sm font-mono tracking-widest uppercase">
                  [Photo Coming Soon]
                </span>
              </div>
            </div>
          </section>

          {/* SECTION 02 — QUICK STATS */}
          <section className="border-b border-orange-500/20 pb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "3+", label: "Years Coding" },
                { value: "5+", label: "Projects Shipped" },
                { value: "2", label: "Hackathons Built" },
                { value: "1", label: "Research Paper" }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-200 ease-in-out hover:scale-105 hover:bg-orange-500/5 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] group"
                >
                  <span className="text-4xl md:text-5xl font-bold text-orange-500 mb-2 font-display">{stat.value}</span>
                  <span className="text-zinc-500 text-[10px] md:text-xs tracking-widest uppercase font-mono">{stat.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 03 — WHAT I DO */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 md:divide-x divide-zinc-800/50">
            {/* Left Column */}
            <div className="md:pr-8">
              <div className="pl-6 border-l-[3px] border-orange-500/30 hover:border-orange-500 transition-all duration-200 ease-in-out h-full">
                <h3 className="text-xs md:text-sm font-mono text-orange-500 uppercase tracking-widest mb-3">
                  FULL STACK DEV
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                  I build complete products from zero to deployed — clean architecture, fast interfaces, and real-world scalability.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="md:pl-8">
              <div className="pl-6 border-l-[3px] border-orange-500/30 hover:border-orange-500 transition-all duration-200 ease-in-out h-full">
                <h3 className="text-xs md:text-sm font-mono text-orange-500 uppercase tracking-widest mb-3">
                  DATA SCIENCE & ML
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                  I turn raw data into intelligent systems — from model training to production-ready AI integrations that actually work.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 04 — BEYOND THE CODE */}
          <section className="space-y-6">
            <h3 className="text-xs md:text-sm font-mono text-orange-500 uppercase tracking-widest">
              BEYOND THE CODE
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              Beyond the screen, I'm a sports enthusiast who has competed in cricket at the TNCA 3rd 
              Division level — where I learned to perform under pressure, stay consistent, and lead 
              within a team. Football runs equally deep in my passion. That same competitive 
              discipline drives how I approach every build, every deadline, every problem. I also have 
              a growing curiosity in finance — understanding market dynamics and how strategic decisions 
              compound into long-term value.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "🏏 TNCA Cricket — 3rd Division",
                "⚽ Football",
                "📈 Finance & Markets"
              ].map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 border border-orange-500 text-orange-500 rounded-full text-[10px] md:text-xs font-mono transition-all duration-200 ease-in-out hover:bg-orange-500 hover:text-zinc-950 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* SECTION 05 — RESUME CTA */}
          <section className="text-center pt-8 pb-4">
            <a 
              href="#"
              className="inline-block bg-orange-500 text-zinc-950 font-bold font-mono uppercase tracking-widest px-8 md:px-10 py-4 md:py-5 rounded-xl transition-all duration-200 ease-in-out hover:scale-[1.03] hover:brightness-110 mb-4"
            >
              Download Resume
            </a>
            <div className="text-zinc-600 text-[10px] md:text-xs font-mono tracking-widest">
              Last updated · 2025
            </div>
          </section>

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
