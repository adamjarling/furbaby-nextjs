import Head from "next/head";
import Layout from "components/layout";
import Section from "components/section";
import Link from "next/link";
import Image from "next/image";
import Masonry from "react-masonry-css";
import PromoDownloads from "components/promo-downloads";

const breakpointColumnsObj = {
  default: 2,
  768: 1,
};

const dates = [
  {
    date: "23 Septiembre",
    label: `TBC - Cádiz`,
  },
  {
    date: "24 Septiembre",
    label: `Louie Louie - Estepona`,
  },
  {
    date: "25 Septiembre",
    label: `Rocknrolla - Granada`,
  },
  {
    date: "27 Septiembre",
    label: `Rock Beer the New - Santander`,
  },
  {
    date: "28 Septiembre",
    label: `El Gran Café - León`,
  },
  {
    date: "29 Septiembre",
    label: `La Nube - Bilbao`,
  },
  {
    date: "30 Septiembre",
    label: `Sala Corleone - Sabiñánigo`,
  },
  {
    date: "1 Octubre",
    label: `Cal Jou Conques - Lleida`,
  },
  {
    date: "2 Octubre",
    label: `Porta Caeli - Valladolid`,
  },
  {
    date: "3 Octubre",
    label: `Café Cultural Auriense - Ourense`,
  },
];

export default function Spain2022Page() {
  return (
    <Layout>
      <Head>
        <title>Spain Tour 2022 - Furbaby and the Tight Spaces</title>
      </Head>

      <Image
        src="/images/spain2022/fb-event-no-text_v2.jpg"
        width="1920"
        height="1005"
        alt="Spain Tour 2022"
      />

      <div className="bg-white text-black">
        <Section>
          <h1>Spanish Tour 2022</h1>
          <div className="max-w-screen-lg mx-auto">
            <p className="uppercase font-bold">
              <a
                href="https://www.facebook.com/lestrato.rockconciertos"
                target="_blank"
              >
                Lestrato Rock &amp; Conciertos
              </a>
              ...
            </p>
            <p>
              "A finales del próximo mes tendremos de gira por la península la
              fantástica banda americana Furbaby and the Tight Spaces... para
              aquellos que no la conozcáis, se trata de una superbanda
              procedente de Chicago y que tiene entre sus filas a gente como
              Adam Arling (The Last Vegas, Warrior Soul, Urge Overkill), Joe
              Winters (Steepwater Band), Dennis Post (Warrior Soul, City Kids),
              Tony Maietta (Black Oil Brothers) y Bryan Wilkinson (The Last
              Vegas, Black Actress), ahí queda eso, casi nada... la banda estará
              de gira por primera vez en nuestro país para presentar su nuevo
              álbum repleto de garaje, pop y psicodelia... apunta tu fecha y no
              te los pierdas porque seguro que será una bomba en directo... keep
              on rockin'!!!"
            </p>
            <p className="hidden">
              at the end of next month we will have the fantastic American band
              Furbaby and the Tight Spaces touring the peninsula... For those of
              you who don't know, it's a superb band from Chicago that has
              people like Adam Arling (The Last Vegas, Warrior Soul, Urge
              Overkill), Joe Winters (Steepwater Band), Dennis Post (Warrior
              Soul, City Kid) s), Calvin Marty (Chicago actor and musician) and
              Bryan Wilkinson (The Last Vegas, Black Actress), there's that,
              almost nothing.. the band will be touring for the first time in
              our country to present their new album packed with garage, pop and
              psychedelia... mark your date and don't miss because it's sure to
              be bomb live.. Keep on rockin'!!!
            </p>
          </div>
          <Image
            src={`/images/spain2022/lestrato-poster-2022-08-17.jpeg`}
            alt={`Spain 2022 Tour Poster`}
            layout="responsive"
            width={842}
            height={1191}
          />
        </Section>

        <div className="bg-black text-white text-center text-2xl">
          <Section>
            {dates.map(({ date, label }) => (
              <p>
                <span className="font-bold uppercase text-xl">{date}</span>
                <br />
                {label}
              </p>
            ))}
          </Section>
        </div>

        <Section>
          <h2>Social Media</h2>
          <div>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              <div className="p-4 text-center">
                <a href="https://drive.google.com/file/d/1GYso10yrcSxZ8lc8B6lkNmDhbZ_XoYdW/view?usp=sharing">
                  <img
                    alt="Fur logo"
                    src="/images/spain2022/fur-spain-2022-tour-instagram.jpg"
                  />
                  <span className="pt-2 inline-block">
                    Download Instagram Poster
                  </span>
                </a>
              </div>
              <div className="text-center">
                <a href="https://drive.google.com/file/d/1uXNNDUv2B11uzaXI_SR58IZKO02smDsR/view?usp=sharing">
                  <img src="/images/spain2022/fb-event-no-text_v2.jpg" />
                  <span className="pt-2 inline-block">
                    Download Facebook Event Banner
                  </span>
                </a>
              </div>
            </Masonry>
          </div>
        </Section>

        <Section>
          <h2>Downloads</h2>
          <PromoDownloads />
        </Section>
      </div>
    </Layout>
  );
}
