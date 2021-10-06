import Head from "next/head";
import Layout from "components/layout";
import Image from "next/image";
import Section from "components/section";
import LinkButton from "components/link-button";
import ImageCalloutWrapper from "components/image-callout/wrapper";
import ImageCalloutImage from "components/image-callout/image";
import ImageCalloutCallout from "components/image-callout/callout";
import ExternalLink from "components/external-link";
import { FaSpotify, FaYoutube, FaApple, FaAmazon } from "react-icons/fa";
import * as manifest from "music-release-manifest";

export default function Music() {
  function isEvenRow(i) {
    return i % 2 > 0 && i !== 0;
  }

  return (
    <Layout>
      <Head>
        <title>Music - Furbaby & the Tight Spaces</title>
      </Head>

      <div className="pt-20 md:pt-36">
        <Section>
          {singles.map((single, i) => (
            <div className="mb-24">
              <ImageCalloutWrapper isReversed={isEvenRow(i)}>
                <ImageCalloutImage>
                  <Image
                    src={`/images/${single.src}`}
                    alt={single.title}
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                </ImageCalloutImage>
                <ImageCalloutCallout isReversed={isEvenRow(i)}>
                  <h2 className="pb-0 pt-8 md:p-0">{single.title}</h2>
                  <p className="uppercase py-6 md:py-12">
                    Single - {single.year}
                  </p>
                  <LinkButton isExternal href={single.manifestItems.spotify}>
                    Listen
                  </LinkButton>
                  {/* <div className="flex justify-evenly items-center text-2xl mt-3 mb-6">
                    <ExternalLink url={single.manifestItems.spotify}>
                      <FaSpotify />
                    </ExternalLink>
                    <ExternalLink url={single.manifestItems.youTubeMusic}>
                      <FaYoutube />
                    </ExternalLink>
                    <ExternalLink url={single.manifestItems.appleMusic}>
                      <FaApple />
                    </ExternalLink>
                    <ExternalLink url={single.manifestItems.amazonMusic}>
                      <FaAmazon />
                    </ExternalLink>
                  </div> */}
                </ImageCalloutCallout>
              </ImageCalloutWrapper>
            </div>
          ))}
        </Section>
      </div>
    </Layout>
  );
}

export const singles = [
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
