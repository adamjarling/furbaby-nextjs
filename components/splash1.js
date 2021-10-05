import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";
import Link from "next/link";

function Splash1({ photo }) {
  return (
    <ParallaxBanner
      layers={[
        {
          amount: 0.2,
          image: `/images/${photo}`,
        },
      ]}
      style={{ height: "100vh" }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end items-end pb-6 px-6 md:flex-row md:justify-between">
        <Link href="/music">
          <a className="uppercase text-xl mb-6">Listen Now</a>
        </Link>
        <h1 className="text-right">Album Oct.15</h1>
      </div>
    </ParallaxBanner>
  );
}

export default Splash1;
