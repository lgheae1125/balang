import Page from "./_components/Page";
import { productsAPIs } from "@/api/products";
import { productsType } from "@/schemas/products";
import Link from "next/link";

async function HomePage() {
  const products: productsType[] = await productsAPIs.getProducts();

  return (
    <Page>
      <h1 className="font-bold text-3xl text-center my-12">Trending</h1>
      <ul className="grid grid-cols-5 gap-x-4 gap-y-5">
        {products.map((product) => (
          <li key={product.id} className="w-full">
            <Link className="flex flex-col gap-y-2" href={`/${product.id}`}>
              <div className="aspect-[3/4]">
                <img src={product.imgSrc} alt="product" />
              </div>
              <span className="text-sm font-bold">{product.brand.nameEn}</span>
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
    </Page>
  );
}

export default HomePage;
