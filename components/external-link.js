import React from "react";
import classNames from "classnames";

export default function ExternalLink({
  url,
  noBorder,
  isBrightHover,
  children,
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames([], {
        "border-none": noBorder,
        "opacity-80": isBrightHover,
        "hover:opacity-100": isBrightHover,
      })}
    >
      {children}
    </a>
  );
}
