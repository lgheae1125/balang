"use client";
import React from "react";

function CartButton() {
  const handleClickCartButton = () => {
    return <h1>hello</h1>;
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
