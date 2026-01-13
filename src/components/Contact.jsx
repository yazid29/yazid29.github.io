const Contact = () => {
    return (
        <section id="contact" className="min-h-[75vh] flex items-start justify-center px-4 md:px-6 pt-16 scroll-mt-24 bg-gradient-to-br from-[#A7AAE1] to-[#696FC7]">
            <div className="max-w-4xl w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">Get In Touch</h2>
                <div className="grid md:grid-cols-2 gap-8 backdrop-blur-m bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">
                    <div>
                        <p className="text-white/90 leading-relaxed mb-6 indent-8 text-justify">
                            I'm open to new <b>opportunities, freelance projects, and collaboration. </b>
                            If you're looking for someone who enjoys working on <b>backend logic, system design, 
                            and building reliable full-stack applications</b>, feel free to connect with me.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <a href="https://www.linkedin.com/in/ahmad-yazid-munif/" 
                            target="_blank" className="flex items-center gap-4 backdrop-blur-md bg-white/10 border border-white/15
                            rounded-2xl p-4 shadow-md transition-all duration-300 
                            hover:bg-white/20 hover:scale-[1.02] hover:shadow-lg group">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                            </div>
                            <p className="text-white font-semibold text-sm">
                                linkedin.com/in/ahmad-yazid-munif
                            </p>
                        </a>
                        <a href="https://github.com/yazid29" 
                            target="_blank" className="flex items-center gap-4 backdrop-blur-md bg-white/10 border border-white/15
                            rounded-2xl p-4 shadow-md transition-all duration-300 
                            hover:bg-white/20 hover:scale-[1.02] hover:shadow-lg group">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <i className="fa fa-github text-[24px] text-white w-5 h-5 text-center"></i>
                            </div>
                            <p className="text-white font-semibold text-sm">
                                yazid29
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;