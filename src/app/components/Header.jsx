"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMoon } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";

export default function Header() {
  const [menu, setMenu] = useState(0);

  return (
    <header
      className="flex justify-between items-center w-full md:px-12 px-5 py-2 sticky top-0 bg-screen z-10 after:shadow-lg bg-light-gray"
      style={{ position: "sticky" }}
    >
      <Link href="/" className="h-full max-h-24 md:w-auto w-32">
        <svg
          width="155"
          height="66"
          viewBox="0 0 155 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "drop-shadow(2px 4px 2px #00000047)" }}
          className="w-full"
        >
          <circle cx="32.5" cy="33" r="32.5" fill="url(#paint0_linear_1_4)" />
          <path
            d="M142.948 17.7213C138.034 23.3234 131.744 29.5152 128.894 31.4808C121.719 36.1983 113.464 37.6726 116.903 33.5447C117.591 32.7585 118.476 32.3653 118.967 32.6602C119.459 32.955 121.817 32.0705 124.275 30.6945C128.894 27.9426 130.859 24.5028 128.599 23.1268C125.65 21.2595 123.193 22.3406 115.626 28.3358C112.972 30.3997 110.417 32.0705 110.024 32.0705C109.532 32.0705 109.631 30.5963 110.122 28.9255C112.579 20.2767 110.22 19.5887 101.178 26.5667C97.247 29.6134 93.7089 32.0705 93.2175 32.0705C92.726 32.0705 92.8243 30.8911 93.3157 29.5152C94.6917 25.8787 94.4951 22.2423 92.9226 21.6526C92.0381 21.3578 88.8931 23.1268 85.4532 25.8787C78.8683 31.2842 71.6937 35.6086 71.6937 34.331C71.6937 33.8396 73.4628 31.6774 75.625 29.6134C82.7013 22.6354 80.0477 22.144 71.5955 28.8272C65.4037 33.643 62.6518 33.9378 67.0745 29.3186C69.4333 26.8615 70.5144 24.2079 69.2367 24.2079C68.9418 24.2079 66.3865 25.7804 63.6346 27.6478C60.8827 29.6134 58.524 30.9894 58.3274 30.7928C58.1308 30.5963 58.524 29.0237 59.1137 27.353C61.669 20.5715 55.2807 20.6698 48.4992 27.5495C43.88 32.0705 42.3075 36.1983 44.1748 38.4588C46.1405 40.8176 48.7941 40.2279 52.9219 36.4932C57.7377 32.1688 59.7034 31.9722 59.1137 36.0018C58.524 39.8348 60.5879 39.933 64.814 36.3949L67.8607 33.7413L67.2711 36.2966C66.4848 39.1468 67.8607 40.3262 70.7109 39.4416C71.792 39.1468 76.313 36.0018 80.7357 32.4636C85.1583 29.0237 89.0896 26.1736 89.4827 26.1736C90.7604 26.1736 88.4999 32.3653 86.436 34.4293C84.7652 36.1983 84.1755 36.2966 82.4065 35.2155C79.9494 33.643 79.458 33.9378 80.2443 36.788C80.9322 39.6382 84.4704 40.4245 88.1068 38.6554C89.6793 37.7708 94.2003 34.6258 98.1315 31.5791C102.063 28.5323 105.503 26.2719 105.798 26.5667C106.682 27.4512 105.208 31.6774 103.242 34.1344C101.571 36.1983 101.08 36.3949 99.2127 35.2155C96.4608 33.5447 95.6745 34.331 97.0504 37.476C98.623 40.9159 101.866 40.621 107.861 36.4932L112.874 33.1516L113.169 36.2966C113.562 40.3262 116.117 40.8176 122.309 38.0657L126.83 36.1L123.488 40.2279C117.1 48.0904 114.839 55.953 118.574 57.3289C122.604 58.9015 131.646 49.2698 131.646 43.2746C131.646 40.621 132.235 39.7365 134.496 38.4588C138.427 36.4932 149.336 27.353 149.336 26.0753C149.336 25.5839 146.781 26.8615 143.734 28.9255C140.589 31.0877 136.461 33.5447 134.594 34.5275L131.154 36.1983L134.201 32.955C135.773 31.0877 141.277 25.0925 146.29 19.5887C154.644 10.4485 156.216 7.5 152.973 7.5C152.285 7.5 147.764 12.1193 142.948 17.7213ZM56.3618 27.5495C55.7721 29.122 54.003 29.81 54.003 28.3358C54.003 27.353 56.1652 25.0925 56.6566 25.5839C56.8532 25.7804 56.7549 26.665 56.3618 27.5495ZM124.275 27.6478C120.442 30.7928 118.869 30.7928 121.817 27.6478C123.095 26.2719 124.864 25.1908 125.65 25.1908C126.732 25.1908 126.24 25.977 124.275 27.6478ZM52.5288 30.7928C52.9219 31.9722 52.3322 33.2499 50.4649 34.8224C47.1233 37.7708 46.2387 36.788 48.5975 32.5619C50.5631 28.7289 51.546 28.3358 52.5288 30.7928ZM129.68 41.8004C129.68 43.8643 123.587 52.2183 121.424 53.0045C120.54 53.3977 119.852 53.3977 119.852 53.1028C119.852 52.0217 123.095 46.2231 125.454 43.0781C128.108 39.5399 129.68 39.0485 129.68 41.8004Z"
            fill="#1B1F3B"
          />
          <path
            d="M34.1501 27.3528C29.236 33.8394 28.0566 37.9673 31.1033 37.9673C31.9879 37.9673 33.5604 37.181 34.7398 36.1982C35.9192 35.1171 35.6243 35.9034 33.9535 38.1638C32.381 40.2278 30.5137 41.8986 29.7274 41.8986C27.1721 41.8986 20.882 45.7315 18.2284 48.8766C13.216 54.8718 17.3439 59.0979 23.8305 54.6752C25.5996 53.4958 30.6119 47.7955 35.1329 41.9968C39.5556 36.2965 44.568 29.9082 46.2388 27.8442C50.6615 22.537 47.3199 23.0284 41.0298 28.6305C33.9535 35.0188 32.0862 34.724 37.3934 28.0408C40.047 24.6009 40.2436 24.2078 38.4745 24.2078C37.3934 24.2078 35.4278 25.682 34.1501 27.3528ZM28.3515 44.5522C25.6978 48.0903 20.9803 52.9061 19.3095 53.889C17.737 54.6752 17.6387 54.5769 18.5233 53.0044C20.4889 49.6628 23.1425 46.7144 25.9927 44.847C29.6291 42.4882 30.0222 42.39 28.3515 44.5522Z"
            fill="#1B1F3B"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_4"
              x1="0"
              y1="33"
              x2="65"
              y2="33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF8A00" />
              <stop offset="1" stopColor="#FF8A00" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
      </Link>
      <nav className={`${menu ? "active" : "none"} navigation-menu`}>
        <ul className="text-lg gap-7">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center gap-2">
        <button className="hover:scale-125 transition-all">
          <IoMoon className="text-2xl" />
        </button>
        <button className="sm:inline hidden btn">Let&apos;s Talk</button>
        <button
          className="md:hidden block p-1 rounded-lg text-xl"
          onClick={() => setMenu(!menu)}
        >
          <CgMenuLeftAlt className="text-4xl font-extrabold rotate-180" />
        </button>
      </div>
    </header>
  );
}
