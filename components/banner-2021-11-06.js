import React from "react";
import Image from "next/image";
import LinkButton from "components/link-button";
import ExternalLink from "components/external-link";

const ticketLink =
  "https://www.ticketweb.com/event/cactus-reggies-banannas-comedy-shack-tickets/11240445";

function BannerCactus(props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/2021-11-06_cactus-fur-v1.jpg"
          alt="Furbaby with Cactus flyer"
          width="1267"
          height="624"
        />
        <div className="container text-center max-w-4xl">
          <LinkButton href={ticketLink} isExternal>
            Get Tickets
          </LinkButton>
          <p className="pt-10">
            Cactus is touring with the legendary drummer{" "}
            <ExternalLink url="https://en.wikipedia.org/wiki/Carmine_Appice">
              Carmine Appice
            </ExternalLink>{" "}
            (Vanilla Fudge, Rod Stewart, Cactus, Jeff Beck). The gig is in
            Reggies "Banana Shack", a showcase room featuring table seating and
            a safe, spaced environment. An incredible location to watch
            musicians, and we'll honored to play w/ these heavy-rock / blues
            legends.
          </p>
        </div>
      </div>
    </>
  );
}

export default BannerCactus;
