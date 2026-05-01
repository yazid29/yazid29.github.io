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
                        Software Engineer with around 5 years of experience focusing on backend development and business logic implementation. Currently working as a Salesforce Developer, building custom features, integrations, and scalable solutions based on business requirements.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-white/90 text-justify indent-8">
                        Experienced in JavaScript, .NET, Python, Node.js (Express), PostgreSQL, REST APIs, Apex, and Lightning Web Components on the Salesforce platform. I am currently expanding my expertise into full-stack development using React and modern web technologies.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-white/90 text-justify indent-8">
                        I enjoy designing clean and maintainable systems and continuously improving my engineering practices through hands-on projects and real-world problem solving.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;