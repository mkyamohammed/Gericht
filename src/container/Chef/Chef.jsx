import React from "react";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";
const Chef = () => {
  return (
    <div className="app__chef app__bg app__wrapper section__padding">
      <div className="app__chef-image app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__chef-text app__wrapper_info">
        <div className="app__chef-text_head">
          <SubHeading title="chef's word" />
        </div>
        <h1 className="headtext__cormorant">what we belive in</h1>
        <div className="app__chef-text_quote">
          <div className="quote_one">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit
              .
            </p>
          </div>
          <p className="p__opensans">
            Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget
            Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam
            Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit
            Nunc.
          </p>
        </div>

        <div className="app__chef-text_sign">
          <h3>kevin luo</h3>
          <p>chef & founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
