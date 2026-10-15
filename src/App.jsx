import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfileImpact from "./components/ProfileImpact";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
// import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09100b] text-[#f3f4f6] flex flex-col font-sans selection:bg-[#388562]/40 selection:text-white overflow-x-hidden">
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <ProfileImpact />
        <TechStack />
        <Experience />
        <Projects />
        {/* <Certifications /> */}
      </main>

      {/* Technical Footer */}
      <Footer />
    </div>
  );
}
