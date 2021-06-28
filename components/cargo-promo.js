import Section from "components/section";
import Image from "next/image";
import ExternalLink from "components/external-link";

export default function CargoPromo() {
  return (
    <div className="bg-white text-gray-900">
      <Section>
        <h2>Full-length Album on Vinyl and CD</h2>
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
        <p>
          <ExternalLink url="https://www.cargorecords.co.uk/">
            Cargo Records UK
          </ExternalLink>{" "}
          will be selling and distributing the full album of singles (including
          2 unreleased) on Vinyl and CD in UK/Europe/Japan. Release date:{" "}
          <strong>OCTOBER 1, 2021</strong>
        </p>
      </Section>
    </div>
  );
}
