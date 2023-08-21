/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DateNum = ({
  className,
  divClassName,
  divClassNameOverride,
  rectangleClassName,
  overlapGroupClassName,
  text = "mon",
  text1 = "07",
}) => {
  return (
    <div className={`date-num ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className={`mon ${divClassName}`}>{text}</div>
        <div className={`element ${divClassNameOverride}`}>{text1}</div>
      </div>
      <div className={`rectangle ${rectangleClassName}`} />
    </div>
  );
};

DateNum.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
