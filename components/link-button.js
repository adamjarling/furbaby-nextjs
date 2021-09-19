import Link from "next/link";

const sharedClasses = [
  "py-2 px-8 tracking-widest rounded text-xl uppercase inline-block",
];

export default function LinkButton({ children, href, isInverted }) {
  return isInverted ? (
    <Link href={href}>
      <a className="bg-black hover:bg-gray-800 text-gray-100 font-sans  hover:text-gray-200 border-none">
        {children}
      </a>
    </Link>
  ) : (
    <Link href={href}>
      <a
        className={`${[
          ...sharedClasses,
        ]} bg-transparent hover:bg-gray-200 text-gray-100 font-sans hover:text-gray-900 border border-solid border-gray-200 hover:border-transparent`}
      >
        {children}
      </a>
    </Link>
  );
}
