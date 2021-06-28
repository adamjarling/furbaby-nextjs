import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";

function Splash1() {
  return (
    <ParallaxBanner
      layers={[
        {
          amount: 0.2,
          image: "/images/photo-triangle-wall-hi-res.jpg",
        },
      ]}
      style={{ height: "100vh" }}
    >
      <ParallaxBannerChildren>
        <div className="container flex flex-col items-center"></div>
      </ParallaxBannerChildren>
    </ParallaxBanner>
  );
}

export default Splash1;
