import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import signup from "../../Images/signup.jpg";
import googleImg from "../../Images/Google.png";
import githubImg from "../../Images/Github.png";
import auth from "../../firebase.init";

const CreateAccount = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleCreateAccount = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    console.log(name, email, password, confirmPassword);
  };
  return (
    <div className=" my-10">
      <section className="grid grid-cols-2 mx-5">
        <img className="h-[100%]" src={signup} alt="" />
        <div className="flex justify-center items-center">
          <div>
            <p className="text-center font-semibold text-3xl mb-[50px]">
              Create a New Account
            </p>
            <form onSubmit={handleCreateAccount}>
              <input
                name="name"
                className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[39px] pl-4 text-lg"
                type="text"
                placeholder="Name"
                required
              />
              <input
                name="email"
                className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[39px] pl-4 text-lg"
                type="text"
                placeholder="Email"
                required
              />
              <input
                name="password"
                className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[39px] pl-4 text-lg"
                type="password"
                placeholder="Password"
                required
              />
              <input
                name="confirmPassword"
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
              <button
                type="submit"
                className="block mx-auto my-9 border border-2 px-5 py-2 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500"
              >
                Create Account
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

export default CreateAccount;
