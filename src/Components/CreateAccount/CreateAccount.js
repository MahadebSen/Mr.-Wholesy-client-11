import React from "react";
import { Link } from "react-router-dom";
import signup from "../../Images/signup.jpg";

const CreateAccount = () => {
  return (
    <div className=" my-8">
      <section className="grid grid-cols-2 mx-5">
        <img className="" src={signup} alt="" />
        <div className="flex justify-center items-center">
          <form>
            <p className="text-center font-semibold text-3xl mb-[50px]">
              Create a New Account
            </p>
            <input
              className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[39px] pl-4 text-lg"
              type="text"
              placeholder="Name"
              required
            />
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
            <input
              className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[39px] pl-4 text-lg"
              type="password"
              placeholder="Confirm Password"
              required
            />

            <p className="text-sm mt-4">
              Alrade have an account?{" "}
              <Link className="text-orange-600" to="/login">
                Login
              </Link>
            </p>
            <button className="block mx-auto my-9 border border-2 px-5 py-2 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500">
              Create Account
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateAccount;
