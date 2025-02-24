import React from "react";
import { SocialInterface } from "../types";

interface SocialProps {
  social: SocialInterface;
}

const Social = ({ social }: SocialProps) => {
  return <a style={{ color: "#efeeec", fontSize: "1em", fontFamily: "Poppins" }} target="_blank" href={social.url}>{social.label}</a>;
};

export default Social;
