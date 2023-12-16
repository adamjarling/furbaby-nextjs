import Footer from "./footer";
import Head from "next/head";
import Header from "./header-updated";
import Image from "next/image";

export const siteTitle = "Furbaby & the Tight Spaces";

export default function Layout({ children, home }) {
  return (
    <div className="min-h-screen font-light bg-black text-gray-50 font-display">
      <Head>
        <link rel="icon" href="/images/fur-512x512.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <meta
          name="description"
          content="FURBABY and the TIGHT SPACES is a garage rock band from Chicago, USA"
        />
        <meta property="og:image" content="/images/og-image-lava.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
