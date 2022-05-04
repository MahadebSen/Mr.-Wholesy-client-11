import React from "react";

const ManageEachItem = ({ item, handleDelete }) => {
  const { id, name, img, description, price, quantity, supplier } = item;
  return (
    <section className="">
      <div className="flex items-center border-2 border-indigo-500 m-8 rounded-md">
        <img
          className="w-[150px] rounded-lg flex justify-center items-center m-6 border border-2 border-blue-200"
          src={img}
          alt=""
        />
        <div className="my-3">
          <p className="font-semibold text-2xl my-1">{name}</p>
          <p className="mb-1">{description}</p>
          <p className="font-medium">Price: ${price}</p>
          <p className="font-medium">Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
        </div>
        <button
          onClick={() => handleDelete(id)}
          className="mx-5 my-5 border border-2 px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:text-black hover:bg-white hover:border-red-500"
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default ManageEachItem;
