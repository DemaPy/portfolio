import { SocialInterface } from "../types";

interface SocialProps {
  social: SocialInterface;
}

const Social = ({ social }: SocialProps) => {
  return (
    <a
      style={{
        color: "#efeeec",
        fontSize: "1em",
        fontFamily: "Poppins",
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
      }}
      target="_blank"
      href={social.url}
    >
      {social.icon}
      {social.options.isShowLabel && social.label}
    </a>
  );
};

export default Social;
