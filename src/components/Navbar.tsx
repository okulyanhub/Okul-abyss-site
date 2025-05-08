import React from "react";
import { Link } from "react-router-dom";
import Abyss_Logo from "../assets/Abyss_Logo.png";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <div className="pt-3 px-4">
      <div className="flex justify-between items-center bg-white rounded-2xl h-16 shadow-md px-6">
        <img src={Abyss_Logo} alt="Abyss Logo" className="w-24" />
        <ul className="flex items-center gap-x-6">
          <li>
            <Link to="/" className="text-lg font-semibold cursor-pointer hover-gradient-text" data-text="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg font-semibold cursor-pointer hover-gradient-text" data-text="About Us">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg font-semibold cursor-pointer hover-gradient-text" data-text="Contact Us">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/abyss"
              className="text-lg font-semibold bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent animate-gradient-x"
            >
              Abyss
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
