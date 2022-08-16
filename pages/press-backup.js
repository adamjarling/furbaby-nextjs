import Head from "next/head";
import Layout from "components/layout";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";
import ExternalLink from "components/external-link";
import Section from "components/section";
import BannerReggies from "components/banner-2021-10-08";
import Link from "next/link";
import { getSortedPostsData } from "lib/posts";
import Date from "components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Press({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Press - Furbaby & the Tight Spaces</title>
      </Head>

      <Section isCentered isNarrow>
        <div className="mt-24 text-center">
          {allPostsData.map(
            ({ id, coverImage, date, title, tagLine, externalUrl }) => (
              <article key={id} className="pb-28">
                <p>
                  <Date dateString={date} />
                </p>
                <h2 className="leading-normal">
                  {/* {externalUrl ? (
                    <ExternalLink url={externalUrl}>
                      <a className="border-none">{title}</a>
                    </ExternalLink>
                  ) : (
                    <Link href={`posts/${id}`}>
                      <a className="border-none">{title}</a>
                    </Link>
                  )} */}
                  <Link href={`posts/${id}`}>
                    <a className="border-none">{title}</a>
                  </Link>
                </h2>
              </article>
            )
          )}
        </div>
      </Section>
    </Layout>
  );
}
