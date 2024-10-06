import React from "react";
import Page from "../_components/Page";
import { productAPIs } from "@/api/product";
import CartButton from "./_components/CartButton";

async function DetailProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const productId = params.productId;
  const product = await productAPIs.getProduct(productId);

  return (
    <Page>
      <section className="flex gap-x-5">
        {product && (
          <>
            <div className="w-1/2">
              <img src={product.imgSrc} alt="product" />
            </div>
            <div className="w-1/2">
              <h2 className="text-[15px] border-b pb-2.5 mb-2.5  font-bold">
                {product.brand?.nameKr} / {product.brand?.nameEn}
              </h2>
              <h1 className="text-lg">{product.name}</h1>
              <div className="grid grid-cols-5 my-12 gap-y-5 text-[15px]">
                <div className="text-slate-900 font-bold">정가</div>
                <div className="col-span-4 line-through text-red-500">
                  {product.originalPrice}
                </div>
                <div className="text-slate-900 font-bold">판매가</div>
                <div className="col-span-4 line-through">{product.price}</div>
                <div className="text-slate-900 font-bold">배송</div>
                <div className="col-span-4">{product.deliveryType}</div>
                <div className="text-slate-900 font-bold">잔여 재고</div>
                <div className="col-span-4">{product.onlineStock}</div>
              </div>
              <CartButton product={product} />
            </div>
          </>
        )}
      </section>
    </Page>
  );
}

export default DetailProductPage;
