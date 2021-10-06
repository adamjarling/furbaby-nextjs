import classNames from "classnames";

export default function Section({
  isJustify,
  isCentered,
  isNarrow,
  isSkinny,
  children,
}) {
  return (
    <section className="py-12 sm:py-16 px-4 lg:px-0 flex flex-col items-center">
      <div
        className={classNames(["container"], {
          "text-justify": isJustify,
          "max-w-6xl": isNarrow,
          "max-w-xl lg:max-w-2xl xl:max-w-5xl": isSkinny,
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
