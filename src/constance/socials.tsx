import { Github, Linkedin, Youtube } from "lucide-react";
import { SocialInterface } from "../components/types";

export const socials: SocialInterface[] = [
  {
    icon: <Github width={20} height={20} />,
    label: "Github",
    url: "https://github.com/DemaPy",
  },
  {
    icon: <Linkedin width={20} height={20} />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/viacheslavdemchenko",
  },
  {
    icon: <Youtube width={20} height={20} />,
    label: "YouTube",
    url: "https://www.youtube.com/@v.demchenko",
  },
]
