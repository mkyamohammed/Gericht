import React from "react";

import "./Newsletter.css";
import SubHeading from "../Subheading/SubHeading";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="newsletter" />
      <h1 className="headtext__cormorant">subscribe to our newsletter</h1>
      <p className="p__opensans">and never miss latest updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="enter your e-mail adress" />
      <button className="custom__button">subscribe</button>
    </div>
  </div>
);

export default Newsletter;
