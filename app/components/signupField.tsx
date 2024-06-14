"use client";
import React, { useState } from "react";
import axios from 'axios';
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ThirdPartySignup from "./3rdpartySignup"
import { useRouter } from "next/navigation";;

const SignupField = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter();

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const data = JSON.stringify({
      username: email,
      password: password,
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://api.codingblinders.com:8081/register',
      headers: { 
        'Content-Type': 'application/json', 
      },
      data: data
    };

    try {
      const response = await axios(config);
      console.log(response.data);
      toast.success("Signup successful");
        router.push("/chat");
      // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
      console.error(error);
      toast.error("Signup failed");
      // Handle error during signup
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ToastContainer />
      <div>
        <img
          src="/images/justibot-logo-1.png"
          alt="Yashed"
          className="w-30 h-20 mb-4"
        />
      </div>
      <div className="text-xl font-semibold mb-6 text-left w-full">Signup</div>
      <form className="w-[650px] max-w-[350px]" onSubmit={handleSignup}>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-[12px] lg:text[15px] font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full h-8 p-2 border-gray-300 rounded-md shadow-sm focus:border-[#A36A32] focus:ring text-black focus:ring-indigo-200 focus:ring-opacity-50 text-sm"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-[12px] lg:text[15px] font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full h-8 p-2 border-gray-300 rounded-md shadow-sm focus:border-[#A36A32] text-black focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-sm"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="confirmPassword"
            className="block text-[12px] lg:text[15px] font-medium text-white"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full h-8 p-2 border-gray-300 rounded-md shadow-sm focus:border-[#A36A32] text-black focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-sm"
            required
          />
        </div>
        <div className=" w-full mb-6 flex justify-between">
          <button type="submit" className="w-full bg-[#A36A32] hover:bg-[#622F1D] text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline lg:text-sm">
            Signup
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
        <div className="w-full text-gray-700 font-medium py-2 text-white text-xs">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#A36A32] text-semibold hover:text-[#B97C40]"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupField;
