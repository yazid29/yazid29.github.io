import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09100b] text-[#f3f4f6] flex flex-col font-sans selection:bg-[#388562]/40 selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <About />
        <WhatIDo />
        <TechStack />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Technical Footer */}
      <Footer />
    </div>
  );
}
