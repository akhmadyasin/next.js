import { TProduct } from "@/app/products/types/product.type";
import Link from "next/link";
import React from "react";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const endPoint = "https://dummyjson.com/products";

const Page = async (props: Props) => {
  const searchParams = await props.searchParams;

  const limit = (searchParams.limit as string) || "10";
  const skip = (searchParams.skip as string) || "0";

  const params = new URLSearchParams({ limit, skip });

  const response = await fetch(`${endPoint}?${params.toString()}`, {
    cache: "no-store", // biar selalu ambil data terbaru
  }).then((res) => res.json());

  // Pastikan products array
  const products: TProduct[] = response?.products || [];

  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <p className="text-2xl">{product.title}</p>
            <p className="text-base">{product.description}</p>
            <Link href={`/products/${product.id}`}>Goto {product.title}</Link>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default Page;
