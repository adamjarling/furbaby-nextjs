import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import ExternalLink from "components/external-link";
import { distributors } from "social-media-manifest";

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

export default function SocialMediaIcons() {
  return (
    <div className="flex">
      {socialMediaItems.map((item) => (
        <span key={item.id} className="px-2">
          <ExternalLink key={item.id} url={item.url}>
            {item.icon}
          </ExternalLink>
        </span>
      ))}
    </div>
  );
}
