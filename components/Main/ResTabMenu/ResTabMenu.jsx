"use client";
import React, { useState } from "react";
import Hero from "@/components/Hero/Hero";
import Sidebar from "@/components/Sidebar/Sidebar";

const ResTabMenu = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex items-center justify-around">
        <button
          onClick={() => handleTabChange("home")}
          className={`py-2 px-4 text-base font-medium ${
            activeTab === "home"
              ? "border-b-2 border-[#3bb780] text-[#6f717c]"
              : "text-[#c7cbd6] "
          }`}
        >
          হোম
        </button>
        <button
          onClick={() => handleTabChange("category")}
          className={`py-2 px-4 text-base font-medium ${
            activeTab === "category"
              ? "border-b-2 border-[#3bb780] text-[#6f717c]"
              : "text-[#c7cbd6] "
          }`}
        >
          ক্যাটাগরি
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "home" && <Hero />}
        {activeTab === "category" && <Sidebar />}
      </div>
    </div>
  );
};

export default ResTabMenu;
