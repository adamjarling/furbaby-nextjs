import React from "react";
import Image from "next/image";
import pic1 from "../public/images/banner-box.jpg";

const photos = [
  {
    src: "banner-box.jpg",
    alt: "Get in the Box promo photo",
  },
  {
    src: "band-wall-feet.jpg",
    alt: "Get in the Box promo photo",
  },
];

export default function PhotoPreview() {
  return (
    <div className="container grid grid-cols-2 md:grid-cols-4 mx-auto relative">
      {photos.map((photo) => (
        <div key={photo.src} className="w-full">
          <Image
            src={`/images/${photo.src}`}
            layout="fill"
            // width={800}
            // height={800}
            objectFit="cover"
            alt={photo.alt}
          />
        </div>
      ))}

      {/* <Image src="/images/banner-box.jpg" layout="fill" objectFit="cover" />
      <Image src="/images/banner-box.jpg" layout="fill" objectFit="cover" />
      <Image src="/images/banner-box.jpg" layout="fill" objectFit="cover" /> */}
    </div>
  );
}
