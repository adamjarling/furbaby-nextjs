import Image from "next/image";
import ImageCalloutCallout from "./image-callout/callout";
import ImageCalloutImage from "./image-callout/image";
import ImageCalloutWrapper from "./image-callout/wrapper";
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
        <p className="py-6 uppercase">New Show Announcement</p>
        <h2 className="py-8">Live!</h2>
        <p>
          Stoked to announce a gig with Los Angeles,{" "}
          <a href="https://www.theclawsrock.com/" target="_blank">
            The Claws
          </a>
          , featuring Chad Cherry of{" "}
          <a href="https://thelastvegas.com" target="_blank">
            The Last Vegas
          </a>
          , at{" "}
          <a href="https://www.facebook.com/liarsclubchicago/" target="_blank">
            Liars Club
          </a>{" "}
          on May 17. 8pm.{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100063220121283"
            target="_blank"
          >
            Jeff Massey
          </a>{" "}
          (
          <a href="https://www.steepwater.com/" target="_blank">
            Steepwater Band
          </a>{" "}
          vocalist/guitar) solo kicks things off at 9pm. Then Furbaby + friends.
          21+ $10.
        </p>

        <LinkButton isExternal href="https://buy.stripe.com/28ocOV9nDbNzcKc9AA">
          Buy Tickets
        </LinkButton>
      </ImageCalloutCallout>
    </ImageCalloutWrapper>
  );
}
