import React from "react";
import './about.css';
import MyFoto from '../../assets/foto2.jpg'
const About = () => {
    return (
        <section id="about" >
            <h5>Sedikit</h5>
            <h2>Tentang Saya</h2>
            <div className="container about_container">
                <div className="foto">
                    <div className="myfoto1"></div>
                    <img className="myfoto" src={MyFoto} alt="myfoto" />
                </div>
                <div className="about_content">
                    <p className="aboutp">
                        Nama saya Ahmad Yazid Munif. Saat ini saya adalah fresh graduate dan
                        telah memperoleh gelar sarjana teknik informatika dari Universitas Trunojoyo,
                        Madura.
                    </p>
                    <p className="aboutp secondparagraph">
                        Sepanjang studi hingga saat ini,
                        saya lebih banyak belajar terkait dengan data.
                        Mulai dari penambangan data <i>(Data Mining)</i>,
                        pengolahan data (database) dan <i>Web Developer</i>.
                        Sehingga saya memutuskan untuk mendalami karir
                        sebagai data analyst dan data scientist.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;