"use client";
import React, { useMemo, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// react icons
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiHomeFill } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";
import { FaRegHeart, FaRegUser } from "react-icons/fa";

// images
import dp from "@/public/user_dp.png";

const NavItem = React.memo(({ icon: Icon, label, isActive, href, onClick }) => (
  <li
    className={`flex flex-col items-center cursor-pointer ${
      isActive ? "text-[#3bb780] scale-110" : "text-[#bbc0ce]"
    }`}
    onClick={onClick}
  >
    <Link href={href} passHref>
      <div className="flex flex-col items-center">
        <Icon className="text-3xl" />
        <span
          className={`font-bold text-base ${
            isActive ? "text-[#3bb780]" : "text-[#bbc0ce]"
          }`}
        >
          {label}
        </span>
      </div>
    </Link>
  </li>
));

NavItem.displayName = "NavItem";

const MobileMenu = () => {
  const pathname = usePathname();

  const navItems = useMemo(
    () => [
      { key: "home", path: "/", icon: RiHomeFill, label: "হোম" },
      { key: "order", path: "/order", icon: FaTruckFast, label: "অর্ডার" },
      {
        key: "favorites",
        path: "/favorites",
        icon: FaRegHeart,
        label: "প্রিয় তালিকা",
      },
      { key: "profile", path: "/profile", icon: FaRegUser, label: "প্রোফাইল" },
    ],
    []
  );

  const handleNavItemClick = useCallback((path) => {
    console.log(`Navigating to ${path}`);
  }, []);

  return (
    <div className="container mx-auto px-3 lg:px-0 z-50">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-xl z-50">
        <section className="flex justify-between items-center m-3">
          <div className="flex items-center gap-2 bg-[#f7f7f9] px-3 py-2 rounded-3xl">
            <Image src={dp} width={40} height={40} alt="User Picture" />
            <h2 className="font-bold text-lg">Leonardo</h2>
          </div>
          <div className="flex items-center gap-3">
            <AiOutlineMessage className="text-3xl text-[#7d848d]" />
            <IoNotificationsOutline className="text-3xl text-[#7d848d]" />
          </div>
        </section>
      </header>

      <nav className="bg-[#def9ec] py-2 fixed bottom-0 left-0 right-0 shadow-xl z-50">
        <ul className="flex items-center justify-between mx-[8%]">
          {navItems.map(({ key, path, icon, label }) => (
            <NavItem
              key={key}
              icon={icon}
              label={label}
              isActive={pathname === path}
              href={path}
              onClick={() => handleNavItemClick(path)}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default React.memo(MobileMenu);
