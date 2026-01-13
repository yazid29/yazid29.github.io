const ProjectCard = ({nameProject, nameCompany, description, stack,repository}) => {
    return (
        <div className="relative bg-white p-6 rounded-3xl shadow-sm border-l-8 border-[#696FC7] reveal card-hover group overflow-hidden">
            <h3 className="text-xl font-bold">{nameProject}</h3>
            <h4 className="text-sm font-semibold">{nameCompany}</h4>
            <p className="mt-4 text-slate-600 text-sm">
              {description}
            </p>
            <div class="mt-8 flex flex-wrap gap-2">
                {stack && stack.map((item, index) => (
                  <span key={index} className="px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-700 rounded-full">{item}</span>
                ))}
            </div>
            {repository && (
                <div className="absolute inset-0 bg-[#696FC7]/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                    <a href={repository} target="_blank" className="px-4 py-2 bg-white rounded-lg text-sm font-semibold hover:bg-slate-100">
                        <i className="fa fa-github" style="font-size:24px"></i>
                    </a>
                </div>
            )}
        </div>
    )
}

export default ProjectCard;