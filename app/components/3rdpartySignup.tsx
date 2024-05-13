import React from "react";
import Link from "next/link";

const ThirdPartySignup = () => {
  return (
    <>
      <button className="flex justify-center items-center gap-5 bg-[#31302F] hover:bg-[#585149] text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline border border-gray-300 w-[160px] text-sm">
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
      <button className="flex justify-center items-center gap-5 bg-[#31302F] hover:bg-[#585149] text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline border border-gray-300 w-[160px] lg:text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 30 29"
          fill="none"
        >
          <g clip-path="url(#clip0_74_2)">
            <path d="M14.5325 13.7825H0.75V0H14.5325V13.7825Z" fill="#F1511B" />
            <path
              d="M29.7501 13.7825H15.9678V0H29.7501V13.7825Z"
              fill="#80CC28"
            />
            <path
              d="M14.5321 29.0003H0.75V15.2178H14.5321V29.0003Z"
              fill="#00ADEF"
            />
            <path
              d="M29.7501 29.0003H15.9678V15.2178H29.7501V29.0003Z"
              fill="#FBBC09"
            />
          </g>
          <defs>
            <clipPath id="clip0_74_2">
              <rect
                width="29"
                height="29"
                fill="white"
                transform="translate(0.75)"
              />
            </clipPath>
          </defs>
        </svg>
        Microsoft
      </button>
    </>
  );
};

export default ThirdPartySignup;
