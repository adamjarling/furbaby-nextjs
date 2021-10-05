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
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end items-end pb-6 px-6 md:pb-12 md:px-12 md:flex-row md:justify-between">
        <Link href="/music">
          <a className="uppercase text-2xl mb-6 font-bold font-sans">
            Listen Now
          </a>
        </Link>
        <h1 className="text-right">What's up</h1>
      </div>
    </ParallaxBanner>
  );
}

export default Splash1;
