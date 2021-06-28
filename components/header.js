import React from "react";
import names from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import classNames from "classnames";
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import ExternalLink from "components/external-link";
import { distributors } from "social-media-manifest";

const navLinks = [
  {
    url: "/",
    label: "Home",
  },

  {
    url: "/press-kit",
    label: "Press Kit",
  },
  {
    url: "/videos",
    label: "Videos",
  },
  {
    url: "/singles",
    label: "Singles",
  },
];

const socialMediaItems = [
  {
    id: "facebook",
    icon: <FaFacebook />,
    url: distributors.facebook,
  },
  {
    id: "instagram",
    icon: <FaInstagram />,
    url: distributors.instagram,
  },
  {
    id: "spotify",
    icon: <FaSpotify />,
    url: distributors.spotify,
  },
  {
    id: "youTube",
    icon: <FaYoutube />,
    url: distributors.youTubeChannel,
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

          <div className="h-24 w-40 relative">
            <Image
              src="/images/furbaby-tight-spaces-logo.png"
              alt="Furbaby and the Tight Spaces"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Social media icons */}
          <div className="flex text-2xl">
            {socialMediaItems.map((item) => (
              <span key={item.id} className="px-2">
                <ExternalLink key={item.id} url={item.url}>
                  {item.icon}
                </ExternalLink>
              </span>
            ))}
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
            "items-center",
            "justify-center",
            "bg-black",
            "font-sans",
            "uppercase",
            "text-5xl",
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
            <li key={nl.label} className="py-8 sm:py-8">
              <Link href={nl.url}>{nl.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
