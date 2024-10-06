"use client";
import Link from "next/link";
import { useAuthStore, useLogInModalStore } from "@/zustand/store";

function Header() {
  const setIsClickedLogInModal = useLogInModalStore(
    (state) => state.setIsClickedLogInModal
  );
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logOut = useAuthStore((state) => state.logOut);

  const handleClickLogInButton = () => {
    setIsClickedLogInModal();
  };
  const handleClickLogOutButton = () => {
    logOut();
  };

  return (
    <header className="border-b px-6 py-4 flex justify-between items-center">
      <ul className="flex gap-x-20 items-center">
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
      {!isLoggedIn ? (
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
            <button
              onClick={handleClickLogInButton}
              className="text-[15px] font-medium text-gray-800 hover:text-black transition"
            >
              로그인
            </button>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-x-4">
          <li>
            <Link
              href="/cart"
              className="text-[15px] font-medium text-gray-800 hover:text-black transition"
            >
              장바구니
            </Link>
          </li>
          <li>
            <button
              onClick={handleClickLogOutButton}
              className="text-[15px] font-medium text-gray-800 hover:text-black transition"
            >
              로그아웃
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
