import Head from "next/head";
import Layout from "components/layout";
import Splash1 from "components/splash1";
import SplashLatestSingle from "components/splash-latest-single";
import CargoPromo from "components/cargo-promo";
import BannerFlattsFest from "components/banner-2021-07-10";
import SplashVideos from "components/splash-videos";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Furbaby & the Tight Spaces</title>
      </Head>
      <Splash1 />

      <section className="flex flex-col items-center justify-center py-8 px-2 md:px-4">
        <p className="text-center text-xl md:text-4xl font-sans uppercase tracking-widest">
          Qué pasa. We're Furbaby &amp; the Tight Spaces and play garage rock
        </p>
      </section>

      <section className="flex flex-col items-center justify-center py-10">
        <div className="container max-w-6xl">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/vU_-n-9qmPk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <CargoPromo />
      <BannerFlattsFest />
      <div className="bg-white">
        <SplashLatestSingle />
      </div>
      <SplashVideos />
    </Layout>
  );
}
