import Head from "next/head";
import Layout from "components/layout";
import { getSortedPostsData } from "lib/posts";
import Section from "components/section";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
        <h2 className="mt-10">News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {allPostsData.map(({ id, coverImage, date, title }) => (
            <div className="bg-white text-black">
              <Image
                src={`/images/${coverImage}`}
                alt={`ho`}
                width={300}
                height={200}
                layout="responsive"
              />
              <div className="p-4">
                <h3 className="black">{title}</h3>
                <p>
                  Move posts avoid perhaps. Spiders above see wish comments
                  purposes. Lot reason around no by so pointing to is fifteen.
                  Don’t link possible which see...
                </p>
                <Link href={`posts/${id}`}>
                  <a>
                    Read More <FaArrowRight />
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
