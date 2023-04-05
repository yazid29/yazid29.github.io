import React from "react";
import './navbar.css';
import { FiHome } from 'react-icons/fi'
import { FiUser } from 'react-icons/fi'
import { FiBookOpen } from 'react-icons/fi'
import { FiSend } from 'react-icons/fi'
import { FiBriefcase } from 'react-icons/fi'
import { FiPlayCircle } from 'react-icons/fi'


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a class="" href="#home"><FiHome /></a></li>
                <li><a href="#about"><FiUser /></a></li>
                <li><a href="#passion"><FiPlayCircle /></a></li>
                <li><a href="#experience"><FiBriefcase /></a></li>
                <li><a href="#portofolio"><FiBookOpen /></a></li>
                <li><a href="#contact"><FiSend /></a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
