import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
const Contact = () => {
    return (
        <section id="contact">
            <h2>Kontak</h2>
            <div className="contact_content">
                <a href="mailto:ayazidmunif.29@gmail.com"><AiOutlineMail className="contactIcon" /></a>
                <a href="https://www.instagram.com/ahmadyazid29/"><AiOutlineInstagram className="contactIcon" /></a>
                <a href="https://github.com/yazid29"><AiFillGithub className="contactIcon" /></a>
                <a href="https://www.linkedin.com/in/ahmad-yazid-munif-4551b326b/"><AiFillLinkedin className="contactIcon" /></a>
            </div>
        </section>
    )
}

export default Contact;