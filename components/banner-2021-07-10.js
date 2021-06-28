import Image from "next/image";

export default function BannerFlattsFest() {
  return (
    <div className="aspect-h-7 aspect-w-15 relative">
      <Image
        src="/images/banner-2021-07-10.jpg"
        alt="Furbaby and the Tight Spaces Live at Flatts and Sharpe Music Festival"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
