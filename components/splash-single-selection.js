import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import Image from "next/image";
import Link from "next/link";

const singles = [
  {
    src: "give-u-everything-album-art-v1.jpg",
    title: "I Can Only Give You Everything - Furbaby and the Tight Spaces",
    y: [-20, 20],
  },
  {
    src: "next-year-album-art-v2-sharp.jpg",
    title: "Next Year - Furbaby and the Tight Spaces",
    y: [20, -20],
  },
  {
    src: "reaching-out-album-art-v2.jpg",
    title: "Reaching Out (For Higher Ground) - Furbaby and the Tight Spaces",
    y: [-5, 30],
  },
];

export default function SplashSingleSelection() {
  return (
    <section>
      <div className="grid grid-cols-3 md:grid-cols-3">
        {singles.map((single, i) => (
          <div key={single.src}>
            <Parallax className="custom-class" y={single.y} tagOuter="figure">
              <div className="aspect-w-1 aspect-h-1">
                <Link href="/singles">
                  <a>
                    <Image
                      src={`/images/${single.src}`}
                      alt={single.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </a>
                </Link>
              </div>
            </Parallax>
          </div>
        ))}
      </div>
    </section>
  );
}
