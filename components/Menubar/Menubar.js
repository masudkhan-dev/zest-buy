"use client";
import React, { useState, useEffect } from "react";

// components
import MenubarTop from "./MenubarTop/MenubarTop";
import MenubarBottom from "./MenubarBottom/MenubarBottom";
import MobileMenu from "./MobileMenu/MobileMenu";

const Menubar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      {/* desktop */}
      <div className="hidden md:block">
        <MenubarTop />
        <div
          className={`transition-all duration-700 ${
            isSticky ? "fixed top-0 left-0 w-full bg-white z-50 shadow-xl" : ""
          }`}
        >
          <MenubarBottom />
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <MobileMenu />
      </div>
    </main>
  );
};

export default Menubar;
