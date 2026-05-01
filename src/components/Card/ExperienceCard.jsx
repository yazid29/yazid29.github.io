const ExperienceCard = ({ title, company, period, description, points }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-[#696FC7] ">
      <h3 className="text-xl font-bold">{title}</h3>
      <h4 className="text-lg font-semibold text-[#696FC7] mt-1">{company}</h4>
      <span className="block text-sm font-medium mt-1">{period}</span>

      <p className="mt-4 text-slate-600 leading-relaxed">
        {description}
      </p>

      {points && (
        <ul className="mt-3 list-disc list-outside pl-5 text-slate-600 space-y-1">
          {points.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceCard;