import React from "react";

import { images } from "../../constants";
import { GiSpoon } from "react-icons/gi";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">contact us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">
          "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
          Others."
          <GiSpoon className="spoon" />
        </p>
        <div className="app__footer_logo-social">
          <FiFacebook fontSize={30} />
          <FiTwitter fontSize={30} />
          <FiInstagram fontSize={30} />
        </div>
      </div>

      <div className="app__footer-links_hours">
        <h1 className="app__footer-headtext">working hours</h1>
        <div className="app__footer_hour">
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 Am - 12:00 Am</p>
        </div>
        <div className="app__footer_hour">
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 Am - 11:00 Pm</p>
        </div>
      </div>
    </div>

    <div className="app__footer-copyright">
      <p className="p__opensans">2021 gericht. all rights reserved</p>
    </div>
  </div>
);

export default Footer;
