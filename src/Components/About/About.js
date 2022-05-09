import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/Mr. Wholesy footer.png";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="my-20">
      <img className="mx-auto w-[380px] rounded-xl" src={logo} alt="" />
      <p className="mx-[120px] text-center my-7">
        To tackle this problem, the representation-matching-aggregation
        framework is then applied by many recent works, which conducts
        interaction between the response and each utterance in the context and
        then aggregate these matching features using CNN or RNN. Following the
        framework, deep utterance aggregation network designs turns-aware
        aggregation mechanism that assigns different weights to each dialogue
        turn. Deep attentive matching network jointly uses self-attention and
        cross-attention to obtain multi-grained representations
      </p>
      <p className="text-center font-semibold text-2xl">
        This Project's Code Link:
      </p>
      <div className="text-center my-8">
        <a
          href="https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-MahadebSen"
          className="border border-2 mx-4 px-4 py-2 rounded-md bg-indigo-500 text-white hover:text-black hover:border-indigo-500 hover:bg-white"
        >
          Client Side Code
        </a>
        <a
          href="https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-MahadebSen"
          className="border border-2 mx-4 px-4 py-2 rounded-md bg-indigo-500 text-white hover:text-black hover:border-indigo-500 hover:bg-white"
        >
          Server Side Code
        </a>
      </div>
    </div>
  );
};

export default About;
