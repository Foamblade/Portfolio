import Image from "next/image";
import React from "react";
import { achievementsData, assets } from "../assets/assets";

const Achievements = ({ isDarkMode }) => {
  return (
    <div id="achievements" className="w-full px-[12%] py-10 scroll-mt-20 bg-white dark:bg-transparent">
      <h4 className="text-center mb-2 text-lg font-ovo">What I have achieved</h4>
      <h2 className="text-center text-5xl font-ovo">Achievements &amp; Leadership</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I thrive in competitive environments and leadership roles, constantly pushing the boundaries of my skills through hackathons, competitive programming, and technical clubs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {achievementsData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-8 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-white/20 dark:hover:bg-darkHover/50 dark:hover:shadow-white/10"
          >
            <Image src={item.icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 font-semibold">{item.title}</h3>
            <p className="text-sm leading-5">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
