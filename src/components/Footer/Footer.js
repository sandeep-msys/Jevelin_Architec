import "./Footer.scss";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="footer-initial-container">
        <img
          src="https://jevelin.shufflehound.com/architect/wp-content/uploads/sites/30/2019/03/Jevelin_logo_light.png"
          alt="/"
          className="footer-title-image"
        />
        <div className="footer-menu-container">
          <p className="footer-each-menu">Home</p>
          <p className="footer-each-menu">Projects</p>
          <p className="footer-each-menu">News</p>
          <p className="footer-each-menu">Contact</p>
        </div>
        <div className="footer-social-container">
          <FaLinkedinIn className="footer-social-icon" />
          <FaTwitter className="footer-social-icon" />
          <FaFacebookF className="footer-social-icon" />

          <FaInstagram className="footer-social-icon" />
        </div>
      </div>
      <div className="footer-copyright-container">
        <p className="copyright">Copyright © JevelinTheme - Theme by Shufflehound</p>
      </div>
    </div>
  );
};

export default Footer;
