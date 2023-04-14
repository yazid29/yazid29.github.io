import React from "react";
import './portofolio.css';
import Webportofolio from '../../assets/portofolio/myportofolio.png'
import Bangundatar from '../../assets/portofolio/bangundatar.png'
import Deteksisarkasme from '../../assets/portofolio/deteksisarkasmeProses.png'
import PenilaianPegawai from '../../assets/portofolio/penilaianPegawai.png'
const Portofolio = () => {
    return (
        <section id="portofolio">
            <h2>Portofolio</h2>
            <article className="container portofolio_content">
                <div className="portofolio_item">
                    <div>
                        <img className="header-area item_image" src={Webportofolio} alt="Webportofolio" />
                    </div>
                    <div className="body-area">
                        <h3 >Website Portofolio</h3>
                        <div className="overlay">
                            Halaman ini
                        </div>
                    </div>
                    <div className="footer-area">
                        #HTML #CSS #React
                    </div>
                </div>
                <div className="portofolio_item">
                    <img className="header-area item_image" src={Bangundatar} alt="Bangundatar" />
                    <div className="body-area">
                        <h3>Mini Project Kalkulator Bangun Datar</h3>
                        <div className="overlay">
                            <a className="btn-card" href="https://yazid29.github.io/mini_kalkutik/">View</a>
                            &nbsp;
                            <a className="btn-card" href="https://github.com/yazid29/mini_kalkutik">Github</a>
                        </div>
                    </div>
                    <div className="footer-area">
                        #HTML #CSS #Javascript
                    </div>
                </div>
                <div className="portofolio_item">
                    <img className="header-area item_image" src={Deteksisarkasme} alt="Deteksisarkasme" />
                    <div className="body-area">
                        <h3>Deteksi Sarkasme</h3>
                        <div className="overlay">
                            <a className="btn-card" href="https://github.com/yazid29/Deteksi_Sarkasme">Github</a>
                        </div>
                    </div>
                    <div className="footer-area">
                        #HTML #CSS #Python #MySQL #Flask
                    </div>
                </div>
                <div className="portofolio_item">
                    <img className="header-area item_image" src={PenilaianPegawai} alt="PenilaianPegawai" />
                    <div className="body-area">
                        <h3>Penilaian Pegawai (Guru)</h3>
                        <div className="overlay">
                            Belum diterbitkan
                        </div>
                    </div>
                    <div className="footer-area">
                        #HTML #CSS #PHP #MySQL #JqueryAjax #Codeigniter
                    </div>
                </div>
            </article>
        </section>


    )
}

export default Portofolio;
