import React from "react";
import Image from "next/image";

// react icons
import { IoLocationOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { TbClockHour10 } from "react-icons/tb";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

// image
import logo from "@/public/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0 my-16">
        <footer>
          {/* footer top */}
          <div className="grid grid-cols-2 md:grid-cols-8 gap-4 md:gap-2">
            <div className="grid col-span-2">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-[#243d4d] text-2xl qfont font-bold">
                  <Image src={logo} width={80} height={80} alt="logo" /> Zest
                  Buy
                </li>

                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  <IoLocationOutline className="text-[#3bb782] text-xl qfont" />
                  Address: 5171 W Campbell Ave <br /> undefined Kent, Utah 53127
                  United States
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  <FiHeadphones className="text-[#3bb782] text-base qfont" />
                  Call Us:(+91) - 540-025-124553
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  <IoIosSend className="text-[#3bb782] text-base qfont" />
                  Email:sale@Nest.com
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  <TbClockHour10 className="text-[#3bb782] text-base qfont" />
                  Hours:10:00 - 18:00, Mon - Sat
                </li>
              </ul>
            </div>

            <div className="grid col-span-1">
              <ul className="flex flex-col gap-2">
                <li className=" text-[#243d4d] text-2xl qfont font-bold">
                  Company
                </li>
                <li className="text-[#243d4d] text-base qfont">About Us</li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Delivery Information
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Privacy Policy
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Terms & Conditions
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Contact Us
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Support Center
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Careers
                </li>
              </ul>
            </div>

            <div className="grid col-span-1">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-[#243d4d] text-2xl qfont font-bold">
                  Account
                </li>
                <li className="text-[#243d4d] text-base qfont">Sign In</li>
                <li className="text-[#243d4d] text-base qfont">View Cart</li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  My Wishlist
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Track My Order
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Help Ticket
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Shipping Details
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Compare products
                </li>
              </ul>
            </div>

            <div className="grid col-span-1">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-[#243d4d] text-2xl qfont font-bold">
                  Corporate
                </li>
                <li className="text-[#243d4d] text-base qfont">
                  Become a Vendor
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Affiliate Program
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Farm Business
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Farm Careers
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Our Suppliers
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Accessibility
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Promotions
                </li>
              </ul>
            </div>

            <div className="grid col-span-1">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-[#243d4d] text-2xl qfont font-bold">
                  Popular
                </li>
                <li className="text-[#243d4d] text-base qfont">
                  Milk & Flavoured Milk
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Butter and Margarine
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Eggs Substitutes
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Marmalades
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Sour Cream and Dips
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Tea & Kombucha
                </li>
                <li className="flex items-center gap-2 text-[#243d4d] text-base qfont">
                  Cheese
                </li>
              </ul>
            </div>

            <div className="grid col-span-2">
              <ul className="flex flex-col items-center justify-center gap-3">
                <li className="flex items-center gap-2 text-[#243d4d] text-2xl qfont font-bold">
                  Install App
                </li>
                <li className="flex items-center flex-col gap-5">
                  <button className="flex items-center justify-center gap-2 bg-black py-2 px-3  rounded-md">
                    <div>
                      <FaApple className="text-white text-4xl" />
                    </div>
                    <div>
                      <p className="text-white text-xs qfont">
                        Download on the
                      </p>
                      <p className="text-xl text-white qfont">Apple Store</p>
                    </div>
                  </button>
                  <button className="flex items-center justify-center bg-black gap-2 py-2 px-3 rounded-md">
                    <div>
                      <FaGooglePlay className="text-white text-3xl" />
                    </div>
                    <div>
                      <p className="text-white text-xs qfont">
                        Download on the
                      </p>
                      <p className="text-xl text-white qfont">Apple Store</p>
                    </div>
                  </button>
                </li>
                <li className="text-[#243d4d] text-base qfont">
                  Secured Payment Gateways
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <p className="text-[#243d4d] font-bold text-base qfont">
                      Follow Us
                    </p>
                    <div className="flex items-center gap-1">
                      <button className="bg-[#3bb780] p-2 rounded-full">
                        <FaFacebookF className="text-white" />
                      </button>
                      <button className="bg-[#3bb780] p-2 rounded-full">
                        <FaTwitter className="text-white" />
                      </button>
                      <button className="bg-[#3bb780] p-2 rounded-full">
                        <FaInstagram className="text-white" />
                      </button>
                      <button className="bg-[#3bb780] p-2 rounded-full">
                        <FaPinterestP className="text-white" />
                      </button>
                      <button className="bg-[#3bb780] p-2 rounded-full">
                        <FaYoutube className="text-white" />
                      </button>
                    </div>
                  </div>
                  <p className="text-[#7e7e7e] text-sm mt-3 qfont">
                    Up to 15% discount on your first subscribe
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* border */}
          <div className="border-t border-[#bce3ca] my-10"></div>

          {/* footer bottom */}
          <div className="flex flex-col md:flex-row justify-between ">
            <p className="text-[#7E7E7E] text-center md:text-left text-base qfont">
              &copy; 2024, - HTML Ecommerce Template <br /> All rights reserved
            </p>
            <div className="flex flex-col md:flex-row items-center gap-5 my-8 md:mt-0">
              <div className="flex items-center gap-2">
                <div>
                  <FiPhoneCall className="text-[#7E7E7E] text-2xl" />
                </div>
                <div>
                  <h2 className="text-[#3bb782] font-bold text-2xl qfont">
                    01234567
                  </h2>
                  <p className="text-[#7E7E7E] text-sm qfont">
                    Working 8:00 - 22:00
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FiPhoneCall className="text-[#7E7E7E] text-2xl" />
                </div>
                <div>
                  <h2 className="text-[#3bb782] font-bold text-2xl qfont">
                    01234567
                  </h2>
                  <p className="text-[#7E7E7E] text-sm qfont">
                    24/7 Support Center
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
