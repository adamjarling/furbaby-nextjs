import Section from "components/section";
import Image from "next/image";
import ExternalLink from "components/external-link";
import FandTS from "components/f-and-ts";

export default function CargoPromo() {
  return (
    <div className="bg-white text-gray-900">
      <Section>
        <h2>Full-length Album October 1, 2021</h2>
        <h3 className="text-gray-600">Europe, UK, Japan</h3>
        <div className="relative h-24 md:h-36 w-36 md:w-48 mb-4 float-left mr-4">
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
          unreleased tracks) on Vinyl and CD in UK/Europe/Japan. Release date:{" "}
          <strong>OCTOBER 1, 2021</strong> Pre-order coming soon...
        </p>
      </Section>
    </div>
  );
}
