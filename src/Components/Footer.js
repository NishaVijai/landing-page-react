import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <section className="footer-section-one">
        <section className="footer-logo-container">
          <img src={Logo} alt="" />
        </section>
        <section className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </section>
      </section>
      <section className="footer-section-two">
        <section className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </section>
        <section className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </section>
        <section className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </section>
      </section>
    </section>
  );
};

export default Footer;
