import React from "react";
import "./Footer.css";
import { Twitter, Facebook, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__box">
          <div className="footer__content">
            <div className="footer__logo">
              <h3>Muhavur</h3>
            </div>
            <div className="footer__service">
              <h3>Services</h3>
              <h4>Home</h4>
              <h4>Payment</h4>
            </div>
            <div className="footer__contact">
              <h3>Contact</h3>
              <div className="footer__links">
                <a href="">Twitter</a>
                <a href="">facebook</a>
                <a href="">Instagram</a>
              </div>
            </div>
            <div className="footer__about">
              <h3>About</h3>
            </div>
          </div>

          <hr />
          <div className="footer__network">
            <Twitter />
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
