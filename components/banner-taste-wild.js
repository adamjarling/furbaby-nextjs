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

export default function BannerTaste() {
  return (
    <ImageCalloutWrapper isReversed>
      <ImageCalloutImage isReversed>
        <Image
          src={`/images/taste-final_v1.png`}
          alt={`Taste of the Wild`}
          layout="responsive"
          width={2000}
          height={2000}
        />
      </ImageCalloutImage>
      <ImageCalloutCallout isReversed>
        <p className="py-6 uppercase">Fuzz in Your Face!</p>
        <h2 className="py-8">Taste of the Wild</h2>
        <p>
          New single and video out now. Filmed on location in Guanajuato Mexico,
          this song is about the wildness of the human spirit. 🤘🎸
        </p>

        <div className="flex mb-8 text-3xl">
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

        <LinkButton isExternal href={manifestItems.spotify}>
          Listen Now
        </LinkButton>
      </ImageCalloutCallout>
    </ImageCalloutWrapper>
  );
}
