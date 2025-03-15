import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { SocialInterface } from "../components/types";

export const socials: SocialInterface[] = [
  {
    icon: <Twitter width={20} height={20} />,
    label: "X",
    url: "https://x.com/dema__dev",
    options: {
      isShowLabel: false,
    },
  },
  {
    icon: <Github width={20} height={20} />,
    label: "Github",
    url: "https://github.com/DemaPy",
    options: {
      isShowLabel: false,
    },
  },
  {
    icon: <Linkedin width={20} height={20} />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/viacheslavdemchenko",
    options: {
      isShowLabel: false,
    },
  },
  {
    icon: <Youtube width={20} height={20} />,
    label: "YouTube",
    url: "https://www.youtube.com/@v.demchenko",
    options: {
      isShowLabel: false,
    },
  },
];
