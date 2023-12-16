import Date from "../components/date";
import { FaArrowRight } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Link from "next/link";
import Section from "../components/section";
import { getSortedPostsData } from "../lib/posts";

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
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
          {allPostsData.map(({ id, coverImage, date, title, tagLine }) => (
            <div key={id} className="text-black bg-white">
              <Link href={`posts/${id}`}>
                <Image
                  src={`/images/posts/${coverImage}`}
                  alt={`ho`}
                  width={1366}
                  height={768}
                  layout="responsive"
                />
              </Link>

              <div className="p-4">
                <h3 className="black">{title}</h3>
                <p>
                  <Date dateString={date} />
                </p>
                {/* <p>{tagLine}</p> */}
                <Link
                  href={`posts/${id}`}
                  className="inline-flex items-center text-gray-700 uppercase border-gray-800 hover:text-black"
                >
                  <span className="pr-3">Read More</span> <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
