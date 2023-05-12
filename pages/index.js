import BannerCatTravel from "../components/banner-cat-travel";
import BannerNewAlbumPromo from "components/banner-new-album-promo";
import BannerNewAlbumPromoVideo from "components/banner-new-album-promo-video";
import BannerTaste from "../components/banner-taste-wild";
import EuroTease from "components/EuroTease";
import Head from "next/head";
import HeadlineCalloutHeadline from "components/headline-callout/headline";
import HeadlineCalloutSubhead from "components/headline-callout/subhead";
import HeadlineCalloutWrapper from "components/headline-callout/wrapper";
import LatestSingle from "components/latest-single";
import Layout from "components/layout";
import LiarsMay2023 from "../components/LiarsMay2023";
import LinkButton from "components/link-button";
import ReggiesJan2023 from "components/ReggiesJan2023";
import Section from "components/section";
import Splash1 from "components/splash1";
import SplashMerch2 from "../components/splash-merch2";
import SplashVideos from "components/splash-videos";

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
          <BannerTaste />
        </Section>
      </div>

      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/hGUpzW19SRc`}
          title={`Taste of the Wild`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="bg-black">
        <Section>
          <BannerCatTravel />
        </Section>
      </div>
      <div className="bg-fur-pink">
        <Section>
          <LiarsMay2023 />
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
          <div className="mt-10 aspect-w-16 aspect-h-9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cFFhl6lhtBM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
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
