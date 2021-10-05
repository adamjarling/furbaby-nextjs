import Head from "next/head";
import Layout from "components/layout";
import SplashSingles from "components/splash-singles";
import { singles } from "components/splash-singles";
import Image from "next/image";
import Section from "components/section";
import LinkButton from "components/link-button";
import classNames from "classnames";

export default function Music() {
  function isEvenRow(i) {
    return i % 2 > 0 && i !== 0;
  }

  return (
    <Layout>
      <Head>
        <title>Music - Furbaby & the Tight Spaces</title>
      </Head>

      <div className="pt-36">
        <Section>
          {singles.map((single, i) => (
            <figure
              key={single.src}
              className={classNames(
                "flex flex-col md:flex-row md:justify-between mb-24",
                {
                  "md:flex-row-reverse": isEvenRow(i),
                }
              )}
            >
              <div className="flex-1">
                <Image
                  src={`/images/${single.src}`}
                  alt={single.title}
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </div>

              <div className="flex flex-1 items-center min-h-full">
                <div
                  className={classNames({
                    "md:pl-20": !isEvenRow(i),
                    "md:pr-20": isEvenRow(i),
                  })}
                >
                  <h2 className="pb-0 pt-8 md:p-0">{single.title}</h2>
                  <p className="uppercase py-6 md:py-12">
                    Single - {single.year}
                  </p>
                  <LinkButton isExternal href={single.manifestItems.spotify}>
                    Listen
                  </LinkButton>
                </div>

                {/* <div className="flex justify-evenly items-center text-2xl mt-3 mb-6">
              <ExternalLink url={single.manifestItems.spotify}>
                <FaSpotify />
              </ExternalLink>
              <ExternalLink url={single.manifestItems.youTubeMusic}>
                <FaYoutube />
              </ExternalLink>
              <ExternalLink url={single.manifestItems.appleMusic}>
                <FaApple />
              </ExternalLink>
              <ExternalLink url={single.manifestItems.amazonMusic}>
                <FaAmazon />
              </ExternalLink>
              </div> */}
              </div>
            </figure>
          ))}
        </Section>
      </div>
    </Layout>
  );
}
