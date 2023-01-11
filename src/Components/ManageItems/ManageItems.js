import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../CustomHook/useProducts";
import ManageEachItem from "./ManageEachItem";

const ManageItems = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete ?");
    if (confirm) {
      fetch(`https://mr-wholesy-server.vercel.app/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            setProducts(products.filter((item) => item._id !== id));
          }
        });

      // ;
    }
  };

  const handleAddNewItem = () => {
    navigate("/additem");
  };

  return (
    <div>
      <div>
        {products.map((item) => (
          <ManageEachItem
            key={products._id}
            item={item}
            handleDelete={handleDelete}
          ></ManageEachItem>
        ))}
      </div>
      <div>
        <button
          onClick={handleAddNewItem}
          className="mt-[70px] block mx-auto border border-2 px-5 py-3 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500"
        >
          Add New Item
        </button>
      </div>
    </div>
  );
};

export default ManageItems;
