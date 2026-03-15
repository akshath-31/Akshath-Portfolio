import { 
  SiReact, SiTypescript, SiJavascript, SiPython, SiNodedotjs, 
  SiFastapi, SiTailwindcss, SiPytorch, SiScikitlearn, SiPandas, 
  SiNumpy, SiSupabase, SiPostgresql, SiDocker, SiGit, 
  SiGithub, SiVercel, SiFigma, SiVite, SiGooglecloud, SiJupyter,
  SiPostman, SiRedis, SiMongodb 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IconType } from "react-icons";

type SkillItem = {
  name: string;
  Icon?: IconType;
  abbr?: string;
  color: string;
};

const skills: SkillItem[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
  { name: "Scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
  { name: "Pandas", Icon: SiPandas, color: "#150458" },
  { name: "NumPy", Icon: SiNumpy, color: "#4DABCF" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Java", Icon: FaJava, color: "#007396" },
  { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Jupyter", Icon: SiJupyter, color: "#F37626" },
  { name: "Matplotlib", abbr: "MPL", color: "#11557c" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" }
];

export default function SkillsMarquee() {
  return (
    <div className="w-full h-full overflow-hidden flex items-center relative">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-[28px] px-8">
        {[...skills, ...skills].map((skill, index) => (
          <div 
            key={`${skill.name}-${index}`} 
            className="flex-shrink-0 w-[110px] h-[110px] flex flex-col items-center justify-between py-3 rounded-[12px] bg-[#1a1a1a] border-[0.5px] border-[#2a2a2a] group cursor-default"
          >
            <div className="flex-1 flex items-center justify-center w-full" style={{ color: skill.color }}>
              {skill.Icon ? (
                <skill.Icon size="36px" />
              ) : (
                <span className="font-bold text-xl font-mono tracking-tighter">{skill.abbr}</span>
              )}
            </div>
            <span className="text-[11px] h-[24px] flex items-center font-mono text-white text-center uppercase tracking-tight w-full justify-center px-1 overflow-hidden whitespace-nowrap text-ellipsis" style={{ lineHeight: 1 }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
