import React from "react";
import Link from "next/link";

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
          <button className="flex justify-center items-center gap-5 bg-[#31302F] text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline border border-gray-300 w-[160px] text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M27.2502 14.0814C27.2502 12.9488 27.1583 12.1223 26.9594 11.2651H14.0259V16.3772H21.6175C21.4645 17.6477 20.638 19.5609 18.8013 20.8465L18.7755 21.0177L22.8649 24.1856L23.1482 24.2139C25.7501 21.8109 27.2502 18.2752 27.2502 14.0814Z"
                fill="#4285F4"
              />
              <path
                d="M14.0257 27.5508C17.745 27.5508 20.8673 26.3263 23.148 24.2142L18.8011 20.8468C17.6379 21.658 16.0766 22.2243 14.0257 22.2243C10.3829 22.2243 7.29115 19.8214 6.18902 16.5L6.02748 16.5137L1.77533 19.8045L1.71973 19.9591C3.98498 24.459 8.63798 27.5508 14.0257 27.5508Z"
                fill="#34A853"
              />
              <path
                d="M6.18863 16.5C5.89782 15.6429 5.72952 14.7245 5.72952 13.7755C5.72952 12.8265 5.89782 11.9082 6.17333 11.0511L6.16563 10.8685L1.8602 7.5249L1.71933 7.59191C0.785712 9.45925 0.25 11.5562 0.25 13.7755C0.25 15.9949 0.785712 18.0917 1.71933 19.9591L6.18863 16.5Z"
                fill="#FBBC05"
              />
              <path
                d="M14.0257 5.32642C16.6124 5.32642 18.3572 6.44374 19.3521 7.37746L23.2398 3.58158C20.8522 1.36223 17.745 0 14.0257 0C8.63798 0 3.98498 3.09177 1.71973 7.59167L6.17373 11.0508C7.29116 7.72947 10.3829 5.32642 14.0257 5.32642Z"
                fill="#EB4335"
              />
            </svg>
            Google
          </button>
          <button className="flex justify-center items-center gap-5 bg-[#31302F] text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline border border-gray-300 w-[160px] lg:text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 30 29"
              fill="none"
            >
              <path
                d="M29.25 14.5C29.25 6.49123 22.7588 0 14.75 0C6.74123 0 0.25 6.49123 0.25 14.5C0.25 21.7381 5.54945 27.7367 12.4856 28.8252V18.6951H8.80699V14.5H12.4856V11.306C12.4856 7.67507 14.6467 5.66493 17.9599 5.66493C19.5489 5.66493 21.2094 5.95096 21.2094 5.95096V9.51836H19.3821C17.5785 9.51836 17.0223 10.6386 17.0223 11.7827V14.5H21.0426L20.399 18.6951H17.0223V28.8252C23.9505 27.7367 29.25 21.7381 29.25 14.5Z"
                fill="#1877F2"
              />
              <path
                d="M20.3909 18.6952L21.0344 14.5001H17.0142V11.7828C17.0142 10.6387 17.5783 9.51846 19.3739 9.51846H21.2013V5.95107C21.2013 5.95107 19.5407 5.66504 17.9517 5.66504C14.6386 5.66504 12.4775 7.67518 12.4775 11.3061V14.5001H8.79883V18.6952H12.4775V28.8253C13.2164 28.9445 13.9712 29.0001 14.7418 29.0001C15.5125 29.0001 16.2673 28.9365 17.0062 28.8253V18.6952H20.3909Z"
                fill="white"
              />
            </svg>
            Facebook
          </button>
        </div>
        <div className="w-full text-gray-700 font-medium py-2 text-white text-xs">
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
