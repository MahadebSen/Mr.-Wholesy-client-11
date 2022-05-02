import React from "react";

const EachItem = ({ item }) => {
  const { name, img, description, price, quantity, supplier } = item;
  return (
    <div className="border border-2">
      <div className="border border-2 m-3 rounded-lg">
        <img className="rounded-lg" src={img} alt="" />
      </div>
      <div className="m-3">
        <p className="font-semibold text-2xl my-1">{name}</p>
        <p className="mb-1">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <p className="font-medium">Price: ${price}</p>
        <p className="font-medium">Quantity: {quantity}</p>
        <p>Supplier: {supplier}</p>
        <button className="block mx-auto my-5 border border-2 px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:text-black hover:bg-white hover:border-blue-500">
          Update
        </button>
      </div>
    </div>
  );
};

export default EachItem;
