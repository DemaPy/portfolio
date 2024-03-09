import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animate_nav_item } from "../animations/nav_item";

const NavItem = ({ item }) => {
  return (
    <motion.li variants={animate_nav_item}>
      <Link className="text-sm font-semibold" to={item.path}>
        {item.title}
      </Link>
    </motion.li>
  );
};

export default NavItem;
