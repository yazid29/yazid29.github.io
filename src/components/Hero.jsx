import TypeIt from "typeit-react";
import '../styles/input.css';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-9 scroll-mt-24">
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
            <div>
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[#4E56C0] uppercase bg-purple-100 rounded-full">
                    {/* Available for Work */}
                </span>
                <h1 className="text-5xl md:text-6xl font-extrabold  text-[#4E56C0] leading-tight fade-in-up">
                    Hi, I'm <br></br> <span className="text-[#4E56C0]">Ahmad Yazid Munif</span>
                </h1>
                <p datatype="typing" className="mt-6 text-lg text-slate-700 leading-relaxed">
                    <TypeIt
                        options={{
                            strings: [
                            "Focused on building efficient systems while expanding my skills to deliver seamless and user-friendly applications."
                            ],
                            speed: 25,
                            waitUntilVisible: true,
                            cursor: true,
                        }}
                    />
                </p>

                <div className="mt-8 flex gap-8 item-center border-l-4 border-purple-200 pl-6">
                    <div>
                        <span className="block text-2xl font-bold  text-[#2e1065]">2+</span>
                        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Years Experience</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-bold  text-[#2e1065]">5+</span>
                        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Pojects</span>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-2 sm:flex sm:flex-wrap gap-4">
                    <a href="#projects" className="bg-[#4E56C0] text-white px-7 py-2.5 text-sm font-semibold rounded-xl hover:bg-[#482890] transition-all shadow-lg flex item-center gap-2">
                        View My Work
                    </a>
                    <a href="#contact" className=" bg-white border-2 border-[#4E56C0] text-[#4E56C0] px-7 py-2.5 text-sm font-semibold rounded-xl hover:bg-[#696FC7] hover:text-white transition-all">
                        Get In Touch
                    </a>
                </div>

                <div className="mt-8 flex item-center gap-5 text-slate-400
                    before:content-[''] before:h-px before:w-20 before:bg-slate-300 before:mr-4 before:self-center">
                    <a href="https://www.linkedin.com/in/ahmad-yazid-munif/" target="_blank" className="hover:text-[#696FC7] transition-colors">
                        <span className="text-sm font-medium">
                            <i className="fa fa-linkedin-square" style={{ fontSize: '24px' }}></i>
                        </span>
                    </a>
                    <a href="https://github.com/yazid29" target="_blank" className="hover:text-[#696FC7] transition-colors">
                        <span className="text-sm font-medium">
                            <i className="fa fa-github" style={{ fontSize: '24px' }}></i>
                        </span>
                    </a>
                </div>
            </div>
            <div className="hidden md:flex justify-end relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse">
                </div>
                <div className="w-68 h-68 bg-gradient-to-tr  from-[#696FC7] to-[#8a63e8] rounded-[40px] shadow-2xl rotate-3 flex item-center justify-center text-white p-8 relative z-10 transition-transform hover:rotate-0 duration-700">
                    <div className="rotate-3 text-center mt-7">
                        <span className="text-xs uppercase tracking-[0.2rem] opacity-80">Current Role</span>
                        <h3 className="text-3xl font-bold mt-2">Software Engineer</h3>
                        <p className="mt-4 text-sm font-light opacity-90">
                            .NET | Javascript | Salesforce
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;