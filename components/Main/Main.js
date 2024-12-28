import React from "react";

import Home from "./Home/Home";
import ResTabMenu from "./ResTabMenu/ResTabMenu";
import Product from "../Product/Product";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="mt-24 md:mt-0">
      <div>
        {/* desktop */}
        <div className="hidden md:block">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 lg:w-1/5">
              <Sidebar />
            </div>
            <div className="md:w-3/4 lg:w-4/5">
              <Home />
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="block md:hidden">
          <ResTabMenu />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Main;
