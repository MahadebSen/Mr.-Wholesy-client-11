import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../CustomHook/useProducts";
import EachItem from "../EachItem/EachItem";

const InventoryHome = () => {
  const navigate = useNavigate();
  const [products] = useProducts();
  const newArr = products.slice(0, 6);

  const handleShowAll = () => {
    navigate("/inventory");
  };

  return (
    <div>
      <p className="text-center my-8 text-4xl">Inventory</p>
      <div className="grid grid-cols-3 gap-4 mx-5">
        {newArr.map((item) => (
          <EachItem item={item}></EachItem>
        ))}
      </div>
      <div className="my-5 mx-5">
        <button
          onClick={handleShowAll}
          className="block mx-auto my-5 border border-2 px-5 py-3 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500"
        >
          Show All...
        </button>
      </div>
    </div>
  );
};

export default InventoryHome;