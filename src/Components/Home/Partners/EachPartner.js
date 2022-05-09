import React from "react";

const EachPartner = ({ item }) => {
  return (
    <div className="mx-6 my-10">
      <img
        className=" w-[300px] md:w-auto mx-auto lg:mx-0 rounded-3xl"
        src={item.img}
        alt=""
      />
    </div>
  );
};

export default EachPartner;
