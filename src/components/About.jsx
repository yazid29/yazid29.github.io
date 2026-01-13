import useReveal from "./Card/UseReveal";
const About = () => {
    const [ref, show] = useReveal();
    return (
        <section id="about" className="min-h-screen flex items-start justify-center p-8 mt-3 md:mt-6 scroll-mt-24 bg-gradient-to-br from-[#A7AAE1] to-[#696FC7]">
            <div ref={ref}
                className={`max-w-4xl w-full
                transition-all duration-600 ease-out
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}>
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-1 md:mb-6">
                    About Me
                </h2>
                <div className="max-w-4xl w-full p-6 md:p-12 space-y-3">
                    <p className="text-sm md:text-base lg:text-lg text-white/90 text-justify indent-8">
                        I'm a dedicated software engineer with over 3 years of experience, mainly focused on backend logic and
                        building reliable, scalable applications. 
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-white/90 text-justify indent-8">
                        Currently, I work as a Salesforce Developer, where I deal with business logic, integrations, and custom
                        features. With a strong foundation in programming, I can adapt quickly to new technologies and languages. I
                        continue to improve my full-stack skills, aiming to build end-to-end solutions that are
                        clean, maintainable, and practical for real-world use.                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-white/90 text-justify indent-8">
                        I believe in continuous learning and teamwork, and I enjoy collaborating with others to deliver solutions
                        that truly support business needs.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;