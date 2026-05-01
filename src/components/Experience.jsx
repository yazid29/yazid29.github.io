import ExperienceCard from "./Card/ExperienceCard";
import useReveal from "./Card/UseReveal";
const Experience = () => {
    const [ref, show] = useReveal();
    const experienceList = [
        {
            title: "Software Engineer",
            company: "PT Mitra Integrasi Informatika",
            period: "Sep 2023 – Present",
            description: "Assigned to various client projects as a Technical Consultant and Full-stack Developer:",
            points: [
                "Developed and maintained Salesforce solutions (Apex, LWC, Visualforce, Flows) to automate complex business logic and enhance user interfaces.",
                "Developed and maintained backend services and RESTful APIs using Express.js and ASP.NET Core for data processing.",
                "Developed and maintained dynamic frontend interfaces using React.js to deliver end-to-end application features."
            ]
        },
        {
            title: "Freelance Software Engineer",
            company: "Freelance",
            period: "Nov 2020 - Aug 2023",
            description: "Worked on various projects focusing on full-stack web & backend development, and data analysis.",
            points: [
                "Architected and maintained applications using Python, PHP (Laravel & CodeIgniter 3)",
                "Developed RESTful APIs to ensure seamless data communication between backend services and frontend interfaces",
                "Implemented data analysis projects using Python and machine learning models.",
                "Collaborated with clients to understand requirements and deliver technical solutions"
            ]
        }
    ];
    return (
        <section id="experience" className="min-h-screen flex items-start justify-center p-3 pt-3 md:p-5 md:pt-5 scroll-mt-24 bg-gradient-to-br from-[#A7AAE1] to-[#696FC7]">
            <div ref={ref}
                className={`transition-all duration-600 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            min-h-[60vh] p-3 md:p-5 scroll-mt-24 max-w-4xl mx-auto rounded-2xl`}>
                <h2 className="text-3xl font-bold mb-10 text-center text-white">Professional Experience</h2>
                <div className="space-y-8">
                    {experienceList.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            title={exp.title}
                            company={exp.company}
                            period={exp.period}
                            description={exp.description}
                            points={exp.points}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience;