import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
const Contact = () => {
    return (
        <section className='contact_content' id="contact">
            <div className="itemcenter">
                Created by <br></br>Ahmad Yazid Munif &copy; 2023.
            </div>
            <div className='itemcenter'>
                <AiFillGithub className="contactIcon" /><a className='contacte' href="https://github.com/yazid29">Github</a>
                &nbsp;&nbsp;
                <AiFillLinkedin className="contactIcon" /><a className='contacte' href="https://www.linkedin.com/in/ahmad-yazid-munif/">LinkedIn</a>
                &nbsp;&nbsp;
                <AiOutlineMail className="contactIcon" /><a className='contacte' href="mailto:ayazidmunif.29@gmail.com">ayazidmunif.29@gmail.com</a>
            </div>
        </section>
    )
}

export default Contact;