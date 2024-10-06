"use client";
import { productType } from "@/schemas/product";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

//왜 굳이 BrandIdProps로 한번 더 감싸줘야 타입 지정이 되는지 잘 모르겠슴
interface BrandIdProps {
  products: productType[];
}

function BrandId({ products }: BrandIdProps) {
  const searchBarndId = useSearchParams();
  const brandId = Number(searchBarndId.get("brandId"));
  return (
    <section>
      <ul className="grid grid-cols-5 gap-x-4 gap-y-5">
        {products.map((product) =>
          brandId === 0 ? (
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
          ) : product.brand.id === brandId ? (
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
          ) : null
        )}
      </ul>
    </section>
  );
}

export default BrandId;
