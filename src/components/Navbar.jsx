import { useState,useEffect } from "react";
import '../styles/input.css';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );
        sections.forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    return (
        <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav id="main-nav" className="pointer-events-auto bg-[#696FC7] backdrop-blur-md bg-opacity-100 rounded-full px-6 py-2 flex items-center justify-between md:justify-center md:gap-8 w-full max-w-4xl shadow-lg transition-all duration-500">
                <div className="hidden md:flex items-center gap-8">
                    <a onClick={() => setActive("home")} className={active=="home"? "is-active":"" +"nav-link text-white font-medium text-sm hover:opacity-70"} href="#home">Home</a>
                    <a onClick={() => setActive("about")} className={active=="about"? "is-active":"" +"nav-link text-white font-medium text-sm hover:opacity-70"} href="#about">About</a>
                    <a onClick={() => setActive("skills")} className={active=="skills"? "is-active":"" +"nav-link text-white font-medium text-sm hover:opacity-70"} href="#skills">Skills</a>
                </div>
                <div
                    className="bg-white text-[#696FC7] w-10 h-10 flex items-center justify-center rounded-full font-extrabold text-sm shrink-0 md:mx-4 shadow-md">
                    AY
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a onClick={() => setActive("experience")} className={active=="experience"? "is-active":"" +"nav-link text-white font-medium text-sm hover:opacity-70"} href="#experience">Experience</a>
                    <a onClick={() => setActive("projects")} className={active=="projects"? "is-active":"" +"nav-link text-white font-medium text-sm hover:opacity-70"} href="#projects">Projects</a>
                    <a onClick={() => setActive("contact")} className={active=="contact"? "is-active":"" +"nav-link text-white font-medium text-sm hover:opacity-70"} href="#contact">Contact</a>
                </div>
                <button id="menu-btn" className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                <div id="mobile-menu" className={`${open ? "flex" : "hidden"} absolute top-16 left-0 right-0 bg-[#696FC7] rounded-3xl p-3 flex flex-col gap-4 shadow-2xl md:hidden`}>
                    <a onClick={() => setActive('home')} className={active == "home"? "is-active": "" + "nav-link text-white font-medium"} href="#home">Home</a>
                    <a onClick={() => setActive('about')} className={active == "about"? "is-active": "" + "nav-link text-white font-medium"} href="#about">About</a>
                    <a onClick={() => setActive('skills')} className={active == "skills"? "is-active": "" + "nav-link text-white font-medium"} href="#skills">Skills</a>
                    <a onClick={() => setActive('experience')} className={active == "experience"? "is-active": "" + "nav-link text-white font-medium"} href="#experience">Experience</a>
                    <a onClick={() => setActive('projects')} className={active == "projects"? "is-active": "" + "nav-link text-white font-medium"} href="#projects">Projects</a>
                    <a onClick={() => setActive('contact')} className={active == "contact"? "is-active": "" + "nav-link text-white font-medium"} href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
