import Head from "next/head";
import Layout from "components/layout";
import Splash1 from "components/splash1";
import SplashLatestSingle from "components/splash-latest-single";
import CargoPromo from "components/cargo-promo";
import BannerFlattsFest from "components/banner-2021-07-10";
import SplashVideos from "components/splash-videos";
import SplashSingleSelection from "components/splash-single-selection";
import LinkButton from "components/link-button";
import Image from "next/image";
import Link from "next/link";

const videos = [
  {
    id: "9jNy5Kvsi68",
    title: "Furbaby and the Tight Spaces - Next Year video",
  },
  {
    id: "-054IlsCbGQ",
    title: "Furbaby and the Tight Spaces - I Can Only Give You Everything",
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const bgImages = ["photo-triangle-wall-hi-res.jpg", "banner-keyboard.jpg"];

export default function Home({ photo }) {
  return (
    <Layout>
      <Head>
        <title>Furbaby & the Tight Spaces</title>
      </Head>
      <Splash1 photo={photo} />

      <section className="flex flex-col items-center justify-center py-8 px-2 md:px-4">
        <p className="text-center text-2xl md:text-4xl font-sans uppercase tracking-widest">
          Hi, we're Furbaby &amp; the Tight Spaces and play garage rock
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

      <section className="py-4 sm:py-20 px-4 lg:px-0 flex flex-col items-center">
        <div className="container max-w-8xl">
          <BannerFlattsFest />
        </div>
      </section>

      <CargoPromo />

      <Link href="/press-kit">
        <a className="border-none">
          <Image
            src="/images/banner-press-kit.jpg"
            alt="Electronic Press Kit"
            width={2048}
            height={1225}
            fill="responsive"
          />
        </a>
      </Link>
      <div className="bg-white py-6">
        <SplashLatestSingle />
      </div>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const index = getRandomInt(2);
  const photo = bgImages[index];

  // Pass data to the page via props
  return { props: { photo } };
}
