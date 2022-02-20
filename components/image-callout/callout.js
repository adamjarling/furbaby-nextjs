import React from "react";
import classNames from "classnames";

export default function Callout({ isReversed, children }) {
  return (
    <div className="flex flex-1 items-center min-h-full">
      <div
        className={classNames({
          "lg:pl-20": !isReversed,
          "lg:pr-20": isReversed,
        })}
      >
        {children}
      </div>
    </div>
  );
}
