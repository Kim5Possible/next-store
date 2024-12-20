import { IProduct } from "@/types";
import Link from "next/link";
import React from "react";
import Price from "./Price";

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div
      key={product.id}
      className="relative max-h-[500px] shadow-lg flex flex-col justify-between gap-3 border rounded-lg p-4"
    >
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className=" md:w-full self-center max-h-[300px] object-cover rounded-lg mb-3"
        />
        <h3 className="text-lg font-bold text-center">
          {product.title.length > 40
            ? `${product.title.substring(0, 40)}...`
            : product.title}
        </h3>
      </Link>
      <div className="flex flex-col sm:flex-row gap-2 justify-between items-center">
        <Price price={product.price} discount={product.discount} />
        <button className="button-cart">Add To Cart</button>
      </div>
      {product.discount && (
        <span className="text-xs absolute top-[10px] right-[10px] px-2 py-1 flex justify-center items-center bg-red-500 text-white rounded-full">
          -{product.discount}%
        </span>
      )}
      {product.popular && (
        <span className="uppercase text-xs absolute top-[10px] left-[10px] px-2 py-1 flex justify-center items-center bg-green-500 text-white rounded-full">
          Popular
        </span>
      )}
    </div>
  );
};

export default ProductCard;
