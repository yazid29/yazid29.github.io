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
                        saya lebih banyak belajar tentang pengembangan perangkat lunak,
                        terutama perangkat lunak berbasis web dan menangani data (database).
                    </p>
                    <p className="aboutp thirdparagraph">
                        Seiring dengan pertumbuhan saya sebagai pengembang,
                        saya berharap dapat membuat perangkat lunak yang baik sehingga
                        dapat digunakan oleh orang lain.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About;