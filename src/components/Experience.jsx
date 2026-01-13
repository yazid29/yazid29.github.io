import ExperienceCard from "./Card/ExperienceCard";
import useReveal from "./Card/UseReveal";
const Experience = () => {
    const [ref, show] = useReveal();
    const experienceList = {
        "profesional1": {
            "title":"Software Engineer",
            "company":"PT Mitra Integrasi Informatika",
            "period":"Februari 2024 — Present",
            "description":"As an Application Developer, I have been assigned to various client projects, gaining hands-on experience across multiple stacks:",
            "points":[
                "Project Indosat as Fullstack Developer",
                "Project BRI as Salesforce Developer",
                "Project AXA Mandiri as Salesforce Developer",
                "Project ASWATA as Salesforce Developer"
            ]
        }
    };
    return (
        <section id="experience" className="min-h-screen flex items-start justify-center p-3 pt-3 md:p-5 md:pt-5 scroll-mt-24 bg-gradient-to-br from-[#A7AAE1] to-[#696FC7]">
            <div ref={ref} 
            className={`transition-all duration-600 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            min-h-[60vh] p-3 md:p-5 scroll-mt-24 max-w-4xl mx-auto rounded-2xl`}>
                <h2 className="text-3xl font-bold mb-10 text-center text-white">Professional Experience</h2>
                <div className="space-y-8">
                    <ExperienceCard 
                        title={experienceList.profesional1.title}
                        company={experienceList.profesional1.company}
                        period={experienceList.profesional1.period}
                        description={experienceList.profesional1.description}
                        points={experienceList.profesional1.points}
                    />
                </div>
            </div>
        </section>
    )
}

export default Experience;