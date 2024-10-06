import Page from "./_components/Page";
import { productsAPIs } from "@/api/products";
import { productType } from "@/schemas/product";
import Link from "next/link";

async function HomePage() {
  const products: productType[] = await productsAPIs.getProducts();

  return (
    <Page>
      <h1 className="font-bold text-3xl text-center my-12">Trending</h1>
      <ul className="grid grid-cols-6 gap-x-8 gap-y-10">
        {products.map((product) => (
          <li key={product.id} className="w-full">
            <Link className="flex flex-col gap-y-3" href={`/${product.id}`}>
              <div className="aspect-[3/4]">
                <img src={product.imgSrc} alt="product" />
              </div>
              <span className="text-sm font-bold">{product.brand.nameEn}</span>
              <p className="text-[15px]">{product.name}</p>
              <p className="flex gap-x-2">
                <span className="text-red-500 line-through font-normal text-sm">
                  &#8361; {product.originalPrice.toLocaleString()}
                </span>
                <span className="font-bold text-sm">
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
