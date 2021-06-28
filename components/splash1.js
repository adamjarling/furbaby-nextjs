import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";

function Splash1({ photo }) {
  return (
    <ParallaxBanner
      layers={[
        {
          amount: 0.2,
          image: `/images/${photo}`,
        },
      ]}
      style={{ height: "90vh" }}
    ></ParallaxBanner>
  );
}

export default Splash1;
