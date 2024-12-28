import React from "react";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import bg from "@/public/subscribe_bg.png";
import S1 from "@/public/subscribe_1.png";

const Subscribe = () => {
  return (
    <section className="container mx-auto px-3 lg:px-0">
      <div
        className="bg-cover bg-center bg-no-repeat flex flex-col-reverse md:flex-row items-center justify-between p-8 rounded-lg mt-5"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#243d4d] qfont">
            Stay home & get your daily needs from our shop
          </h2>
          <p className="mb-6 text-[#7e7e7e] text-base">
            Start Your Daily Shopping with{" "}
            <span className="text-[#3bb780] font-semibold">Nest Mart</span>
          </p>
          <form className="relative">
            <div className="flex items-center bg-white py-3 px-4 rounded-full">
              <FiSend className="text-[#838383] text-lg" />
              <input
                type="email"
                placeholder="Your email address"
                className="ml-3 outline-none text-sm md:text-base w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#3bb780] text-white py-3 px-6 rounded-full text-sm md:text-base absolute right-0 top-0  md:top-auto md:bottom-0  transition-colors hover:bg-[#2a9d68]"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="w-full md:w-auto mb-10 md:mb-0">
          <Image
            src={S1}
            width={400}
            height={400}
            alt="Subscribe Picture"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
