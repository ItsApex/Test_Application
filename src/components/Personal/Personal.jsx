/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Personal = ({
  property1,
  className,
  groupClassName,
  groupClassNameOverride,
  checkBoxesClassName,
  plusSolid = "https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/plus-solid-1-8.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "var-2",
  });

  return (
    <div
      className={`personal property-1-2-${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`group-8 ${groupClassName}`}>
        {state.property1 === "var-2" && (
          <>
            <div className={`group-9 ${groupClassNameOverride}`}>
              <div className="text-wrapper-8">Personal</div>
              <img
                className="minus-solid-2"
                alt="Minus solid"
                src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/minus-solid-2-3.svg"
              />
            </div>
            <div className={`check-boxes-2 ${checkBoxesClassName}`}>
              <div className="checkbox-checked-2">
                <div className="checkbox-wrapper">
                  <div className="vector-wrapper">
                    <img
                      className="vector-2"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/vector-1-9.svg"
                    />
                  </div>
                </div>
                <div className="design-onboarding">Buy more coffee filters</div>
              </div>
              <div className="checkbox-checked-2">
                <div className="checkbox-wrapper">
                  <div className="vector-wrapper">
                    <img
                      className="vector-2"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/vector-1-9.svg"
                    />
                  </div>
                </div>
                <div className="design-onboarding">Cancel Disney+</div>
              </div>
              <div className="checkbox-checked-2">
                <div className="checkbox-wrapper">
                  <div className="vector-wrapper">
                    <img
                      className="vector-2"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/vector-1-9.svg"
                    />
                  </div>
                </div>
                <div className="design-onboarding">Donate to Unica</div>
              </div>
              <div className="checkbox-checked-2">
                <div className="checkbox-wrapper">
                  <div className="vector-wrapper">
                    <img
                      className="vector-2"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/vector-1-9.svg"
                    />
                  </div>
                </div>
                <div className="design-onboarding">Todo</div>
              </div>
            </div>
          </>
        )}

        {state.property1 === "default" && (
          <>
            <div className={`text-wrapper-9 ${groupClassNameOverride}`}>Personal</div>
            <img className={`plus-solid-3 ${checkBoxesClassName}`} alt="Plus solid" src={plusSolid} />
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

Personal.propTypes = {
  property1: PropTypes.oneOf(["var-2", "default"]),
  plusSolid: PropTypes.string,
};
