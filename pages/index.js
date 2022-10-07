import Head from "next/head";
import Layout from "components/layout";
import Splash1 from "components/splash1";
import CargoPromo from "components/cargo-promo";
import LinkButton from "components/link-button";
import Image from "next/image";
import SplashPhotos from "components/splash-photos";
import SplashVideos from "components/splash-videos";
import BannerNewAlbumPromo from "components/banner-new-album-promo";
import Section from "components/section";
import BannerNewAlbumPromoVideo from "components/banner-new-album-promo-video";
import LatestSingle from "components/latest-single";
import LatestNewsItem from "components/latest-news-item";
import { getSortedPostsData } from "lib/posts";
import EuroTease from "components/EuroTease";
import { ShowsGrid, spainShows } from "./shows";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const thePost = allPostsData[0];

  return (
    <Layout>
      <Head>
        <title>Furbaby and the Tight Spaces</title>
      </Head>
      <Splash1 photo={"spain2022/IMG_0723.JPG"} />

      <div className="bg-white text-black">
        <Section>
          <EuroTease />
          <div className="aspect-w-16 aspect-h-9 mt-10">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cFFhl6lhtBM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {[...spainShows].map((show) => (
            <ShowsGrid {...show} key={show.date}></ShowsGrid>
          ))}
        </Section>
      </div>

      <BannerNewAlbumPromoVideo />
      <BannerNewAlbumPromo />

      {/* <div className="bg-white text-black">
        <Section isCentered>
          <p className="big-title text-center">Tour Dates</p>
          <BannerReggies />
        </Section>
      </div> */}

      <Section>
        <p className="big-title text-center">Videos</p>
        <SplashVideos />
      </Section>

      {/* <LatestNewsItem post={thePost} /> */}

      {/* <SplashPhotos /> */}

      <div className="bg-fur-pink">
        <Section>
          <LatestSingle />
        </Section>
      </div>

      {/* <PhotoPreview /> */}

      {/* <IntroParagraph /> */}

      {/* <CargoPromo /> */}

      {/* <SplashSingles /> */}
    </Layout>
  );
}

// // This gets called on every request
// export async function getServerSideProps() {
//   const index = getRandomInt(2);
//   const photo = bgImages[index];

//   // Pass data to the page via props
//   return { props: { photo } };
// }
