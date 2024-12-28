import React from "react";
import Image from "next/image";

// react icons
import { FaStar } from "react-icons/fa";

// product data
const products = [
  { id: 1, name: "আমের জুস", price: 99.5, image: "/mango_juice.png" },
  { id: 2, name: "পাকা কলা", price: 89.5, image: "/banana.png" },
  { id: 3, name: "তরমুজ", price: 25.0, image: "/watermilon.png" },
];

const ProductItem = ({ name, price, image }) => (
  <li className="flex items-center gap-4 w-full">
    <Image
      src={image}
      width={80}
      height={80}
      alt={name}
      className="rounded-lg"
    />
    <div className="flex flex-col gap-1">
      <h2 className="text-emerald-600 text-lg font-semibold qfont">{name}</h2>
      <p className="text-gray-600 qfont">${price.toFixed(2)}</p>
      <FaStar className="text-amber-400 fill-current" size={16} />
    </div>
  </li>
);

const Sidebar3 = () => {
  return (
    <div className="">
      <aside className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <header>
          <h2 className="text-gray-800 font-bold text-2xl mb-4 text-center qfont">
            New products
          </h2>
          <div className="flex items-center justify-center mb-5">
            <div className="flex-grow-0  h-1 w-16 bg-[#bce3ca]"></div>
            <div className="flex-grow h-px bg-[#ececec]"></div>
          </div>
        </header>
        <ul className="space-y-4">
          {products.map((product, index) => (
            <React.Fragment key={product.id}>
              <ProductItem {...product} />
              {index < products.length - 1 && (
                <li className="border-b border-dashed border-gray-200" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar3;
