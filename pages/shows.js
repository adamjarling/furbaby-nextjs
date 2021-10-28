import Head from "next/head";
import Layout from "components/layout";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";
import ExternalLink from "components/external-link";
import Section from "components/section";
import LinkButton from "components/link-button";
import Image from "next/image";

const shows = [
  // {
  //   date: "DEC 9 THURS",
  //   venue: "Liars Club",
  //   venueLink: "https://www.facebook.com/liarsclubchicago/",
  //   time: "8pm",
  //   playingWith: "Bill Kozy's Rising Force, Viceroy",
  //   location: "Chicago, IL USA",
  //   ticketUrl: "",
  //   facebookEventUrl: "",
  // },
  {
    date: "NOV 7 SUN",
    venue: "Double Door",
    venueLink: "https://www.doubledoor.com/",
    time: "1pm (free show)",
    playingWith: "Canning, Autonaughts",
    location: "Chicago, IL USA",
    ticketUrl: "",
    facebookEventUrl: "https://goo.gl/maps/9BFh2mJ9DGdThxbw9",
  },
  {
    date: "NOV 6 SAT (Canceled, again)",
    venue: "Reggies Live",
    venueLink: "https://www.reggieslive.com/",
    time: "7pm",
    playingWith: "Cactus",
    location: "Chicago, IL USA",
    ticketUrl:
      "https://www.ticketweb.com/event/cactus-reggies-banannas-comedy-shack-tickets/11240445",
    facebookEventUrl: "https://www.facebook.com/events/850162969206508",
  },
  {
    date: "OCT 9 FRI (CANCELED)",
    venue: "Reggies Live",
    venueLink: "https://www.reggieslive.com/",
    time: "8pm",
    playingWith: "Steepwater Band",
    location: "Chicago, IL USA",
    ticketUrl: "",
    facebookEventUrl: "",
  },
  {
    date: "JUL 10 SAT",
    venue: "Flatts and Sharpe Music Festival",
    venueLink: "https://www.flattsandsharpe.com/events",
    time: "4pm",
    playingWith: "Outlaw Family Band",
    location: "Chicago, IL USA",
    ticketUrl: "",
    facebookEventUrl: "",
  },
];

export default function Shows() {
  return (
    <Layout>
      <Head>
        <title>Tour Dates - Furbaby and the Tight Spaces</title>
      </Head>
      <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: "/images/banner-lying-on-beach.jpg",
          },
        ]}
        style={{ height: "70vh" }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between pb-6 px-6">
          <p className="big-title pt-28">Tour</p>
          <h1 className="text-right">Dates</h1>
        </div>
      </ParallaxBanner>

      <Section isCentered>
        <div className="">
          {shows.map(
            ({
              date,
              venue,
              venueLink,
              time,
              playingWith,
              location,
              ticketUrl,
              facebookEventUrl,
            }) => (
              <div className="grid grid-cols-2 w-full text-lg my-20">
                <div className="flex flex-col md:flex-row justify-items-start w-full">
                  <span className="pr-6 font-bold flex-1 uppercase">
                    {date}
                  </span>
                  <div className="flex-1">
                    <div>
                      <ExternalLink url={venueLink}>{venue}</ExternalLink> @{" "}
                      {time}
                    </div>
                    <div>w/ {playingWith}</div>
                    <div>{location}</div>
                  </div>
                </div>
                <div className="text-right">
                  {ticketUrl && (
                    <a href={ticketUrl} className="mr-4">
                      Tickets
                    </a>
                  )}
                  {facebookEventUrl && <a href={facebookEventUrl}>RSVP</a>}
                </div>
              </div>
            )
          )}
        </div>
      </Section>
    </Layout>
  );
}
