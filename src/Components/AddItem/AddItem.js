import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const email = event.target.email.value;
    const img = event.target.img.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;

    const newProduct = {
      name,
      description,
      email,
      img,
      price,
      quantity,
      supplier,
    };

    fetch("https://floating-savannah-17695.herokuapp.com/addeditems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="my-[85px] mx-10">
      <h1 className="text-center text-4xl font-semibold">Add New Item</h1>
      <section className="flex justify-center items-center mt-8">
        <form onSubmit={handleAddItem}>
          <input
            placeholder="Name"
            className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="text"
            name="name"
            id=""
            required
          />
          <textarea
            placeholder="Description"
            className="block border border-2 border-blue-600 rounded-lg my-4 w-[400px] h-[85px] pl-4 py-3 text-lg"
            type="text"
            name="description"
            id=""
            required
          />
          <input
            className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="email"
            name="email"
            value={user?.email}
            readOnly
            disabled
            id=""
            required
          />
          <input
            placeholder="Image Link"
            className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="text"
            name="img"
            id=""
            required
          />
          <input
            placeholder="Price"
            className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="text"
            name="price"
            id=""
            required
          />
          <input
            placeholder="Quantity"
            className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="text"
            name="quantity"
            id=""
            required
          />
          <input
            placeholder="Supplier Name"
            className="block border border-2 border-blue-600 rounded-full my-4 w-[400px] h-[43px] pl-4 text-lg"
            type="text"
            name="supplier"
            id=""
            required
          />
          <button className="block mx-auto mt-12 border border-2 px-5 py-2 rounded-lg bg-blue-500 text-white font-medium text-lg hover:text-black hover:bg-white hover:border-blue-500">
            Add item
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddItem;
