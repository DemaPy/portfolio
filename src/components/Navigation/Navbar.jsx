import React from "react";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Navbar;
