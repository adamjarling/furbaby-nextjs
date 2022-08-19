import React from "react";
import ImageCalloutWrapper from "components/image-callout/wrapper";
import ImageCalloutImage from "components/image-callout/image";
import ImageCalloutCallout from "components/image-callout/callout";
import Image from "next/image";
import LinkButton from "./link-button";

export default function EuroTease() {
  return (
    <ImageCalloutWrapper>
      <ImageCalloutImage>
        <Image
          src={`/images/spain2022/lestrato-poster-2022-08-17_v2.jpg`}
          alt={`Spain 2022 Tour Poster`}
          layout="responsive"
          width={842}
          height={1191}
        />
      </ImageCalloutImage>
      <ImageCalloutCallout>
        <p className="uppercase py-6">Special Announcement</p>
        <h2 className="py-8">Let's Go! Spanish Tour 2022</h2>
        <p>
          We're excited to announce the first official "fur tour", Septiembre 23
          - Octubre 3, 2022 in a place dear to our hearts. We pledge to bring
          Chicago #TrashBluesPsychPop to the Iberian Peninsula in full effect.
        </p>

        <LinkButton isInverted href="/spain2022">
          More Info
        </LinkButton>
      </ImageCalloutCallout>
    </ImageCalloutWrapper>
  );
}
