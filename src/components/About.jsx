import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  MapPin,
  Briefcase,
  Sparkles
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import developerPhoto from "../assets/foto2.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#09100b] border-t border-[#162e20] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1d15] border border-[#234b34] text-[#52b788] text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] tracking-tight font-heading">
            Who is <span className="text-[#52b788]">Ahmad Yazid Munif</span>?
          </h2>
          <p className="text-[#9dafa3] text-sm sm:text-base leading-relaxed">
            Delivering secure enterprise backends, scalable CRM architectures, and automated cloud deployments.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Professional Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md group">
              {/* Main Card */}
              <div className="relative rounded-3xl bg-[#0f2017] border border-[#1e3b2b] p-6 md:p-8 overflow-hidden shadow-2xl">
                {/* Image Container with Dark Mask */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] bg-[#09100b] border border-[#1b3627] mb-6">
                  <img
                    src={developerPhoto}
                    alt="Ahmad Yazid Munif - Software Engineer"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2017] via-transparent to-transparent opacity-65" />

                  {/* Corner Accent Tech Ticks */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#52b788]" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#52b788]" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#52b788]" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#52b788]" />
                </div>

                {/* Developer Metadata */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#f3f4f6] font-heading">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs text-[#52b788] font-mono">
                        {personalInfo.role}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#132d1f] border border-[#234b34] text-[#80d4a6]">
                      Enterprise Verified
                    </span>
                  </div>

                  <div className="pt-3 border-t border-[#1b3627] grid grid-cols-2 gap-3 text-xs text-[#8fa596] font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#52b788] shrink-0" />
                      <span className="truncate">{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#a1b8aa] shrink-0" />
                      <span className="truncate">PT MII (Enterprise)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Story & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#f3f4f6] leading-tight font-heading">
                Engineering High-Impact Systems From Architecture to Cloud Delivery
              </h3>

              {personalInfo.aboutParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[#9dafa3] text-sm sm:text-base leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Strengths Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                {
                  title: "Enterprise Architecture",
                  desc: "Robust .NET Core & Python microservices for banking & telco"
                },
                {
                  title: "Salesforce CRM Systems",
                  desc: "Complex Apex business logic, LWC & automated flows"
                },
                {
                  title: "Automated CI/CD & Docker",
                  desc: "Zero-downtime releases via GitHub Actions pipelines"
                },
                {
                  title: "High Code Quality & Tests",
                  desc: "Rigorous unit testing, code reviews, and maintainable design"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/50 transition-all flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-[#52b788] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#e2e8f0]">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#8fa596] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Row in Earthy Pine Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative p-6 rounded-2xl bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/60 transition-all duration-200 shadow-xl group text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f3f4f6] font-mono mb-2 group-hover:text-[#52b788] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#e2e8f0] font-heading">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#8fa596] mt-1 font-mono">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}