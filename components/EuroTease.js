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
          src={`/images/spain-2022-teaser.JPG`}
          alt={`Euro Tour Dates teaser`}
          layout="responsive"
          width={500}
          height={500}
        />
      </ImageCalloutImage>
      <ImageCalloutCallout>
        <p className="uppercase py-6">Special Announcement</p>
        <h2 className="py-8">Fur Euro Tour 2022</h2>
        <p>Dates for late September - early October to be announced soon...</p>

        {/* <LinkButton isExternal isInverted href="#">
          More Info
        </LinkButton> */}
      </ImageCalloutCallout>
    </ImageCalloutWrapper>
  );
}
