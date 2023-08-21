/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const ThisMonth = ({
  property1,
  className,
  groupClassName,
  divClassName,
  plusSolidClassName,
  plusSolid = "https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/plus-solid-1-7.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "var-2",
  });

  return (
    <div
      className={`this-month property-1-0-${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`group-6 ${groupClassName}`}>
        {state.property1 === "var-2" && (
          <div className="overlap-group-2">
            <div className="text-wrapper-5">¯\_(ツ)_/¯</div>
            <div className="group-7">
              <div className="text-wrapper-6">This Month</div>
              <img
                className="img"
                alt="Minus solid"
                src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/minus-solid-2-2.svg"
              />
            </div>
          </div>
        )}

        {state.property1 === "default" && (
          <>
            <div className={`text-wrapper-7 ${divClassName}`}>This Month</div>
            <img className={`plus-solid-2 ${plusSolidClassName}`} alt="Plus solid" src={plusSolid} />
          </>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "var-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "var-2",
        };
    }
  }

  return state;
}

ThisMonth.propTypes = {
  property1: PropTypes.oneOf(["var-2", "default"]),
  plusSolid: PropTypes.string,
};
