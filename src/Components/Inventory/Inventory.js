import React from "react";
import useProducts from "../CustomHook/useProducts";
import EachItem from "../EachItem/EachItem";

const Inventory = () => {
  const [products] = useProducts();

  return (
    <div>
      {products.map((item) => (
        <EachItem item={item}></EachItem>
      ))}
    </div>
  );
};

export default Inventory;
