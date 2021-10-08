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
import BannerNewAlbumPromoVideo from "components/banner-new-album-promo-video";
import LatestSingle from "components/latest-single";
import PhotoPreview from "components/photo-preview";
import LatestNewsItem from "components/latest-news-item";
import { getSortedPostsData } from "lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const bgImages = ["photo-triangle-wall-hi-res.jpg", "banner-keyboard.jpg"];

export default function Home({ allPostsData }) {
  const thePost = allPostsData[0];

  return (
    <Layout>
      <Head>
        <title>Furbaby & the Tight Spaces</title>
      </Head>
      <Splash1 photo={"photo-triangle-wall-hi-res.jpg"} />
      <BannerNewAlbumPromoVideo />
      <BannerNewAlbumPromo />

      <LatestNewsItem post={thePost} />

      {/* <div className="bg-white text-black">
        <Section isCentered>
          <p className="big-title text-center">Tour Dates</p>
          <BannerReggies />
        </Section>
      </div> */}

      <div className="bg-fur-pink">
        <Section>
          <LatestSingle />
        </Section>
      </div>

      {/* <PhotoPreview /> */}

      {/* <IntroParagraph /> */}

      {/* <CargoPromo /> */}

      <SplashPhotos />

      <Section>
        <p className="big-title text-center">Videos</p>
        <SplashVideos />
      </Section>

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
