import { useQuery } from "@tanstack/react-query";
import Social from "../molecules/Social";
import { getSocials } from "../../api/social/getSocials";

const Socials = () => {
  const { data } = useQuery({ queryKey: ['socials'], queryFn: getSocials })
  
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: 'wrap' }}>
      {data?.data.map((social) => (
        <Social key={social.label} social={social} />
      ))}
    </div>
  );
};

export default Socials;
