import Head from "next/head";
import Header from "components/header";
import Image from "next/image";
import Footer from "components/footer";

export const siteTitle = "Furbaby & the Tight Spaces";

export default function Layout({ children, home }) {
  return (
    <div className="text-gray-50 bg-black min-h-screen font-display font-light">
      <Head>
        <link rel="icon" href="/images/fur-512x512.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
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
