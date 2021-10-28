import React from "react";
import PropTypes from "prop-types";
import Section from "components/section";
import LinkButton from "components/link-button";
import HeadlineCalloutWrapper from "components/headline-callout/wrapper";
import HeadlineCalloutSubhead from "components/headline-callout/subhead";
import HeadlineCalloutHeadline from "components/headline-callout/headline";
import ExternalLink from "./external-link";

const preOrderLink =
  "https://cargorecordsdirect.co.uk/products/furbaby-the-tight-spaces-furbaby-the-tight-spaces";

function BannerDoubleDoor(props) {
  return (
    <Section>
      <HeadlineCalloutWrapper>
        <HeadlineCalloutSubhead>
          Just announced...Sunday, November 7th 1pm
        </HeadlineCalloutSubhead>
        <HeadlineCalloutHeadline>
          Live Set at Double Door Jams
        </HeadlineCalloutHeadline>
        <p>
          So yea, November 6th at Reggies w/ Cactus has been postponed (Cactus
          has canceled their tour), however...
        </p>
        <p>
          We'll now be performing November 7th at the new{" "}
          <ExternalLink url="https://doubledoor.com">Double Door</ExternalLink>{" "}
          live music space in Chicago's Uptown neighborhood. During it's
          renovation,{" "}
          <ExternalLink url="https://doubledoor.com">Double Door</ExternalLink>{" "}
          is hosting "Double Door Jams", every other Sunday. RSVP, hang out,
          have a free beer, check out some music and the new venue as its being
          built. And Furbaby finally schedules a show that might not get
          canceled. Smell the excitement!
        </p>
        <p>
          <span className="font-extrabold">Sunday, November 7th at 1pm</span>.{" "}
          <ExternalLink url="https://goo.gl/maps/9BFh2mJ9DGdThxbw9">
            1050 W Wilson Ave, Chicago, IL
          </ExternalLink>
        </p>

        <LinkButton href={`https://forms.gle/yoN4NAZfZzkHSe7Y8`}>
          RSVP
        </LinkButton>
      </HeadlineCalloutWrapper>
    </Section>
  );
}

BannerDoubleDoor.propTypes = {};

export default BannerDoubleDoor;
