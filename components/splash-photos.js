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
import feet from "public/images/band-wall-feet.jpg";
import stage from "public/images/DSC01740-ANIMATION.gif";
import ddAirGuitar from "public/images/2021-11-07/IMG_3802.jpg";
import ddBalcony from "public/images/2021-11-07/IMG_3805.jpg";

function SplashPhotos(props) {
  return (
    <>
      {/* <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: "images/banner-box.jpg",
          },
        ]}
        style={{ height: "50vh" }}
      >
        <ParallaxBannerChildren>
          <div className="container flex flex-col items-center">
            <h2 className="banner-headline">Photos</h2>
          </div>
        </ParallaxBannerChildren>
      </ParallaxBanner> */}

      <SRLWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 uppercase">
          <div>
            <a href={`/images/2021-11-07/IMG_3802.jpg`} className="border-none">
              <Image
                src={ddAirGuitar}
                alt="Fur sighting at Double Door Chicago USA. Photo: Casey Murtaugh"
                fill="responsive"
                srl_gallery_image="true"
              />
            </a>
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
            <a href={`/images/band-wall-feet.jpg`} className="border-none">
              <Image
                src={feet}
                alt="Artists of the wall - Rogers Park Beach"
                fill="responsive"
                srl_gallery_image="true"
              />
            </a>
            <a href={`/images/2021-11-07/IMG_3805.jpg`} className="border-none">
              <Image
                src={ddBalcony}
                alt="Moon Boy photo shoot - 2021-11-07 Double Door - Chicago USA "
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
            <a href={`/images/og-image-lava.png`} className="border-none">
              <Image
                src={lava}
                alt="Furbaby stuck inside a lava lamp promo photo"
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
