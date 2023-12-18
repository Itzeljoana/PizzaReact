import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
        <FaInstagram /> <FaSquareXTwitter /> <FaFacebookSquare /> <FaLinkedin />
        </div>
        <p> &copy; 2023 Mamamíapizza.com</p>
    </div>
    )
}

export default Footer