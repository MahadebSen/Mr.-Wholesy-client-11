import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/mr. wholesy.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-6 my-2">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img className="rounded-full w-[190px]" src={logo} alt="" />
        </div>
      </Link>
      <div>
        <Link
          className="font-medium text-xl mx-5 p-2 rounded-md hover:bg-blue-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="font-medium text-xl mx-5 p-2 rounded-md hover:bg-blue-300"
          to="/blogs"
        >
          Blogs
        </Link>
        <Link
          className="font-medium text-xl mx-5 p-2 rounded-md hover:bg-blue-300"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="font-medium text-xl ml-5 p-2 rounded-md hover:bg-blue-300"
          to="/about"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
