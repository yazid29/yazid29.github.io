import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  ArrowRight,
  Download,
  Mail,
  Copy,
  Check,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  Server,
  Sparkles,
  ExternalLink
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
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center overflow-hidden bg-tech-grid"
    >
      {/* Ambient Radial Glowing Orbs (Ref-1 & Ref-2 Inspired) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/10 to-emerald-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -top-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium shadow-sm shadow-emerald-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.statusBadge}</span>
            </motion.div>

            {/* Greeting & Headline */}
            <div className="space-y-2">
              <p className="text-slate-400 font-mono text-sm tracking-wide">
                👋 {personalInfo.bioGreeting}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-heading">
                Backend Architecture &{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  Enterprise Solutions
                </span>
              </h1>
            </div>

            {/* Sub-headline / Core Pitch */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              {personalInfo.bioSubheadline}
            </p>

            {/* Tech Pillar Quick Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                "C# / .NET 8",
                "Python FastAPI",
                "Docker CI/CD",
                "Salesforce CRM",
                "PostgreSQL"
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  {pill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-500/40 text-sm font-semibold transition-all flex items-center gap-2 shadow-sm"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </motion.a>
            </div>

            {/* Quick Links & Location */}
            <div className="pt-2 flex items-center gap-6 text-slate-400 text-xs border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors p-1.5 rounded-lg bg-slate-900 border border-slate-800"
                  aria-label="GitHub Profile"
                >
                  <SiGithub className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors p-1.5 rounded-lg bg-slate-900 border border-slate-800"
                  aria-label="LinkedIn Profile"
                >
                  <SiLinkedin className="w-4 h-4" />
                </a>
              </div>
              <span className="w-px h-4 bg-slate-800"></span>
              <span className="font-mono text-slate-400">
                📍 {personalInfo.location}
              </span>
            </div>
          </motion.div>

          {/* Right Column: High-End Code Terminal Window (Ref-2 Inspired) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 relative"
          >
            {/* Floating Technical Status Badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-5 -right-2 sm:-right-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-xl shadow-black/60"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>CI/CD: Passing (100%)</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-5 -left-2 sm:-left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-xl shadow-black/60"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Clean Architecture Certified</span>
            </motion.div>

            {/* Terminal Card Container */}
            <div className="relative rounded-2xl bg-[#090d16]/95 border border-slate-800/90 shadow-2xl shadow-cyan-950/40 overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0c1220] border-b border-slate-800/80">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>yazid-workspace</span>
                  </span>
                </div>

                {/* Branch and Copy Action */}
                <div className="flex items-center gap-2">
                  <span className="hidden md:flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-slate-400">
                    <GitBranch className="w-3 h-3 text-cyan-400" />
                    main
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
                    title="Copy code snippet"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Code Snippet Tabs */}
              <div className="flex items-center overflow-x-auto border-b border-slate-800/80 bg-[#080b13] px-2 pt-2 scrollbar-none">
                {heroTerminalSnippets.map((snippet) => {
                  const isActive = snippet.id === activeTabId;
                  return (
                    <button
                      key={snippet.id}
                      onClick={() => setActiveTabId(snippet.id)}
                      className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-t-lg transition-all shrink-0 border-t border-x ${
                        isActive
                          ? "bg-[#090d16] text-cyan-300 border-slate-800 border-b-transparent font-semibold shadow-sm"
                          : "text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/50"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isActive ? "bg-cyan-400" : "bg-slate-600"
                        }`}
                      />
                      <span>{snippet.fileName}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Stack Badge Bar */}
              <div className="px-4 py-1.5 bg-[#070a12] border-b border-slate-800/50 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">
                  Target:{" "}
                  <span className="text-cyan-400 font-semibold">
                    {activeSnippet.badge}
                  </span>
                </span>
                <span className="text-emerald-400/90 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Ready to Ship
                </span>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 overflow-x-auto text-left max-h-[360px] font-mono text-xs leading-relaxed scrollbar-thin">
                <pre className="text-slate-300">
                  <code>
                    {activeSnippet.code.split("\n").map((line, idx) => (
                      <div key={idx} className="table-row group">
                        <span className="table-cell select-none pr-4 text-right text-slate-600 group-hover:text-slate-400 text-[10px] w-6">
                          {idx + 1}
                        </span>
                        <span className="table-cell whitespace-pre">
                          {colorizeCode(line, activeSnippet.id)}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>

              {/* Terminal Status Footer */}
              <div className="px-4 py-2 bg-[#06080e] border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span>LF</span>
                  <span className="text-slate-400">{activeSnippet.language}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400/80">
                  <Server className="w-3 h-3" />
                  <span>Production Ready</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Lightweight syntax colorizer for the terminal snippet
 */
function colorizeCode(line) {
  // Comments
  if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
    return <span className="text-slate-500 italic">{line}</span>;
  }

  // Keywords highlighting
  const parts = line.split(/(\b(?:namespace|public|class|private|readonly|using|await|return|new|async|Task|void|from|import|def|version|services|build|runs-on|steps|uses|name|on|push|branches|jobs)\b|".*?"|'.*?'|\[.*?\])/g);

  return parts.map((part, index) => {
    if (
      /^(namespace|public|class|private|readonly|using|await|return|new|async|Task|void|from|import|def|version|services|build|runs-on|steps|uses|name|on|push|branches|jobs)$/.test(
        part
      )
    ) {
      return (
        <span key={index} className="text-purple-400 font-semibold">
          {part}
        </span>
      );
    }
    if (part.startsWith('"') || part.startsWith("'")) {
      return (
        <span key={index} className="text-emerald-300">
          {part}
        </span>
      );
    }
    if (part.startsWith("[") && part.endsWith("]")) {
      return (
        <span key={index} className="text-amber-300 font-semibold">
          {part}
        </span>
      );
    }
    if (/^[A-Z][a-zA-Z0-9]*$/.test(part.trim())) {
      return (
        <span key={index} className="text-cyan-300">
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}