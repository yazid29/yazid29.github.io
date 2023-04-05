import React from "react";
import './experience.css';
import HTML from '../../assets/bahasa_framework/html.png'
import CSS from '../../assets/bahasa_framework/css.png'
import Javascript from '../../assets/bahasa_framework/js.png'
import Python from '../../assets/bahasa_framework/python.png'
import PHP from '../../assets/bahasa_framework/php.png'
import Jquery from '../../assets/bahasa_framework/jquery.png'
import Codeigniter from '../../assets/bahasa_framework/Codeigniter.png'
import Laravel from '../../assets/bahasa_framework/laravel.png'

const Experience = () => {
    return (
        <section id="experience">
            <h2>Pengalaman</h2>
            <div className="container experience_content">
                <p>
                    Saya telah melakukan pengembangan web dengan beberapa
                    project pribadi selama masih menjadi mahasiswa,
                    dan saya selalu ingin belajar lebih banyak di
                    era teknologi industri yang cepat ini.
                </p>
                <p>
                    Beberapa framework, dan bahasa pemrograman yang pernah saya gunakan.
                </p>
                <div className="skillmaybe">
                    <img className="used" src={HTML} alt="HTML" />
                    <img className="used" src={CSS} alt="CSS" />
                    <img className="used" src={Javascript} alt="Javascript" />
                </div>
                <div className="skillmaybe">
                    <img className="used" src={Python} alt="Python" />
                    <img className="used" src={PHP} alt="PHP" />
                </div>
                <div className="skillmaybe">
                    <img className="used" src={Jquery} alt="Jquery" />
                    <img className="used" src={Codeigniter} alt="Codeigniter" />
                    <img className="used" src={Laravel} alt="Laravel" />
                </div>
            </div>
        </section>
    )
}

export default Experience;