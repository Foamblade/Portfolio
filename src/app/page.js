"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDarkMode(true);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Dark mode aurora floating orbs */}
      {isDarkMode && (
        <>
          <div className="fixed pointer-events-none z-0 w-[500px] h-[500px] rounded-full bottom-[-150px] left-[-100px] bg-gradient-to-tr from-violet-600/20 to-fuchsia-600/10 blur-3xl animate-[aurora2_15s_ease-in-out_infinite]" />
          <div className="fixed pointer-events-none z-0 w-[400px] h-[400px] rounded-full top-[40%] left-[30%] bg-gradient-to-br from-blue-500/15 to-cyan-500/10 blur-3xl animate-[aurora3_18s_ease-in-out_infinite]" />
          <div className="fixed pointer-events-none z-0 w-[350px] h-[350px] rounded-full top-[20%] right-[10%] bg-gradient-to-bl from-rose-500/15 to-pink-400/10 blur-3xl animate-[aurora1_20s_ease-in-out_infinite]" />
        </>
      )}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Achievements isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
