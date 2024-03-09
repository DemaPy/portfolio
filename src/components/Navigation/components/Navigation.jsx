import navigation from "../../../constance/navigation";
import { animate_navigation } from "../animations/navigation";
import NavItem from "./NavItem";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.ol
      variants={animate_navigation}
      initial="init"
      exit="exit"
      animate="enter"
      className="flex items-center md:gap-6 gap-2 py-6"
    >
      {navigation.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
    </motion.ol>
  );
};

export default Navigation;
