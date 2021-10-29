import React from "react";
import PropTypes from "prop-types";
import Section from "components/section";
import LinkButton from "components/link-button";
import HeadlineCalloutWrapper from "components/headline-callout/wrapper";
import HeadlineCalloutSubhead from "components/headline-callout/subhead";
import HeadlineCalloutHeadline from "components/headline-callout/headline";
import ExternalLink from "./external-link";
import Image from "next/image";

const facebookEvent = "https://www.facebook.com/events/168285825506607";

function BannerDoubleDoor(props) {
  return (
    <div className="bg-white text-black">
      <Section>
        <ExternalLink url={facebookEvent}>
          <span className="hidden sm:block">
            <Image
              src="/images/2021-11-07-event2.jpg"
              alt="Furbaby live at Double Door Jams"
              width="1920"
              height="1005"
            />
          </span>
          <span className="sm:hidden">
            <Image
              src="/images/2021-11-07-instagram.jpg"
              alt="Furbaby live at Double Door Jams"
              width="1080"
              height="1080"
            />
          </span>
        </ExternalLink>
        <p className="pt-10">
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
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start w-full">
          <LinkButton
            href={`https://forms.gle/yoN4NAZfZzkHSe7Y8`}
            isExternal
            isInverted
          >
            RSVP
          </LinkButton>
          <span className="mt-5 sm:mt-0 sm:ml-5 ">
            <LinkButton href={facebookEvent} isExternal isInverted>
              Facebook Event
            </LinkButton>
          </span>
        </div>
      </Section>
    </div>
  );
}

BannerDoubleDoor.propTypes = {};

export default BannerDoubleDoor;
