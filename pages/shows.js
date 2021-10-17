import Head from "next/head";
import Layout from "components/layout";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";
import ExternalLink from "components/external-link";
import Section from "components/section";
import LinkButton from "components/link-button";
import Image from "next/image";
import reggiesPoster from "public/images/Oct8SteepwaterIG.jpg";
import BannerReggies from "components/banner-2021-10-08";

const shows = [
  // {
  //   date: "September 3, 2021",
  //   venue: "Cubby Bear - Multiple Sclerosis Benefit",
  //   location: "Chicago, IL",
  //   ticketUrl: "",
  // },
  {
    date: "July 10, 2021",
    venue: "Flatts and Sharpe Music Festival",
    location: "Chicago, IL",
    ticketUrl: "",
  },
];

export default function Shows() {
  return (
    <Layout>
      <Head>
        <title>Shows - Furbaby & the Tight Spaces</title>
      </Head>
      {/* <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: "/images/banner-lake.jpg",
          },
        ]}
        style={{ height: "50vh" }}
      >
        <ParallaxBannerChildren>
          <div className="container flex flex-col items-center">
            <h2 className="banner-headline">Shows</h2>
          </div>
        </ParallaxBannerChildren>
      </ParallaxBanner> */}

      <Section isCentered>
        <div className="mt-24">
          <h1 className="text-center">Tour Dates</h1>
          <ul className="w-full">
            <li className="flex flex-col py-12 items-center">
              <h3>November 6, 2021</h3>
              <span className="flex-grow-2">
                <ExternalLink url="https://www.reggieslive.com/">
                  Reggies Chicago
                </ExternalLink>
              </span>
              <span className="my-2">w/ Cactus!</span>
              <span className="mt-2">
                7pm doors. Ages 21+ Seated ticket $55
              </span>
              <span>Chicago, IL</span>
              <div className="mt-6">
                <LinkButton href="https://www.ticketweb.com/event/cactus-reggies-banannas-comedy-shack-tickets/11240445">
                  Buy Tickets
                </LinkButton>
              </div>
            </li>
            <li className="flex flex-col py-6 items-center">
              <h3>October 8, 2021</h3>
              <span className="flex-grow-2">
                <ExternalLink url="https://www.reggieslive.com/">
                  Reggies Rock Room
                </ExternalLink>
              </span>
              <span className="mt-2">8pm doors. Ages 17+</span>
              <span>Chicago, IL</span>
              {/* <div className="mt-6">
              <LinkButton href="https://www.ticketweb.com/event/the-steepwater-band-reggies-rock-club-tickets/11345365">
                Buy Tickets
              </LinkButton>
            </div> */}
              <div className="max-w-sm mt-8">
                <Image src={reggiesPoster} />
              </div>
              <div className="pt-6">
                <BannerReggies />
              </div>
            </li>
            {shows.map((show) => (
              <li key={show.date} className="flex flex-col py-6 items-center">
                <h3>{show.date}</h3>
                <span className="flex-grow-2">{show.venue}</span>
                <span>{show.location}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </Layout>
  );
}
