/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GrayCard = ({
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
    <div className={`gray-card ${className}`}>
      <div className={`frame-2 ${frameClassName}`}>
        <div className="board-meeting-2">{text}</div>
        <div className={`group-3 ${groupClassName}`}>
          <div className={`element-AM-2 ${divClassName}`}>{text1}</div>
          <div className={`element-hrs-3 ${elementHrsClassName}`}>{text2}</div>
        </div>
      </div>
    </div>
  );
};

GrayCard.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
