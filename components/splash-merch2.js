import React from "react";

const items = [
  {
    href: "https://www.northshoreshop.com/product/prod_MeKoIYYl0d2HIR",
    imgSrc:
      "https://files.stripe.com/links/MDB8YWNjdF8xTHBzem9JRnR3S0s0b0ZFfGZsX3Rlc3RfT1pHSmVWNHFCUHgzZjdRVWNOMGNWejhM00iWx6stii",
    imgAlt: "Custom screen-print poster product",
    label: "Custom screen-print poster",
    price: "$10.00",
    description:
      "Custom screen-printed posters. Limited edition run - 30 prints. Signed by artist.",
  },
  {
    href: "https://www.northshoreshop.com/product/prod_MdBpbhfwLZqQOp",
    imgSrc: "https://i.imgur.com/nsdmBZ0.jpg",
    imgAlt: "Vinyl LP product",
    label: "Vinyl LP",
    price: "$19.00",
    description:
      "Furbaby and the Tight Spaces debut album. Featuring 150gram, hot pink vinyl , liner notes and 8 tracks of psych pop jams.",
  },
  {
    href: "https://www.northshoreshop.com/",
    imgSrc: "https://i.imgur.com/yk43mW9.jpg",
    imgAlt: "T-Shirt 60s logo product",
    label: "T-Shirt 60s logo",
    price: "$20.00",
    description:
      "Hand acid-washed T-Shirt with 1960s Furbaby logo w/ Spain 2022 Tour dates on back.  Unisex.",
  },
];

export default function SplashMerch() {
  return (
    <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {items.map((item) => (
          <a
            key={item.imgSrc}
            className="group"
            href={item.href}
            target="_blank"
          >
            <div className="w-full overflow-hidden rounded-lg aspect-w-1 aspect-h-1 sm:aspect-w-2 sm:aspect-h-3">
              <img
                src={item.imgSrc}
                alt={item.imgAlt}
                className="object-cover object-center w-full h-full group-hover:opacity-75"
              />
            </div>
            <div className="flex items-center justify-between mt-4 text-base font-medium text-gray-900">
              <h3>{item.label}</h3>
              <p>{item.price}</p>
            </div>
            <p className="mt-1 text-sm italic text-gray-500">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
