import * as manifest from "../music-release-manifest";

import { FaAmazon, FaApple, FaYoutube } from "react-icons/fa";

import ExternalLink from "./external-link";
import Image from "next/image";
import ImageCalloutCallout from "./image-callout/callout";
import ImageCalloutImage from "./image-callout/image";
import ImageCalloutWrapper from "./image-callout/wrapper";
import LinkButton from "./link-button";
import React from "react";

const manifestItems = manifest.tasteOfTheWild;

export default function BannerWheels() {
  return (
    <ImageCalloutWrapper isReversed>
      <ImageCalloutImage isReversed>
        <Image
          src={`/images/wheels-teaser-poster.png`}
          alt={`When the Wheels Come Off`}
          layout="responsive"
          width={2000}
          height={2000}
        />
      </ImageCalloutImage>
      <ImageCalloutCallout isReversed>
        <p className="py-6 uppercase">New single/video!</p>
        <h2 className="py-8">When the Wheels Come Off</h2>
        <p>
          A collaboration with UK multi-media artist+ designer{" "}
          <ExternalLink url={`https://www.instagram.com/miyuw0rld/`}>
            Mila Djokic-Randolph
          </ExternalLink>
          , the video concept was imagined, filmed and edited in December 2023.
          Mila&apos;s short-film paints a collage of wheels coming off in
          abstract worlds and fur-realities. Check out more of{" "}
          <ExternalLink url={`https://www.instagram.com/miyuw0rld/`}>
            Mila Djokic-Randolph&apos;s work
          </ExternalLink>
        </p>

        {/* <div className="flex mb-8 text-3xl">
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
        </div> */}

        {/* <LinkButton isExternal href={manifestItems.spotify}>
          Listen Now
        </LinkButton> */}
      </ImageCalloutCallout>
    </ImageCalloutWrapper>
  );
}
