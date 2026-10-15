import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "Profile & Impact" },
  { id: "skills", label: "Tech Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 ${scrolled
        ? "py-2.5 bg-[#09100b]/95 backdrop-blur-xl border-b border-[#1b3828] shadow-2xl shadow-black/80"
        : "py-3 md:py-4 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#0f2017] border border-[#1e3b2b] flex items-center justify-center text-[#52b788] font-mono font-bold text-sm group-hover:border-[#388562] transition-colors">
            &lt;/&gt;
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-[#f3f4f6] group-hover:text-[#80d4a6] transition-colors text-base font-heading">
              {personalInfo.shortName} <span className="text-[#52b788]">.dev</span>
            </span>
            {/* <span className="text-[10px] text-[#8fa596] font-mono uppercase tracking-wider hidden sm:block">
              Software Engineer
            </span> */}
          </div>
        </a>

        {/* Desktop Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0f2017]/90 backdrop-blur-xl border border-[#1e3b2b] rounded-full px-4 py-1.5 shadow-xl shadow-black/60">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-150 cursor-pointer ${isActive
                  ? "text-[#80d4a6] font-semibold"
                  : "text-[#8fa596] hover:text-[#f3f4f6] hover:bg-[#14291e]"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#183625] border border-[#388562]/50 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs font-mono font-medium text-[#c2d1c7] bg-[#0f2017] hover:bg-[#14291e] border border-[#1e3b2b] hover:border-[#2d5c41] rounded-full transition-all flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#52b788] animate-pulse"></span>
            <span>My Repository</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="px-4 py-1.5 text-xs font-mono font-bold text-white bg-[#2d6a4f] hover:bg-[#388562] rounded-full shadow-md shadow-[#1b3b2b]/40 transition-all flex items-center gap-1 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-[#0f2017] border border-[#1e3b2b] text-[#8fa596] hover:text-[#f3f4f6] focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#52b788]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-[#0f2017] border border-[#1e3b2b] rounded-2xl p-4 shadow-2xl space-y-2"
          >
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#1b3627]">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-3 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${activeSection === item.id
                    ? "bg-[#183625] text-[#80d4a6] border border-[#388562]/50"
                    : "text-[#8fa596] hover:bg-[#14291e]"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="flex-1 text-center py-2 text-xs font-mono font-bold rounded-xl bg-[#2d6a4f] text-white shadow-md"
              >
                Get In Touch
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-xs font-mono text-[#c2d1c7] bg-[#13281d] rounded-xl border border-[#1e3b2b]"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
