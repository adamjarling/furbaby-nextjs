import Image from "next/image";
import ExternalLink from "./external-link";

export default function BannerFlattsFest() {
  return (
    <ExternalLink url="https://www.facebook.com/events/500774671119331">
      <Image
        src="/images/banner-2021-07-10-sm.jpg"
        alt="Furbaby and the Tight Spaces Live at Flatts and Sharpe Music Festival"
        layout="responsive"
        width={1521}
        height={1008}
      />
    </ExternalLink>
  );
}
