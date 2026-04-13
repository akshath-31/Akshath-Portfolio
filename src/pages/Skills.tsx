import { motion } from "motion/react";
import TopNav from "../components/TopNav";
import SkillsMarquee from "../components/SkillsMarquee";

const skillsData = [
  {
    category: "Languages",
    id: "o1",
    align: "left",
    rotation: -1,
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Java"]
  },
  {
    category: "Frameworks",
    id: "o2",
    align: "right",
    rotation: 0.8,
    items: ["React", "FastAPI", "Tailwind CSS", "Node.js", "Vite", "shadcn/ui", "PyTorch", "Scikit-learn"]
  },
  {
    category: "Data & Visualisation",
    id: "o3",
    align: "left",
    rotation: -0.5,
    items: ["Pandas", "NumPy", "Recharts", "Matplotlib", "TensorFlow", "Supabase"]
  },
  {
    category: "Developer Tools",
    id: "o4",
    align: "right",
    rotation: 1.2,
    items: ["Git & GitHub", "VS Code", "Postman", "Docker", "Vercel", "Figma"]
  }
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-white selection:text-black flex flex-col relative overflow-hidden">
      <TopNav />
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(234,88,12,0.05),transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#ea580c 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      </div>

      <main className="pt-32 pb-24 px-8 md:px-16 max-w-[100rem] mx-auto w-full flex flex-col relative z-10">
        
        {/* Top Header Section */}
        <div className="mb-16 flex flex-col gap-4 items-start">
          <h2 className="text-orange-500 font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-medium">
            02 // Technical
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-orange-500">
            Skills & Stack
          </h1>
          <div className="w-24 h-px bg-zinc-800 mt-2" />
        </div>

        {/* Zigzag Sticky Notes Section */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col gap-12 sm:gap-16 pb-12">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute left-0 top-0 w-full h-[85%] mt-[5%] pointer-events-none hidden md:block opacity-40">
            <path 
              d="M 28 8.5 C 75 25, 75 25, 72 38 C 25 50, 25 50, 28 62 C 75 75, 75 75, 72 90" 
              fill="none" 
              stroke="#e85d04" 
              strokeWidth="1" 
              strokeDasharray="4 4" 
              vectorEffect="non-scaling-stroke" 
            />
          </svg>
           
          {skillsData.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
              whileHover={{ translateY: -4 }}
              className={`relative z-10 w-full md:w-[42%] bg-[#161616] p-8 rounded-[20px] shadow-[4px_4px_0px_#0a0a0a,8px_8px_0px_#111] transition-transform duration-300 ease-out border border-[#2a2a2a] ${
                section.align === "left" ? "md:mr-auto" : "md:ml-auto"
              }`}
              style={{
                borderTop: '1px solid #2f2f2f',
                rotate: `${section.rotation}deg`
              }}
            >
              {/* Card Header: Traffic lights + Title */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <h3 className="text-[13px] font-mono tracking-[2px] text-white uppercase">
                  {section.category}
                </h3>
              </div>

              {/* Pin */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                <div className="w-5 h-5 rounded-full bg-[#e85d04] shadow-md relative overflow-hidden flex items-center justify-center">
                   <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-[#ff7a1a] blur-[1px]" />
                </div>
                <div className="w-[2px] h-3 bg-[#0a0a0a] -mt-1" />
              </div>
              
              <div className="flex flex-wrap gap-3">
                {section.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-[#1f1f1f] text-[#ccc] border border-[#333] rounded-[20px] text-[13px] font-mono tracking-tight hover:text-[#e85d04] hover:border-[#e85d04] transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Hook Section */}
        <div className="w-full flex flex-col items-start -mt-[45px]">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-[#e85d04] font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
          >
            With hands-on exp in:
          </motion.p>
          
          <div className="w-[100vw] relative left-1/2 -translate-x-1/2 h-48 flex items-center">
            <SkillsMarquee />
          </div>
        </div>

      </main>
    </div>
  );
}
