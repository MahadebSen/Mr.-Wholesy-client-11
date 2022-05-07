import React from "react";

const EachPartner = ({ item }) => {
  return (
    <div className="mx-6">
      <img className="rounded-3xl" src={item.img} alt="" />
    </div>
  );
};

export default EachPartner;
