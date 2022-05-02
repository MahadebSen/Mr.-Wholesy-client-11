import React from "react";
import useProducts from "../CustomHook/useProducts";
import EachItem from "../EachItem/EachItem";

const Inventory = () => {
  const [products] = useProducts();

  return (
    <div>
      <p className="text-center my-8 text-4xl">Inventory</p>
      <div className="grid grid-cols-3 gap-5 mx-5 mb-8">
        {products.map((item) => (
          <EachItem item={item}></EachItem>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
