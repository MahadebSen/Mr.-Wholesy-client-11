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
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setItems(data));
    };
    getItems();
  }, [user]);

  return (
    <div className="m-5">
      <p className="text-center font-semibold text-3xl my-4">My Items</p>
      {items.map((item) => (
        <MyEachItem key={item._id} item={item}></MyEachItem>
      ))}
    </div>
  );
};

export default MyItems;
