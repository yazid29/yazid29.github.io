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
                        Nama saya Ahmad Yazid Munif. Saya lulus dan telah
                        memperoleh gelar sarjana komputer dari jurusan Teknik Informatika
                        Universitas Trunojoyo Madura.
                    </p>
                    <p className="aboutp secondparagraph">
                        Sepanjang studi hingga saat ini,
                        saya sangat bersemangat untuk mempelajari hal tentang programming,
                        terutama pada web programming. Saat ini saya lebih sering belajar Python,
                        PHP dan JavaScript untuk melatih keterampilan programming yang saya miliki.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;