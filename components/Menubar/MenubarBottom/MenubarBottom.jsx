"use client";
import React, { useState } from "react";
import { FaHeadphones, FaFire, FaAngleDown } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";

const categories = [
  { value: "All Categories", label: "সব ক্যাটেগরি ব্রাউজ করুন" },
  { value: "খাবার", label: "খাবার" },
  { value: "তৈল", label: "তৈল" },
  { value: "পোশাক", label: "পোশাক" },
  { value: "মেটারিয়াল", label: "মেটারিয়াল" },
  { value: "ফ্রেশ খাবার", label: "ফ্রেশ খাবার" },
];

const navItems = [
  { label: "অফার", icon: FaFire },
  { label: "হোম" },
  { label: "দোকান" },
  {
    label: "বিক্রেতা",
    submenu: ["বিক্রেতা ১", "বিক্রেতা ২", "বিক্রেতা ৩", "বিক্রেতা ৪"],
  },
  {
    label: "মেগা মেনু",
    submenu: ["মেগা মেনু ১", "মেগা মেনু ২", "মেগা মেনু ৩", "মেগা মেনু ৪"],
  },
  {
    label: "পেজ",
    submenu: ["পেজ ১", "পেজ ২", "পেজ ৩", "পেজ ৪"],
  },
  { label: "যোগাযোগ" },
];

const MenubarBottom = () => {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="bg-white text-[#243d4d] shadow-xl border-y border-[#ececec]">
      <div className="container mx-auto px-3 lg:px-0">
        <main className="flex items-center justify-between py-3">
          <CategoryDropdown
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            showCategoryDropdown={showCategoryDropdown}
            setShowCategoryDropdown={setShowCategoryDropdown}
          />
          <nav>
            <ul className="flex items-center space-x-4">
              {navItems.map((item, index) => (
                <NavItem key={index} {...item} />
              ))}
            </ul>
          </nav>
          <SupportSection />
        </main>
      </div>
    </div>
  );
};

const CategoryDropdown = ({
  selectedCategory,
  setSelectedCategory,
  showCategoryDropdown,
  setShowCategoryDropdown,
}) => (
  <section className="relative">
    <button
      onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
      className="bg-[#3bb780] text-white outline-none px-4 py-2 rounded flex items-center w-[16.5rem]"
    >
      <AiOutlineAppstore className="mr-2 text-2xl" />
      {selectedCategory.label} <FaAngleDown className="ml-2" />
    </button>
    {showCategoryDropdown && (
      <div className="absolute top-full left-0 mt-1 w-60 bg-[#3bb780] text-white z-10 rounded shadow-lg animate-fadeIn">
        {categories.map(({ value, label }) => (
          <div
            key={value}
            className="px-4 py-2 hover:bg-[#2a9d8f] cursor-pointer transition-colors duration-200"
            onClick={() => {
              setSelectedCategory({ value, label });
              setShowCategoryDropdown(false);
            }}
          >
            {label}
          </div>
        ))}
      </div>
    )}
  </section>
);

const NavItem = ({ label, icon: Icon, submenu }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <li
      className="relative group"
      onMouseEnter={() => setShowSubmenu(true)}
      onMouseLeave={() => setShowSubmenu(false)}
    >
      <span className="flex items-center gap-2 hover:bg-[#2a9d8f] text-[#2a9d8f] hover:text-white px-3 py-2 rounded transition-colors duration-200 cursor-pointer z-50">
        {Icon && <Icon />}
        {label}
        {submenu && <FaAngleDown className="ml-1" />}
      </span>
      {submenu && showSubmenu && (
        <ul className="absolute left-0 mt-2 bg-[#3bb780] text-white rounded shadow-lg w-40 animate-fadeIn z-50">
          {submenu.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-[#2a9d8f] transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const SupportSection = () => (
  <section className="flex items-center space-x-3">
    <FaHeadphones className="text-3xl text-[#243d4d]" />
    <div>
      <h2 className="text-lg font-semibold text-[#3bb780]">লাইভ চ্যাট</h2>
      <p className="text-sm text-[#7e7e7e]">24/7 Support Center</p>
    </div>
  </section>
);

export default MenubarBottom;
