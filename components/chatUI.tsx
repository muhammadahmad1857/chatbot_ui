"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
import Input from "./input";
import Message from "@/types/messageType";
type ChatProps = {
  chat?: Message[];
  id?: string;
  name?: string;
  timeStamp?: string;
};

const ChatUI = ({ chat }: ChatProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 940); // Set isOpen based on window width
    };

    // Set initial isOpen state based on window width
    setIsOpen(window.innerWidth >= 940);

    // Add event listener to update isOpen state on window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`h-full transition-all duration-300 ${
          isOpen ? "md:w-4/5 w-full" : "w-full"
        }`}
      >
        {!isOpen && (
          <div className="flex fixed top-0 left-0 z-50 items-center gap-3 p-4">
            <button
              onClick={() => setIsOpen(true)}
              className="cursor-pointer hover:text-violet-700 rounded-xl px-[4px] transition-all duration-300"
            >
              <RxHamburgerMenu size={32} />
            </button>

            <button className="cursor-pointer font-bold px-[4px] py-1 hover:text-violet-700 rounded-xl transition-all duration-300">
              <FaRegEdit size={32} />
            </button>
          </div>
        )}
        <div className="flex flex-col items-center justify-center w-full h-screen gap-4 py-8 px-4">
          <div className="flex-1 max-h-[calc(100%-100px)] w-full md:w-[750px]  mt-8 overflow-y-auto">
            {chat ? (
              <div className="flex flex-col h-full ">
                {chat.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.userRole === "bot" ? "justify-start" : "justify-end"
                    } mb-2`}
                  >
                    <div
                      className={`p-4 rounded-lg ${
                        msg.userRole === "bot"
                          ? "bg-violet-700 text-white"
                          : "bg-gray-400 text-black"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center h-full justify-center">
                <img src="/logo.png" alt="Health AI Logo" className="mb-4" />
                <h1 className="text-2xl font-bold">Health AI Bot</h1>
                <p className="text-center">
                  Your virtual assistant for health-related inquiries and
                  advice.
                </p>
              </div>
            )}
          </div>
          <div className="max-sm:min-w-full">
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
