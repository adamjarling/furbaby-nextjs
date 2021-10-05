import React from "react";
import classNames from "classnames";

export default function Callout({ isReversed, children }) {
  return (
    <div className="flex flex-1 items-center min-h-full">
      <div
        className={classNames({
          "md:pl-20": !isReversed,
          "md:pr-20": isReversed,
        })}
      >
        {children}
      </div>
    </div>
  );
}
