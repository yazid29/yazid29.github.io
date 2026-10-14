import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  ArrowRight,
  Mail,
  Copy,
  Check,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  Server
} from "lucide-react";
import { personalInfo, heroTerminalSnippets } from "../data/portfolioData";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Hero() {
  const [activeTabId, setActiveTabId] = useState(heroTerminalSnippets[0].id);
  const [copied, setCopied] = useState(false);

  const activeSnippet =
    heroTerminalSnippets.find((s) => s.id === activeTabId) ||
    heroTerminalSnippets[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 flex items-center justify-center overflow-x-hidden bg-[#09100b] bg-tech-grid"
    >
      {/* Subtle organic forest light vignette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-linear-to-b from-[#1b3b2b]/15 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Responsive Flex Container: flex-col on mobile, lg:flex-row on desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 w-full">
          {/* Left Column: Standard div for layout */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center min-w-0">
            {/* Framer Motion purely for animation inside */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-5 sm:space-y-6 text-left"
            >
              {/* Status Pill Badge */}
              {personalInfo.statusActive && (
                <div className="flex">
                  <div className="inline-flex max-w-full items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#0e1d15] border border-[#234b34] text-[#52b788] text-[11px] sm:text-xs font-mono font-medium shadow-sm">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52b788] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#409870]"></span>
                    </span>
                    <span className="wrap-break-word">
                      {personalInfo.statusBadge}
                    </span>
                  </div>
                </div>
              )}

              {/* Greeting & Bold Off-White Headline */}
              <div className="space-y-2">
                <p className="text-[#8fa596] font-mono text-xs sm:text-sm tracking-wide">
                  👋 {personalInfo.bioGreeting}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold tracking-tight text-[#f3f4f6] leading-[1.14] sm:leading-[1.08] font-heading wrap-break-word">
                  {personalInfo.heroTitlePrefix || personalInfo.role || "Backend Architecture &"}{" "}
                  <span className="text-[#52b788]">
                    {personalInfo.heroTitleHighlight || (personalInfo.headline !== personalInfo.role ? personalInfo.headline : "Enterprise Solutions")}
                  </span>
                </h1>
              </div>

              {/* Sub-headline */}
              <p className="text-[#9dafa3] text-sm sm:text-base leading-relaxed max-w-xl font-normal wrap-break-word">
                {personalInfo.bioSubheadline}
              </p>

              {/* Tech Pillar Quick Tags */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
                {personalInfo.pilarTech.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-md bg-[#0f2017] border border-[#1e3b2b] text-[10px] sm:text-[11px] font-mono text-[#c2d1c7] flex items-center gap-1.5 shrink-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52b788] shrink-0"></span>
                    {pill}
                  </span>
                ))}
              </div>

              {/* Dual Action Buttons (Solid Soft Emerald & Deep Pine Outline) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#projects"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2d6a4f] hover:bg-[#388562] text-[#f3f4f6] font-bold text-sm shadow-lg shadow-[#1b3b2b]/40 transition-all flex items-center justify-center gap-2 group cursor-pointer text-center"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0f2017] hover:bg-[#152e22] text-[#f3f4f6] hover:text-white border border-[#234b34] text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <Mail className="w-4 h-4 text-[#52b788]" />
                  <span>Get In Touch</span>
                </motion.a>
              </div>

              {/* Direct Links & Location */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-[#8fa596] text-xs border-t border-[#1b3627]">
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#52b788] transition-colors p-2 rounded-lg bg-[#0f2017] border border-[#1e3b2b]"
                    aria-label="GitHub Profile"
                  >
                    <SiGithub className="w-4 h-4 text-[#c2d1c7]" />
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#52b788] transition-colors p-2 rounded-lg bg-[#0f2017] border border-[#1e3b2b]"
                    aria-label="LinkedIn Profile"
                  >
                    <SiLinkedin className="w-4 h-4 text-[#c2d1c7]" />
                  </a>
                </div>
                <span className="hidden sm:inline-block w-px h-4 bg-[#1b3627]"></span>
                <span className="font-mono text-[#8fa596] text-[11px] sm:text-xs">
                  📍 {personalInfo.location}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Standard div for layout (Hidden on mobile, visible on desktop) */}
          <div className="hidden lg:block w-full lg:w-1/2 relative min-w-0 mt-8 lg:mt-0">
            {/* Framer Motion purely for animation inside */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative w-full"
            >
              {/* Floating Animation Container */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full"
              >
                {/* Floating Technical Status Badges */}
                <div className="absolute -top-4 -right-2 sm:-right-4 z-20 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#161b22] border border-[#30363d] text-[#e6edf3] text-xs font-mono shadow-xl shadow-black/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>CI/CD: Passing (100%)</span>
                </div>

                {/* <div className="absolute -bottom-4 -left-2 sm:-left-4 z-20 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#161b22] border border-[#30363d] text-[#e6edf3] text-xs font-mono shadow-xl shadow-black/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Clean Architecture Certified</span>
                </div> */}

                {/* Code Editor Container */}
                <div className="w-full rounded-2xl bg-[#0d1117] border border-[#30363d] shadow-2xl shadow-black/70 overflow-hidden">
                  {/* Window Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#21262d]">
                    {/* macOS traffic light dots */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                      <span className="ml-2 text-[11px] font-mono text-[#8b949e] flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-[#8b949e]" />
                        <span>yazid-workspace</span>
                      </span>
                    </div>

                    {/* Branch and Copy Action */}
                    <div className="flex items-center gap-2">
                      <span className="hidden md:flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#21262d] text-[#c9d1d9]">
                        <GitBranch className="w-3 h-3 text-[#8b949e]" />
                        develop
                      </span>
                      {/* <button
                        onClick={handleCopyCode}
                        className="p-1.5 rounded-md hover:bg-[#21262d] text-[#8b949e] hover:text-[#f0f6fc] transition-colors cursor-pointer"
                        title="Copy code snippet"
                      >
                        {copied ? (
                          <Check className="w-3.5 h-3.5 text-[#38bdf8]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button> */}
                    </div>
                  </div>

                  {/* File Tabs */}
                  <div className="flex items-center overflow-x-auto border-b border-[#21262d] bg-[#0d1117] px-2 pt-2 scrollbar-none w-full">
                    {heroTerminalSnippets.map((snippet) => {
                      const isActive = snippet.id === activeTabId;
                      return (
                        <button
                          key={snippet.id}
                          onClick={() => setActiveTabId(snippet.id)}
                          className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-t-lg transition-all shrink-0 border-t border-x cursor-pointer -mb-px relative z-10 ${isActive
                            ? "bg-[#161b22] text-[#f0f6fc] border-[#30363d] border-b-[#161b22] font-medium border-t-[#38bdf8]"
                            : "text-[#8b949e] hover:text-[#f0f6fc] border-transparent hover:bg-[#161b22]/50"
                            }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#38bdf8]" : "bg-[#30363d]"
                              }`}
                          />
                          <span>{snippet.fileName}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Sub-bar */}
                  <div className="px-3 sm:px-4 py-1.5 bg-[#161b22]/70 border-b border-[#21262d] flex items-center justify-between text-[10px] sm:text-[11px] font-mono w-full">
                    <span className="text-[#8b949e]">
                      Target:{" "}
                      <span className="text-[#e6edf3] font-medium">
                        {activeSnippet.badge}
                      </span>
                    </span>
                    <span className="text-[#8b949e] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16dd00]"></span>
                      Ready to Merge
                    </span>
                  </div>

                  {/* Code Body - Fixed height tailored for exact 19 lines */}
                  <div className="p-3 sm:p-4 overflow-x-auto text-left h-102.5 font-mono text-xs leading-5 scrollbar-thin w-full">
                    <pre className="text-[#e6edf3] font-mono">
                      <code>
                        {activeSnippet.code.split("\n").map((line, idx) => (
                          <div key={idx} className="flex items-start h-5">
                            <span className="select-none pr-4 text-right text-[#6e7681] text-[10px] w-6 shrink-0 leading-5">
                              {idx + 1}
                            </span>
                            <span className="whitespace-pre leading-5">
                              {colorizeCode(line)}
                            </span>
                          </div>
                        ))}
                      </code>
                    </pre>
                  </div>

                  {/* Editor Status Footer */}
                  <div className="px-3 sm:px-4 py-2 bg-[#161b22] border-t border-[#21262d] flex items-center justify-between text-[10px] font-mono text-[#8b949e] w-full">
                    <div className="flex items-center gap-3">
                      <span>UTF-8</span>
                      <span>LF</span>
                      <span className="text-[#c9d1d9]">{activeSnippet.language}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#8b949e]">
                      <Server className="w-3 h-3" />
                      <span>Production Architecture</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Standard default VS Code syntax colorizer (non-green default)
 */
function colorizeCode(line) {
  // Comments: standard muted gray (non-green)
  if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
    return <span className="text-[#8b949e] italic">{line}</span>;
  }

  const parts = line.split(
    /(\b(?:namespace|public|class|private|readonly|using|await|return|new|async|Task|void|from|import|def|version|services|build|runs-on|steps|uses|name|on|push|branches|jobs|true|false|var|string|int|dict|self|None|with|as|in|if|else)\b|".*?"|'.*?'|\[.*?\])/g
  );

  return parts.map((part, index) => {
    // Control flow keywords (purple)
    if (/^(await|return|async|if|else|with|as|in)$/.test(part)) {
      return (
        <span key={index} className="text-[#c586c0] font-semibold">
          {part}
        </span>
      );
    }
    // Declaration & structural keywords (VS Code blue)
    if (
      /^(namespace|public|class|private|readonly|using|new|Task|void|from|import|def|version|services|build|runs-on|steps|uses|name|on|push|branches|jobs|true|false|var|string|int|dict|self|None)$/.test(
        part
      )
    ) {
      return (
        <span key={index} className="text-[#569cd6] font-semibold">
          {part}
        </span>
      );
    }
    // Strings (VS Code warm orange)
    if (part.startsWith('"') || part.startsWith("'")) {
      return (
        <span key={index} className="text-[#ce9178]">
          {part}
        </span>
      );
    }
    // Attributes / Bracketed tags (VS Code yellow)
    if (part.startsWith("[") && part.endsWith("]")) {
      return (
        <span key={index} className="text-[#dcdcaa]">
          {part}
        </span>
      );
    }
    // Types & PascalCase Classes (VS Code sky blue / cyan - non-green)
    if (/^[A-Z][a-zA-Z0-9]*$/.test(part.trim())) {
      return (
        <span key={index} className="text-[#9cdcfe]">
          {part}
        </span>
      );
    }
    // Default text (crisp default light off-white)
    return <span key={index} className="text-[#e6edf3]">{part}</span>;
  });
}