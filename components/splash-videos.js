import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";

const videos = [
  {
    id: "9jNy5Kvsi68",
    title: "Furbaby and the Tight Spaces - Next Year video",
  },
  {
    id: "e05rIyfWE9Y",
    title: "Furbaby and the Tight Spaces - Waiting",
  },
  {
    id: "-054IlsCbGQ",
    title: "Furbaby and the Tight Spaces - I Can Only Give You Everything",
  },
  {
    id: "lAihAqrB7aU",
    title: "Furbaby and the Tight Spaces - Social Distance",
  },
  {
    id: "vU_-n-9qmPk",
    title: "Furbaby and the Tight Spaces - Reaching Out (For Higher Ground)",
  },
  {
    id: "eT_O6nHaa58",
    title: "Furbaby and the Tight Spaces - Behind The Door",
  },
  {
    id: "5bRFZN4X_3g",
    title: "Furbaby and the Tight Spaces - Cocoa",
  },
  {
    id: "piCdPUIlJlw",
    title: "Furbaby and the Tight Spaces - Boxed In",
  },
];

function SplashVideos(props) {
  return (
    <>
      {/* <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: "images/banner-lake.jpg",
          },
        ]}
        style={{ height: "50vh" }}
      >
        <ParallaxBannerChildren>
          <div className="container flex flex-col items-center">
            <h2 className="banner-headline">Videos</h2>
          </div>
        </ParallaxBannerChildren>
      </ParallaxBanner> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
}

export default SplashVideos;
