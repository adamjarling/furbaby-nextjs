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
        <title>Furbaby & the Tight Spaces</title>
      </Head>
      <Splash1 photo={"photo-triangle-wall-hi-res.jpg"} />

      <div className="pt-12 text-center">
        <Image
          src="/images/2022-03-30_fb-event-logo.jpg"
          height={1005}
          width={1920}
        />
        <div className="hidden md:block mt-8">
          <LinkButton
            isExternal
            href={`https://www.ticketweb.com/event/eraserhead-reggies-music-joint-tickets/11913465`}
          >
            Buy Tickets
          </LinkButton>
          <LinkButton
            isExternal
            href={`https://www.facebook.com/events/494392152138628`}
          >
            Facebook Event
          </LinkButton>
        </div>
      </div>

      <BannerNewAlbumPromoVideo />
      <BannerNewAlbumPromo />

      <LatestNewsItem post={thePost} />

      {/* <div className="bg-white text-black">
        <Section isCentered>
          <p className="big-title text-center">Tour Dates</p>
          <BannerReggies />
        </Section>
      </div> */}

      <SplashPhotos />

      <div className="bg-fur-pink">
        <Section>
          <LatestSingle />
        </Section>
      </div>

      {/* <PhotoPreview /> */}

      {/* <IntroParagraph /> */}

      {/* <CargoPromo /> */}

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
