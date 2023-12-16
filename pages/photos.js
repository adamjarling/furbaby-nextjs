import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Link from "next/link";
import Masonry from "react-masonry-css";
import Section from "../components/section";

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1,
};

const photoDefault = {
  src: "",
  alt: "",
  width: 1000,
  height: 1000,
};

const photos = [
  {
    ...photoDefault,
    src: "/images/spain2022/IMG_0723.JPG",
    alt: "Live in Valladolid, Spain",
    width: 2048,
    height: 1152,
    caption: `Photo by: <a href="https://www.facebook.com/slapyto" target="_blank">Juan Carlos Slap</a>`,
  },
  {
    ...photoDefault,
    src: "/images/photos/IMG_017 Large.jpeg",
    alt: "Furbaby at Empty Bottle",
    width: 1280,
    height: 853,
    caption: "Photo by: ____",
  },
  {
    ...photoDefault,
    src: "/images/spain2022/lestrato-poster-2022-08-17_v2.jpg",
    alt: "Spain Tour 2022",
    width: 842,
    height: 1191,
  },
  {
    ...photoDefault,
    src: "/images/photos/t-shirt-making2.jpg",
    alt: "Tour T Shirts",
    width: 1339,
    height: 1800,
  },
  {
    ...photoDefault,
    src: "/images/spain2022/ouriense.jpeg",
    alt: "Post show in Oriense, Spain",
    width: 2048,
    height: 1287,
    caption: `Photo by: <a href="https://www.facebook.com/lestrato.rockconciertos" target="_blank">Lestrato Conciertos</a>`,
  },
  {
    ...photoDefault,
    src: "/images/spain2022/310739455_507759174694806_1494440238769575806_n.jpeg",
    alt: "Tony Mac killing it",
    width: 2048,
    height: 1365,
    caption: `Photo by: <a href="https://www.facebook.com/lestrato.rockconciertos" target="_blank">Lestrato Conciertos</a>`,
  },

  {
    ...photoDefault,
    src: "/images/spain2022/IMG_0670.jpg",
    alt: "Furbaby Spain 2022 Tour",
    width: 1600,
    height: 2133,
    caption: "",
  },
  {
    ...photoDefault,
    src: "/images/photos/IMG_3805.jpg",
    alt: "Furbaby at Double Door",
    width: 2000,
    height: 2585,
    caption: "Photo: Casey Murtaugh",
  },
  {
    ...photoDefault,
    src: "/images/photos/IMG_005 Large.jpeg",
    alt: "Furbaby at Empty Bottle",
    width: 1280,
    height: 853,
  },
  {
    ...photoDefault,
    src: "/images/photos/20211210_222957.jpeg",
    alt: "Furbaby at Empty Bottle",
    width: 4000,
    height: 2252,
    caption: "Photo: Mako",
  },
  {
    ...photoDefault,
    src: "/images/spain2022/BD10E395-DBAF-4C5D-91E6-21A621A6C0F8.JPG",
    alt: "Live Merch Selling",
    width: 1440,
    height: 1212,
    caption: "Photo: Mako",
  },
  {
    ...photoDefault,
    src: "/images/photos/IMG_010 Large.jpeg",
    alt: "Furbaby at Empty Bottle",
    width: 1280,
    height: 853,
    caption: "",
  },
  {
    ...photoDefault,
    src: "/images/spain2022/merch.jpg",
    alt: "Merch Table",
    width: 1800,
    height: 1126,
    caption: `Photo by: <a href="https://www.instagram.com/bikerchickie_m/" target="_blank">Mako</a>`,
  },
  {
    ...photoDefault,
    src: "/images/photos/IMG_3802.jpg",
    alt: "Furbaby at Double Door Chicago",
    width: 1880,
    height: 2400,
    caption: "Casey Murtaugh",
  },
  {
    ...photoDefault,
    src: "/images/photos/DSC05285.JPG",
    alt: "Furbaby at Liars Club",
    width: 6000,
    height: 3376,
  },

  {
    ...photoDefault,
    src: "/images/photos/Fur6.jpg",
    alt: "Furbaby at Flatts and Sharpe Festival",
    width: 4240,
    height: 2832,
    caption: "",
  },

  {
    ...photoDefault,
    src: "/images/spain2022/IMG_0726.JPG",
    alt: "Live in Valladolid, Spain",
    width: 2048,
    height: 1152,
    caption: `Photo by: <a href="https://www.facebook.com/slapyto" target="_blank">Juan Carlos Slap</a>`,
  },
  {
    ...photoDefault,
    src: "/images/photos/liars-june-2022.jpg",
    alt: "Furbaby at Empty Bottle",
    width: 2275,
    height: 1677,
  },
  {
    ...photoDefault,
    src: "/images/photos/IMG_0393-crop.jpg",
    alt: "Furbaby at Reggies Chicago",
    width: 3123,
    height: 2947,
    caption: "",
  },
];

