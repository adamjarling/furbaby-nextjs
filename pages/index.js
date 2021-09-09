import Head from "next/head";
import Layout from "components/layout";
import Splash1 from "components/splash1";
import SplashLatestSingle from "components/splash-latest-single";
import CargoPromo from "components/cargo-promo";
import SplashSingleSelection from "components/splash-single-selection";
import LinkButton from "components/link-button";
import Image from "next/image";
import Link from "next/link";
import Section from "components/section";
import FandTS from "components/f-and-ts";
import ExternalLink from "components/external-link";
import Obfuscate from "react-obfuscate";
import SplashPhotos from "components/splash-photos";
import SplashVideos from "components/splash-videos";
import SplashSingles from "components/splash-singles";
import Container from "components/container";
import reggiesFlyer from "public/images/Oct8SteepwaterLONG.jpg";

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

      <Section isJustify>
        <div className="md:text-xl">
          <p>
            <FandTS /> records demos, reads, does yoga, drinks wine and takes
            long walks along the beach in Chicago USA.
          </p>
          <p>
            Dreamed up during our 2020 quarantine, <FandTS /> is an
            alt/garage/psych art project that experiments with music, videos,
            photography and reflects on what's going on in a world that just got
            fast-forwarded into the future, unexpectedly.
          </p>
          <p>
            In past and current lives members of the band have played, toured
            in, and/or recorded with{" "}
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
            <ExternalLink url="https://www.abbarama.com/">
              ABBARAMA
            </ExternalLink>
            ,{" "}
            <ExternalLink url="https://en.wikipedia.org/wiki/The_Dogs_D%27Amour">
              Tyla and Dogs 'D Amour
            </ExternalLink>
            ,{" "}
            <ExternalLink url="https://www.facebook.com/EarlySound">
              Early Sound
            </ExternalLink>{" "}
            and others.
          </p>
          {/* <p>
            <FandTS /> has evolved from a bedroom studio project into a full
            live band. Now booking Europe &amp; USA.{" "}
            <Obfuscate
              email="furbabyferguson@gmail.com"
              headers={{
                subject: "Email from Furbaby.rocks",
              }}
            >
              Drop us a line
            </Obfuscate>
          </p> */}
        </div>
      </Section>

      <div
        className="flex flex-col items-center pb-8"
        style={{ backgroundColor: "#0b3134" }}
      >
        <Image src={reggiesFlyer} />
        <div className="mt-6">
          <LinkButton href="https://www.ticketweb.com/event/the-steepwater-band-reggies-rock-club-tickets/11345365">
            Buy Tickets
          </LinkButton>
        </div>
      </div>

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
