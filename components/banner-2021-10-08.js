import React from "react";
import PropTypes from "prop-types";
import swbImage from "public/images/Oct8SteepwaterIG.jpg";
import Image from "next/image";
import furImage from "public/images/2021-10-08-fuzzy.JPG";
import LinkButton from "components/link-button";
import ExternalLink from "components/external-link";
import Section from "components/section";

const ticketLink =
  "https://www.ticketweb.com/event/the-steepwater-band-reggies-rock-club-tickets/11345365";

function BannerReggies(props) {
  return (
    <>
      <div className="container text-center max-w-4xl">
        <h3>Album release show postponed</h3>
        <p className="md:text-xl">
          Super super sorry, but due to Covid complications we're postponing the
          Steepwater Band / Furbaby gig at Reggies October 8, 2021. All ticket
          sales will be refunded. New date coming soon.
        </p>
      </div>
      {/* <div className="flex flex-col justify-center items-center md:flex-row opacity-50">
        <Image src={swbImage} alt="Steepwater band flyer" />
        <Image src={furImage} alt="Furbaby album release flyer" />
      </div> */}
    </>
  );
}

export default BannerReggies;
