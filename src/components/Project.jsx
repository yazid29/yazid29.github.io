import ProjectCard from "./Card/ProjectCard.jsx";
const Project = () => {
    return (
        <section id="projects" className="min-h-screen flex items-start justify-center p-3 md:p-6 pt-3 md:pt-5 scroll-mt-24">
            <div className="min-h-[60vh] p-3 md:p-5 scroll-mt-24 max-w-4xl mx-auto rounded-2xl">
                <h2 className="text-3xl font-bold mb-10 text-center">Project</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProjectCard 
                        nameProject="PMIS"
                        nameCompany="PT Indosat Ooredoo Hutchison (IOH)"
                        description="Project management application for vendor of Indosat Ooredoo."
                        stack={["Javascript","React.js", "Express.js", "PostgreSQL","REST API"]}
                    />
                    <ProjectCard 
                        nameProject="EVORA"
                        nameCompany="PT Mitra Integrasi Informatika"
                        description="Bootcamp Final Project - Event Organizer Application to manage events, participants with secure API integration."
                        stack={[".Net Core","Javascript", "REST API"]}
                    />
                    <ProjectCard 
                        nameProject="HRIS"
                        nameCompany="PT Mitra Integrasi Informatika"
                        description="A web-based system to manage employee data, leave request with role-based access and secure API integration."
                        stack={[".Net Core","REST API"]}
                    />
                    <ProjectCard 
                        nameProject="Employee Assessment"
                        nameCompany="Internship"
                        description="Manage employee assesment data, performance review (Aplikasi penilaian pegawai pada sebuah instansi)"
                        stack={["Javascript","PHP","Codeigniter3","MySQL","REST API"]}
                    />
                    <ProjectCard 
                        nameProject="Sarcasm Detection System"
                        nameCompany="Final Project (Thesis)"
                        description="A Natural Language Processing (NLP) web application for detecting sarcasm in Indonesian text. The system analyzes sentence patterns and semantic features using deep learning models to classify sarcastic and non-sarcastic expressions."
                        stack={["Python","Flask","MySQL","NLP","Deep Learning","Tensorflow"]}
                    />
                    <ProjectCard 
                        nameProject="USD to IDR Exchange Rate Prediction"
                        nameCompany="Freelance Project (Time Series)"
                        description="A time series forecasting system to predict USD to IDR exchange rates using deep learning models. The application processes historical currency data and provides future trend predictions through a Flask-based web interface."
                        stack={["Python","Flask","MySQL","NLP","Deep Learning","Tensorflow"]}
                    />
                </div>
            </div>
        </section>
    )
}

export default Project;