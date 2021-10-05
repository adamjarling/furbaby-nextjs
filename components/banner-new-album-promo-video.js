import React from "react";
import PropTypes from "prop-types";
import Section from "components/section";
import LinkButton from "components/link-button";

const preOrderLink =
  "https://cargorecordsdirect.co.uk/products/furbaby-the-tight-spaces-furbaby-the-tight-spaces";

function BannerNewAlbumPromoVideo(props) {
  return (
    <section className="flex flex-col items-center pb-16">
      <div className="container">
        <div className="aspect-w-16 aspect-h-9 ">
          <iframe
            src={`https://www.youtube.com/embed/LZQe-LAuwBw`}
            title="Furbaby &amp; the Tight Spaces Album Pre-Sale Promo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h4 className="pt-20 pb-6">Release Date October 15, 2021</h4>
        <h2 className="mb-6">
          Album Pre-Sale Now Live at Cargo Records UK Direct
        </h2>
        <LinkButton href={preOrderLink}>Pre-Order Now</LinkButton>
      </div>
    </section>
  );
}

BannerNewAlbumPromoVideo.propTypes = {};

export default BannerNewAlbumPromoVideo;
