import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="border-b px-6 py-4 flex justify-between items-center">
      <ul className="flex gap-x-20">
        <li>
          <Link href="/" className="text-2xl font-bold">
            발랑
          </Link>
        </li>
        <li>
          <Link href="/brands" className="text-[15px] font-medium">
            BRANDS
          </Link>
        </li>
      </ul>
      <ul className="flex gap-x-4">
        <li>
          <Link
            href="/sign-up"
            className="text-[15px] font-medium text-gray-800 hover:text-black transition"
          >
            회원가입
          </Link>
        </li>
        <li>
          <button className="text-[15px] font-medium text-gray-800 hover:text-black transition">
            로그인
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
