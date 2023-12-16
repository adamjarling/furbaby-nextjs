import Link from "next/link";
import { ParallaxBanner } from "react-scroll-parallax";

function Splash1({ photo }) {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: `/images/${photo}`,
          },
        ]}
        style={{ height: "100vh" }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-end justify-end px-6 pb-6 md:pb-12 md:px-12 md:flex-row md:justify-between">
          <Link
            href="/music"
            className="mb-6 font-sans text-2xl font-bold uppercase"
          >
            Listen Now
          </Link>
          <h1 className="text-4xl text-right md:text-6xl lg:text-7xl">
            New Music Out Now
          </h1>
        </div>
      </ParallaxBanner>
      <div className="p-2 text-xs text-right text-black bg-white">
        Photo by:{" "}
        <a href="https://www.instagram.com/virginiaguado/" target="_blank">
          Virginia Aguando
        </a>{" "}
      </div>
    </div>
  );
}

export default Splash1;
