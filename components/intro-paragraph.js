import React from "react";
import Section from "components/section";
import FandTS from "components/f-and-ts";
import ExternalLink from "components/external-link";

function IntroParagraph(props) {
  return (
    <Section isJustify isNarrow>
      <div className="lead-text text-center">
        <p>
          Dreamed up during our 2020 quarantine, <FandTS /> is an
          alt/garage/psych art project that experiments with music, videos,
          photography and reflects on what's going on in a world that just got
          fast-forwarded into the future, unexpectedly.
        </p>
        <p>
          In past and current lives members of the band have played, toured in,
          and/or recorded with{" "}
          <ExternalLink url="https://thelastvegas.com">
            The Last Vegas
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.steepwater.com/">
            The Steepwater Band
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://urgeoverkill.com/">
            Urge Overkill
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.gethip.com/site/artists/cynics/">
            The Cynics
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.warriorsoulofficial.com/">
            Warrior Soul
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.abbarama.com/">ABBARAMA</ExternalLink>,{" "}
          <ExternalLink url="https://en.wikipedia.org/wiki/The_Dogs_D%27Amour">
            Tyla and Dogs 'D Amour
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.facebook.com/EarlySound">
            Early Sound
          </ExternalLink>{" "}
          and others.
        </p>
        {/* <p>
            <FandTS /> has evolved from a bedroom studio project into a full
            live band. Now booking Europe &amp; USA.{" "}
            <Obfuscate
              email="furbabyferguson@gmail.com"
              headers={{
                subject: "Email from Furbaby.rocks",
              }}
            >
              Drop us a line
            </Obfuscate>
          </p> */}
      </div>
    </Section>
  );
}

export default IntroParagraph;
