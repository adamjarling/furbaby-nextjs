import Link from "next/link";

export default function LinkButton({ children, href }) {
  return (
    <Link href={href}>
      <a className="bg-transparent hover:bg-gray-700 text-gray-700 font-sans uppercase hover:text-white py-2 px-8 border border-gray-700 hover:border-transparent tracking-widest rounded text-xl">
        {children}
      </a>
    </Link>
  );
}
