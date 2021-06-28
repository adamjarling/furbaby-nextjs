import Head from "next/head";
import Layout from "components/layout";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";
import ExternalLink from "components/external-link";
import Section from "components/section";

export default function Shows() {
  return (
    <Layout>
      <ParallaxBanner
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
      </ParallaxBanner>

      <Section>
        <div className="aspect-w-12 aspect-h-16">
          <ExternalLink url="https://www.facebook.com/events/500774671119331">
            <img
              src="/images/flyer-2021-07-10.jpeg"
              alt="Furbaby and the Tight Spaces at Flatts and Sharpe Music Festival"
            />
          </ExternalLink>
        </div>
      </Section>
    </Layout>
  );
}
