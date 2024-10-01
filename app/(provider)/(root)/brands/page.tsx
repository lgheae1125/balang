import React from "react";
import Page from "../_components/Page";
import { brandsAPIs } from "@/api/brandsAPI";
import Link from "next/link";
import { productsAPIs } from "@/api/products";
import BrandId from "./components/BrandId";
import { productsType } from "@/schemas/products";

async function BrandsPage() {
  const brands: BrandsType[] = await brandsAPIs.getBrands();
  const products: productsType[] = await productsAPIs.getProducts();
  return (
    <Page>
      <section className="pb-16">
        <h2 className="font-bold text-center text-3xl my-12">Brands</h2>
        <ul className="grid grid-cols-6 text-center max-w-[600px] mx-auto gap-x-4 gap-y-5 text-sm">
          <li className="col-span-6">
            <Link href="/brands" className="text-slate-700">
              ALL
            </Link>
          </li>
          {brands.map((brand) => (
            <li key={brand.id}>
              <Link href={`/brands?brandId=${brand.id}`}>{brand.nameKr}</Link>
            </li>
          ))}
        </ul>
      </section>
      <BrandId products={products} />
      <section>
        <ul className="grid grid-cols-5 gap-x-4 gap-y-5">
          {products.map((product) => (
            <li key={product.id} className="w-full">
              <Link className="flex flex-col gap-y-2" href={`/${product.id}`}>
                <div className="aspect-[3/4]">
                  <img src={product.imgSrc} alt="product" />
                </div>
                <span className="text-sm font-bold">
                  {product.brand.nameEn}
                </span>
                <p className="text-[15px]">{product.name}</p>
                <p className="flex gap-x-2">
                  <span className="text-red-500 line-through font-semibold">
                    &#8361; {product.originalPrice.toLocaleString()}
                  </span>
                  <span className="font-bold">
                    &#8361; {product.price.toLocaleString()}
                  </span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}

export default BrandsPage;
