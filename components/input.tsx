"use client";
import React, { useState } from "react";

const Input = () => {
  const [msg, setMsg] = useState<string>("");
  // add submit logic
  return (
    <div className="relative rounded-full focus-within:border-violet-700 border-2 overflow-hidden bg-white shadow-xl w-full  md:w-[750px] sm:w-[600px]">
      <input
        className="input bg-transparent outline-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
        placeholder="Your Message"
        name="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        type="text"
      />
      <div className="absolute right-2 top-[0.4em]">
        <button className="w-14 h-14 rounded-full bg-violet-700 group shadow-xl flex items-center justify-center relative overflow-hidden">
          <svg
            className="relative z-10 rotate-45 hover:rotate-0 transition-transform duration-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 64 64"
            height="50"
            width="50"
          >
            <path
              fill-opacity="0.01"
              fill="white"
              d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
            ></path>
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="3.76603"
              stroke="white"
              d="M42.8496 18.7067L21.0628 44.6712"
            ></path>
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="3.76603"
              stroke="white"
              d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
            ></path>
          </svg>
          <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
          <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"></div>
        </button>
      </div>
    </div>
  );
};

export default Input;
