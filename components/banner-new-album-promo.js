import React from "react";
import cdPromo from "public/images/square_cd-album-promo.jpg";
import lpPromo from "public/images/square_lp-album-promo.jpg";
import Image from "next/image";
import ExternalLink from "components/external-link";
import LinkButton from "components/link-button";

const preOrderLink =
  "https://cargorecordsdirect.co.uk/products/furbaby-the-tight-spaces-furbaby-the-tight-spaces";

function BannerNewAlbumPromo(props) {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center md:flex-row">
        <ExternalLink url={preOrderLink} noBorder>
          <Image src={cdPromo} alt="New CD Cargo Records promo" />
        </ExternalLink>
        <ExternalLink url={preOrderLink} noBorder>
          <Image src={lpPromo} alt="New vinyl LP Cargo Records promo" />
        </ExternalLink>
      </div>

      <div className="my-6">
        <LinkButton href={preOrderLink}>Pre-Order Now</LinkButton>
      </div>
    </section>
  );
}

BannerNewAlbumPromo.propTypes = {};

export default BannerNewAlbumPromo;
