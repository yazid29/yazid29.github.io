import React from "react";
import { ArrowUp } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070e09] border-t border-[#162e20] py-12 px-4 sm:px-6 lg:px-8 text-[#8fa596]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Attribution */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#52b788]"></span>
            <span className="font-heading font-bold text-[#f3f4f6] text-sm">
              {personalInfo.name}
            </span>
            <span className="text-xs font-mono text-[#52b788]">
              | {personalInfo.role}
            </span>
          </div>
          <p className="text-xs text-[#6d8876] font-mono mt-1">
            Engineered with React 19, Tailwind CSS & Framer Motion. Deployed to GitHub Pages.
          </p>
        </div>

        {/* Socials & Back To Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-[#0f2017] hover:bg-[#14291e] text-[#8fa596] hover:text-[#f3f4f6] border border-[#1e3b2b] transition-colors"
            aria-label="GitHub"
          >
            <SiGithub className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-[#0f2017] hover:bg-[#14291e] text-[#8fa596] hover:text-[#52b788] border border-[#1e3b2b] transition-colors"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0f2017] hover:bg-[#14291e] text-[#c2d1c7] hover:text-[#52b788] border border-[#1e3b2b] text-xs font-mono transition-colors cursor-pointer"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#162e20] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#5c7765] gap-2 text-center">
        <span>© {new Date().getFullYear()} Ahmad Yazid Munif. All rights reserved.</span>
        <span>High-Availability Enterprise Microservice Standard</span>
      </div>
    </footer>
  );
}