import React from "react";
import useProducts from "../CustomHook/useProducts";
import EachItem from "../EachItem/EachItem";

const Inventory = () => {
  const [products] = useProducts();

  return (
    <div className="mx-10">
      <p className="text-center mb-10 text-4xl">Inventory</p>
      <div className="grid grid-cols-3 gap-8 mx-5 mb-8">
        {products.map((item) => (
          <EachItem key={item._id} item={item}></EachItem>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
