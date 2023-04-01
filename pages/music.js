import * as manifest from "music-release-manifest";

import { FaAmazon, FaApple, FaSpotify, FaYoutube } from "react-icons/fa";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

import ExternalLink from "components/external-link";
import Head from "next/head";
import Image from "next/image";
import ImageCalloutCallout from "components/image-callout/callout";
import ImageCalloutImage from "components/image-callout/image";
import ImageCalloutWrapper from "components/image-callout/wrapper";
import Layout from "components/layout";
import LinkButton from "components/link-button";
import Section from "components/section";

export default function Music() {
  function isEvenRow(i) {
    return i % 2 > 0 && i !== 0;
  }

  return (
    <Layout>
      <Head>
        <title>Music - Furbaby and the Tight Spaces</title>
      </Head>

      <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: "/images/banner-singles.jpg",
          },
        ]}
        style={{ height: "60vh" }}
      >
        <div className="absolute inset-0 bg-fur-yellow mix-blend-multiply" />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end px-6 pb-6">
          <h1 className="text-right">Music</h1>
        </div>
      </ParallaxBanner>

      <div className="">
        <Section>
          {releases.map(({ src, title, manifestItems, year }, i) => (
            <div key={src} className="mb-24">
              <ImageCalloutWrapper isReversed={isEvenRow(i)}>
                <ImageCalloutImage>
                  <Image
                    src={`/images/${src}`}
                    alt={title}
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                </ImageCalloutImage>
                <ImageCalloutCallout isReversed={isEvenRow(i)}>
                  <h2 className="pt-8 pb-0 lg:p-0">{title}</h2>
                  <p className="py-6 uppercase md:py-12">
                    {title === "Furbaby and the Tight Spaces"
                      ? "New Album!"
                      : "Single"}{" "}
                    - {year}
                  </p>
                  <div className="flex flex-col justify-between md:flex-row">
                    <LinkButton isExternal href={manifestItems.spotify}>
                      <span className="flex items-center justify-center">
                        <FaSpotify /> <span className="pl-3">Listen</span>
                      </span>
                    </LinkButton>
                    {title === "Furbaby and the Tight Spaces" && (
                      <LinkButton
                        isExternal
                        href="https://cargorecordsdirect.co.uk/products/furbaby-the-tight-spaces-furbaby-the-tight-spaces"
                      >
                        Order Now!
                      </LinkButton>
                    )}
                  </div>

                  <div className="flex mt-10 mb-6 text-2xl">
                    <ExternalLink url={manifestItems.youTubeMusic}>
                      <FaYoutube />
                    </ExternalLink>
                    <span className="px-6">
                      <ExternalLink url={manifestItems.appleMusic}>
                        <FaApple />
                      </ExternalLink>
                    </span>
                    {manifestItems.amazonMusic && (
                      <ExternalLink url={manifestItems.amazonMusic}>
                        <FaAmazon />
                      </ExternalLink>
                    )}
                  </div>
                </ImageCalloutCallout>
              </ImageCalloutWrapper>
            </div>
          ))}
        </Section>
      </div>
    </Layout>
  );
}

export const releases = [
  {
    src: "cat-wont-travel_cover.jpg",
    title: "What if the Cat Won't Travel?",
    manifestItems: manifest.catWontTravel,
    year: "2023",
  },
  {
    src: "furbaby-album-self-titled.jpg",
    title: "Furbaby and the Tight Spaces",
    manifestItems: manifest.furbabyAndTheTightSpaces_album1,
    year: "2021",
  },
  {
    src: "give-u-everything-album-art-v1.jpg",
    title: "I Can Only Give You Everything",
    manifestItems: manifest.iCanOnlyGiveYouEverything,
    year: "2020",
  },
  {
    src: "FURBABY-boxed-in-cover-art-no-outline.png",
    title: "Boxed In",
    manifestItems: manifest.boxedIn,
    year: "2020",
  },
  {
    src: "cocoa-single-cover.jpg",
    title: "Cocoa",
    manifestItems: manifest.cocoa,
    year: "2020",
  },
  {
    src: "waiting-album-art.jpg",
    title: "Waiting",
    manifestItems: manifest.waiting,
    year: "2021",
  },
  {
    src: "social-distance-album-art.jpg",
    title: "Social Distance",
    manifestItems: manifest.socialDistance,
    year: "2021",
  },

  {
    src: "next-year-album-art-v2-sharp.jpg",
    title: "Next Year",
    manifestItems: manifest.nextYear,
    year: "2021",
  },
  {
    src: "reaching-out-album-art-v2.jpg",
    title: "Reaching Out (For Higher Ground)",
    manifestItems: manifest.reachingOut,
    year: "2020",
  },

  {
    src: "behind-the-door-cover-art-v2.jpg",
    title: "Behind The Door",
    manifestItems: manifest.behindTheDoor,
    year: "2020",
  },
];
