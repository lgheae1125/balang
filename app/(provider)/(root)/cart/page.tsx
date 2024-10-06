"use client";
import React, { ComponentProps } from "react";
import Page from "../_components/Page";
import Link from "next/link";
import { useCartproductsStore } from "@/zustand/store";

function CartPage() {
  const containedCartProducts = useCartproductsStore(
    (state) => state.containedCartProducts
  );
  return (
    <Page>
      <h2 className="font-bold text-3xl text-center my-12">장바구니</h2>
      <section>
        <ul className="border-b">
          {containedCartProducts.map((containedCartProducts) => (
            <li key={containedCartProducts.id}>
              <Link
                href={`/${containedCartProducts.id}`}
                className="flex h-40 sm:h-56 border-t py-5 gap-x-5"
              >
                <div className="relative aspect-[3/4]">
                  <img src={`${containedCartProducts.imgSrc}`} />
                </div>
                <div className="flex flex-col gap-y-1 sm:gap-y-2.5 grow">
                  <div>
                    <span className="text-sm sm:text-base font-bold">
                      {
                        (containedCartProducts.brand.nameKr,
                        containedCartProducts.brand.nameKr)
                      }
                    </span>
                  </div>
                  <h6 className="text-sm sm:text-lg">
                    {containedCartProducts.name}
                  </h6>
                  <div className="flex gap-x-2.5 items-center text-sm sm:text-base">
                    <span className="line-through text-red-500">
                      {containedCartProducts.originalPrice}
                    </span>
                    <span className="font-bold">
                      {containedCartProducts.price}
                    </span>
                  </div>
                  <div>
                    <span className="flex text-xs sm:text-sm">
                      {containedCartProducts.onlineStock}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 border border-black self-center h-4 w-12 sm:h-8 sm:w-24 items-stretch shrink-0">
                  <button className="bg-black text-white flex items-center justify-center text-lg font-bold">
                    -
                  </button>
                  <span className="flex items-center justify-center text-[15px] font-bold">
                    1
                  </span>
                  <button className="bg-black text-white flex items-center justify-center text-lg font-bold">
                    +
                  </button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}

export default CartPage;
