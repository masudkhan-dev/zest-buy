import React from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

//  product images
import p1 from "@/public/product-1.png";
import p2 from "@/public/product-2.png";
import p3 from "@/public/product-3.png";
import p4 from "@/public/product-4.png";
import p5 from "@/public/product-5.png";

import pb1 from "@/public/pb1.png";
import pb2 from "@/public/pb2.png";
import pb3 from "@/public/pb3.png";

// Product data
const products = [
  {
    id: 1,
    image: p1,
    category: "Snack",
    name: "Seeds of Change Organic Quinoa",
    rating: 4,
    brand: "NestFood",
    price: 28.85,
    originalPrice: 32.8,
  },
  {
    id: 2,
    image: p2,
    category: "Hodo Foods",
    name: "All Natural Italian-Style Chicken Meatballs",
    rating: 3.5,
    brand: "Stouffer",
    price: 52.85,
    originalPrice: 55.8,
  },
  {
    id: 3,
    image: p3,
    category: "Snack",
    name: "Angie's Boomchickapop Sweet & Salty",
    rating: 4,
    brand: "StarKist",
    price: 48.85,
    originalPrice: 52.8,
  },
  {
    id: 4,
    image: p4,
    category: "Vegetables",
    name: "Foster Farms Takeout Crispy Classic",
    rating: 4,
    brand: "NestFood",
    price: 17.85,
    originalPrice: 19.8,
  },
  {
    id: 5,
    image: p5,
    category: "Pet Foods",
    name: "Blue Diamond Almonds Lightly",
    rating: 4,
    brand: "NestFood",
    price: 23.85,
    originalPrice: 25.8,
  },
];

//  star icon
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-[#ffbf4f] text-lg" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-[#ffbf4f] text-lg" />}
      <span className="text-lg text-[#adadad] qfont ml-1">({rating})</span>
    </div>
  );
};

//  product card
const ProductCard = ({ product }) => {
  return (
    <main className="flex items-center justify-center ">
      <section className="flex flex-col justify-center items-center gap-2 border border-[#ececec] rounded-lg w-[90%] md:w-96 shadow-lg px-5 py-4">
        <figure className="mb-4">
          <Image
            src={product.image}
            width={200}
            height={200}
            alt={`Picture of ${product.name}`}
          />
        </figure>
        <div className="flex flex-col justify-start items-start w-full">
          <p className="text-sm text-[#adadad] qfont">{product.category}</p>
          <h2 className="text-xl text-[#243d4d] font-bold qfont mb-2">
            {product.name}
          </h2>
          <StarRating rating={product.rating} />
          <div className="flex items-center gap-1 mt-2">
            <span className="text-lg text-[#adadad] qfont">By</span>
            <span className="text-[#3bb780] qfont">{product.brand}</span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-4">
          <h2 className="text-[#3bb780] qfont text-lg font-bold">
            ${product.price.toFixed(2)}
          </h2>
          <h2 className="text-[#adadad] qfont text-base font-bold line-through">
            ${product.originalPrice.toFixed(2)}
          </h2>

          <button className="flex items-center gap-2 bg-[#def9ec] px-4 py-2 rounded-md text-[#3bb780] hover:bg-[#3bb780] hover:text-white transition-colors duration-300">
            <IoCartOutline /> Add
          </button>
        </div>
      </section>
    </main>
  );
};

// promotion card
const PromotionCard = ({ image, title, buttonText }) => (
  <div className="relative h-full overflow-hidden rounded-lg group">
    <Image
      src={image}
      objectFit="cover"
      alt={title}
      className="transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0  flex flex-col justify-center items-start px-6 text-left">
      <h2 className="text-[#243d4d] text-xl font-bold transition-transform duration-300 group-hover:-translate-y-2 qfont">
        {title}
      </h2>
      <button className=" text-white py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-green-500  transform group-hover:translate-y-2 qfont mt-5">
        {buttonText}
      </button>
    </div>
  </div>
);

const Product = () => {
  return (
    <div className="container mx-auto px-1 md:px-5 py-7">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-8 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>

      {/*  bottom section */}
      <section className="container mx-auto px-3 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <PromotionCard
          image={pb1}
          title="Everyday Fresh & Clean with Our Products"
          buttonText="Shop Now"
        />
        <PromotionCard
          image={pb2}
          title="Make your Breakfast Healthy and Easy"
          buttonText="Shop Now"
        />
        <PromotionCard
          image={pb3}
          title="The Best Organic Products Online"
          buttonText="Shop Now"
        />
      </section>
    </div>
  );
};

export default Product;
