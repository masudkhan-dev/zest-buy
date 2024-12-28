import React from "react";
import Image from "next/image";

//  category data
const categories = [
  { id: 1, name: "খাবার", image: "/category-1.png", count: 3 },
  { id: 2, name: "তৈল", image: "/category-2.png", count: 4 },
  { id: 3, name: "পোশাক", image: "/category-3.png", count: 5 },
  { id: 4, name: "মেটেরিয়াল", image: "/category-4.png", count: 8 },
  { id: 5, name: "ফ্রেস খাবার", image: "/category-5.png", count: 10 },
];

const CategoryItem = ({ category }) => (
  <li className="flex items-center justify-between bg-white border border-gray-200 p-3 mt-4 rounded-lg hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center space-x-3">
      <Image
        src={category.image}
        width={40}
        height={40}
        alt={`${category.name} icon`}
        className="object-contain"
      />
      <span className="text-gray-800 text-lg font-medium qfont">
        {category.name}
      </span>
    </div>
    <div className="flex items-center">
      <span className="bg-green-100 text-green-800 text-sm font-semibold py-1 px-3 rounded-full qfont">
        {category.count}
      </span>
    </div>
  </li>
);

const Sidebar = () => {
  return (
    <div className="">
      <aside className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6">
        <header className="mb-6">
          <h2 className="font-bold text-2xl text-gray-800">Category</h2>
          <div className="flex items-center justify-center my-5">
            <div className="flex-grow-0  h-1 w-16 bg-[#bce3ca]"></div>
            <div className="flex-grow h-px bg-[#ececec]"></div>
          </div>
        </header>

        <nav>
          <ul className="space-y-2">
            {categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
