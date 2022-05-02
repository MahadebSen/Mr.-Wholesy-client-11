import React from "react";
import { Link } from "react-router-dom";
import login from "../../Images/4957136.jpg";

const Login = () => {
  return (
    <div className=" my-8">
      <section className="grid grid-cols-2 mx-5">
        <img className="" src={login} alt="" />
        <div className="flex justify-center items-center">
          <div>
            <p className="text-center font-semibold text-3xl mb-[50px]">
              Login
            </p>
            <input
              className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[39px] pl-4 text-lg"
              type="text"
              placeholder="Email"
              required
            />
            <input
              className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[39px] pl-4 text-lg"
              type="password"
              placeholder="Password"
              required
            />
            <p className="text-sm text-orange-600">Forget Password ?</p>
            <p className="text-sm mt-2">
              New here?{" "}
              <Link className="text-orange-600" to="/createaccount">
                Create a New Account
              </Link>
            </p>
            <button className="block mx-auto my-9 border border-2 px-5 py-2 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500">
              Login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
