import React from "react";
import { Link, NavLink } from "react-router-dom";
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
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-lg underline underline-offset-8 decoration-2 decoration-red-600 mx-[7px] p-2 rounded-md hover:bg-blue-300"
                  : "font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-lg underline underline-offset-8 decoration-2 decoration-red-600 mx-[7px] p-2 rounded-md hover:bg-blue-300"
                  : "font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-lg underline underline-offset-8 decoration-2 decoration-red-600 mx-[7px] p-2 rounded-md hover:bg-blue-300"
                  : "font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              }
              to="/manageitems"
            >
              Manage Items
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-lg underline underline-offset-8 decoration-2 decoration-red-600 mx-[7px] p-2 rounded-md hover:bg-blue-300"
                  : "font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              }
              to="/additem"
            >
              Add Item
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-lg underline underline-offset-8 decoration-2 decoration-red-600 mx-[7px] p-2 rounded-md hover:bg-blue-300"
                  : "font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              }
              to="/myitems"
            >
              My Items
            </NavLink>
            <button
              className="font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-lg underline underline-offset-8 decoration-2 decoration-red-600 mx-[7px] p-2 rounded-md hover:bg-blue-300"
                  : "font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              }
              to="/about"
            >
              About
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-lg underline underline-offset-8 decoration-2 decoration-red-600 mx-[7px] p-2 rounded-md hover:bg-blue-300"
                  : "font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-lg underline underline-offset-8 decoration-2 decoration-red-600 mx-[7px] p-2 rounded-md hover:bg-blue-300"
                  : "font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-lg underline underline-offset-8 decoration-2 decoration-red-600 mx-[7px] p-2 rounded-md hover:bg-blue-300"
                  : "font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-lg underline underline-offset-8 decoration-2 decoration-red-600 mx-[7px] p-2 rounded-md hover:bg-blue-300"
                  : "font-medium text-lg mx-[7px] p-2 rounded-md hover:bg-blue-300"
              }
              to="/about"
            >
              About
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
