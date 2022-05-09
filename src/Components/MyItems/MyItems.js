import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyEachItem from "./MyEachItem";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const getItems = async () => {
      const url = `https://floating-savannah-17695.herokuapp.com/myitems?email=${user.email}`;
      console.log(url);
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setItems(data));
    };
    getItems();
  }, [user]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete ?");
    if (confirm) {
      fetch(`https://floating-savannah-17695.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            setItems(items.filter((item) => item._id !== id));
          }
        });

      // ;
    }
  };

  return (
    <div className="m-5">
      <p className="text-center font-semibold text-3xl my-4">My Items</p>
      {items.map((item) => (
        <MyEachItem
          key={item._id}
          item={item}
          handleDelete={handleDelete}
        ></MyEachItem>
      ))}
    </div>
  );
};

export default MyItems;
