import classNames from "classnames";

export default function Container({ isJustify, children }) {
  return (
    <div
      className={classNames(["container", "max-w-4xl"], {
        "text-justify": isJustify,
      })}
    >
      {children}
    </div>
  );
}
