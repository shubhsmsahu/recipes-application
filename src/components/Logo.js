import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="https://recipes-application.vercel.app/" className="logo">
      Recipes<span>.</span>
    </Link>
  );
};

export default Logo;
