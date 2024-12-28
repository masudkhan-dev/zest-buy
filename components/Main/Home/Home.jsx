import React from "react";
import Hero from "../../Hero/Hero";
import Product from "../../Product/Product";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <Hero />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
