import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
const headerSocials = () => {
    return (
        <div className='header_social'>
            <a href="" target='_blank'><BsLinkedin /></a>
            <a href="" target='_blank'><FaGithub /></a>
        </div>
    )
}

export default headerSocials;