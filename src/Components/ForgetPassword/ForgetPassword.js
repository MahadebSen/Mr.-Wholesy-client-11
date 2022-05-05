import React, { useRef } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import loadingGIF from "../../Images/XOsX.gif";

const ForgetPassword = () => {
  const [sendPasswordResetEmail, sending, resetPasswordError] =
    useSendPasswordResetEmail(auth);
  const emailRef = useRef("");

  const handleForgetPassword = () => {
    const updateEmail = emailRef.current.value;
    console.log(updateEmail);
    if (updateEmail) {
      sendPasswordResetEmail(updateEmail);
      toast("Password reset email have sent");
    } else {
      toast("Please, put your email");
    }
  };

  if (sending) {
    return (
      <div className="my-[230px]">
        <img className="mx-auto" src={loadingGIF} alt="" />
      </div>
    );
  }

  let errMsg;
  if (resetPasswordError) {
    errMsg = <p>{resetPasswordError.message}</p>;
  }

  return (
    <section className="flex justify-center items-center">
      <div className="my-[120px]">
        <p className="text-center font-semibold text-4xl">
          Forget your Password
        </p>
        <input
          ref={emailRef}
          className="block border border-2 border-blue-600 rounded-full mt-[50px] w-[400px] h-[39px] pl-4 text-lg"
          type="text"
          placeholder="Email"
        />
        <div className="text-red-700 my-4 ml-4">{errMsg}</div>
        <button
          onClick={handleForgetPassword}
          className="block mx-auto my-9 border border-2 px-5 py-2 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default ForgetPassword;
