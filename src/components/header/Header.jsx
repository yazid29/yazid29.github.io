import React from "react";
import CVcontact from "./CVcontact";
import './header.css';
import Me from '../../assets/foto1.png'
import HeaderSocials from "./HeaderSocials";
const Header = () => {
    return (
        <header id="home">
            <div className="container header_container">
                <h5>Hai Saya,</h5>
                <h1>Ahmad Yazid Munif</h1>
                <h5 className="heade text-ligth">
                    <i>Developer</i>
                </h5>
                <CVcontact />
                <div className="me">
                    <img src={Me} alt="me" />
                    <HeaderSocials />
                </div>
                <div >
                    <a href="#contact" className="scroll_down">Scroll Down <div className="triangle-right"></div></a>
                </div>
            </div>
        </header>
    )
}

export default Header;