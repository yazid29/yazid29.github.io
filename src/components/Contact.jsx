import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  ArrowUpRight,
  MessageSquare
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || "Enterprise Collaboration / Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#09100b] border-t border-[#162e20] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1d15] border border-[#234b34] text-[#52b788] text-xs font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] tracking-tight font-heading">
            Let's Build Something Resilient Together
          </h2>
          <p className="text-[#9dafa3] text-sm sm:text-base leading-relaxed">
            Currently open to collaboration, freelance, or full-time roles as a Software Engineer, particularly focusing on Backend Development, and scalable Enterprise Systems.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Channels & Copy Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Email Copy Box */}
            <div className="p-6 rounded-3xl bg-[#0f2017] border border-[#1e3b2b] shadow-xl space-y-4">
              <span className="text-xs font-mono text-[#52b788] font-semibold block">
                Direct Communication
              </span>
              <p className="text-xs text-[#9dafa3] leading-relaxed">
                Need a rapid response for architecture discussions or interviews? Copy my email or reach out directly.
              </p>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#09100b] border border-[#1b3627] gap-2">
                <span className="text-xs sm:text-sm font-mono text-[#c2d1c7] truncate">
                  {personalInfo.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-[#13281d] hover:bg-[#1a3828] border border-[#234b34] text-[#80d4a6] text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
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
            </div>

            {/* Direct Cards List */}
            <div className="space-y-3">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0f2017] hover:bg-[#13291e] border border-[#1e3b2b] hover:border-[#388562]/50 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#13281d] border border-[#1e3b2b] flex items-center justify-center text-[#52b788] group-hover:scale-105 transition-transform">
                    <SiLinkedin className="w-5 h-5 text-[#80d4a6]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#f3f4f6] group-hover:text-[#80d4a6] transition-colors">
                      LinkedIn Profile
                    </h4>
                    <p className="text-[11px] text-[#8fa596] font-mono">
                      /in/ahmad-yazid-munif
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6d8876] group-hover:text-[#52b788] transition-transform" />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0f2017] hover:bg-[#13291e] border border-[#1e3b2b] hover:border-[#388562]/50 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#13281d] border border-[#1e3b2b] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    <SiGithub className="w-5 h-5 text-[#c2d1c7]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#f3f4f6] group-hover:text-[#80d4a6] transition-colors">
                      GitHub Repositories
                    </h4>
                    <p className="text-[11px] text-[#8fa596] font-mono">
                      github.com/yazid29
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6d8876] group-hover:text-[#52b788] transition-transform" />
              </a>

              <div className="p-4 rounded-2xl bg-[#0f2017] border border-[#1e3b2b] flex items-center gap-3 text-xs text-[#9dafa3] font-mono">
                <MapPin className="w-4 h-4 text-[#52b788] shrink-0" />
                <span>Base: {personalInfo.location} (Open to Hybrid & Remote)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[#0f2017] border border-[#1e3b2b] shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-mono text-[#c2d1c7] font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09100b] border border-[#1b3627] text-sm text-[#f3f4f6] placeholder:text-[#4d6b57] focus:outline-none focus:border-[#388562] focus:ring-1 focus:ring-[#388562] transition-all"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-mono text-[#c2d1c7] font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. jane@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09100b] border border-[#1b3627] text-sm text-[#f3f4f6] placeholder:text-[#4d6b57] focus:outline-none focus:border-[#388562] focus:ring-1 focus:ring-[#388562] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono text-[#c2d1c7] font-semibold">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Mid-Senior Backend Role / Enterprise Project"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#09100b] border border-[#1b3627] text-sm text-[#f3f4f6] placeholder:text-[#4d6b57] focus:outline-none focus:border-[#388562] focus:ring-1 focus:ring-[#388562] transition-all"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono text-[#c2d1c7] font-semibold">
                  Message Details
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your technical requirements, team needs, or role details..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#09100b] border border-[#1b3627] text-sm text-[#f3f4f6] placeholder:text-[#4d6b57] focus:outline-none focus:border-[#388562] focus:ring-1 focus:ring-[#388562] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-xl bg-[#2d6a4f] hover:bg-[#388562] text-white font-bold text-sm shadow-md shadow-[#1b3b2b]/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {status === "sending" ? (
                  <span>Preparing Email Client...</span>
                ) : status === "sent" ? (
                  <>
                    <Check className="w-4 h-4 text-[#80d4a6]" />
                    <span>Email Triggered Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message Directly</span>
                  </>
                )}
              </button>

              <p className="text-[11px] font-mono text-[#6d8876] text-center">
                Submissions automatically open your default mail client with prefilled metadata for 100% reliable deliverability.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}