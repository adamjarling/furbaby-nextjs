import Image from "next/image";
import ImageCalloutCallout from "./image-callout/callout";
import ImageCalloutImage from "./image-callout/image";
import ImageCalloutWrapper from "./image-callout/wrapper";
import LinkButton from "./link-button";
import React from "react";

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
        <p className="py-6 uppercase">Special Announcement</p>
        <h2 className="py-8">Let&apos;s Go! Spanish Tour 2022</h2>
        <p>
          We&apos;re excited to announce the first official &quot;fur
          tour&quot;, Septiembre 23 - Octubre 3, 2022 in a place dear to our
          hearts. We pledge to bring Chicago #TrashBluesPsychPop to the Iberian
          Peninsula in full effect.
        </p>

        <LinkButton isInverted href="/spain2022">
          More Info
        </LinkButton>
      </ImageCalloutCallout>
    </ImageCalloutWrapper>
  );
}
