import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function ImageCalloutWrapper({ isReversed, children }) {
  return (
    <figure
      className={classNames("flex flex-col md:flex-row md:justify-between", {
        "md:flex-row-reverse": isReversed,
      })}
    >
      {children}
    </figure>
  );
}

ImageCalloutWrapper.propTypes = {};

export default ImageCalloutWrapper;
