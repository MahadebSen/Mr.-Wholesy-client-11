import React from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../Images/4957136.jpg";
import googleImg from "../../Images/Google.png";
import githubImg from "../../Images/Github.png";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import loadingGIF from "../../Images/XOsX.gif";
import { async } from "@firebase/util";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, GithubUser, GithubLoading, GithubError] =
    useSignInWithGithub(auth);
  const [updatePassword, updating, updatePasswordError] =
    useUpdatePassword(auth);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleGithubSignIn = () => {
    signInWithGithub();
  };

  const handleForgetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (email) {
      await updatePassword(email);
      toast("Password reset email have sent");
    } else {
      toast("Please, put your password");
    }
  };

  if (user || googleUser || GithubUser) {
    navigate("/");
  }

  if (loading || googleLoading || GithubLoading || updating) {
    return (
      <div className="my-[230px]">
        <img className="mx-auto" src={loadingGIF} alt="" />
      </div>
    );
  }

  let errMsg;
  if (error || googleError || GithubError || updatePasswordError) {
    errMsg = <p>{error.message}</p>;
  }

  return (
    <div className="my-[90px]">
      <section className="grid grid-cols-2 mx-5">
        <img className="h-[100%]" src={login} alt="" />
        <div className="flex justify-center items-center">
          <div>
            <p className="text-center font-semibold text-3xl mb-[50px]">
              Login
            </p>
            <form onSubmit={handleLogin}>
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

              <button
                onClick={handleForgetPassword}
                className="text-sm text-orange-600"
              >
                Forget Password ?
              </button>

              <p className="text-sm mt-2">
                New here?{" "}
                <Link className="text-orange-600" to="/createaccount">
                  Create a New Account
                </Link>
              </p>
              <div className="text-red-600">{errMsg}</div>
              <button className="block mx-auto my-9 border border-2 px-5 py-2 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500">
                Login
              </button>
            </form>
            <p className="text-center">Or you may choose,</p>
            <section className="flex justify-center items-center my-5">
              <div
                onClick={handleGoogleSignIn}
                className="mx-2 rounded-lg hover:shadow-lg"
              >
                <img className="w-[70px]" src={googleImg} alt="" />
              </div>
              <div
                onClick={handleGithubSignIn}
                className="mx-2 rounded-lg hover:shadow-lg"
              >
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
