import React from "react";
import InventoryHome from "./InventoryHome";
import Slider from "./Slider";
import Testimonials from "./Testmonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <InventoryHome></InventoryHome>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
