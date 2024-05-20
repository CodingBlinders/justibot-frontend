"use client";
import React, { useRef, useEffect } from "react";
import ChatNacBar from "../components/chatNavBar";
import Image from "next/image";

const Chat = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

  return (
    <div className="grid grid-cols-12 overflow-hidden h-screen w-screen bg-[#131211]">
      <div className="sm:col-span-0 lg:col-span-3 xl:col-span-2 md:col-span-3 p-4 justify-center items-center">
        <ChatNacBar />
      </div>
      <div className="col-span-12 lg:col-span-9 xl:col-span-10 md:col-span-9 p-4 justify-center items-center w-full">
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
