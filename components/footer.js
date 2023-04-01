import ExternalLink from "./external-link";
import Link from "next/link";
import MailChimpForm from "components/mailchimp-form";
import React from "react";
import Section from "components/section";
import { distributors } from "social-media-manifest";

export const footerSocials = [
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
    <footer className="text-xl text-black uppercase bg-white md:text-2xl">
      <Section>
        <div className="flex flex-col md:flex-row md:pl-12">
          <ul className="flex-1">
            {footerSocials.map((item) => (
              <li key={item.url}>
                <ExternalLink url={item.url}>{item.label}</ExternalLink>
              </li>
            ))}
          </ul>
          <div className="flex-1 pb-10 mt-10 md:mt-0">
            <Link href="mailto:furbabyferguson@gmail.com">
              <a className="border-none">info@furbaby.rocks</a>
            </Link>
            <div>
              <MailChimpForm />
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}
