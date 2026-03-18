import React from "react";
import TopNav from "../components/TopNav";

const projects = [
  {
    name: "Spin-Q Quality Hub",
    status: "Done",
    description: "SaaS data testing and quality analytics platform with full auth, dashboards, and CSV pipelines. Built for real-world data validation.",
    tags: ["React", "Supabase", "TypeScript", "Recharts", "Tailwind CSS"],
  },
  {
    name: "F1 Bunny",
    status: "Done",
    description: "Intelligent RAG-based Formula 1 assistant. Cross-platform — desktop via Tauri, Android via Capacitor. Powered by Lyzr AI and SerpAPI.",
    tags: ["TypeScript", "Supabase", "Lyzr AI", "Tauri", "Capacitor"],
  },
  {
    name: "TRAP",
    status: "Done",
    description: "Fintech solution built at NIT Trichy's national hackathon targeting financial inclusion and social impact. Secured 3rd place.",
    tags: ["Fintech", "Hackathon", "React"],
    badge: "🏆 3RD — NIT TRICHY"
  },
  {
    name: "Tanfinet",
    status: "Done",
    description: "ML fault detection on BSNL Fibernet using Temporal Fusion Transformer. AI confidence scoring and real-time alert pipeline. Improved accuracy from ~50% to ~70%.",
    tags: ["Python", "PyTorch", "FastAPI", "React", "TypeScript"],
  },
  {
    name: "J.A.R.V.I.S",
    status: "In Progress",
    description: "Just a rather very intelligent system. An AI-powered personal assistant currently in active development. You know right 😉",
    tags: ["React", "Python", "AI"],
    badge: "IN PROGRESS"
  },
  {
    name: "Ocean Pollution Detector",
    status: "In Progress",
    description: "Deep learning model detecting plastic pollution in ocean imagery. Computer vision pipeline trained to classify marine debris at scale.",
    tags: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
    badge: "IN PROGRESS"
  },
  {
    name: "RCB Marketing Analysis",
    status: "In Progress",
    description: "Data-driven marketing analysis for Royal Challengers Bangalore. Fan engagement patterns, campaign performance and brand insights from IPL data.",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    badge: "IN PROGRESS"
  },
  {
    name: "Skill Swap",
    status: "In Progress",
    description: "Peer-to-peer barter platform for learning and teaching skills. Trade what you know for what you want to learn — no money, just knowledge.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    badge: "IN PROGRESS"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black">
      <TopNav />

      <div className="pt-32 pb-24 px-8 md:px-16 max-w-[1400px] mx-auto">
        {/* Header section */}
        <div className="mb-16">
          <h2 className="text-[#e85d04] font-mono text-[11px] tracking-[3px] uppercase mb-4">
            03 // PORTFOLIO
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif text-[#e85d04] leading-[1.1] tracking-tight">
            Selected<br />Work
          </h1>
        </div>

        {/* Projects Grid Container (Pairs) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="bg-[#161616] rounded-[16px] border-[0.5px] border-[#2a2a2a] overflow-hidden hover:border-[#444] transition-colors flex flex-col group"
            >
              {/* Image Placeholder */}
              <div className="w-full h-[220px] md:h-[260px] bg-[#1a1a1a] relative flex items-center justify-center border-b border-[#2a2a2a]">
                <span className="text-[#333] font-mono text-sm tracking-widest uppercase">Image Coming Soon</span>
                {project.badge && (
                  <div className="absolute top-4 right-4 z-10 text-[#e85d04] text-[10px] sm:text-[11px] font-mono tracking-wider font-bold bg-[#e85d04]/10 px-3 py-1 rounded-full border border-[#e85d04]/20">
                    {project.badge}
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col grow justify-between">
                <div>
                  <h3 className="text-[22px] md:text-[26px] text-white font-mono font-bold mb-3 tracking-tight group-hover:text-[#e85d04] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-[#888] text-[14px] md:text-[15px] leading-[1.6] mb-6 font-sans">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((t) => (
                      <span key={t} className="px-3 py-1 border border-[#e85d04] text-[#e85d04] rounded-full text-[11px] sm:text-[12px] font-mono bg-[#e85d04]/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a href="#" className="self-start inline-flex items-center gap-2 bg-[#e85d04] text-[#0a0a0a] px-6 py-3 rounded-[8px] font-mono text-[13px] font-bold uppercase tracking-wider hover:bg-[#ff7a1a] hover:scale-[1.03] transition-all duration-300">
                  View Project <span className="text-xl leading-none">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
