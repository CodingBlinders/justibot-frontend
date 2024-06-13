import React, { useEffect, useState } from "react";
import Image from "next/image";
import TypeIt from "typeit-react";

const BotResponse = ({ message }: { message: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(message);
      index++;
      if (index >= message.length) {
        clearInterval(interval);
      }
    }, 50); // Adjust the speed here

    return () => clearInterval(interval);
  }, [message]);

  console.log("BotResponse: ", message);

  return (
      <div className="animate-fade-in">
        <div className="flex flex-row py-5 justify-center items-center gap-5">
          <div className="w-[40px] h-auto">
            <Image
                src="/images/justibot-icon.png"
                alt="JustiBot"
                width={50}
                height={50}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="text-[14px] font-semibold">JustiBot</div>
            <div className="text-[14px] font-normal typewriter">
            <TypeIt
              options={{
                speed: 50, // Adjust the speed here
                afterComplete: (instance: { destroy: () => void }) => {
                  instance.destroy(); // Stops the cursor
                }
              }}
            >
              {message}
            </TypeIt>

            </div>
          </div>
        </div>
      </div>
  );
};

export default BotResponse;
