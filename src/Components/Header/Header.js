import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-6 my-2">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img className="rounded-full w-[78px]" src={logo} alt="" />
          <div className="text-4xl mx-3">
            <span>Waer-</span>
            <span className="font-semibold ">Wolf</span>
          </div>
        </div>
      </Link>
      <div>
        <Link
          className="font-medium text-xl mx-5 p-2 rounded-md hover:bg-cyan-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="font-medium text-xl mx-5 p-2 rounded-md hover:bg-cyan-300"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="font-medium text-xl ml-5 p-2 rounded-md hover:bg-cyan-300"
          to="/about"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
