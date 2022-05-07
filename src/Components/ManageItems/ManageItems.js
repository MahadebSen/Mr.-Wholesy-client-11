import React from "react";
import useProducts from "../CustomHook/useProducts";
import ManageEachItem from "./ManageEachItem";

const ManageItems = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete ?");
    if (confirm) {
      const filterItems = products.filter((item) => item.id !== id);
      setProducts(filterItems);
    }
  };

  return (
    <div>
      {products.map((item) => (
        <ManageEachItem
          key={products._id}
          item={item}
          handleDelete={handleDelete}
        ></ManageEachItem>
      ))}
    </div>
  );
};

export default ManageItems;
