import React from "react";
import PropTypes from "prop-types";
import Section from "components/section";
import LinkButton from "components/link-button";
import HeadlineCalloutWrapper from "components/headline-callout/wrapper";
import HeadlineCalloutSubhead from "components/headline-callout/subhead";
import HeadlineCalloutHeadline from "components/headline-callout/headline";

const preOrderLink =
  "https://cargorecordsdirect.co.uk/products/furbaby-the-tight-spaces-furbaby-the-tight-spaces";

function BannerNewAlbumPromoVideo(props) {
  return (
    <Section>
      <div className="aspect-w-16 aspect-h-9 ">
        <iframe
          src={`https://www.youtube.com/embed/LZQe-LAuwBw`}
          title="Furbaby &amp; the Tight Spaces Album Pre-Sale Promo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <HeadlineCalloutWrapper>
        <HeadlineCalloutSubhead>
          Release Date October 15, 2021
        </HeadlineCalloutSubhead>
        <HeadlineCalloutHeadline>
          It's alive! Debut album now available at Cargo Records UK Direct
        </HeadlineCalloutHeadline>
        <LinkButton href={preOrderLink}>Order Now</LinkButton>
      </HeadlineCalloutWrapper>
    </Section>
  );
}

BannerNewAlbumPromoVideo.propTypes = {};

export default BannerNewAlbumPromoVideo;
