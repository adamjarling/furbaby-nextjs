import Layout from "components/layout";
import { getAllPostIds, getPostData } from "lib/posts";
import Head from "next/head";
import Date from "components/date";
import Image from "next/image";
import Section from "components/section";
import { getSortedPostsData } from "lib/posts";
import Link from "next/link";
import ExternalLink from "components/external-link";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData();

  return {
    props: {
      postData,
      allPostsData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, allPostsData }) {
  const currentIndex = allPostsData.findIndex(
    (item) => item.id === postData.id
  );

  const renderPrev = () => {
    const prevIndex =
      currentIndex === 0 ? allPostsData.length - 1 : currentIndex - 1;
    const prev = allPostsData[prevIndex];

    if (prev.externalUrl)
      return <ExternalLink url={prev.externalUrl}>{prev.title}</ExternalLink>;
    return <Link href={`/posts/${prev.id}`}>{prev.title}</Link>;
  };

  const renderNext = () => {
    const nextIndex =
      currentIndex === allPostsData.length - 1 ? 0 : currentIndex + 1;
    const next = allPostsData[nextIndex];

    if (next.externalUrl)
      return <ExternalLink url={next.externalUrl}>{next.title}</ExternalLink>;
    return <Link href={`/posts/${next.id}`}>{next.title}</Link>;
  };

  return (
    <Layout>
      <Head>{postData.title}</Head>
      <div className="pt-24">
        <ParallaxBanner
          layers={[
            {
              amount: 0.2,
              image: `/images/posts/${postData.coverImage}`,
            },
          ]}
          style={{ height: "90vh" }}
        >
          <ParallaxBannerChildren>
            <div>
              <p className="text-center bg-black p-1 bg-opacity-90">
                <Date dateString={postData.date} />
              </p>
              <h1 className="text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-relaxed py-8 lg:py-12 xl:py-16">
                <span className="bg-black p-1 bg-opacity-90">
                  {postData.title}
                </span>
              </h1>
            </div>
          </ParallaxBannerChildren>
        </ParallaxBanner>
        <Section isSkinny>
          {/*
          <p className="text-center">
            <Date dateString={postData.date} />
          </p>
          <h1 className="text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-relaxed py-8 lg:py-12 xl:py-16">
            {postData.title}
          </h1>
           <div className="pb-6 relative h-96">
              <Image
                src={`/images/posts/${postData.coverImage}`}
                alt={postData.title}
                layout="fill"
                objectFit="contain"
              />
            </div> */}
          <div
            className="break-words"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </Section>
        <nav className="px-6 py-6 md:px-12 md:py-12 flex justify-between uppercase md:text-xl w-full">
          <div className="max-w-sm">{renderPrev()}</div>
          <div className="max-w-sm text-right">{renderNext()}</div>
        </nav>
      </div>
    </Layout>
  );
}
