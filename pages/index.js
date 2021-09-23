import Head from "next/head";
import Layout from "components/layout";
import Splash1 from "components/splash1";
import CargoPromo from "components/cargo-promo";
import LinkButton from "components/link-button";
import Image from "next/image";
import SplashPhotos from "components/splash-photos";
import SplashVideos from "components/splash-videos";
import SplashSingles from "components/splash-singles";
import reggiesFlyer from "public/images/Oct8SteepwaterLONG.jpg";
import IntroParagraph from "components/intro-paragraph";
import BannerReggies from "components/banner-2021-10-08";
import BannerNewAlbumPromo from "components/banner-new-album-promo";
import Section from "components/section";

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
      <Splash1 photo={"photo-triangle-wall-hi-res.jpg"} />

      {/* <section className="flex flex-col items-center justify-center py-8 px-2 md:px-4">
        <p className="text-center text-2xl md:text-4xl font-sans uppercase tracking-widest">
          Hi, we're Furbaby &amp; the Tight Spaces and play garage rock
        </p>
      </section> */}

      <IntroParagraph />

      <section className="flex flex-col items-center pb-16">
        <div className="container">
          <div className="aspect-w-16 aspect-h-9 max-w-screen-xl">
            <iframe
              src={`https://www.youtube.com/embed/LZQe-LAuwBw`}
              title="Furbaby &amp; the Tight Spaces Album Pre-Sale Promo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <BannerNewAlbumPromo />

      <BannerReggies />

      <CargoPromo />

      <SplashPhotos />
      <SplashVideos />
      <SplashSingles />
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
