import Link from "next/link";

export default function LinkButton({ children, href, isInverted }) {
  return isInverted ? (
    <Link href={href}>
      <a className="bg-black hover:bg-gray-800 text-gray-100 font-sans uppercase hover:text-gray-200 py-2 px-8 tracking-widest border-none rounded text-xl">
        {children}
      </a>
    </Link>
  ) : (
    <Link href={href}>
      <a className="bg-transparent hover:bg-gray-200 text-gray-100 font-sans uppercase hover:text-gray-900 py-2 px-8 border border-solid border-gray-200 hover:border-transparent tracking-widest rounded text-xl">
        {children}
      </a>
    </Link>
  );
}
