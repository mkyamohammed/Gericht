import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div className="app__wrapper app__bg section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        find us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p
          className="p__cormorant"
          style={{ margin: "2rem 0", color: "#dcca87" }}
        >
          opening hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p className="p__opensans">Sat - Sun: 10:00 Am - 03:00 Am</p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        visit us
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
