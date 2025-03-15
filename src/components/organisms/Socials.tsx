import { socials } from "../../constance/socials";
import Social from "../molecules/Social";

const Socials = () => {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: 'wrap' }}>
      {socials.map((social) => (
        <Social key={social.label} social={social} />
      ))}
    </div>
  );
};

export default Socials;
