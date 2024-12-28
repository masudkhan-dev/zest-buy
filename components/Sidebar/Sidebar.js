import React from "react";
import Sidebar2 from "./Sidebar2/Sidebar2";
import Sidebar3 from "./Sidebar3/Sidebar3";

const Sidebar = () => {
  return (
    <div>
      <div className="container mx-auto  ">
        <aside className="flex flex-col gap-10">
          <Sidebar2 />
          <Sidebar3 />
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
