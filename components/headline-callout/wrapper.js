import React from "react";
import PropTypes from "prop-types";
import Section from "components/section";
import classNames from "classnames";

function HeadlineCalloutWrapper({ isWhite, children }) {
  return (
    <div
      className={classNames({
        "bg-white": isWhite,
        "text-black": isWhite,
      })}
    >
      <Section isNarrow>{children}</Section>
    </div>
  );
}

export default HeadlineCalloutWrapper;
