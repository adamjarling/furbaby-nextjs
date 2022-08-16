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
import PromoDownloads from "components/promo-downloads";

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
      <Splash1 photo={"photo-triangle-wall-hi-res.jpg"} />

      <div className="bg-white text-black">
        <Section>
          <EuroTease />
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

      <div className="bg-fur-blue">
        <Section>
          <h2 className="big-title text-center">Promo Assets</h2>
          <PromoDownloads />
          <div className="text-center">
            <LinkButton href="/press">Visit Press</LinkButton>
          </div>
        </Section>
      </div>

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
