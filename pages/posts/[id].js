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
      <Section>
        <div className="relative">
          <Image
            src={`/images/${postData.coverImage}`}
            alt={`ho`}
            layout="responsive"
            width={300}
            height={200}
          />
        </div>

        {postData.title}
        <br />
        {postData.id}
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Section>
    </Layout>
  );
}
