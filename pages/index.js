import Head from "next/head";
import Layout from "components/layout";
import Splash1 from "components/splash1";
import SplashLatestSingle from "components/splash-latest-single";
import CargoPromo from "components/cargo-promo";
import BannerFlattsFest from "components/banner-2021-07-10";
import SplashVideos from "components/splash-videos";
import SplashSingleSelection from "components/splash-single-selection";
import LinkButton from "components/link-button";

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
          Qué pasa. We're Furbaby &amp; the Tight Spaces and play garage
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
      <SplashSingleSelection />

      <BannerFlattsFest />

      <div className="bg-white py-6">
        <SplashLatestSingle />
      </div>

      <div className="text-center px-2 md:px-4">
        <h2>A few videos made in the neighborhood</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="my-8 text-center">
        <LinkButton href="videos">View all videos</LinkButton>
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
