import Image from "next/image";
import ImageCalloutCallout from "components/image-callout/callout";
import ImageCalloutImage from "components/image-callout/image";
import ImageCalloutWrapper from "components/image-callout/wrapper";
import LinkButton from "./link-button";
import React from "react";

export default function LiarsMay2023() {
  return (
    <ImageCalloutWrapper>
      <ImageCalloutImage>
        <Image
          src={`/images/2023-05-17-fur_v2.jpg`}
          alt={`May 17 at Liars Club`}
          layout="responsive"
          width={2000}
          height={2000}
        />
      </ImageCalloutImage>
      <ImageCalloutCallout>
        <p className="py-6 uppercase">New Show</p>
        <h2 className="py-8">Chad's back in town</h2>
        <p>
          Stoked to announce a gig with Los Angeles',{" "}
          <a href="https://www.theclawsrock.com/" target="_blank">
            The Claws
          </a>
          , featuring Chad Cherry of{" "}
          <a href="https://thelastvegas.com" target="_blank">
            The Last Vegas
          </a>
          , at Liars Club on May 17. 8pm. The wizard Jeff Massey (Steepwater
          Band vocalist/guitar) kicks things off at 9pm, solo. We're gonna have
          some special guests joining Furbaby's set, then the Claws crush it.
          21+ $10.
        </p>

        <LinkButton isExternal href="https://buy.stripe.com/28ocOV9nDbNzcKc9AA">
          Buy Tickets
        </LinkButton>
      </ImageCalloutCallout>
    </ImageCalloutWrapper>
  );
}
