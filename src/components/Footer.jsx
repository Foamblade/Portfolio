import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
          aditya.p.nitb@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-300 dark:border-gray-700 mx-[10%] mt-12 py-6">
        <p>© 2026 Aditya Patil. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/aditya-patil" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/aditya-patil" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/aditya-patil" target="_blank" rel="noreferrer">
              LeetCode
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
