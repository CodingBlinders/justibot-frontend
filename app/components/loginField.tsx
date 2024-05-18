import React from "react";
import Link from "next/link";
import ThirdPartySignup from "./3rdpartySignup";
import Image from "next/image";

const LoginField = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <img
          src="/images/justibot-logo-1.png"
          alt="Yashed"
          className="w-40 h-30 mb-4"
        />
      </div>
      <div className="text-xl font-semibold mb-6 text-left w-full">Login</div>
      <form className="w-[650px] max-w-[350px]">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full h-8 p-2 border-gray-300 rounded-md shadow-sm focus:border-[#A36A32] focus:ring text-black focus:ring-indigo-200 focus:ring-opacity-50 text-sm"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full h-8 p-2 border-gray-300 rounded-md shadow-sm focus:border-[#A36A32] text-black focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-sm"
          />
        </div>

        <div className=" w-full mb-6 flex justify-between">
          <button className="w-full bg-[#A36A32] hover:bg-[#622F1D] text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline lg:text-sm">
            Login
          </button>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 pb-5 text-sm text-[#969AB8]">
          <div className="w-1/2 h-0 border-b border-[#969AB8]"></div>
          <div>or</div>
          <div className="w-1/2 h-0 border-b border-[#969AB8]"></div>
        </div>

        <div className="mb-6 flex justify-between gap-10 ">
          <ThirdPartySignup />
        </div>
        <div className="w-full text-gray-700 font-medium py-2 text-xs">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-[#A36A32] text-semibold hover:text-[#B97C40]"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginField;
