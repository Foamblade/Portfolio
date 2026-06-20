import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../assets/assets";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setTimeout(() => {
      setResult("Form Submitted Successfully");
      event.target.reset();
    }, 1500);
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I&apos;d love to hear from you! If you have any questions, comments, or 
        collaboration ideas, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 rounded-md"
          />
        </div>
        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 rounded-md mb-6"
        ></textarea>
        
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-gray-900 text-white rounded-full mx-auto hover:bg-black duration-300 hover:scale-105 dark:bg-transparent dark:border dark:border-white/50 dark:hover:bg-white/10"
        >
          Submit now <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        <p className="mt-4 text-center">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
