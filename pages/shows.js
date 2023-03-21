import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { format, parseISO } from "date-fns";

import ExternalLink from "components/external-link";
import Head from "next/head";
import Image from "next/image";
import Layout from "components/layout";
import LinkButton from "components/link-button";
import PromoDownloads from "components/promo-downloads";
import Section from "components/section";

const shows2023 = [
  {
    date: "2023-05-17",
    venue: "Liars Club",
    venueLink: "https://www.facebook.com/liarsclubchicago",
    time: "8pm",
    playingWith: "The Claws, Jeff Massey (solo)",
    location: "Chicago USA",
    ticketUrl: "https://buy.stripe.com/28ocOV9nDbNzcKc9AA",
    facebookEventUrl: "https://www.facebook.com/events/632789461993630",
  },
  {
    date: "2023-01-25",
    venue: "Reggies Music Joint",
    venueLink: "https://www.reggieslive.com/",
    time: "8pm",
    playingWith: "Jason Kane and the Jive",
    location: "Chicago USA",
    ticketUrl: "#",
    facebookEventUrl: "",
  },
];

export const spainShows = [
  {
    date: "2022-09-23",
    venue: "La Gramola",
    venueLink: "https://www.lagramola.com/html/lagramola.html",
    time: "23:00",
    playingWith: "",
    location: "Orihuela, España",
    ticketUrl: "#",
    facebookEventUrl: "https://fb.me/e/2l0PIUb6E",
  },
  {
    date: "2022-09-24",
    venue: "Louie Louie",
    venueLink: "https://louielouierockbar.com/",
    time: "23:30",
    playingWith: "",
    location: "Estepona, España",
    ticketUrl:
      "https://www.woutick.es/evento/23715/entradas-furbaby-and-the-tight-spaces",
    facebookEventUrl: "https://fb.me/e/2R58bjoEN",
  },
  {
    date: "2022-09-25",
    venue: "RocknRolla",
    venueLink: "https://www.facebook.com/rocknrollagranada",
    time: "22:00",
    playingWith: "",
    location: "Granada, España",
    ticketUrl: "#",
    facebookEventUrl: "https://fb.me/e/2OKc51FhO",
  },
  {
    date: "2022-09-27",
    venue: "Rock Beer the New",
    venueLink:
      "https://www.facebook.com/pages/Rock-Beer-the-New-santander/174324646033480",
    time: "21:00",
    playingWith: "",
    location: "Santander, España",
    ticketUrl: "#",
    facebookEventUrl: "https://fb.me/e/2See4hlUP",
  },
  {
    date: "2022-09-28",
    venue: "El Gran Café",
    venueLink: "https://www.facebook.com/ELGRANCAFELEON",
    time: "22:00",
    playingWith: "",
    location: "León, España",
    ticketUrl:
      "https://entradium.com/es/events/furbaby-and-the-tight-spaces-en-leon",
    facebookEventUrl: "https://fb.me/e/oFfe4UAq8",
  },
  {
    date: "2022-09-29",
    venue: "La Nube Café Teatro",
    venueLink: "https://www.facebook.com/LaNubeCafeTeatro",
    time: "20:30",
    playingWith: "",
    location: "Bilbao, España",
    ticketUrl: "#",
    facebookEventUrl: "https://fb.me/e/1MiRLSACL",
  },
  {
    date: "2022-09-30",
    venue: "Sala Corleone",
    venueLink: "https://www.facebook.com/salacorleone",
    time: "23:00",
    playingWith: "",
    location: "Sabiñánigo, España",
    ticketUrl:
      "https://www.wegow.com/es-es/conciertos/furbaby-the-tight-spaces-en-sabinanigo",
    facebookEventUrl: "https://fb.me/e/2f0BbTM6A",
  },
  {
    date: "2022-10-01",
    venue: "Cal Jou Conques",
    venueLink: "https://www.facebook.com/caljouconques",
    time: "19:00",
    playingWith: "",
    location: "Lleida, España",
    ticketUrl: "#",
    facebookEventUrl: "https://fb.me/e/4ZTCyF7iY",
  },
  {
    date: "2022-10-02",
    venue: "Sala Porto Caeli",
    venueLink: "https://www.facebook.com/salaportacaeli",
    time: "20:00",
    playingWith: "",
    location: "Valladolid, España",
    ticketUrl: "https://salaportacaeli.com/conciertos-2/furbaby/",
    facebookEventUrl: "https://fb.me/e/5JjS0kqU1",
  },
  {
    date: "2022-10-03",
    venue: "Cafe Cultural Auriense",
    venueLink: "https://www.facebook.com/cafeauriense",
    time: "21:00",
    playingWith: "",
    location: "Ourense, España",
    ticketUrl: "#",
    facebookEventUrl: "#",
  },
];

const shows2022 = [
  ...spainShows.reverse(),
  {
    date: "2022-09-02",
    venue: "Liars Club",
    venueLink: "https://www.facebook.com/liarsclubchicago/",
    time: "22:00",
    playingWith: "",
    location: "Chicago USA",
    ticketUrl: "#",
    facebookEventUrl: "#",
  },
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
    ticketUrl: "#",
    facebookEventUrl: "#",
  },
];

function formatDate(date) {
  return format(parseISO(date), "E MMM dd");
}

export function ShowsGrid({
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
    <div className="grid w-full grid-cols-2 my-10 text-lg md:my-20">
      <div className="flex flex-col w-full md:flex-row justify-items-start">
        <span className="flex-1 pr-6 font-bold uppercase">
          {formatDate(date)}
        </span>
        <div className="flex-1">
          <div>
            <ExternalLink url={venueLink}>{venue}</ExternalLink> @ {time}
          </div>
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
        style={{ height: "60vh" }}
      >
        <div className="absolute inset-0 bg-fur-red mix-blend-multiply" />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between px-6 pb-6">
          <p className="big-title pt-28">Tour</p>
          <h1 className="text-right">Dates</h1>
        </div>
      </ParallaxBanner>

      <Section isCentered>
        <h2>2023</h2>
        <div className="">
          {[...shows2023].map((show) => (
            <ShowsGrid {...show}></ShowsGrid>
          ))}
        </div>
        <h2>2022</h2>
        <div className="">
          {[...shows2022].map((show) => (
            <ShowsGrid {...show}></ShowsGrid>
          ))}
        </div>
        <LinkButton href="/press">Download Tour Kit</LinkButton>
      </Section>

      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src="/images/spain2022/lestrato-poster-2022-08-17_v2.jpg"
            width="842"
            height="1191"
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
          <Image
            src="/images/2021-11-07-event2.jpg"
            width={1920}
            height={1005}
          />
        </div>
        <div>
          <Image
            src="/images/2022-06-19_liars-club.jpeg"
            height={2100}
            width={1500}
          />
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
        </div>
      </div>

      <div className="bg-white">
        <Section>
          <PromoDownloads />
        </Section>
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
