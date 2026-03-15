import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";

export default function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 py-6 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-1 cursor-pointer group"
        onClick={() => navigate('/')}
      >
        <h1 className="text-lg md:text-[1.3rem] font-medium font-mono tracking-[-0.02em] leading-tight uppercase transition-colors text-orange-500 hover:text-orange-400">
          AKSHATH SENTHILKUMAR
        </h1>
      </motion.div>

      <nav className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
        {navItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className="group relative cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            <span className={`text-xs md:text-sm font-mono font-semibold tracking-[0.2em] uppercase transition-all duration-300 z-10 relative ${location.pathname === item.path ? 'text-white' : 'text-zinc-500 group-hover:text-orange-400'}`}>
              {item.name}
            </span>
            {location.pathname === item.path && (
              <motion.div layoutId="underline" className="absolute -bottom-3 left-0 right-0 h-[2px] bg-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.8)]" />
            )}
          </motion.div>
        ))}
      </nav>
    </header>
  );
}
