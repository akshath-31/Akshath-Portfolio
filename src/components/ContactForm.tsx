import { Mail, Github, Linkedin, Instagram, Send, CheckCircle2, XCircle } from "lucide-react";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "service_1ts717f",
        "template_vrnzao8",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "D6kcrAhqZNMIwSSFl"
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
      {/* Left Column */}
      <div className="flex flex-col space-y-4 mt-1">
        <div className="space-y-3">
          {/* Action Cards */}
          <a href="mailto:your.email@example.com" className="flex items-center gap-4 bg-[#151517] hover:bg-[#1a1a1c] border border-zinc-800/50 hover:border-orange-500/30 p-3 lg:p-3.5 rounded-xl transition-all group">
            <div className="w-9 h-9 bg-[#1f1f22] group-hover:bg-orange-500/10 rounded-lg flex items-center justify-center transition-colors">
              <Mail className="w-4 h-4 text-zinc-400 group-hover:text-orange-500" />
            </div>
            <span className="text-white font-medium text-[13px]">Email</span>
          </a>

          <a href="https://github.com/akshath-31" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#151517] hover:bg-[#1a1a1c] border border-zinc-800/50 hover:border-orange-500/30 p-3 lg:p-3.5 rounded-xl transition-all group">
            <div className="w-9 h-9 bg-[#1f1f22] group-hover:bg-orange-500/10 rounded-lg flex items-center justify-center transition-colors">
              <Github className="w-4 h-4 text-zinc-400 group-hover:text-orange-500" />
            </div>
            <span className="text-white font-medium text-[13px]">GitHub</span>
          </a>

          <a href="https://www.linkedin.com/in/akshathsenthilkumar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#151517] hover:bg-[#1a1a1c] border border-zinc-800/50 hover:border-orange-500/30 p-3 lg:p-3.5 rounded-xl transition-all group">
            <div className="w-9 h-9 bg-[#1f1f22] group-hover:bg-orange-500/10 rounded-lg flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-orange-500" />
            </div>
            <span className="text-white font-medium text-[13px]">LinkedIn</span>
          </a>

          <a href="https://www.instagram.com/akshath.31/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#151517] hover:bg-[#1a1a1c] border border-zinc-800/50 hover:border-orange-500/30 p-3 lg:p-3.5 rounded-xl transition-all group">
            <div className="w-9 h-9 bg-[#1f1f22] group-hover:bg-orange-500/10 rounded-lg flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4 text-zinc-400 group-hover:text-orange-500" />
            </div>
            <span className="text-white font-medium text-[13px]">Instagram</span>
          </a>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="bg-[#151517] border border-zinc-800/50 p-4 rounded-xl flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-500 font-medium text-[13px]">Open to Collaborate</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed flex-grow">
              Currently seeking internship opportunities and collaborative projects.
            </p>
          </div>

          <div className="bg-[#151517] border border-zinc-800/50 p-4 rounded-xl flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-500 font-medium text-[13px]">Open to Work</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed flex-grow">
              Quick to respond and eager to contribute to meaningful work.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column / Form Card */}
      <div className="bg-[#151517] border border-zinc-800/50 p-5 lg:p-6 rounded-2xl flex flex-col shadow-lg">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[13px] font-semibold text-white flex gap-1">Name <span className="text-orange-500">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-[#0a0a0a] border border-zinc-800 text-white rounded-lg p-2.5 text-[13px] focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors disabled:opacity-50"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[13px] font-semibold text-white flex gap-1">Email <span className="text-orange-500">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-[#0a0a0a] border border-zinc-800 text-white rounded-lg p-2.5 text-[13px] focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[13px] font-semibold text-white flex gap-1">Subject <span className="text-orange-500">*</span></label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full bg-[#0a0a0a] border border-zinc-800 text-white rounded-lg p-2.5 text-[13px] focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors disabled:opacity-50"
                placeholder="What's this about?"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[13px] font-semibold text-white flex gap-1">Message <span className="text-orange-500">*</span></label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full bg-[#0a0a0a] border border-zinc-800 text-white rounded-lg p-2.5 text-[13px] h-20 resize-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors disabled:opacity-50"
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>

            {submitStatus === "success" && (
              <div className="flex items-center gap-2 text-green-500 text-xs bg-green-500/10 p-2.5 rounded-lg border border-green-500/20">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                Message sent! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="flex items-center gap-2 text-red-500 text-xs bg-red-500/10 p-2.5 rounded-lg border border-red-500/20">
                <XCircle className="w-4 h-4 flex-shrink-0" />
                Failed to send message. Please try again.
              </div>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-medium flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all duration-200 active:scale-[0.98] mt-1 text-[13px]"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        <div className="text-center mt-4 pt-4 border-t border-zinc-800/50">
          <p className="text-xs text-zinc-500">
            Usually responds within 24 hours <span className="mx-1">•</span> Based in India (IST)
          </p>
        </div>
      </div>
    </div>
  );
}