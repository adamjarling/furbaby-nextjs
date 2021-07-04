import Head from "next/head";
import Layout from "components/layout";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";
import FandTS from "components/f-and-ts";
import ExternalLink from "components/external-link";
import Obfuscate from "react-obfuscate";
import Section from "components/section";
import SplashPhotos from "components/splash-photos";
import SplashVideos from "components/splash-videos";
import SplashSingles from "components/splash-singles";
import CargoPromo from "components/cargo-promo";

export default function PressKit() {
  return (
    <Layout>
      <Head>
        <title>Press Kit - Furbaby & the Tight Spaces</title>
      </Head>
      <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: "/images/banner-lying-on-beach.jpg",
          },
        ]}
        style={{ height: "50vh" }}
      >
        <ParallaxBannerChildren>
          <div className="container flex flex-col items-center">
            <h1 className="banner-headline">Press Kit</h1>
          </div>
        </ParallaxBannerChildren>
      </ParallaxBanner>
      <Section isJustify>
        <p>
          <FandTS /> records demos, reads, does yoga, drinks wine and takes long
          walks on the beach in Chicago USA.
        </p>
        <p>
          <FandTS /> is an alt/garage/psych art project hatched for the 2020s.
          The band experiments with music, videos, photography and reflects
          what's going on in a world that just got fast-forwarded into the
          future.
        </p>
        <p>
          In past and current lives <FandTS /> have played, toured-in, and/or
          recorded with{" "}
          <ExternalLink url="https://thelastvegas.com">
            The Last Vegas
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.steepwater.com/">
            The Steepwater Band
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://urgeoverkill.com/">
            Urge Overkill
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.gethip.com/site/artists/cynics/">
            The Cynics
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.warriorsoulofficial.com/">
            Warrior Soul
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.abbarama.com/">ABBARAMA</ExternalLink>,{" "}
          <ExternalLink url="https://en.wikipedia.org/wiki/The_Dogs_D%27Amour">
            Tyla and Dogs 'D Amour
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.facebook.com/EarlySound">
            Early Sound
          </ExternalLink>{" "}
          and others.
        </p>
        <p>
          <FandTS /> has evolved from a bedroom studio project into a full live
          band. Now booking Europe &amp; USA.{" "}
          <Obfuscate
            email="furbabyferguson@gmail.com"
            headers={{
              subject: "Email from Furbaby.rocks",
            }}
          >
            Drop us a line
          </Obfuscate>
        </p>
      </Section>

      <CargoPromo />
      <SplashPhotos />
      <SplashVideos />
      <SplashSingles />
    </Layout>
  );
}
