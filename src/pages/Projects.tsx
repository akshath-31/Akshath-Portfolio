import React from "react";
import TopNav from "../components/TopNav";

const projects = [
  {
    name: "Spin-Q Quality Hub",
    status: "Done",
    description: "SaaS data testing and quality analytics platform with full auth, dashboards, and CSV pipelines. Built for real-world data validation.",
    tags: ["React", "Supabase", "TypeScript", "Recharts", "Tailwind CSS"],
    link: "https://spinwisely.com/landing",
    image: "/spin-q.png",
  },
  {
    name: "F1 Bunny",
    status: "Done",
    description: "Intelligent RAG-based Formula 1 assistant. Cross-platform — desktop via Tauri, Android via Capacitor. Powered by Lyzr AI and SerpAPI.",
    tags: ["TypeScript", "Supabase", "Lyzr AI", "Tauri", "Capacitor"],
    link: "https://github.com/akshath-31/f1-bunny",
    image: "/f1Bunny.png",
  },
  {
    name: "TRAP",
    status: "Done",
    description: "Fintech solution built at NIT Trichy's national hackathon targeting financial inclusion and social impact. Secured 3rd place.",
    tags: ["Fintech", "Hackathon", "React"],
    badge: "🏆 3RD — NIT TRICHY",
    link: "https://github.com/akshath-31/Transacation-Risk-Assessment-Prevention",
    image: "/trap.png",
  },
  {
    name: "Tanfinet",
    status: "Done",
    description: "ML fault detection on BSNL Fibernet using Temporal Fusion Transformer. AI confidence scoring and real-time alert pipeline. Improved accuracy from ~50% to ~70%.",
    tags: ["Python", "PyTorch", "FastAPI", "React", "TypeScript"],
    link: "https://github.com/akshath-31/Tanfinet-Fault-Detection",
    image: "/Tanfinet.jpg",
  },
  {
    name: "J.A.R.V.I.S",
    status: "In Progress",
    description: "Just a rather very intelligent system. An AI-powered personal assistant currently in active development. You know right 😉",
    tags: ["React", "Python", "AI"],
    badge: "IN PROGRESS",
    link: "https://github.com/akshath-31/jarvis",
    image: "/Jarvis.png",
  },
  {
    name: "Ocean Pollution Detector",
    status: "In Progress",
    description: "Deep learning model detecting plastic pollution in ocean imagery. Computer vision pipeline trained to classify marine debris at scale.",
    tags: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
    badge: "IN PROGRESS",
    link: null,
    image: "/ocean-plastic-pollution.png",
  },
  {
    name: "RCB Marketing Analysis",
    status: "In Progress",
    description: "Data-driven marketing analysis for Royal Challengers Bangalore. Fan engagement patterns, campaign performance and brand insights from IPL data.",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    badge: "IN PROGRESS",
    link: null,
    image: "/RCB.png",
  },
  {
    name: "Skill Swap",
    status: "In Progress",
    description: "Peer-to-peer barter platform for learning and teaching skills. Trade what you know for what you want to learn — no money, just knowledge.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    badge: "IN PROGRESS",
    link: "https://github.com/akshath-31/skill-swap-fsd",
    image: "/Skill-swap.png",
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black">
      <TopNav />

      <main className="pt-32 pb-24 px-8 md:px-16 max-w-[1400px] mx-auto w-full flex flex-col relative z-10">
        {/* Header section */}
        <div className="mb-16 flex flex-col gap-4 items-start">
          <h2 className="text-orange-500 font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-medium">
            03 // PORTFOLIO
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-orange-500">
            Selected Work
          </h1>
          <div className="w-24 h-px bg-zinc-800 mt-2" />
        </div>

        {/* Projects Grid Container (Trios) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="bg-[#161616] rounded-[16px] border-[0.5px] border-[#2a2a2a] overflow-hidden hover:border-[#444] transition-colors flex flex-col group w-full"
            >
              {/* Image Container */}
              <div className="w-full aspect-[16/9] bg-[#1a1a1a] relative flex items-center justify-center border-b border-[#2a2a2a] overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" 
                  />
                ) : (
                  <span className="text-[#333] font-mono text-sm tracking-widest uppercase">Image Coming Soon</span>
                )}
                
                {/* Gradient overlay for better badge & image blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {project.badge && (
                  <div className="absolute top-4 right-4 z-10 text-[#e85d04] text-[10px] sm:text-[11px] font-mono tracking-wider font-bold bg-[#e85d04]/10 backdrop-blur-sm px-3 py-1 rounded-full border border-[#e85d04]/20 shadow-md">
                    {project.badge}
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-5 md:p-6 flex flex-col grow justify-between">
                <div>
                  <h3 className="text-[18px] md:text-[22px] text-white font-mono font-bold mb-2 tracking-tight group-hover:text-[#e85d04] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-[#888] text-[13px] md:text-[14px] leading-[1.6] mb-5 font-sans">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 border border-[#e85d04] text-[#e85d04] rounded-full text-[10px] sm:text-[11px] font-mono bg-[#e85d04]/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="self-start inline-flex items-center gap-2 bg-[#e85d04] text-[#0a0a0a] px-5 py-2.5 rounded-[8px] font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-wider hover:bg-[#ff7a1a] hover:scale-[1.03] transition-all duration-300">
                    View Project <span className="text-lg leading-none">→</span>
                  </a>
                ) : (
                  <button disabled className="self-start inline-flex items-center gap-2 bg-[#1a1a1a] text-[#888] px-5 py-2.5 rounded-[8px] font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-wider cursor-not-allowed border border-[#2a2a2a]">
                    Cooking...
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
