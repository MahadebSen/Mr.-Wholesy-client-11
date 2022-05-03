import React from "react";
import { Link } from "react-router-dom";
import login from "../../Images/4957136.jpg";
import googleImg from "../../Images/Google.png";
import githubImg from "../../Images/Github.png";

const Login = () => {
  return (
    <div className="my-[90px]">
      <section className="grid grid-cols-2 mx-5">
        <img className="h-[100%]" src={login} alt="" />
        <div className="flex justify-center items-center">
          <div>
            <p className="text-center font-semibold text-3xl mb-[50px]">
              Login
            </p>
            <form>
              <input
                name=""
                className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[39px] pl-4 text-lg"
                type="text"
                placeholder="Email"
                required
              />
              <input
                name=""
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
            </form>
            <p className="text-center">Or you may choose,</p>
            <section className="flex justify-center items-center my-5">
              <div className="mx-2">
                <img className="w-[70px]" src={googleImg} alt="" />
              </div>
              <div className="mx-2">
                <img className="w-[70px]" src={githubImg} alt="" />
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
