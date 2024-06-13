import React from "react";
import Image from "next/image";

const InputChat = ({ message }: { message: string }) => {
  return (
    <div>
      <div className="flex flex-row py-5 justify-center items-center gap-5">
        <div className="w-[40px] h-auto">
          <Image src="/images/user.png" alt="user" width={50} height={50} />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="text-[14px] font-semibold">You</div>
          <div className="text-[14px] font-normal">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default InputChat;
