/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Logo = ({
  className,
  groupClassName,
  ellipseClassName,
  ellipseClassNameOverride,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div className={`logo ${className}`}>
      <div className={`group-11 ${groupClassName}`}>
        <div className={`ellipse ${ellipseClassName}`} />
        <div className={`ellipse-2 ${ellipseClassNameOverride}`} />
        <div className={`ellipse-3 ${divClassName}`} />
        <div className={`ellipse-4 ${divClassNameOverride}`} />
      </div>
    </div>
  );
};
