/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GreenCard = ({
  className,
  divClassName,
  divClassNameOverride,
  text = "Monday sync",
  text1 = "9 AM",
  frameClassName,
  groupClassName,
  text2 = "(2 hrs)",
}) => {
  return (
    <div className={`green-card ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <div className="monday-sync">{text}</div>
        <div className={`group ${groupClassName}`}>
          <div className={`element-AM ${divClassName}`}>{text1}</div>
          <div className={`element-hrs ${divClassNameOverride}`}>{text2}</div>
        </div>
      </div>
    </div>
  );
};

GreenCard.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
