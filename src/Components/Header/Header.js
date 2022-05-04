import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/mr. wholesy.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="flex justify-between items-center mx-6 my-2">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img className="rounded-full w-[190px]" src={logo} alt="" />
        </div>
      </Link>
      <div>
        {user ? (
          <div>
            <Link
              className="font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              to="/blogs"
            >
              Blogs
            </Link>
            <Link
              className="font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              to="/manageitems"
            >
              Manage Items
            </Link>
            <Link
              className="font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              to="/additem"
            >
              Add Item
            </Link>
            <Link
              className="font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              to="/myitems"
            >
              My Items
            </Link>
            <button
              className="font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
            <Link
              className="font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              to="/about"
            >
              About
            </Link>
          </div>
        ) : (
          <div>
            <Link
              className="font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              to="/blogs"
            >
              Blogs
            </Link>
            <Link
              className="font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              to="/about"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
