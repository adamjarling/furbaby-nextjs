import React from "react";
import MailChimpForm from "components/mailchimp-form";
import Link from "next/link";
import Section from "components/section";
import ExternalLink from "./external-link";
import { distributors } from "social-media-manifest";

const footerSocials = [
  {
    label: "Instagram",
    url: distributors.instagram,
  },
  {
    label: "YouTube",
    url: distributors.youTubeChannel,
  },
  {
    label: "Spotify",
    url: distributors.spotify,
  },
  {
    label: "Facebook",
    url: distributors.facebook,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-black uppercase text-xl md:text-2xl">
      <Section>
        <div className="flex flex-col md:flex-row pl-6 md:pl-12">
          <div className="pb-10 flex-1">
            <Link href="mailto:furbabyferguson@gmail.com">
              <a className="border-none">info@furbaby.rocks</a>
            </Link>
          </div>
          <ul className="flex-1">
            {footerSocials.map((item) => (
              <li key={item.url}>
                <ExternalLink url={item.url}>{item.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </div>

        {/* <MailChimpForm /> */}
      </Section>
    </footer>
  );
}
