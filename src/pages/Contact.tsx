import { motion } from "motion/react";
import TopNav from "../components/TopNav";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-white selection:text-black">
      <TopNav />
      
      <main className="pt-32 pb-24 px-8 md:px-16 max-w-7xl mx-auto flex flex-col relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          {/* HEADER */}
          <div className="mb-16 flex flex-col gap-4 items-start">
            <h2 className="text-orange-500 font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-medium">
              05 // Connect
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-orange-500">
              Let's Connect
            </h1>
            <div className="w-24 h-px bg-zinc-800 mt-2" />
          </div>

          <ContactForm />
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
