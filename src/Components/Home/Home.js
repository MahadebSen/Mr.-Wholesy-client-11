import React from "react";
import InventoryHome from "./InventoryHome";
import Partners from "./Partners/Partners";
import Slider from "./Slider";
import Testimonials from "./Testmonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <InventoryHome></InventoryHome>
      <Partners></Partners>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
