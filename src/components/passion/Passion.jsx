import React from "react";
import './passion.css';
import { BsCodeSlash } from 'react-icons/bs'
import { GiMaterialsScience } from 'react-icons/gi'
const Passion = () => {
    return (
        <section id="passion">
            <h2>Yang Saya Lakukan</h2>
            <div className="container passion_content">
                <div className="passioncards">
                    <article className="passion_card">
                        <BsCodeSlash className="passionIcon" />
                        &nbsp;
                        <h5 className="cardp">Web development</h5>
                        <p className="cardp">Membuat beberapa proyek kecil berbasis web menggunakan HTML, CSS, dan Javascript.
                            Serta framework PHP seperti Codeigniter dan Laravel.</p>
                    </article>
                    <article className="passion_card">
                        <GiMaterialsScience className="passionIcon" />
                        &nbsp;
                        <h5 className="cardp">Data Science</h5>
                        <p className="cardp">Mendapatkan nilai suatu data yang dimiliki dengan model prediksi dan teknik machine learning menggunakan Python.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Passion;
