import React from "react";

const EachPartner = ({ item }) => {
  return (
    <div className="mx-4">
      <img className="rounded-3xl" src={item.img} alt="" />
    </div>
  );
};

export default EachPartner;
