import React from 'react';
import { ImGithub } from 'react-icons/im';
import { SocialIcon } from 'react-social-icons';



function Footer() {
    return (
        <footer>
        <a alt="myGithub" className='gIcon'><SocialIcon bgColor="black" url="https://github.com/Jaron15" /></a>
        <a alt="myEmail" className='eIcon'><SocialIcon  url="mailto: jaronkenyon@gmail.com" /></a>
        <a alt="mylinkedIn" className='iIcon'><SocialIcon url="https://www.linkedin.com/in/jaron-kenyon-41917b217/" /></a>
        </footer>
     
    )
}


export default Footer;