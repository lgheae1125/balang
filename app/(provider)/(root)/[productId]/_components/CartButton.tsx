"use client";
import { useAuthStore, useLogInModalStore } from "@/zustand/store";
import React from "react";

function CartButton() {
  const setIsClickedLogInModal = useLogInModalStore(
    (state) => state.setIsClickedLogInModal
  );
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const handleClickCartButton = () => {
    !isLoggedIn ? setIsClickedLogInModal() : alert("장바구니에 넣었습니다."); //zustand로 로그인 상태 관리 해서 로그인 안했으면 상품 담지말고 로그인 창으로
  };

  return (
    <button
      onClick={handleClickCartButton}
      className="py-4 px-12 text-[15px] font-semibold transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full bg-black text-white"
    >
      장바구니에 담기
    </button>
  );
}

export default CartButton;
