import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  ArrowUp,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#070e09] border-t border-[#162e20] pt-16 pb-12 sm:pt-20 sm:pb-14 text-[#8fa596] overflow-hidden"
    >
      {/* Subtle organic forest light vignette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-linear-to-b from-[#1b3b2b]/20 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1d15] border border-[#234b34] text-[#52b788] text-xs font-mono uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#52b788]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] tracking-tight font-heading">
            Let's Connect & <span className="text-[#52b788]">Build Together</span>
          </h2>
          <p className="text-[#9dafa3] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Currently open to collaboration, freelance, or full-time roles as a Software Engineer, particularly focusing on Backend Development, and scalable Enterprise Systems.
          </p>
        </motion.div>

        {/* 3 Core Contact Cards: Email, LinkedIn, GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-16"
        >
          {/* Card 1: Email */}
          <div className="p-6 rounded-2xl bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/70 hover:shadow-xl hover:shadow-[#1b3b2b]/20 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#142d1f] border border-[#234b34] flex items-center justify-center text-[#52b788] group-hover:bg-[#234b34] group-hover:text-white transition-all shadow-inner">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-[#132d1f] hover:bg-[#1b3d2b] border border-[#234b34] text-[11px] font-mono text-[#8fa596] hover:text-[#52b788] transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#52b788]" />
                      <span className="text-[#52b788]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono text-[#52b788] uppercase tracking-wider block mb-1">
                Direct Email
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#f3f4f6] font-heading group-hover:text-[#52b788] transition-colors break-all">
                {personalInfo.email}
              </h3>
              <p className="text-xs text-[#8fa596] mt-2">
                Drop an email for job or project opportunities.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#183323]">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#80d4a6] hover:text-white transition-colors"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: LinkedIn */}
          <div className="p-6 rounded-2xl bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/70 hover:shadow-xl hover:shadow-[#1b3b2b]/20 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#142d1f] border border-[#234b34] flex items-center justify-center text-[#0a66c2] group-hover:bg-[#0a66c2] group-hover:text-white transition-all shadow-inner">
                  <SiLinkedin className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-[#8fa596] px-2.5 py-1 rounded-full bg-[#132d1f] border border-[#1e3b2b]">
                  Professional
                </span>
              </div>

              <span className="text-xs font-mono text-[#52b788] uppercase tracking-wider block mb-1">
                LinkedIn Network
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#f3f4f6] font-heading group-hover:text-[#52b788] transition-colors">
                {personalInfo.name}
              </h3>
              <p className="text-xs text-[#8fa596] mt-2">
                Connect professionally, review career background, and endorse skills.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#183323]">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#80d4a6] hover:text-white transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 3: GitHub */}
          <div className="p-6 rounded-2xl bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/70 hover:shadow-xl hover:shadow-[#1b3b2b]/20 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#142d1f] border border-[#234b34] flex items-center justify-center text-[#c2d1c7] group-hover:bg-[#234b34] group-hover:text-white transition-all shadow-inner">
                  <SiGithub className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-[#8fa596] px-2.5 py-1 rounded-full bg-[#132d1f] border border-[#1e3b2b]">
                  Open Source
                </span>
              </div>

              <span className="text-xs font-mono text-[#52b788] uppercase tracking-wider block mb-1">
                GitHub Repositories
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#f3f4f6] font-heading group-hover:text-[#52b788] transition-colors">
                github.com/yazid29
              </h3>
              <p className="text-xs text-[#9dafa3] mt-2">
                Explore backend microservices, full-stack repos, and automation scripts.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#183323]">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#80d4a6] hover:text-white transition-colors"
              >
                <span>View Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Sub-Footer Line */}
        <div className="border-t border-[#162e20] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
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

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f2017] hover:bg-[#14291e] text-[#c2d1c7] hover:text-[#52b788] border border-[#1e3b2b] hover:border-[#388562]/50 text-xs font-mono transition-all cursor-pointer shadow-sm"
            title="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-[#122319] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#5c7765] gap-2 text-center">
          <span>© {new Date().getFullYear()} Ahmad Yazid Munif.</span>
          {/* <span>Enterprise Backend & Scalable Systems</span> */}
        </div>
      </div>
    </footer>
  );
}