import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function ImageCalloutWrapper({ isReversed, children }) {
  return (
    <figure
      className={classNames("flex flex-col lg:flex-row lg:justify-between", {
        "lg:flex-row-reverse": isReversed,
      })}
    >
      {children}
    </figure>
  );
}

ImageCalloutWrapper.propTypes = {};

export default ImageCalloutWrapper;
