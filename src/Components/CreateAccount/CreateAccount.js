import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signup from "../../Images/signup.jpg";
import googleImg from "../../Images/Google.png";
import githubImg from "../../Images/Github.png";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import loadingGIF from "../../Images/XOsX.gif";

const CreateAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, profileError] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, verificationError] =
    useSendEmailVerification(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, GithubUser, GithubLoading, GithubError] =
    useSignInWithGithub(auth);

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      await sendEmailVerification();
      toast("Account created");
    } else {
      toast("Password not matched");
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleGithubSignIn = () => {
    signInWithGithub();
  };

  const from = location.state?.from?.pathname || "/";

  if (user || googleUser || GithubUser) {
    console.log(user);
    navigate(from, { replace: true });
  }

  if (loading || updating || sending || googleLoading || GithubLoading) {
    return (
      <div className="my-[230px]">
        <img className="mx-auto" src={loadingGIF} alt="" />
      </div>
    );
  }

  let errMsg;
  if (
    error ||
    profileError ||
    verificationError ||
    googleError ||
    GithubError
  ) {
    errMsg = <p>Error: {error.message}</p>;
  }

  return (
    <div className="my-[90px]">
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
              <div className="text-red-600">{errMsg}</div>
              <button
                type="submit"
                className="block mx-auto my-9 border border-2 px-5 py-2 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500"
              >
                Create Account
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

export default CreateAccount;
