import React from 'react';
import Logo from "../Assets/Forker.png";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt='' />
            </div>
            <div className='footer-icons'>
                <BsTwitter />
                <BsLinkedin />
                <BsYoutube />
                <FaFacebookF />
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Careers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className='footer-section-columns'>
                <span>+91-8305029138</span>
                <span>Froker@gmail.com</span>
                <span>csfroker@gmail.com</span>
            </div>
            <div className='footer-section-columns'>
                <span>Terms & Condition</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  );
};

export default Footer