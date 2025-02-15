import { InstagramIcon } from "@/assets/icons";
import Link from "next/link";
import React from "react";

type SocialLink = {
  display: React.ElementType;
  url: string;
};

const socialLinksMap: Record<string, SocialLink> = {
  instagram: {
    display: InstagramIcon,
    url: "https://www.instagram.com/gustavomont_136/",
  },
};

export const SocialLinks = () => {
  const socialLinks = Object.entries(socialLinksMap);
  return (
    <ul className="flex gap-1">
      {socialLinks.map(([key, { url, display: Display }]) => (
        <li key={key}>
          <Link href={url} target="_blank" className="w-min">
            <Display className="w-6 h-6 fill-accent" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
