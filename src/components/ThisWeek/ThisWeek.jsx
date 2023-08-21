/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const ThisWeek = ({
  property1,
  className,
  groupClassName,
  groupClassNameOverride,
  plusSolidClassName,
  plusSolid = "https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/plus-solid-1-6.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`this-week ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`group-4 ${groupClassName}`}>
        {state.property1 === "default" && (
          <>
            <div className={`text-wrapper-2 ${groupClassNameOverride}`}>This Week</div>
            <img className={`plus-solid ${plusSolidClassName}`} alt="Plus solid" src={plusSolid} />
          </>
        )}

        {state.property1 === "variant-2" && (
          <>
            <div className={`group-5 ${groupClassNameOverride}`}>
              <div className="text-wrapper-3">This Week</div>
              <img
                className="minus-solid"
                alt="Minus solid"
                src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/minus-solid-2-1.svg"
              />
            </div>
            <div className={`check-boxes ${plusSolidClassName}`}>
              <div className="checkbox-checked">
                <div className="checkbox-SWITCH-ME">
                  <div className="checkbox">
                    <img
                      className="vector"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/vector-1-9.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper-4">Design onboarding</div>
              </div>
              <div className="checkbox-checked">
                <div className="checkbox-SWITCH-ME">
                  <div className="checkbox">
                    <img
                      className="vector"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/vector-1-9.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper-4">Write Hiring Criteria</div>
              </div>
              <div className="checkbox-checked">
                <div className="checkbox-SWITCH-ME">
                  <div className="checkbox">
                    <img
                      className="vector"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/vector-1-9.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper-4">Publish blog post</div>
              </div>
              <div className="checkbox-checked">
                <div className="checkbox-SWITCH-ME">
                  <div className="checkbox">
                    <img
                      className="vector"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/vector-1-9.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper-4">Book offsite</div>
              </div>
              <div className="checkbox-checked">
                <div className="checkbox-SWITCH-ME">
                  <div className="checkbox">
                    <img
                      className="vector"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/vector-1-9.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper-4">Setup zapier integration</div>
              </div>
              <div className="checkbox-checked">
                <div className="checkbox-SWITCH-ME">
                  <div className="checkbox">
                    <img
                      className="vector"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/bccd4363d15193e71c937acec233851b/img/vector-1-9.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper-4">Todo</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

ThisWeek.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  plusSolid: PropTypes.string,
};
