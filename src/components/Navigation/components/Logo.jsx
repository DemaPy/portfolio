import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animate_logo } from "../animations/logo";

const Logo = () => {
  return (
    <motion.h2
      variants={animate_logo}
      initial="init"
      exit="exit"
      animate="enter"
      className="text-2xl font-bold"
    >
      <Link to={"/"}>VD.</Link>
    </motion.h2>
  );
};

export default Logo;
