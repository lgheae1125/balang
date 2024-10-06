import React from "react";
import Page from "../_components/Page";
import { brandsAPIs } from "@/api/brandsAPI";
import Link from "next/link";
import { productsAPIs } from "@/api/products";
import BrandId from "./components/BrandId";
import { productType } from "@/schemas/product";

async function BrandsPage() {
  const brands: BrandsType[] = await brandsAPIs.getBrands();
  const products: productType[] = await productsAPIs.getProducts();
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
    </Page>
  );
}

export default BrandsPage;
