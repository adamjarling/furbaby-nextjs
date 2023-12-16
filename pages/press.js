import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { format, parseISO } from "date-fns";

import ExternalLink from "components/external-link";
import Head from "next/head";
import Image from "next/image";
import Layout from "components/layout";
import Obfuscate from "react-obfuscate";
import ParallaxBannerChildren from "components/parallax-banner-children";
import PromoDownloads from "components/promo-downloads";
import Section from "components/section";
import SplashVideos from "components/splash-videos";

function formatDate(date) {
  return format(parseISO(date), "E MMM dd");
}

export default function Press() {
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
        style={{ height: "60vh" }}
      >
        <div className="absolute inset-0 bg-fur-blue mix-blend-multiply" />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end px-6 pb-6">
          <h1 className="text-right">Press Pack</h1>
        </div>
      </ParallaxBanner>

      <Section>
        <div className="mb-10 text-3xl text-center">
          <figure className="mb-10">
            <blockquote>
              <p className="leading-tight">
                “Rising Stars” featured artist showcase.
              </p>
            </blockquote>
            <figcaption className="text-xl">
              — <cite>Get Ready to Rock UK</cite>
            </figcaption>
          </figure>
          <figure className="mb-10">
            <blockquote>
              <p className="leading-tight">
                &quot;...innate garage-rock swagger. Rich in Redd
                Kross-recalling melodic sensibility.&quot;
              </p>
            </blockquote>
            <figcaption className="text-xl">
              — <cite>Classic Rock Magazine</cite>
            </figcaption>
          </figure>
          <figure className="mb-10">
            <blockquote>
              <p className="leading-tight">
                It&apos;s time to swipe right on Furbaby and the Tight Spaces”.
              </p>
            </blockquote>
            <figcaption className="text-xl">
              — Paul Davies <cite>Decibel Report UK</cite>
            </figcaption>
          </figure>
        </div>
        <h2>About</h2>
        <div className="text-sm md:text-base">
          <p>
            THIS SEPTEMBER, Furbaby and the Tight Spaces will make their live
            debut in Spain, embarking on a tour that will consist of nine shows
            in cities ranging from the south coast to Basque Country, and many
            in between.{" "}
          </p>
          <p>
            Formed during the pandemic lockdown of 2020 by Adam Arling,
            guitarist / founding member of The Last Vegas, current bassist of
            Urge Overkill, and touring guitarist for Warrior Soul, Furbaby and
            the Tight Spaces initially began as a recording project collective
            of (mostly) Chicago musicians, serving as a vehicle for Arling’s
            solo songwriting and musical vision.{" "}
          </p>
          <p>
            Early on, Adam enlisted his old friend Joe Winters from The
            Steepwater Band to play some drums in the studio, and after a series
            of streaming singles / videos, the debut full length self-titled
            album was released and distributed via{" "}
            <a
              target="_blank"
              href="https://cargorecordsdirect.co.uk/products/furbaby-the-tight-spaces-furbaby-the-tight-spaces"
            >
              Cargo Records UK
            </a>{" "}
            in 2021.{" "}
          </p>
          <p>
            With creativity, friendship and FUN as the focus, a live band was
            formed that same year featuring a revolving cast of prominent
            Chicago musicians, alongside Adam & Joe.{" "}
          </p>
          <p>
            With a handful of Chicago USA gigs under their belt, the group of
            longtime friends set their sights on traveling together and taking
            the new music to audiences abroad, with the first desired
            destination being a place near and dear to them over their many
            collective years of touring with their own respective bands.
          </p>
          <p>
            “I’m stoked to get this opportunity to tour in Spain with some of my
            favorite musician buddies from Chicago, and present this cool new
            project that in so many ways has been a labor of love for me,
            because it allowed me to stay loose and creative during what was
            such a difficult time in our lives,” said Winters, who recently
            completed a successful eleven show tour there with The Steepwater
            Band back in May 2022.{" "}
          </p>
          <p>
            Arling, who’s last treks in Spain were with The Last Vegas 2016,
            Urge Overkill 2017 and Warrior Soul 2018 added, “It is exciting to
            share Furbaby and the Tight Space’s first touring experience with
            the wild souls of Spain. Joe and I have been deeply influenced by
            rocking quite a few Spanish stages. Now we get to perform together
            and create an evening of rock, blues, garage, and psych til you just
            can’t take it anymore!”{" "}
          </p>
          <p>
            With a second record already in the works, Furbaby and the Tight
            Spaces is just getting started, as plans are being made for more
            European touring in 2023. For all the lowdown on the band, be sure
            to check out www.furbaby.rocks. See ya in España!{" "}
          </p>
          <p>Furbaby and the Tight Spaces / Spanish Tour ‘22 </p>
          <p>
            23 Sept Cádiz 24 Sept – Louie Louie, Estepona 25 Sept – Rocknrolla
            Club, Granada 27 Sept – Rock Beer The New, Santander 28 Sept – El
            Gran Café, León 29 Sept – La Nube, Bilbao 30 Sept – Sala Corleone,
            Sabiñánigo 1 Oct – Cal Jou Conques, Lleida 2 Oct – Porta Caeli,
            Valladolid 3 Oct – Café Cultural Auriense, Ourense
          </p>
          <p>
            For press inquiries please contact:{" "}
            <Obfuscate
              email="press@furbaby.rocks"
              headers={{
                subject: "Email from Furbaby.rocks",
              }}
            >
              press@furbaby.rocks
            </Obfuscate>
          </p>
        </div>

        <h2 className="mt-10">Videos</h2>
        <SplashVideos />

        <h2 className="mt-10">Promo Material</h2>
        <div className="text-black bg-white">
          <PromoDownloads />
        </div>
      </Section>
    </Layout>
  );
}
