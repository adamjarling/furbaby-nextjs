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
    <section className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center md:flex-row">
        <ExternalLink url={ticketLink} noBorder>
          <Image src={swbImage} alt="Steepwater band flyer" />
        </ExternalLink>
        <ExternalLink url={ticketLink} noBorder>
          <Image src={furImage} alt="Furbaby album release flyer" />
        </ExternalLink>
      </div>

      <div className="my-6">
        <LinkButton href={ticketLink}>Buy Tickets</LinkButton>
      </div>
    </section>
  );
}

export default BannerReggies;
