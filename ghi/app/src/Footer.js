import React from 'react';
import { FaBomb} from 'react-icons/fa'
import {BsLinkedin, BsGithub, BsDiscord} from 'react-icons/bs'

function Footer() {
    return (
        <div className="footer">
            <p> < FaBomb /> made by Simon</p>
            <div className="spacer"></div>
            <p>  < BsLinkedin/>    < BsGithub/>    < BsDiscord/> </p>
        </div>
    )
}

export default Footer
