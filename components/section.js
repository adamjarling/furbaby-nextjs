import classNames from "classnames";

export default function Section({ isJustify, isCentered, isNarrow, children }) {
  return (
    <section className="py-12 sm:py-16 px-4 lg:px-0 flex flex-col items-center">
      <div
        className={classNames(["container"], {
          "text-justify": isJustify,
          "max-w-4xl": isNarrow,
          flex: isCentered,
          "flex-col": isCentered,
          "items-center": isCentered,
        })}
      >
        {children}
      </div>
    </section>
  );
}
