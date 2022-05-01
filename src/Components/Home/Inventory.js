import React, { useEffect, useState } from "react";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("FakeDB/FakeDB.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <p className="text-center my-8 text-4xl">Inventory</p>
      <div>
        <p>products are {products.length}</p>
      </div>
    </div>
  );
};

export default Inventory;
