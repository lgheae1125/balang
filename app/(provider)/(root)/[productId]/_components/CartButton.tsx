"use client";
import { productType } from "@/schemas/product";
import {
  useAuthStore,
  useCartproductsStore,
  useLogInModalStore,
} from "@/zustand/store";
import React, { useState } from "react";

interface CartButton {
  product: productType;
}

function CartButton({ product }: CartButton) {
  const [isContainedCartProduct, setIsContainedCartProduct] = useState(false);
  const addProductsInCart = useCartproductsStore(
    (state) => state.addProductsInCart
  );
  const ContainedCartProducts = useCartproductsStore(
    (state) => state.containedCartProducts
  );

  const setIsClickedLogInModal = useLogInModalStore(
    (state) => state.setIsClickedLogInModal
  );
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const handleClickCartButton = () => {
    !isLoggedIn ? setIsClickedLogInModal() : addProductsInCart(product);
    const containedCartProduct = ContainedCartProducts.filter(
      (containedCartProduct) => containedCartProduct.id === product.id
    );
    setIsContainedCartProduct(!!containedCartProduct);
  };

  return isContainedCartProduct ? (
    <button
      onClick={handleClickCartButton}
      className="py-4 px-12 text-[15px] font-semibold transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full bg-white text-black border border-black"
    >
      장바구니 빼기
    </button>
  ) : (
    <button
      onClick={handleClickCartButton}
      className="py-4 px-12 text-[15px] font-semibold transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full bg-black text-white"
    >
      장바구니에 담기
    </button>
  );
}

export default CartButton;
