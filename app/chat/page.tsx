"use client";
import React, { useRef, useState, useEffect } from "react";
import ChatNavBar from "../components/chatNavBar";
import Image from "next/image";
import InputChat from "../components/inputChat";
import BotResponse from "../components/botResponse";

const Chat = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [placeholder, setPlaceholder] = useState("Message JustiBot...");
  const [micColor, setMicColor] = useState("#473F3B");
  const [messages, setMessages] = useState<{ user: boolean; text: string }[]>(
    []
  );
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentMessage(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMessage.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: true, text: currentMessage },
      ]);
      setCurrentMessage("");
      setIsLogoVisible(false);

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            user: false,
            text: "Hello this is responce form justibot application.",
          },
        ]);
      }, 1000);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currentMessage]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleVoiceInputToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsListening(!isListening);
    setPlaceholder(isListening ? "Message JustiBot..." : "Listening...");
    setMicColor(isListening ? "#473F3B" : "#A36A32");
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#131211]">
      {isSidebarVisible && (
        <div className="hidden md:block w-72 p-4 h-full">
          <ChatNavBar toggleSidebar={toggleSidebar} />
        </div>
      )}
      <div
        className={`flex-grow p-4 ${
          isSidebarVisible ? "md:ml-4" : ""
        } flex justify-center items-center`}
      >
        <div className="m-1 w-full h-full rounded-[50px] bg-[#1F1D1C] border-2 border-white flex flex-col">
          <form
            className="relative flex-grow flex flex-col justify-between"
            onSubmit={handleSubmit}
          >
            {isLogoVisible && (
              <div className="flex justify-center items-center mt-4">
                <div className="w-40 h-auto md:w-52">
                  <Image
                    src="/images/justibot-logo-1.png"
                    alt="justibot-logo-1"
                    width={400}
                    height={400}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              </div>
            )}

            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full px-4">
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
                      <clipPath id="clip0_27_174)">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              )}
            </div>
            <div className="flex flex-col gap-1 w-full mt-20 px-8 h-96 flex-grow overflow-y-auto custom-scrollbar">
              {messages.map((message, index) => (
                <div key={index} className="w-full md:w-2/4 sm:w-3/4 mx-auto">
                  {message.user ? (
                    <InputChat message={message.text} />
                  ) : (
                    <BotResponse message={message.text} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mb-4 px-4 w-full">
              <div className="relative w-full md:w-2/4 sm:w-3/4 my-2">
                <textarea
                  id="message"
                  ref={textareaRef}
                  rows={1}
                  style={{ height: "40px" }}
                  className="mr-4 block w-full max-h-40 p-2 border-gray-300 rounded-md shadow-sm focus:border-[#A36A32] focus:ring text-white bg-[#473F3B] focus:ring-indigo-200 focus:ring-opacity-50 text-md resize-none overflow-y-auto custom-scrollbar"
                  placeholder={placeholder}
                  value={currentMessage}
                  onInput={handleInput}
                />
                <button
                  onClick={handleVoiceInputToggle}
                  className="absolute right-5 top-0 bg-transparent border-none cursor-pointer focus:outline-none focus:shadow-outline"
                  style={{ height: "100%", width: "25px" }}
                  aria-label="Voice Input"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <circle cx="25" cy="25" r="22" fill={micColor} />
                    <path
                      d="M25 28.4286C23.9286 28.4286 23.0179 28.0536 22.2679 27.3036C21.5179 26.5536 21.1429 25.6429 21.1429 24.5714V16.8571C21.1429 15.7857 21.5179 14.875 22.2679 14.125C23.0179 13.375 23.9286 13 25 13C26.0714 13 26.9821 13.375 27.7321 14.125C28.4821 14.875 28.8571 15.7857 28.8571 16.8571V24.5714C28.8571 25.6429 28.4821 26.5536 27.7321 27.3036C26.9821 28.0536 26.0714 28.4286 25 28.4286ZM23.7143 37.4286V33.475C21.4857 33.175 19.6429 32.1786 18.1857 30.4857C16.7286 28.7929 16 26.8214 16 24.5714H18.5714C18.5714 26.35 19.1984 27.8663 20.4524 29.1203C21.7064 30.3743 23.2223 31.0009 25 31C26.7777 30.9991 28.294 30.3721 29.5489 29.119C30.8037 27.8659 31.4303 26.35 31.4286 24.5714H34C34 26.8214 33.2714 28.7929 31.8143 30.4857C30.3571 32.1786 28.5143 33.175 26.2857 33.475V37.4286H23.7143Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <button
                type="submit"
                className="flex items-center py-2 rounded-lg focus:outline-none focus:shadow-outline group ml-4"
              >
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
