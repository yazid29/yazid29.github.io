import React from "react";
import CVcontact from "./CVcontact";
import './header.css';
import Me from '../../assets/foto1.png'
import HeaderSocials from "./HeaderSocials";
const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hai Saya,</h5>
                <h1>Ahmad Yazid Munif</h1>
                <h5 className="text-ligth">
                    Bidang Minat: <i>Data Analytics, Data Science, </i><i>and Web Developer</i>
                </h5>
                <CVcontact />
                <div className="me">
                    <HeaderSocials />
                    <img src={Me} alt="me" />
                    <a href="#contact" className="scroll_down">Scroll Down</a>
                </div>
            </div>
        </header>
    )
}

export default Header;