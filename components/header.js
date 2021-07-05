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
  // {
  //   url: "/videos",
  //   label: "Videos",
  // },
  // {
  //   url: "/singles",
  //   label: "Singles",
  // },
  {
    url: "/news",
    label: "News",
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
          <div
            className={names(["tham", "tham-e-squeeze", "tham-w-8"], {
              "tham-active": active,
            })}
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
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
            "bg-black",
            "text-4xl",
            "md:text-5xl",
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
        <ul>
          {navLinks.map((nl) => (
            <li key={nl.label} className="py-8 sm:py-8 font-sans uppercase">
              <Link href={nl.url}>{nl.label}</Link>
            </li>
          ))}
        </ul>

        <div className="pb-10 md:pt-8 text-2xl">
          <Obfuscate
            email="furbabyferguson@gmail.com"
            headers={{
              subject: "Email from Furbaby.rocks",
            }}
          >
            info@furbaby.rocks
          </Obfuscate>
        </div>

        <div className="md:invisible md:w-0 md:h-0 visible w-auto text-5xl">
          <SocialMediaIcons />
        </div>
      </nav>
    </>
  );
}
