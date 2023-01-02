import React from "react";
import ImageCalloutWrapper from "components/image-callout/wrapper";
import ImageCalloutImage from "components/image-callout/image";
import ImageCalloutCallout from "components/image-callout/callout";
import Image from "next/image";
import LinkButton from "./link-button";

export default function ReggiesJan2023() {
  return (
    <ImageCalloutWrapper>
      <ImageCalloutImage>
        <Image
          src={`/images/2023-01-25.jpg`}
          alt={`January 25 at Reggies`}
          layout="responsive"
          width={2000}
          height={2000}
        />
      </ImageCalloutImage>
      <ImageCalloutCallout>
        <p className="py-6 uppercase">New Show</p>
        <h2 className="py-8">Hello 2023...</h2>
        <p>
          Excited to announce a gig back in Chicago at{" "}
          <a href="https://www.reggieslive.com/" target="_blank">
            Reggies
          </a>{" "}
          w/
          <a href="https://jasonkaneandthejive.bandcamp.com/" target="_blank">
            Jason Kane and the Jive
          </a>{" "}
          as part of the Jive's January residency. Wednesday, January 25. 8pm.
          21+ Free!
        </p>

        <LinkButton isExternal href="https://www.reggieslive.com/">
          More Info
        </LinkButton>
      </ImageCalloutCallout>
    </ImageCalloutWrapper>
  );
}
