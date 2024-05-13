import React from "react";
import Image from "next/image";
import LoginField from "../components/loginField";
import SignupField from "../components/signupField";

const Singup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
      <div
        className="col-span-7 lg:col-span-7 flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/signup.png")' }}
      >
        {/* <div className="w-full h-full">
          <Image
            src="/images/signup.png"
            alt="Yashed"
            width={1275}
            height={1285}
            layout="responsive"
            objectFit="cover"
          />
        </div> */}
      </div>
      <div className="col-span-3 lg:col-span-5 flex flex-col justify-center items-center bg-[#131211]">
        <SignupField />
      </div>
    </div>
  );
};

export default Singup;
