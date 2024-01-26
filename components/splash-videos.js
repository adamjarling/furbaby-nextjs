const videos = [
  {
    id: "7NbRpqTQ5Lk",
    title: "Furbaby and the Tight Spaces - When the Wheels Come Off video",
  },
  {
    id: "hGUpzW19SRc",
    title: "Furbaby and the Tight Spaces - Taste of the Wild video",
  },
  {
    id: "9jNy5Kvsi68",
    title: "Furbaby and the Tight Spaces - Next Year video",
  },
  {
    id: "vU_-n-9qmPk",
    title: "Furbaby and the Tight Spaces - Reaching Out (For Higher Ground)",
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
    id: "Ibh5dl6g030",
    title: "Furbaby and the Tight Spaces - Run Rudolph Run video",
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {videos.map((video) => (
          <iframe
            key={video.id}
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </>
  );
}

export default SplashVideos;
