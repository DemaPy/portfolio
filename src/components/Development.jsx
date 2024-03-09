import React from "react";
import { motion } from "framer-motion";

const development_animations = {
  init: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 2,
    },
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Development = () => {
  return (
    <motion.div
      variants={development_animations}
      animate="enter"
      initial="init"
      exit="exit"
      className="flex gap-4 flex-col items-center justify-center"
    >
      <h1 className="md:text-6xl text-2xl font-semibold text-slate-800">
        Development
      </h1>
      <div className="text-center">
        <p className="text-lg font-semibold text-slate-950">
          currently page is under development,
        </p>
        <p className="text-lg font-semibold text-slate-950">
          but it will be available soon...
        </p>
      </div>
    </motion.div>
  );
};

export default Development;
