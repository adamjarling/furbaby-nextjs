import React from "react";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1,
};

export default function PromoDownloads() {
  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div className="p-4 text-center">
          <a
            href="https://drive.google.com/file/d/1THb8WOjqd4WOOG2_LSeGdbki2RWH_7dH/view?usp=sharing"
            className="border-2 border-white p-2"
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
      </Masonry>
    </div>
  );
}
