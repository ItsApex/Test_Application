/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PurpleCard = ({
  className,
  frameClassName,
  text = "Board Meeting",
  groupClassName,
  divClassName,
  text1 = "9 AM",
  elementHrsClassName,
  text2 = "(3 hrs)",
}) => {
  return (
    <div className={`purple-card ${className}`}>
      <div className={`div ${frameClassName}`}>
        <div className="board-meeting">{text}</div>
        <div className={`group-2 ${groupClassName}`}>
          <div className={`text-wrapper ${divClassName}`}>{text1}</div>
          <div className={`element-hrs-2 ${elementHrsClassName}`}>{text2}</div>
        </div>
      </div>
    </div>
  );
};

PurpleCard.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
