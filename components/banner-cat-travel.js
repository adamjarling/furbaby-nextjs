import * as manifest from "music-release-manifest";

import { FaAmazon, FaApple, FaYoutube } from "react-icons/fa";

import ExternalLink from "./external-link";
import Image from "next/image";
import ImageCalloutCallout from "components/image-callout/callout";
import ImageCalloutImage from "components/image-callout/image";
import ImageCalloutWrapper from "components/image-callout/wrapper";
import LinkButton from "./link-button";
import React from "react";

const manifestItems = manifest.catWontTravel;

export default function BannerCatTravel() {
  return (
    <ImageCalloutWrapper isReversed>
      <ImageCalloutImage isReversed>
        <Image
          src={`/images/cat-wont-travel_cover.jpg`}
          alt={`What if the Cat Wont Travel single cover`}
          layout="responsive"
          width={2000}
          height={2000}
        />
      </ImageCalloutImage>
      <ImageCalloutCallout isReversed>
        <p className="py-6 uppercase">First single in 2 years!</p>
        <h2 className="py-8">What if the Cat Won't Travel</h2>
        <p>
          April Fools Day everyone! F.A.T.T.S. releases their first single in 2
          years, and it's a cover of the classic "I'm a Believer" by The
          Monkees. (Just kidding). Even more questionable, it's a pensive,
          acoustic number intended to shock, confuse, and grease the wheels for
          a whole bunch of garage rock coming your way in 2023. 🤘🎸
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

        <LinkButton isExternal href="https://buy.stripe.com/28ocOV9nDbNzcKc9AA">
          Listen Now
        </LinkButton>
      </ImageCalloutCallout>
    </ImageCalloutWrapper>
  );
}
