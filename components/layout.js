import Head from "next/head";
import Header from "components/header";
import Image from "next/image";
import MailChimpForm from "components/mailchimp-form";

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
      <footer className="flex flex-col items-center justify-center pt-6 pb-10">
        <div className="relative h-16 md:h-24 w-24 md:w-36">
          <Image
            src="/images/furbaby-and-ts-logo_white.png"
            alt="Furbaby and the Tight Spaces"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <MailChimpForm />
        &copy; 2021. Made in Chicago, USA
      </footer>
    </div>
  );
}
