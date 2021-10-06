import Head from "next/head";
import Layout from "components/layout";
import { getSortedPostsData } from "lib/posts";
import Section from "components/section";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Date from "components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function News({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>News - Furbaby & the Tight Spaces</title>
      </Head>

      <Section>
        <h2 className="mt-20">News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {allPostsData.map(({ id, coverImage, date, title, tagLine }) => (
            <div key={id} className="bg-white text-black">
              <Link href={`posts/${id}`}>
                <a>
                  <Image
                    src={`/images/posts/${coverImage}`}
                    alt={`ho`}
                    width={1366}
                    height={768}
                    layout="responsive"
                  />
                </a>
              </Link>

              <div className="p-4">
                <h3 className="black">{title}</h3>
                <p>
                  <Date dateString={date} />
                </p>
                {/* <p>{tagLine}</p> */}
                <Link href={`posts/${id}`}>
                  <a className="border-gray-800 inline-flex items-center text-gray-700 hover:text-black uppercase">
                    <span className="pr-3">Read More</span> <FaArrowRight />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
