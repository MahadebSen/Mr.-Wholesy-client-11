import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../CustomHook/useProducts";
import EachItem from "../EachItem/EachItem";

const Inventory = () => {
  const [products] = useProducts();
  const navigate = useNavigate();

  const handleManageItems = () => {
    navigate("/manageitems");
  };

  return (
    <div className="mx-10">
      <p className="text-center mb-10 text-4xl">Inventory</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 mb-8">
        {products.map((item) => (
          <EachItem key={item._id} item={item}></EachItem>
        ))}
      </div>
      <button
        onClick={handleManageItems}
        className="mt-[70px] block mx-auto border border-2 px-5 py-3 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500"
      >
        Manage Items
      </button>
    </div>
  );
};

export default Inventory;
