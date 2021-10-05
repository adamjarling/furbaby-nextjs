import Layout from "components/layout";
import { getAllPostIds, getPostData } from "lib/posts";
import Head from "next/head";
import Date from "components/date";
import Image from "next/image";
import Section from "components/section";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
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

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>{postData.title}</Head>
      <div className="container">
        <div className="pt-24 md:pt-16 pb-6">
          <Image
            src={`/images/posts/${postData.coverImage}`}
            alt={postData.title}
            layout="responsive"
            width={1366}
            height={768}
          />
        </div>

        <h1>{postData.title}</h1>

        <p>
          <Date dateString={postData.date} />
        </p>

        <div
          className="break-words"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </Layout>
  );
}
