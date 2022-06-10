import Head from "next/head";
import Layout from "components/layout";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";
import ExternalLink from "components/external-link";
import Section from "components/section";
import { format, parseISO } from "date-fns";
import Image from "next/image";

const shows2022 = [
  {
    date: "2022-06-19",
    venue: "Liars Club",
    venueLink: "https://www.facebook.com/liarsclubchicago/",
    time: "8pm",
    playingWith: "Jason Kane and the Jive",
    location: "Chicago, IL USA",
    ticketUrl: "",
    facebookEventUrl: "",
  },
  {
    date: "2022-03-30",
    venue: "Reggies Music Joint",
    venueLink: "https://www.reggieslive.com/",
    time: "7pm",
    playingWith: "Ricky Liontones, Eraserhead, Mud Flower",
    location: "Chicago, IL USA",
    ticketUrl:
      "https://www.ticketweb.com/event/eraserhead-reggies-music-joint-tickets/11913465",
    facebookEventUrl: "https://www.facebook.com/events/494392152138628",
  },
  {
    date: "2022-01-29",
    venue: "Reggies",
    venueLink: "https://www.reggieslive.com/",
    time: "8pm",
    playingWith: "Steepwater Band. Joe's special 5150 birthday bash",
    location: "Chicago, IL USA",
    ticketUrl:
      "https://www.ticketweb.com/event/the-steepwater-band-reggies-banannas-comedy-shack-tickets/11469105",
    facebookEventUrl: "https://www.facebook.com/events/592852821807630",
  },
];

const shows2021 = [
  {
    date: "2021-12-23",
    venue: "Liars Club",
    venueLink: "https://www.facebook.com/liarsclubchicago/",
    time: "8pm",
    playingWith:
      "Rollo Tomasi, I Luv Rich. Annual I Luv Richmas Holiday Party!",
    location: "Chicago, IL USA",
    ticketUrl: "",
    facebookEventUrl: "https://www.facebook.com/events/308927907766064",
  },
  {
    date: "2021-12-10",
    venue: "Liars Club",
    venueLink: "https://www.facebook.com/liarsclubchicago/",
    time: "8pm",
    playingWith: "El Segundo, Viceroy",
    location: "Chicago, IL USA",
    ticketUrl: "",
    facebookEventUrl: "https://www.facebook.com/events/2116482021838783",
  },
  {
    date: "2021-11-07",
    venue: "Double Door",
    venueLink: "https://www.doubledoor.com/",
    time: "1pm (free show)",
    playingWith: "Canning, Autonaughts",
    location: "Chicago, IL USA",
    ticketUrl: "https://www.facebook.com/events/168285825506607",
    facebookEventUrl: "https://forms.gle/yoN4NAZfZzkHSe7Y8",
  },
  // {
  //   date: "2021-11-06",
  //   venue: "Reggies Live",
  //   venueLink: "https://www.reggieslive.com/",
  //   time: "7pm",
  //   playingWith: "Cactus",
  //   location: "Chicago, IL USA",
  //   ticketUrl:
  //     "https://www.ticketweb.com/event/cactus-reggies-banannas-comedy-shack-tickets/11240445",
  //   facebookEventUrl: "https://www.facebook.com/events/850162969206508",
  // },
  // {
  //   date: "2021-10-09",
  //   venue: "Reggies Live",
  //   venueLink: "https://www.reggieslive.com/",
  //   time: "8pm",
  //   playingWith: "Steepwater Band",
  //   location: "Chicago, IL USA",
  //   ticketUrl: "",
  //   facebookEventUrl: "",
  // },
  {
    date: "2021-07-10",
    venue: "Flatts and Sharpe Music Festival",
    venueLink: "https://www.flattsandsharpe.com/events",
    time: "4pm",
    playingWith: "Outlaw Family Band",
    location: "Chicago, IL USA",
    ticketUrl: "",
    facebookEventUrl: "",
  },
];

function formatDate(date) {
  return format(parseISO(date), "E MMM dd");
}

function ShowsGrid({
  date,
  venue,
  venueLink,
  time,
  playingWith,
  location,
  ticketUrl,
  facebookEventUrl,
}) {
  return (
    <div className="grid grid-cols-2 w-full text-lg my-10 md:my-20">
      <div className="flex flex-col md:flex-row justify-items-start w-full">
        <span className="pr-6 font-bold flex-1 uppercase">
          {formatDate(date)}
        </span>
        <div className="flex-1">
          <div>
            <ExternalLink url={venueLink}>{venue}</ExternalLink> @ {time}
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
  );
}

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
            image: "/images/2021-11-07/IMG_3808.jpg",
          },
        ]}
        style={{ height: "80vh" }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between pb-6 px-6">
          <p className="big-title pt-28">Tour</p>
          <h1 className="text-right">Dates</h1>
        </div>
      </ParallaxBanner>

      <Section isCentered>
        <h2>2022</h2>
        <div className="">
          {shows2022.map((show) => (
            <ShowsGrid {...show}></ShowsGrid>
          ))}
        </div>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div>
          <Image
            src="/images/2022-06-19_liars-club.jpeg"
            height={2100}
            width={1500}
          />

          <Image
            src="/images/2022-01-07-empty-bottle.jpeg"
            width={1000}
            height={1000}
          />

          <Image
            src="/images/2021-12-10-flyer__instagram.jpg"
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <Image
            src="/images/2022-03-30-instagram-grunge.jpeg"
            width={1000}
            height={1000}
          />
          <Image
            src="/images/2022-01-29-flyer-reggies.jpeg"
            width={875}
            height={1275}
          />
          <Image
            src="/images/2021-11-07-event2.jpg"
            width={1920}
            height={1005}
          />
        </div>
      </div>

      <Section isCentered>
        <h2>2021</h2>
        <div className="">
          {shows2021.map((show) => (
            <ShowsGrid {...show}></ShowsGrid>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
