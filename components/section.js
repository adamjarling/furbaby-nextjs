import classNames from "classnames";

export default function Section({ isJustify, children }) {
  return (
    <section className="py-10 sm:py-20 px-4 lg:px-0 flex flex-col items-center">
      <div
        className={classNames(["container", "max-w-4xl"], {
          "text-justify": isJustify,
        })}
      >
        {children}
      </div>
    </section>
  );
}
