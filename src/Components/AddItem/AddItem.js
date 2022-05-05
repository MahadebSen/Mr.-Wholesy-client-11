import React from "react";

const AddItem = () => {
  return (
    <div className="my-[85px] mx-10">
      <h1 className="text-center text-4xl font-semibold">Add New Item</h1>
      <section className="flex justify-center items-center my-5">
        <div>
          <input
            placeholder="Name"
            className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="text"
            name="name"
            id=""
          />
          <textarea
            placeholder="Description"
            className="block border border-2 border-blue-600 rounded-lg my-4 w-[400px] h-[85px] pl-4 py-3 text-lg"
            type="text"
            name="description"
            id=""
          />
          <input
            placeholder="Image Link"
            className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="text"
            name="img"
            id=""
          />
          <input
            placeholder="Price"
            className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="text"
            name="price"
            id=""
          />
          <input
            placeholder="Quantity"
            className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="text"
            name="quantity"
            id=""
          />
          <input
            placeholder="Supplier Name"
            className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="text"
            name="supplier"
            id=""
          />
        </div>
      </section>
      <button className="block mx-auto my-6 border border-2 px-5 py-2 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500">
        Add item
      </button>
    </div>
  );
};

export default AddItem;
