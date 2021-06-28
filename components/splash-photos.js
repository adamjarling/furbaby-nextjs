import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";

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
            <p className="text-center">Coming sooon....</p>
          </div>
        </ParallaxBannerChildren>
      </ParallaxBanner>
    </>
  );
}

export default SplashPhotos;
