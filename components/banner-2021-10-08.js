import React from "react";
import PropTypes from "prop-types";
import swbImage from "public/images/Oct8SteepwaterIG.jpg";
import Image from "next/image";
import furImage from "public/images/2021-10-08-fuzzy.JPG";
import LinkButton from "components/link-button";
import ExternalLink from "components/external-link";

const ticketLink =
  "https://www.ticketweb.com/event/the-steepwater-band-reggies-rock-club-tickets/11345365";

function BannerReggies(props) {
  return (
    <section className="flex flex-col items-center py-8 bg-fur-yellow">
      <div className="container text-center">
        <h3>Album release show postponed</h3>
        <p>
          Covid complications.... any ticket sales will be refunded by Reggies.
          New date coming soon.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row opacity-50">
        <Image src={swbImage} alt="Steepwater band flyer" />
        <Image src={furImage} alt="Furbaby album release flyer" />
      </div>
    </section>
  );
}

export default BannerReggies;
