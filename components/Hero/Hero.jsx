"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { FiSend } from "react-icons/fi";

const slides = Array(4)
  .fill()
  .map(() => ({
    imgSrc: "/hero_bg.png",
    title: ["অবিশ্বাস্য গ্রোসারি", "ডিল মিস করবেন না"],
    subtitle: "Sign up for the daily newsletter",
  }));

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setDragOffset(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setDragOffset(0);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.nativeEvent.offsetX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.nativeEvent.offsetX;
    const walk = x - startX;
    setDragOffset(walk);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }
    setDragOffset(0);
  };

  return (
    <main
      className="relative w-full h-[50vh] md:h-[70vh] lg:h-screen overflow-hidden"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="absolute w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(calc(-${
            currentSlide * 100
          }% + ${dragOffset}px))`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute w-full h-full"
            style={{ left: `${index * 100}%` }}
          >
            <Image
              src={slide.imgSrc}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              className="rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto md:px-8">
                <div className="flex flex-col justify-center items-center lg:items-start gap-3 sm:gap-5">
                  <h2 className="font-extrabold text-[#243d4d] text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center lg:text-left">
                    {slide.title.map((line, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                  </h2>
                  <h2 className="text-[#7e7e7e] text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-center md:text-left">
                    {slide.subtitle}
                  </h2>

                  <div className="flex flex-col md:flex-row items-center gap-4 w-full ">
                    <div className="flex items-center bg-white py-3 px-4  rounded-full">
                      <FiSend className="text-[#838383] text-base" />
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="ml-3 outline-none text-sm md:text-base"
                      />
                    </div>
                    <div className="absolute right-0 md:right-auto md:left-[25%] ">
                      <input
                        type="submit"
                        value="Subscribe"
                        className="bg-[#3bb780] text-white py-3 text-sm md:text-base px-6 rounded-full w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-row items-center space-x-2 cursor-pointer">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-[#3bb780]" : "bg-[#ade1ca]"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </main>
  );
};

export default Hero;
