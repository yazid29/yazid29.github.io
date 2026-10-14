import React from "react";
import { ArrowUp, Terminal, Heart, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#04060c] border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Attribution */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="font-heading font-bold text-white text-sm">
              {personalInfo.name}
            </span>
            <span className="text-xs font-mono text-cyan-400">
              | {personalInfo.role}
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono mt-1">
            Engineered with React 19, Tailwind CSS & Framer Motion. Deployed to GitHub Pages.
          </p>
        </div>

        {/* Socials & Back To Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="GitHub"
          >
            <SiGithub className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 text-xs font-mono transition-colors cursor-pointer"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-600 gap-2 text-center">
        <span>© {new Date().getFullYear()} Ahmad Yazid Munif. All rights reserved.</span>
        <span>High-Availability Enterprise Microservice Standard</span>
      </div>
    </footer>
  );
}