import Image from "next/image";
import ExternalLink from "./external-link";

export default function BannerFlattsFest() {
  return (
    <ExternalLink url="https://www.facebook.com/events/500774671119331">
      <div className="aspect-h-7 aspect-w-15 relative">
        <Image
          src="/images/banner-2021-07-10.jpg"
          alt="Furbaby and the Tight Spaces Live at Flatts and Sharpe Music Festival"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </ExternalLink>
  );
}
