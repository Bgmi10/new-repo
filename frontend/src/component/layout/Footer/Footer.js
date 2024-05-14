import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <img src={logo} alt="logo" />
      </div>

      <div className="midFooter">
        <h3>Quick Links</h3>
        <p>Home</p>
        <p>VAPT</p>
        <p>Courses</p>
        <p>Other Services</p>
        <p>Terms and condition</p>
      </div>

      <div className="midFooter">
        <h3>Contact Us -</h3>
        <p>Email - contact.nexussec@gmail.com</p>
        <p>Phone - +91 7973454063</p>
      </div>

      <div className="rightFooter">
        <h3>Follow Us</h3>
        <a href="http://instagram.com/">Instagram</a>
        <a href="http://youtube.com/">Youtube</a>
        <a href="http://instagram.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;