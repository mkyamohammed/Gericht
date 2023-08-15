import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";
import { GiSpoon } from "react-icons/gi";

const AboutUs = () => {
  return (
    <div
      className="app__about app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__about-overlay flex__center">
        <img
          src={images.G}
          alt="about_g"
          width={0.5 * window.innerWidth}
          height={0.4 * window.innerHeight}
        />
      </div>

      <div className="app__about-content flex__center">
        <div className="app__about-content_about">
          <h1 className="headtext__cormorant">about us</h1>
          <GiSpoon fontSize={30} className="spoon" />
          <p className="p__opensans">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button type="button" className="custom__button">
            know more
          </button>
        </div>

        <div className="app__about-content_knife flex__center">
          <img
            src={images.knife}
            alt="about_knife"
            height={0.7 * window.innerWidth}
            style={{ margin: -0.3 * window.innerWidth }}
          />
        </div>

        <div className="app__about-content_history">
          <h1 className="headtext__cormorant">our history</h1>
          <GiSpoon fontSize={30} className="spoon" />
          <p className="p__opensans">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>
          <button type="button" className="custom__button">
            know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
