import Masonry from "react-masonry-css";
import React from "react";
import Section from "./section";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import LinkButton from "./link-button";

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1,
};

const photos = [
  {
    src: "/images/merch/shirt-fur-back.jpg",
    alt: "Cat approved merchandise",
    width: 1600,
    height: 1343,
    caption: `<a href="https://www.northshoreshop.com" target="_blank">Buy Now</a>`,
  },
  {
    src: "/images/merch/shirt-squares-front.jpg",
    alt: "Cat approved merchandise",
    width: 1600,
    height: 2503,
    caption: `<a href="https://www.northshoreshop.com" target="_blank">Buy Now</a>`,
  },
  {
    src: "/images/merch/vinyl-cover-and-disc.jpg",
    alt: "Cat approved merchandise",
    width: 3024,
    height: 2187,
    caption: `<a href="https://www.northshoreshop.com" target="_blank">Buy Now</a>`,
  },
  {
    src: "/images/merch/shirt-fur-big-front2.jpg",
    alt: "Cat approved merchandise",
    width: 1600,
    height: 2133,
    caption: `<a href="https://www.northshoreshop.com" target="_blank">Buy Now</a>`,
  },
  {
    src: "/images/merch/topanga-boots.jpg",
    alt: "Cat approved merchandise",
    width: 1600,
    height: 1639,
    caption: `<a href="https://www.northshoreshop.com" target="_blank">Buy Now</a>`,
  },
  {
    src: "/images/merch/vinyl-jacket.jpg",
    alt: "Cat approved merchandise",
    width: 2000,
    height: 1102,
    caption: `<a href="https://www.northshoreshop.com" target="_blank">Buy Now</a>`,
  },
  {
    src: "/images/merch/shirt-squares-front-adam.jpg",
    alt: "Cat approved merchandise",
    width: 1600,
    height: 2464,
    caption: `<a href="https://www.northshoreshop.com" target="_blank">Buy Now</a>`,
  },
];

const SplashMerch = () => {
  return (
    <Section>
      {/* <h2 className="text-center">Merch</h2> */}
      <Gallery withCaption>
        <Masonry>
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
      <div className="text-center pt-10">
        <LinkButton href={`https://www.northshoreshop.com`} isExternal>
          Buy Stuff
        </LinkButton>
      </div>
    </Section>
  );
};

export default SplashMerch;
