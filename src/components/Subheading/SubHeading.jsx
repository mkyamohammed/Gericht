import React from "react";

import "./subheading.css";
import { GiSpoon } from "react-icons/gi";
const SubHeading = (props) => (
  <div className="app__subheading">
    <p className="p__cormorant">
      {props.title}
      <GiSpoon fontSize={30} color="var(--color-golden)" className="spoon" />
    </p>
  </div>
);

export default SubHeading;
