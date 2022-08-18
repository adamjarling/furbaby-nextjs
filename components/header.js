import React from "react";
import names from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import classNames from "classnames";
import logo from "public/images/furbaby-and-ts-logo_white.png";
import SocialMediaIcons from "components/social-media-icons";
import Obfuscate from "react-obfuscate";

const navigation = [
  { name: "Music", href: "/music" },
  { name: "Photos", href: "/photos" },
  { name: "Press", href: "/press" },
  { name: "Spain", href: "/spain2022" },
  { name: "Tour", href: "/shows" },
];

export default function Header() {
  const [active, setActive] = React.useState(false);
  const [isNavBg, setIsNavBg] = React.useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    setIsNavBg(currPos.y < -200);
  });

  return (
    <header className="bg-gradient-to-b from-black to-transparent fixed z-10 w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between ">
          <div className="flex items-center">
            <a href="/" className="border-0">
              <span className="sr-only">Workflow</span>
              <img
                className="h-10 md:h-20 w-auto"
                src="/images/furbaby-and-ts-logo_white.png"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block"></div>
          </div>
          <div className="ml-10 space-x-4">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="uppercase text-white hover:text-indigo-50 border-0 text-sm md:text-base"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
