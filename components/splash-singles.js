import * as manifest from "../music-release-manifest";

import { FaAmazon, FaApple, FaSpotify, FaYoutube } from "react-icons/fa";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

import ExternalLink from "./external-link";
import Image from "next/image";
import ParallaxBannerChildren from "./parallax-banner-children";

const singles = [
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

function SplashSingles() {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: "images/banner-singles.jpg",
          },
        ]}
        style={{ height: "50vh" }}
      >
        <ParallaxBannerChildren>
          <div className="container flex flex-col items-center">
            <h2 className="banner-headline">Singles</h2>
          </div>
        </ParallaxBannerChildren>
      </ParallaxBanner>

      <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 md:grid-cols-3">
        {singles.map((single, i) => (
          <div key={single.src}>
            <Image
              src={`/images/${single.src}`}
              alt={single.title}
              layout="responsive"
              width={500}
              height={500}
            />
            <div className="flex items-center mt-3 mb-6 text-2xl justify-evenly">
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SplashSingles;
