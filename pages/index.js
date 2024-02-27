import BannerCatTravel from "../components/banner-cat-travel";
import BannerNewAlbumPromo from "../components/banner-new-album-promo";
import BannerNewAlbumPromoVideo from "../components/banner-new-album-promo-video";
import BannerTaste from "../components/banner-taste-wild";
import BannerWheels from "../components/banner-wheels";
import EuroTease from "../components/EuroTease";
import Head from "next/head";
import Layout from "../components/layout";
import Section from "../components/section";
import Splash1 from "../components/splash1";
import SplashMerch2 from "../components/splash-merch2";
import SplashVideos from "../components/splash-videos";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Furbaby and the Tight Spaces</title>
      </Head>
      <Splash1
        photo={"spain2022/310574662_534549568673682_7397289109584922197_n.jpeg"}
      />

      <div className="bg-black">
        <Section>
          <BannerWheels />
          <iframe
            className="w-full mt-12 aspect-video"
            src="https://www.youtube.com/embed/7NbRpqTQ5Lk?si=PuVTEgMau7U4TE7Z"
            title="When The Wheels Come Off"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Section>
      </div>

      <div className="bg-white">
        <Section>
          <SplashMerch2 />
        </Section>
      </div>

      <div className="text-black bg-white">
        <Section>
          <EuroTease />
          <iframe
            className="w-full mt-10 aspect-video"
            src="https://www.youtube.com/embed/cFFhl6lhtBM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Section>
      </div>

      <BannerNewAlbumPromoVideo />
      <BannerNewAlbumPromo />

      <Section>
        <p className="text-center big-title">Videos</p>
        <SplashVideos />
      </Section>

      {/* <LatestNewsItem post={thePost} /> */}

      {/* <SplashPhotos /> */}

      {/* <PhotoPreview /> */}

      {/* <IntroParagraph /> */}

      {/* <CargoPromo /> */}

      {/* <SplashSingles /> */}
    </Layout>
  );
}
