import React from "react";
import ImageCalloutWrapper from "components/image-callout/wrapper";
import ImageCalloutImage from "components/image-callout/image";
import ImageCalloutCallout from "components/image-callout/callout";
import Image from "next/image";
import { releases } from "pages/music";
import LinkButton from "./link-button";

const latestSingle = releases.find(
  (single) => single.src === "social-distance-album-art.jpg"
);

export default function LatestSingle() {
  return (
    <ImageCalloutWrapper>
      <ImageCalloutImage>
        <Image
          src={`/images/${latestSingle.src}`}
          alt={latestSingle.title}
          layout="responsive"
          width={500}
          height={500}
        />
      </ImageCalloutImage>
      <ImageCalloutCallout>
        <p className="uppercase py-6">Latest Single</p>
        <h2 className="py-8">{latestSingle.title}</h2>

        <LinkButton isExternal href={latestSingle.manifestItems.spotify}>
          Listen
        </LinkButton>
      </ImageCalloutCallout>
    </ImageCalloutWrapper>
  );
}
