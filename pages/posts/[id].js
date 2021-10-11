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
import LinkButton from "components/link-button";

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

    // if (prev.externalUrl)
    //   return <ExternalLink url={prev.externalUrl}>{prev.title}</ExternalLink>;
    return <Link href={`/posts/${prev.id}`}>{prev.title}</Link>;
  };

  const renderNext = () => {
    const nextIndex =
      currentIndex === allPostsData.length - 1 ? 0 : currentIndex + 1;
    const next = allPostsData[nextIndex];

    // if (next.externalUrl)
    //   return <ExternalLink url={next.externalUrl}>{next.title}</ExternalLink>;
    return <Link href={`/posts/${next.id}`}>{next.title}</Link>;
  };

  return (
    <Layout>
      <Head>{postData.title}</Head>
      <div className="relative pt-32">
        <Image
          src={`/images/posts/${postData.coverImage}`}
          alt={postData.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0 opacity-30"
        />
        <p className="text-center z-1">
          <Date dateString={postData.date} />
        </p>
        <h1 className="relative z-1 text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight md:leading-relaxed py-8 lg:py-12 xl:py-16">
          {postData.title}
        </h1>
      </div>

      <Section isSkinny>
        <div
          className="z-1 break-words"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />

        {postData.externalUrl && (
          <div className="text-center pt-8">
            <LinkButton href={postData.externalUrl} isExternal>
              Read Full Article
            </LinkButton>
          </div>
        )}
      </Section>
      <nav className="px-6 py-6 md:px-12 md:py-12 flex justify-between uppercase md:text-xl w-full">
        <div className="max-w-sm">{renderPrev()}</div>
        <div className="max-w-sm text-right">{renderNext()}</div>
      </nav>
    </Layout>
  );
}
