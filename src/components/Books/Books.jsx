/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Books = ({
  property1,
  className,
  groupClassName,
  divClassName,
  plusSolidClassName,
  plusSolid = "https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/plus-solid-1-9.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "var-2",
  });

  return (
    <div
      className={`books property-1-4-${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`group-10 ${groupClassName}`}>
        {state.property1 === "var-2" && (
          <div className="overlap-group-3">
            <div className="div-2">
              <div className="text-wrapper-10">Books to read</div>
              <img
                className="minus-solid-3"
                alt="Minus solid"
                src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/minus-solid-2.svg"
              />
            </div>
            <div className="text-wrapper-11">¯\_(ツ)_/¯</div>
          </div>
        )}

        {state.property1 === "default" && (
          <>
            <div className={`text-wrapper-12 ${divClassName}`}>Books to read</div>
            <img className={`plus-solid-4 ${plusSolidClassName}`} alt="Plus solid" src={plusSolid} />
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

Books.propTypes = {
  property1: PropTypes.oneOf(["var-2", "default"]),
  plusSolid: PropTypes.string,
};
