import React from "react";
import Header from "./components/header/Header"
import About from "./components/about/About"
import Navbar from "./components/navbar/Navbar"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Portofolio from "./components/portofolio/Portofolio"
import Footer from "./components/footer/Footer"

export default function App() {
    return (
        <div>
            < Header />
            < Navbar />
            < About />
            < Experience />
            < Portofolio />
            < Contact />
            < Footer />
        </div>
    );
}