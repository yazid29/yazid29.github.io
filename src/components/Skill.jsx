import CardSkill from "./Card/SkillCard.jsx";
const Skill = () => {
    const skills = [
        { name: "Javascript"},
        { name: "React.js"},
        { name: "Express.js"},
        { name: ".NET Core"},
        { name: "Salesforce / Apex"},
        { name: "Python"},
        { name: "PHP"},
        { name: "MySQL"},
        { name: "PostgreSQL"},
    ];
    return (
        <section id="skills" className="min-h-screen flex item-start justify-center p-3 md:p-6 pt-3 md:pt-28 scroll-mt-24">
            <div className="max-w-4xl w-full text-center">
                <h2 class="text-3xl font-bold mb-3 md:mb-24">
                    Tech Stack
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <CardSkill skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skill