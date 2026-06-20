"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => setSideMenu(true);
  const closeMenu = () => setSideMenu(false);

  return (
    <>
      <div className="absolute top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" priority />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white/90 backdrop-blur-lg shadow-sm dark:bg-[#0d0d1a]/90 dark:shadow-white/10"
            : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt=""
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white/80 shadow-sm dark:bg-transparent dark:border dark:border-white/30"
          }`}
        >
          <li><a href="#top" className="font-outfit">Home</a></li>
          <li><a href="#about" className="font-outfit">About me</a></li>
          <li><a href="#achievements" className="font-outfit">Achievements</a></li>
          <li><a href="#work" className="font-outfit">My Work</a></li>
          <li><a href="#contact" className="font-outfit">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-2 border-gray-800 rounded-full ml-4 font-outfit hover:bg-gray-100 transition-colors duration-200 dark:border-white/50 dark:hover:bg-white/10"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#0d0d1a] dark:border-l dark:border-white/10 ${
            sideMenu ? "translate-x-[-16rem]" : ""
          }`}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li><a href="#top" onClick={closeMenu} className="font-outfit">Home</a></li>
          <li><a href="#about" onClick={closeMenu} className="font-outfit">About me</a></li>
          <li><a href="#achievements" onClick={closeMenu} className="font-outfit">Achievements</a></li>
          <li><a href="#work" onClick={closeMenu} className="font-outfit">My Work</a></li>
          <li><a href="#contact" onClick={closeMenu} className="font-outfit">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
