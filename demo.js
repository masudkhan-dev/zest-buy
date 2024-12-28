"use client";
import React, { useState } from "react";
import Hero from "@/components/Hero/Hero";
import Sidebar from "../Sidebar/Sidebar";

const ResTabMenu = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex items-center border-b border-gray-300">
        <button
          onClick={() => handleTabChange("home")}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "home"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => handleTabChange("category")}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "category"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          Category
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
