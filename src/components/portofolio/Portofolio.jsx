import React from "react";
import './portofolio.css';
import Webportofolio from '../../assets/portofolio/myportofolio.png'

const Portofolio = () => {
    return (
        <section id="portofolio">
            <h2>Portofolio</h2>
            <article className="container portofolio_content">
                <article className="portofolio_item">
                    <div >
                        <img className="item_image" src={Webportofolio} alt="Webportofolio" />
                    </div>
                    <h3>Website Portofolio</h3>
                    <p>Dibangun menggunakan HTML, CSS, dan React</p>
                </article>
            </article>
        </section>
    )
}

export default Portofolio;
