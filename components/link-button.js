import Link from "next/link";

export default function LinkButton({ children, href }) {
  return (
    <Link href={href}>
      <a className="bg-transparent hover:bg-gray-900 text-gray-100 font-sans uppercase hover:text-gray-300 py-2 px-8 border border-solid border-gray-200 hover:border-transparent tracking-widest rounded text-xl">
        {children}
      </a>
    </Link>
  );
}
