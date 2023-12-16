import ExternalLink from "./external-link";
import FandTS from "./f-and-ts";
import Image from "next/image";
import LinkButton from "./link-button";
import Section from "./section";

export default function CargoPromo() {
  return (
    <div className="text-gray-900 bg-white">
      <Section>
        <h3>Full-length Album October 15, 2021 Europe, UK, Japan, USA</h3>

        <div className="relative float-left h-24 mr-4 md:h-36 w-36 md:w-48">
          <ExternalLink url="https://www.cargorecords.co.uk/">
            <Image
              src="/images/cargo-records.jpeg"
              alt="Cargo Records"
              layout="fill"
              objectFit="cover"
            />
          </ExternalLink>
        </div>
        <p className="text-md md:text-xl">
          <ExternalLink url="https://www.cargorecords.co.uk/">
            Cargo Records UK
          </ExternalLink>{" "}
          will be distributing <FandTS /> full album of singles (including 2
          unreleased tracks) on Vinyl and CD in UK/Europe/Japan/USA. Release
          date: <strong>OCTOBER 15, 2021</strong>
        </p>

        <div className="clear-both mt-8">
          <LinkButton
            isInverted
            href="https://cargorecordsdirect.co.uk/products/furbaby-the-tight-spaces-furbaby-the-tight-spaces"
          >
            Pre-Order the Album
          </LinkButton>
        </div>
      </Section>
    </div>
  );
}
