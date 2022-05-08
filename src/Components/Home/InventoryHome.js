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

  const handleManageItem = () => {
    navigate("/manageitems");
  };

  return (
    <div className="mt-16 mx-10">
      <p className="text-center my-16 text-4xl">Inventory</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">
        {newArr.map((item) => (
          <EachItem key={item._id} item={item}></EachItem>
        ))}
      </div>
      <div className="mt-12 mx-5 flex justify-center items-center">
        <button
          onClick={handleShowAll}
          className="block mx-3 my-5 border border-2 px-5 py-3 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500"
        >
          Show All...
        </button>
        <button
          onClick={handleManageItem}
          className="block mx-3 my-5 border border-2 px-5 py-3 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500"
        >
          Manage Items
        </button>
      </div>
    </div>
  );
};

export default InventoryHome;
