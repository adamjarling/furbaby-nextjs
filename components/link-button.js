import Link from "next/link";

const sharedClasses = [
  "py-4 px-12 tracking-widest text-2xl uppercase inline-block",
];

export default function LinkButton({ children, href, isInverted }) {
  return isInverted ? (
    <Link href={href}>
      <a
        className={`${[
          ...sharedClasses,
        ]} bg-gray-800 hover:bg-gray-800 text-gray-100 font-sans  hover:text-gray-200 border-none`}
      >
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
