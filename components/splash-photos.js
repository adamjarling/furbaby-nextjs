import React from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";
import wallPhoto from "public/images/photo-triangle-wall-hi-res.jpg";
import nextYearPhoto from "public/images/next-year-video-cover.jpg";
import logo from "public/images/furbaby-and-ts-logo_white.png";
import legs from "public/images/post-pandemic-legs.png";
import lava from "public/images/og-image-lava.png";

function SplashPhotos(props) {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: "images/banner-box.jpg",
          },
        ]}
        style={{ height: "30vh" }}
      >
        <ParallaxBannerChildren>
          <div className="container flex flex-col items-center">
            <h2>Photos</h2>
          </div>
        </ParallaxBannerChildren>
      </ParallaxBanner>

      <SRLWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 uppercase">
          <div>
            <a
              href={`/images/next-year-video-cover.jpg`}
              className="border-none"
            >
              <Image
                src={nextYearPhoto}
                alt="Next Year promo shot"
                fill="responsive"
                srl_gallery_image="true"
              />
            </a>
            <a
              href={`/images/furbaby-and-ts-logo_white.png`}
              className="border-none"
            >
              <Image
                src={logo}
                alt="Furbaby & the Tight Spaces logo"
                fill="responsive"
                srl_gallery_image="true"
              />
            </a>
          </div>
          <div>
            <a href={`/images/post-pandemic-legs.png`} className="border-none">
              <Image
                src={legs}
                alt="Post pandemic chillin"
                fill="responsive"
                srl_gallery_image="true"
              />
            </a>
            <a href={`/images/og-image-lava.png`} className="border-none">
              <Image
                src={lava}
                alt="Furbaby stuck inside a lava lamp promo photo"
                fill="responsive"
                srl_gallery_image="true"
              />
            </a>
          </div>
          <div>
            <a
              href={`/images/photo-triangle-wall-hi-res.jpg`}
              className="border-none"
            >
              <Image
                src={wallPhoto}
                alt="Promo photo from Cocoa video shoot"
                fill="responsive"
                srl_gallery_image="true"
              />
            </a>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

export default SplashPhotos;
