import Image from "next/image";
import React from "react";
import { assets, workData } from "../assets/assets";

const Projects = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20 bg-white dark:bg-transparent">
      <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Welcome to my portfolio! Explore a collection of projects showcasing my expertise in 
        robotics algorithms, MERN stack web development, and simulation engineering.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: project.bgImage }}
            onClick={() => window.open(project.link, '_blank')}
          >
            {/* THE ONLY EXCEPTION: project card overlay always has dark text */}
            <div className="project-card-overlay bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-rose-50 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <a
        href="#"
        className="w-max flex items-center justify-center gap-2 border border-gray-800 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:border-white/60 dark:hover:bg-darkHover/50"
      >
        Show more{" "}
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="Right arrow" className="w-4" />
      </a>
    </div>
  );
};

export default Projects;
