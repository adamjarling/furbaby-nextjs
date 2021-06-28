import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";
import Image from "next/image";
import * as manifest from "music-release-manifest";
import {
  FaFacebookSquare,
  FaSpotify,
  FaAmazon,
  FaYoutube,
  FaApple,
} from "react-icons/fa";
import ExternalLink from "components/external-link";

const singles = [
  {
    src: "give-u-everything-album-art-v1.jpg",
    title: "I Can Only Give You Everything - Furbaby and the Tight Spaces",
    manifestItems: manifest.iCanOnlyGiveYouEverything,
  },
  {
    src: "FURBABY-boxed-in-cover-art-no-outline.png",
    title: "Boxed In - Furbaby and the Tight Spaces",
    manifestItems: manifest.boxedIn,
  },
  {
    src: "cocoa-single-cover.jpg",
    title: "Cocoa - Furbaby and the Tight Spaces",
    manifestItems: manifest.cocoa,
  },
  {
    src: "waiting-album-art.jpg",
    title: "Waiting - Furbaby and the Tight Spaces",
    manifestItems: manifest.waiting,
  },
  {
    src: "social-distance-album-art.jpg",
    title: "Social Distance - Furbaby and the Tight Spaces",
    manifestItems: manifest.socialDistance,
  },

  {
    src: "next-year-album-art-v2-sharp.jpg",
    title: "Next Year - Furbaby and the Tight Spaces",
    manifestItems: manifest.nextYear,
  },
  {
    src: "reaching-out-album-art-v2.jpg",
    title: "Reaching Out (For Higher Ground) - Furbaby and the Tight Spaces",
    manifestItems: manifest.reachingOut,
  },

  {
    src: "behind-the-door-cover-art-v2.jpg",
    title: "Behind The Door - Furbaby and the Tight Spaces",
    manifestItems: manifest.behindTheDoor,
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
        {singles.map((single) => (
          <div key={single.src}>
            <div className="aspect-w-16 aspect-h-16">
              <Image
                src={`/images/${single.src}`}
                alt={single.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex justify-evenly items-center text-2xl mt-3 mb-6">
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
