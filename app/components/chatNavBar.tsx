import React from "react";
import Image from "next/image";
import ProCard from "./proCard";
import ChatProfile from "./chatProfile";
import { motion } from "framer-motion";

interface ChatNavBarProps {
  toggleSidebar: () => void;
}

const ChatNavBar: React.FC<ChatNavBarProps> = ({ toggleSidebar }) => {
  return (
    <motion.div
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      exit={{ x: -250 }}
      transition={{ type: "spring", stiffness: 70 }}
      className=" w-full h-full"
    >
      <div className="flex flex-col m-4 p-2 w-full h-full">
        <div className="flex flex-row w-full gap-2">
          <button
            onClick={toggleSidebar}
            className="flex items-center p-2 rounded-lg focus:outline-none focus:shadow-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 2.33333C0 1.71449 0.210714 1.121 0.585786 0.683418C0.960859 0.245833 1.46957 0 2 0H26C26.5304 0 27.0391 0.245833 27.4142 0.683418C27.7893 1.121 28 1.71449 28 2.33333C28 2.95217 27.7893 3.54566 27.4142 3.98325C27.0391 4.42083 26.5304 4.66667 26 4.66667H2C1.46957 4.66667 0.960859 4.42083 0.585786 3.98325C0.210714 3.54566 0 2.95217 0 2.33333ZM0 14C0 13.3812 0.210714 12.7877 0.585786 12.3501C0.960859 11.9125 1.46957 11.6667 2 11.6667H26C26.5304 11.6667 27.0391 11.9125 27.4142 12.3501C27.7893 12.7877 28 13.3812 28 14C28 14.6188 27.7893 15.2123 27.4142 15.6499C27.0391 16.0875 26.5304 16.3333 26 16.3333H2C1.46957 16.3333 0.960859 16.0875 0.585786 15.6499C0.210714 15.2123 0 14.6188 0 14ZM0 25.6667C0 25.0478 0.210714 24.4543 0.585786 24.0168C0.960859 23.5792 1.46957 23.3333 2 23.3333H14C14.5304 23.3333 15.0391 23.5792 15.4142 24.0168C15.7893 24.4543 16 25.0478 16 25.6667C16 26.2855 15.7893 26.879 15.4142 27.3166C15.0391 27.7542 14.5304 28 14 28H2C1.46957 28 0.960859 27.7542 0.585786 27.3166C0.210714 26.879 0 26.2855 0 25.6667Z"
                fill="white"
              />
            </svg>
          </button>
          <div className="lg:w-50 md:w-44 sm:w-36">
            <Image
              src="/images/justibot-logo.png"
              alt="Yashed"
              width={180}
              height={50}
            />
          </div>
        </div>

        <div className="flex flex-col w-full gap-4 mt-20 ">
          <div className="flex flex-row gap-10 w-full h-10 items-center hover:bg-[#31302F] rounded-lg p-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.6 19.92L7.124 18.701L7.134 18.693C7.452 18.438 7.613 18.31 7.792 18.219C7.952 18.137 8.123 18.077 8.3 18.041C8.499 18 8.706 18 9.122 18H17.803C18.921 18 19.481 18 19.908 17.782C20.2843 17.5903 20.5903 17.2843 20.782 16.908C21 16.48 21 15.92 21 14.804V7.197C21 6.079 21 5.519 20.782 5.092C20.5899 4.71558 20.2836 4.40963 19.907 4.218C19.48 4 18.92 4 17.8 4H6.2C5.08 4 4.52 4 4.092 4.218C3.71565 4.40969 3.40969 4.71565 3.218 5.092C3 5.52 3 6.08 3 7.2V18.671C3 19.737 3 20.27 3.218 20.543C3.31174 20.6607 3.43083 20.7557 3.56641 20.821C3.70198 20.8863 3.85053 20.9201 4.001 20.92C4.351 20.92 4.767 20.586 5.6 19.92Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>Chats</div>
          </div>
          <div className="flex flex-row gap-10 w-full h-10 items-center hover:bg-[#31302F] rounded-lg p-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.95 18C12.3 18 12.596 17.879 12.838 17.637C13.08 17.395 13.2007 17.0993 13.2 16.75C13.1993 16.4007 13.0787 16.1047 12.838 15.862C12.5973 15.6193 12.3013 15.4987 11.95 15.5C11.5987 15.5013 11.303 15.6223 11.063 15.863C10.823 16.1037 10.702 16.3993 10.7 16.75C10.698 17.1007 10.819 17.3967 11.063 17.638C11.307 17.8793 11.6027 18 11.95 18ZM11.05 14.15H12.9C12.9 13.6 12.9627 13.1667 13.088 12.85C13.2133 12.5333 13.5673 12.1 14.15 11.55C14.5833 11.1167 14.925 10.704 15.175 10.312C15.425 9.92 15.55 9.44934 15.55 8.9C15.55 7.96667 15.2083 7.25001 14.525 6.75001C13.8417 6.25001 13.0333 6.00001 12.1 6.00001C11.15 6.00001 10.3793 6.25001 9.788 6.75001C9.19667 7.25001 8.784 7.85001 8.55 8.55001L10.2 9.20001C10.2833 8.9 10.471 8.57501 10.763 8.22501C11.055 7.87501 11.5007 7.70001 12.1 7.70001C12.6333 7.70001 13.0333 7.846 13.3 8.138C13.5667 8.43 13.7 8.75067 13.7 9.10001C13.7 9.43334 13.6 9.74601 13.4 10.038C13.2 10.33 12.95 10.6007 12.65 10.85C11.9167 11.5 11.4667 11.9917 11.3 12.325C11.1333 12.6583 11.05 13.2667 11.05 14.15ZM12 22C10.6167 22 9.31667 21.7377 8.1 21.213C6.88334 20.6883 5.825 19.9757 4.925 19.075C4.025 18.1743 3.31267 17.116 2.788 15.9C2.26333 14.684 2.00067 13.384 2 12C1.99933 10.616 2.262 9.31601 2.788 8.10001C3.314 6.88401 4.02633 5.82567 4.925 4.92501C5.82367 4.02434 6.882 3.31201 8.1 2.78801C9.318 2.26401 10.618 2.00134 12 2.00001C13.382 1.99867 14.682 2.26134 15.9 2.78801C17.118 3.31467 18.1763 4.02701 19.075 4.92501C19.9737 5.82301 20.6863 6.88134 21.213 8.10001C21.7397 9.31867 22.002 10.6187 22 12C21.998 13.3813 21.7353 14.6813 21.212 15.9C20.6887 17.1187 19.9763 18.177 19.075 19.075C18.1737 19.973 17.1153 20.6857 15.9 21.213C14.6847 21.7403 13.3847 22.0027 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.32501C16.125 4.77501 14.2333 4.00001 12 4.00001C9.76667 4.00001 7.875 4.77501 6.325 6.32501C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>Help</div>
          </div>

          <div className="flex flex-row gap-10 w-full h-10 items-center hover:bg-[#31302F] rounded-lg p-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.2502 22L8.8502 18.8C8.63353 18.7167 8.42953 18.6167 8.2382 18.5C8.04686 18.3833 7.8592 18.2583 7.6752 18.125L4.7002 19.375L1.9502 14.625L4.5252 12.675C4.50853 12.5583 4.5002 12.446 4.5002 12.338V11.663C4.5002 11.5543 4.50853 11.4417 4.5252 11.325L1.9502 9.375L4.7002 4.625L7.6752 5.875C7.85853 5.74167 8.0502 5.61667 8.2502 5.5C8.4502 5.38333 8.6502 5.28333 8.8502 5.2L9.2502 2H14.7502L15.1502 5.2C15.3669 5.28333 15.5712 5.38333 15.7632 5.5C15.9552 5.61667 16.1425 5.74167 16.3252 5.875L19.3002 4.625L22.0502 9.375L19.4752 11.325C19.4919 11.4417 19.5002 11.5543 19.5002 11.663V12.337C19.5002 12.4457 19.4835 12.5583 19.4502 12.675L22.0252 14.625L19.2752 19.375L16.3252 18.125C16.1419 18.2583 15.9502 18.3833 15.7502 18.5C15.5502 18.6167 15.3502 18.7167 15.1502 18.8L14.7502 22H9.2502ZM12.0502 15.5C13.0169 15.5 13.8419 15.1583 14.5252 14.475C15.2085 13.7917 15.5502 12.9667 15.5502 12C15.5502 11.0333 15.2085 10.2083 14.5252 9.525C13.8419 8.84167 13.0169 8.5 12.0502 8.5C11.0669 8.5 10.2375 8.84167 9.5622 9.525C8.88686 10.2083 8.54953 11.0333 8.5502 12C8.55086 12.9667 8.88853 13.7917 9.5632 14.475C10.2379 15.1583 11.0669 15.5 12.0502 15.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>Settings</div>
          </div>
        </div>
        <div className="h-full flex items-center">
          <ProCard />
        </div>
      </div>
      <div className="absolute bottom-0 mb-8">
        <ChatProfile />
      </div>
    </motion.div>
  );
};

export default ChatNavBar;
