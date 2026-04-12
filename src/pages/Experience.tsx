import { motion } from "motion/react";
import TopNav from "../components/TopNav";

const internshipTech = ["React", "FastAPI", "Gemini", "Supabase"];
const vazhikatigalTech = ["React", "FastAPI", "Gemini", "Supabase", "Google Maps API"];
const tanfinetTech = ["PyTorch", "FastAPI", "React", "Gemini API"];
const researchTech = ["SAM2", "Sentinel-2", "Gemini 2.0", "Python"];

export default function Experience() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-white selection:text-black">
      <TopNav />
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(234,88,12,0.05),transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#ea580c 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      </div>

      <main className="pt-32 pb-24 px-8 md:px-16 max-w-5xl mx-auto flex flex-col min-h-screen relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12 w-full"
        >
          <div className="flex flex-col gap-4 items-start mb-16">
            <h2 className="text-[10px] tracking-[0.3em] font-mono text-orange-500 uppercase font-medium">
              04 // Timeline
            </h2>
            <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight text-orange-500">
              Experience
            </h1>
            <div className="w-24 h-px bg-zinc-800 mt-2" />
          </div>

          <div className="relative w-full pb-8">
            {/* Continuous Vertical Timeline Track */}
            <div className="absolute left-[15px] top-6 bottom-4 w-[2px] bg-[#e85d04]/20" />
            
            <div className="flex flex-col gap-10 sm:gap-14">
              
              {/* ENTRY 01 — WORK EXPERIENCE */}
              <div className="relative pl-12 md:pl-16 group transition-all duration-200 hover:translate-x-1">
                {/* Dot */}
                <div className="absolute left-[8px] top-[34px] w-4 h-4 rounded-full border-2 border-[#e85d04] bg-[#09090b] transition-all duration-200 group-hover:scale-125 group-hover:bg-[#e85d04] z-10 shadow-[0_0_0_4px_#09090b]" />
                
                <div className="bg-[#161616] p-8 md:p-10 rounded-[16px] border border-[#2a2a2a] border-l-[3px] border-l-[#2a2a2a] group-hover:border-l-[#e85d04] transition-all duration-200">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                    <div>
                      <span className="text-[11px] font-mono tracking-widest text-[#e85d04] uppercase font-bold mb-2 block">Internship</span>
                      <h3 className="text-2xl md:text-[28px] font-mono font-bold tracking-tight text-white mb-2">AI Engineer Intern</h3>
                      <div className="text-lg text-[#aaa] font-sans">Arctictern</div>
                    </div>
                    <div className="text-[12px] md:text-[13px] font-mono text-[#888] bg-[#111] px-4 py-2 rounded-full border border-[#222] whitespace-nowrap self-start">
                      2024 → Present
                    </div>
                  </div>
                  <p className="text-[#ccc] font-sans text-[15px] leading-relaxed mb-8">Building AI-powered full stack products end to end.</p>
                  <div className="flex flex-wrap gap-2">
                    {internshipTech.map((t) => (
                      <span key={t} className="px-3 py-1 border border-[#e85d04]/40 text-[#e85d04] rounded-full text-[11px] font-mono bg-[#e85d04]/5 transition-all duration-200 group-hover:bg-[#e85d04] group-hover:text-[#09090b] group-hover:font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ENTRY 02 — HACKATHONS */}
              <div className="relative pl-12 md:pl-16 group transition-all duration-200 hover:translate-x-1">
                <div className="absolute left-[8px] top-[34px] w-4 h-4 rounded-full border-2 border-[#e85d04] bg-[#09090b] transition-all duration-200 group-hover:scale-125 group-hover:bg-[#e85d04] z-10 shadow-[0_0_0_4px_#09090b]" />
                
                <div className="bg-[#161616] rounded-[16px] border border-[#2a2a2a] border-l-[3px] border-l-[#2a2a2a] group-hover:border-l-[#e85d04] transition-all duration-200 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#2a2a2a]">
                    
                    {/* Left Column */}
                    <div className="p-6 md:p-8 flex flex-col items-start">
                      <span className="text-[11px] font-mono tracking-widest text-[#e85d04] uppercase font-bold mb-2 block">Hackathon</span>
                      <h3 className="text-xl md:text-[22px] font-mono font-bold tracking-tight text-white mb-2">Vazhikatigal</h3>
                      <div className="text-[15px] text-[#aaa] font-sans mb-5">FASTATHON 2024</div>
                      <p className="text-[#ccc] font-sans text-[14px] leading-relaxed mb-8 my-auto">Mentor-mentee matching platform for Agaram Foundation.</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {vazhikatigalTech.map((t) => (
                          <span key={t} className="px-3 py-1 border border-[#e85d04]/40 text-[#e85d04] rounded-full text-[11px] font-mono bg-[#e85d04]/5 transition-all duration-200 group-hover:bg-[#e85d04] group-hover:text-[#09090b] group-hover:font-semibold">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="p-6 md:p-8 flex flex-col items-start bg-[#141414]">
                      <span className="text-[11px] font-mono tracking-widest text-[#e85d04] uppercase font-bold mb-2 block">Hackathon</span>
                      <h3 className="text-xl md:text-[22px] font-mono font-bold tracking-tight text-white mb-2">Tanfinet</h3>
                      <div className="text-[15px] text-[#aaa] font-sans mb-5">NIT Trichy 2024</div>
                      <p className="text-[#ccc] font-sans text-[14px] leading-relaxed mb-8 my-auto">AI-powered fault detection system for BSNL Fibernet.</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {tanfinetTech.map((t) => (
                          <span key={t} className="px-3 py-1 border border-[#e85d04]/40 text-[#e85d04] rounded-full text-[11px] font-mono bg-[#e85d04]/5 transition-all duration-200 group-hover:bg-[#e85d04] group-hover:text-[#09090b] group-hover:font-semibold">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* ENTRY 03 — CERTIFICATION */}
              <div className="relative pl-12 md:pl-16 group transition-all duration-200 hover:translate-x-1">
                <div className="absolute left-[8px] top-[26px] w-4 h-4 rounded-full border-2 border-[#e85d04] bg-[#09090b] transition-all duration-200 group-hover:scale-125 group-hover:bg-[#e85d04] z-10 shadow-[0_0_0_4px_#09090b]" />
                
                <div className="bg-[#161616] p-6 px-8 rounded-[16px] border border-[#2a2a2a] border-l-[3px] border-l-[#2a2a2a] group-hover:border-l-[#e85d04] transition-all duration-200">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[11px] font-mono tracking-widest text-[#e85d04] uppercase font-bold mb-1.5 block">Certification</span>
                      <h3 className="text-[20px] font-mono font-bold tracking-tight text-white mb-1">Google Project Management</h3>
                      <div className="text-[14px] text-[#aaa] font-sans">Professional Certificate</div>
                    </div>
                    <div className="text-[11px] font-mono text-[#888] bg-[#111] px-3 py-1.5 rounded-full border border-[#222] whitespace-nowrap self-start">
                      Google · 2024 → Present
                    </div>
                  </div>
                  <p className="text-[#ccc] font-sans text-[14px] leading-relaxed mt-4">Covers agile methodologies, stakeholder management, and product lifecycle.</p>
                </div>
              </div>

              {/* ENTRY 04 — EDUCATION */}
              <div className="relative pl-12 md:pl-16 group transition-all duration-200 hover:translate-x-1">
                <div className="absolute left-[8px] top-[26px] w-4 h-4 rounded-full border-2 border-[#e85d04] bg-[#09090b] transition-all duration-200 group-hover:scale-125 group-hover:bg-[#e85d04] z-10 shadow-[0_0_0_4px_#09090b]" />
                
                <div className="bg-[#161616] p-6 px-8 rounded-[16px] border border-[#2a2a2a] border-l-[3px] border-l-[#2a2a2a] group-hover:border-l-[#e85d04] transition-all duration-200">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[11px] font-mono tracking-widest text-[#e85d04] uppercase font-bold mb-1.5 block">Education</span>
                      <h3 className="text-[20px] font-mono font-bold tracking-tight text-white mb-1">SRM Institute of Science and Technology</h3>
                      <div className="text-[14px] text-[#aaa] font-sans">B.Tech CSE — Data Science Specialization</div>
                    </div>
                    <div className="text-[11px] font-mono text-[#888] bg-[#111] px-3 py-1.5 rounded-full border border-[#222] whitespace-nowrap self-start">
                      2022 → 2026 · Chennai, India
                    </div>
                  </div>
                  <p className="text-[#ccc] font-sans text-[14px] leading-relaxed mt-4">Relevant coursework in ML, DAA, Full Stack Development, and Research.</p>
                </div>
              </div>

              {/* ENTRY 05 — RESEARCH */}
              <div className="relative pl-12 md:pl-16 group transition-all duration-200 hover:translate-x-1">
                {/* Glowing Amber Dot */}
                <div className="absolute left-[8px] top-[26px] w-4 h-4 rounded-full border-2 border-amber-600 bg-[#09090b] transition-all duration-200 group-hover:scale-125 group-hover:bg-amber-600 z-10 shadow-[0_0_0_4px_#09090b] flex items-center justify-center overflow-visible">
                   <div className="absolute w-2 h-2 bg-amber-500 rounded-full animate-pulse blur-[1.5px] opacity-80" />
                </div>
                
                <div className="bg-[#161616] p-6 px-8 rounded-[16px] border border-[#2a2a2a] border-l-[3px] border-l-[#2a2a2a] group-hover:border-l-amber-600 transition-all duration-200">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="text-[11px] font-mono tracking-widest text-[#e85d04] uppercase font-bold mb-1.5 block">Research</span>
                      <h3 className="text-[20px] font-mono font-bold tracking-tight text-white mb-1">Zero-Shot Marine Debris Detection</h3>
                      <div className="text-[14px] text-[#aaa] font-sans">SRM Institute · 2024 <span className="text-amber-600 ml-1.5 opacity-90 text-[13px] font-mono">→ In Progress</span></div>
                    </div>
                  </div>
                  <p className="text-[#ccc] font-sans text-[14px] leading-relaxed mb-6 mt-2">Using SAM2 + Sentinel-2 + Gemini 2.0 Flash for satellite imagery analysis.</p>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {researchTech.map((t) => (
                        <span key={t} className="px-3 py-1 border border-[#e85d04]/40 text-[#e85d04] rounded-full text-[11px] font-mono bg-[#e85d04]/5 transition-all duration-200 group-hover:bg-[#e85d04] group-hover:text-[#09090b] group-hover:font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="text-[10.5px] tracking-wide font-mono text-zinc-500 uppercase border-t border-zinc-800/60 pt-4 mt-2">
                      * IEEE paper under review
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
