const CardSkill = ({ skill }) => {
    return (
        <div className="py-5 px-6 rounded-xl border border-slate-200 hover:border-[#696FC7] transition shadow-sm">
            <span className="font-semibold text-[#2e1065]">{skill.name}</span>
        </div>
    )
}

export default CardSkill;