const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-start justify-center px-4 md:px-6 pt-16 scroll-mt-24 bg-gradient-to-br from-[#A7AAE1] to-[#696FC7]">
            <div className="max-w-4xl w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">Get In Touch</h2>
                <div className="grid md:grid-cols-2 gap-8 backdrop-blur-m bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">
                    <div>
                        <p className="text-white/90 leading-relaxed mb-6">
                            I'm always open to discussing new opportunities, interesting projects, 
                            or potential collaborations. <br></br>Feel free to reach out if you'd like to connect.
                        </p>
                        <div className="space-y-3">
                            <a href="mailto:ayazidmunif.29@gmail.com" className="flex items-center gap-4 backdrop-blur-md bg-white/10 border border-white/15
                                rounded-2xl p-4 shadow-md transition-all duration-300 
                                hover:bg-white/20 hover:scale-[1.02] hover:shadow-lg group">
                                <div className="bg-white/20 p-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                </div>
                                <p className="text-white font-semibold text-sm">
                                    ayazidmunif.29@gmail.com
                                </p>
                            </a>
                            <a href="https://www.linkedin.com/in/ahmad-yazid-munif/" className="flex items-center gap-4 backdrop-blur-md bg-white/10 border border-white/15
                                rounded-2xl p-4 shadow-md transition-all duration-300 
                                hover:bg-white/20 hover:scale-[1.02] hover:shadow-lg group">
                                <div className="bg-white/20 p-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                </div>
                                <p className="text-white font-semibold text-sm">
                                    linkedin.com/in/ahmad-yazid-munif/
                                </p>
                            </a>
                        </div>
                    </div>
                    <form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you! Your message has been sent.');">
                        <h3 className="text-white font-semibold text-lg mb-2 text-center md:text-left">Send a Message</h3>
                        <input 
                            className="w-full rounded-lg px-4 py-2 text-sm bg-white/90 
                            focus:outline-none focus:ring-2 focus:ring-[#696FC7] placeholder:text-gray-500"
                            placeholder="Your Name" required
                        />
                        <input
                            className="w-full rounded-lg px-4 py-2 text-sm bg-white/90 
                            focus:outline-none focus:ring-2 focus:ring-[#696FC7] placeholder:text-gray-500"
                            type="email" placeholder="Your Email" required
                        />

                        <textarea
                            className="w-full rounded-lg px-4 py-2 text-sm bg-white/90 
                            focus:outline-none focus:ring-2 focus:ring-[#696FC7] placeholder:text-gray-500"
                            rows="4" placeholder="Your Message" required
                        ></textarea>

                        <button
                            className="w-full bg-[#5a32b3] hover:bg-[#482890] text-white py-2.5 
                            rounded-xl font-semibold transition shadow-lg active:scale-[0.98]">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact;