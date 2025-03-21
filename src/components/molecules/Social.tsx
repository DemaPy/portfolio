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
      <span dangerouslySetInnerHTML={{ __html: social.icon }} />
      {social.isShowLabel && social.label}
    </a>
  );
};

export default Social;
