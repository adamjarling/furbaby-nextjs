import HeadlineCalloutHeadline from "./headline-callout/headline";
import HeadlineCalloutSubhead from "./headline-callout/subhead";
import HeadlineCalloutWrapper from "./headline-callout/wrapper";
import LinkButton from "./link-button";
import PropTypes from "prop-types";
import React from "react";
import Section from "./section";

const preOrderLink =
  "https://cargorecordsdirect.co.uk/products/furbaby-the-tight-spaces-furbaby-the-tight-spaces";

function BannerNewAlbumPromoVideo(props) {
  return (
    <Section>
      <HeadlineCalloutWrapper>
        <HeadlineCalloutSubhead>
          Vinyl Release March 2022!
        </HeadlineCalloutSubhead>
        <HeadlineCalloutHeadline>
          Debut album now available at Cargo Records UK Direct
        </HeadlineCalloutHeadline>
        <LinkButton href={preOrderLink}>Order Now</LinkButton>
      </HeadlineCalloutWrapper>

      <div className="aspect-w-16 aspect-h-9 ">
        <iframe
          src={`https://www.youtube.com/embed/LZQe-LAuwBw`}
          title="Furbaby &amp; the Tight Spaces Album Pre-Sale Promo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Section>
  );
}

BannerNewAlbumPromoVideo.propTypes = {};

export default BannerNewAlbumPromoVideo;
