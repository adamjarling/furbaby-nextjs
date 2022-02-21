import Head from "next/head";
import Layout from "components/layout";
import Section from "components/section";
import Link from "next/link";
import { getSortedPostsData } from "lib/posts";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const photoDefault = {
  src: "",
  alt: "",
  width: 1000,
  height: 1000,
  credit: "",
  creditUrl: "#",
};

const photosLeft = [
  {
    ...photoDefault,
    src: "photos/IMG_005 Large.jpeg",
    alt: "Furbaby at Empty Bottle",
    width: 1280,
    height: 853,
  },
  {
    ...photoDefault,
    src: "photos/20211210_222957.jpeg",
    alt: "Furbaby at Empty Bottle",
    width: 4000,
    height: 2252,
    credit: "Mako",
  },
  {
    ...photoDefault,
    src: "photos/IMG_010 Large.jpeg",
    alt: "Furbaby at Empty Bottle",
    width: 1280,
    height: 853,
    credit: "",
  },
  {
    ...photoDefault,
    src: "photos/IMG_3805.jpg",
    alt: "Furbaby at Double Door",
    width: 2000,
    height: 2585,
    credit: "",
  },
  {
    ...photoDefault,
    src: "photos/Fur6.jpg",
    alt: "Furbaby at Flatts and Sharpe Festival",
    width: 4240,
    height: 2832,
    credit: "",
  },
];

const photosRight = [
  {
    ...photoDefault,
    src: "photos/IMG_3802.jpg",
    alt: "Furbaby at Double Door Chicago",
    width: 1880,
    height: 2400,
    credit: "Casey Murtaugh",
  },
  {
    ...photoDefault,
    src: "photos/IMG_006 Large.jpeg",
    alt: "Furbaby at Empty Bottle",
    width: 1280,
    height: 853,
  },
  {
    ...photoDefault,
    src: "photos/IMG_0393-crop.jpg",
    alt: "Furbaby at Reggies Chicago",
    width: 3123,
    height: 2947,
    credit: "",
  },
  {
    ...photoDefault,
    src: "photos/IMG_017 Large.jpeg",
    alt: "Furbaby at Empty Bottle",
    width: 1280,
    height: 853,
  },
];

export default function Press({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Photos - Furbaby & the Tight Spaces</title>
      </Head>

      <Section>
        <div className="grid grid-cols-1 md-grid-cols-2 xl:grid-cols-2 w-full mt-24">
          <div>
            {photosLeft.map(
              ({ src, width, height, alt, credit, creditUrl }) => (
                <Image
                  src={`/images/${src}`}
                  width={width}
                  height={height}
                  alt={alt}
                />
              )
            )}
          </div>
          <div>
            {photosRight.map(
              ({ src, width, height, alt, credit, creditUrl }) => (
                <Image
                  src={`/images/${src}`}
                  width={width}
                  height={height}
                  alt={alt}
                />
              )
            )}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
