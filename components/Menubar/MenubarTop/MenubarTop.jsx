"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaSearch, FaRegHeart, FaRegUser, FaChevronDown } from "react-icons/fa";
import { GrCart, GrLocation } from "react-icons/gr";
import logo from "@/public/logo.png";

const categories = [
  "All Categories",
  "খাবার",
  "তৈল",
  "পোশাক",
  "মেটারিয়াল",
  "ফ্রেশ খাবার",
];

const locations = [
  "Your Location",
  "Dhaka",
  "Rajshahi",
  "Barisal",
  "Mymensing",
  "Chittagong",
];

const MenubarTop = () => {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowLocationDropdown(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCategoryDropdown(false);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={logo} width={40} height={40} alt="Zest Buy Logo" />
            <h2 className="font-bold text-xl text-emerald-600">Zest Buy</h2>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative flex items-center border-2 border-[#bce3ca] rounded">
              <div className="relative">
                <button
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="flex items-center justify-between w-44 px-4 py-2 text-gray-700 bg-white rounded-l-md  "
                >
                  <span className="truncate">{selectedCategory}</span>
                  <FaChevronDown className="ml-2 text-gray-400" />
                </button>
                {showCategoryDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-xl">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="block w-full px-4 py-2 text-left text-gray-700 bg-white hover:bg-gray-100 rounded "
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="search"
                placeholder="Search for items..."
                className="flex-grow px-4 py-2 border-t  outline-none"
              />
              <button className="px-4 py-2 text-gray-400 bg-white">
                <FaSearch className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* location */}
          <div className="flex items-center space-x-6">
            <div className="relative border-2 border-gray-200 shadow-md w-48 p-3">
              <button
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 focus:outline-none"
              >
                <GrLocation className="text-xl" />
                <span>{selectedLocation}</span>
                <FaChevronDown className="text-gray-400" />
              </button>
              {showLocationDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {locations.map((location) => (
                    <button
                      key={location}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      onClick={() => handleLocationSelect(location)}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <IconWithText icon={FaRegHeart} text="Wishlist" />
            <IconWithText icon={GrCart} text="Cart" />
            <IconWithText icon={FaRegUser} text="Account" />
          </div>
        </div>
      </div>
    </div>
  );
};

const IconWithText = ({ icon: Icon, text }) => (
  <button className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 focus:outline-none">
    <Icon className="text-xl" />
    <span className="text-sm">{text}</span>
  </button>
);

export default MenubarTop;
