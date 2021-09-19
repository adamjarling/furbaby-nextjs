import React from "react";
import classNames from "classnames";

export default function ExternalLink({ url, noBorder, children }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames([], {
        "border-none": noBorder,
      })}
    >
      {children}
    </a>
  );
}
