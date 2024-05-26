"use client";
import React, { useRef, useState, useEffect } from "react";
import ChatNavBar from "../components/chatNavBar";
import Image from "next/image";

const Chat = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="grid grid-cols-12 overflow-hidden h-screen w-screen bg-[#131211]">
      {isSidebarVisible && (
        <div className="sm:col-span-0 lg:col-span-3 xl:col-span-2 md:col-span-3 p-4 justify-center items-center">
          <ChatNavBar toggleSidebar={toggleSidebar} />{" "}
        </div>
      )}
      <div
        className={`col-span-12 ${
          isSidebarVisible
            ? "lg:col-span-9 xl:col-span-10 md:col-span-9"
            : "col-span-12"
        } p-4 justify-center items-center w-full`}
      >
        <div className="m-1 rounded-[50px] bg-[#1F1D1C] border-2 border-white h-full">
          <form className="relative h-full w-full flex justify-center">
            <div className="w-52 h-auto m-20">
              <Image
                src="/images/justibot-logo-1.png"
                alt="justibot-logo-1"
                width={400}
                height={400}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="px-4 absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 w-full">
              {!isSidebarVisible && (
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_27_174)">
                      <path
                        d="M33.3332 29.1666C33.9752 29.1669 34.5925 29.4142 35.0571 29.8573C35.5218 30.3003 35.7982 30.9052 35.829 31.5464C35.8599 32.1877 35.6428 32.8163 35.2229 33.3019C34.8029 33.7875 34.2122 34.093 33.5732 34.1549L33.3332 34.1666H6.6665C6.02448 34.1663 5.40718 33.919 4.94253 33.4759C4.47787 33.0328 4.20148 32.428 4.17063 31.7867C4.13978 31.1454 4.35682 30.5169 4.7768 30.0312C5.19677 29.5456 5.78747 29.2402 6.4265 29.1783L6.6665 29.1666H33.3332ZM33.3332 17.4999C33.9962 17.4999 34.6321 17.7633 35.1009 18.2322C35.5698 18.701 35.8332 19.3369 35.8332 19.9999C35.8332 20.663 35.5698 21.2988 35.1009 21.7677C34.6321 22.2365 33.9962 22.4999 33.3332 22.4999H6.6665C6.00346 22.4999 5.36758 22.2365 4.89874 21.7677C4.4299 21.2988 4.1665 20.663 4.1665 19.9999C4.1665 19.3369 4.4299 18.701 4.89874 18.2322C5.36758 17.7633 6.00346 17.4999 6.6665 17.4999H33.3332ZM33.3332 5.83325C33.9962 5.83325 34.6321 6.09664 35.1009 6.56549C35.5698 7.03433 35.8332 7.67021 35.8332 8.33325C35.8332 8.99629 35.5698 9.63218 35.1009 10.101C34.6321 10.5699 33.9962 10.8333 33.3332 10.8333H6.6665C6.00346 10.8333 5.36758 10.5699 4.89874 10.101C4.4299 9.63218 4.1665 8.99629 4.1665 8.33325C4.1665 7.67021 4.4299 7.03433 4.89874 6.56549C5.36758 6.09664 6.00346 5.83325 6.6665 5.83325H33.3332Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_27_174">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              )}
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 flex items-center justify-center w-full">
              <textarea
                id="message"
                ref={textareaRef}
                rows={1}
                style={{ height: "40px" }} // Set default height here
                className="mr-4 my-2 block w-2/4 max-h-40 p-2 border-gray-300 rounded-md shadow-sm focus:border-[#A36A32] focus:ring text-white bg-[#473F3B] focus:ring-indigo-200 focus:ring-opacity-50 text-md resize-none overflow-y-auto custom-scrollbar"
                placeholder="Message JustiBot.."
                onInput={handleInput}
              />
              <button className="flex items-center py-2 rounded-lg focus:outline-none focus:shadow-outline group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="26"
                  viewBox="0 0 29 26"
                  fill="none"
                >
                  <path
                    d="M0.41748 0V9.80769L16.7742 12.6923L0.41748 15.5769V25.3846L28.7691 12.6923L0.41748 0Z"
                    className="fill-white group-hover:fill-[#A36A32]"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;