import React from "react";
import Banner from "./Banner";
import Ingredients from "./Ingredients";
import Delivered from "./Delivered";
import LatestProducts from "./LatestProducts";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Ingredients></Ingredients>
      <Delivered></Delivered>
      <LatestProducts></LatestProducts>
    </div>
  );
};

export default Home;
