import React from "react";
import names from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import classNames from "classnames";
import logo from "public/images/furbaby-and-ts-logo_white.png";
import SocialMediaIcons from "components/social-media-icons";
import Obfuscate from "react-obfuscate";

const navLinks = [
  {
    url: "/music",
    label: "Music",
  },
  {
    url: "/press",
    label: "Press",
  },
  {
    url: "/shows",
    label: "Shows",
  },
];

export default function Header() {
  const [active, setActive] = React.useState(false);
  const [isNavBg, setIsNavBg] = React.useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    setIsNavBg(currPos.y < -200);
  });

  return (
    <>
      <header
        className={classNames(
          [
            "fixed",
            "top-0",
            "z-20",
            "min-w-full",
            "transition",
            "duration-1000",
          ],
          {
            "bg-black": isNavBg,
            "bg-opacity-70": isNavBg,
            "bg-opacity-0": !isNavBg,
          }
        )}
      >
        <div className="flex justify-between items-center px-4 md:px-8">
          {/* Desktop nav */}
          <nav className="hidden lg:block text-sm uppercase">
            {navLinks.map(({ url, label }) => (
              <span key={url} className="px-10">
                <Link href={url}>
                  <a className="border-none">{label}</a>
                </Link>
              </span>
            ))}
          </nav>

          {/* Hamburger menu mobile nav */}
          <div
            className={names(
              ["tham", "tham-e-squeeze", "tham-w-8", "lg:hidden"],
              {
                "tham-active": active,
              }
            )}
            onClick={() => setActive(!active)}
          >
            <div className="tham-box">
              <div className="tham-inner bg-gray-100" />
            </div>
          </div>

          <Link href="/">
            <a className="relative border-none w-40 pt-1">
              <Image
                src={logo}
                alt="Furbaby and the Tight Spaces"
                layout="responsive"
                width={1640}
                height={1077}
              />
            </a>
          </Link>

          <div className="invisible w-0 h-0 md:visible md:w-auto md:h-auto text-2xl">
            <SocialMediaIcons />
          </div>
        </div>
      </header>
      <nav
        className={names(
          [
            "z-10",
            "fixed",
            "transition-all",
            "duration-1000",
            "ease-in-out",
            "h-screen",
            "w-screen",
            "bg-black",
            "text-3xl",
            "sm:text-5xl",
            "md:text-6xl",
            "font-display",
            "text-center",
            "tracking-widest",
            "h-0",
          ],
          {
            "opacity-90": active,
            "opacity-0": !active,
            "h-full": active,
            visible: active,
            invisible: !active,
          }
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="">
            {navLinks.map((nl) => (
              <li key={nl.label} className="py-5 sm:py-8 font-sans uppercase">
                <Link href={nl.url}>
                  <a className="border-none">{nl.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center w-full text-2xl mb-12 absolute bottom-0">
          <SocialMediaIcons />
        </div>
      </nav>
    </>
  );
}
