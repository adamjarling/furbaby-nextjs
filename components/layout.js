import Head from "next/head";
import Link from "next/link";
import Header from "components/header";
import Image from "next/image";

export const siteTitle = "Furbaby & the Tight Spaces";

export default function Layout({ children, home }) {
  return (
    <div className="bg-black text-gray-50 min-h-screen font-serif">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />

        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />

      <main>{children}</main>
      <footer className="flex flex-col items-center justify-center pt-6 pb-10">
        <div className="relative h-16 md:h-24 w-24 md:w-36">
          <Image
            src="/images/furbaby-tight-spaces-logo.png"
            alt="Furbaby and the Tight Spaces"
            layout="fill"
            objectFit="cover"
          />
        </div>
        &copy; 2021. Made in Chicago, USA
      </footer>
    </div>
  );
}
