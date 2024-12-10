import React from "react";
import "./Navbar.css";
import logo2 from "../../assets/logo2.png";
import profile_image from "../../assets/profile_image.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo2} alt="" />
      <img className="profile" src={profile_image} alt="" />
    </div>
  );
};

export default Navbar;
