import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
const headerSocials = () => {
    return (
        <div className='header_social'>
            <a href="https://www.linkedin.com/in/ahmad-yazid-munif/"><BsLinkedin /></a>
            <a href="https://github.com/yazid29" ><FaGithub /></a>
        </div>
    )
}

export default headerSocials;