export default function Photos() {
  return (
    <Layout>
      <Head>
        <title>Photos - Furbaby and the Tight Spaces</title>
      </Head>

      <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: "/images/photos/IMG_3804.jpg",
          },
        ]}
        style={{ height: "40vh" }}
      >
        {/* <div className="absolute inset-0 bg-fur-pink mix-blend-multiply" /> */}
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end px-6 pb-6">
          <h1 className="text-right">Photos</h1>
        </div>
      </ParallaxBanner>

      <div className="bg-gradient-to-t from-black to-fur-pink">
        <Gallery withCaption>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {photos.map((photo) => (
              <Item
                key={photo.src}
                original={photo.src}
                thumbnail={photo.src}
                width={photo.width}
                height={photo.height}
                caption={photo.caption || ""}
              >
                {({ ref, open }) => (
                  <>
                    <img ref={ref} onClick={open} src={photo.src} />
                  </>
                )}
              </Item>
            ))}
          </Masonry>
        </Gallery>
        {/* <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <div className="p-4 text-center">
            <a
              href="https://drive.google.com/file/d/1THb8WOjqd4WOOG2_LSeGdbki2RWH_7dH/view?usp=sharing"
              className="p-2 border-2 border-white"
            >
              <img alt="Fur logo" src="/images/epk/f-and-ts-logo__black.png" />
              <span className="">Download logo black</span>
            </a>
          </div>
          <div className="p-4 text-center bg-black">
            <a href="https://drive.google.com/file/d/1GvSJMP04rxH5T758iHc16fM3avAS2Zs_/view?usp=sharing">
              <img
                alt="Fur logo"
                src="/images/epk/furbaby-and-ts-logo_white.png"
              />
              <span className="text-white">Download logo white</span>
            </a>
          </div>
          <div className="text-center">
            <a href="https://drive.google.com/file/d/1ChRGMG2b9W-GDcyyvU0RzSjZU_bNBRGE/view?usp=sharing">
              <img src="/images/photo-triangle-wall-hi-res.jpg" />
              <span>Download</span>
            </a>
          </div>
          <div className="text-center">
            <a href="https://drive.google.com/file/d/1xBgAgdGARvG9W-FYkD1anN25vo5Hwprh/view?usp=sharing">
              <img src="/images/photos/IMG_002 Large.jpeg" />
              <span>Download</span>
            </a>
          </div>
          <div className="text-center">
            <a href="https://drive.google.com/file/d/1OgG0YAirSWD7KXJ6SCXBiT-xuRIyaIZm/view?usp=sharing">
              <img src="/images/photos/IMG_3805.jpg" />
              <span>Download</span>
            </a>
          </div>
          <div className="text-center">
            <a href="https://drive.google.com/file/d/1nPHVK2pKQ6ReZhV6eJTX7NP1aDQVxblE/view?usp=sharing">
              <img src="/images/epk/furbaby-stage-plot.png" />
              <span>Download stage plot</span>
            </a>
          </div>
          <div className="text-center">
            <a href="https://drive.google.com/file/d/1aViQ8Ye8Yi5oUQZiGrlsaFzNpT-5XYWK/view?usp=sharing">
              <img src="/images/epk/furbaby-press-release-sept-2022-1.png" />
              <span>Download press release</span>
            </a>
          </div>
        </Masonry> */}
      </div>
    </Layout>
  );
}
