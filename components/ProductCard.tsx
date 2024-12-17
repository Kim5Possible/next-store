import { IProduct } from "@/types";
import React from "react";

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div
      key={product.id}
      className="relative flex flex-col justify-between gap-3 border rounded-lg p-4"
    >
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
      <div className="flex justify-center items-center gap-4">
        {product.discount ? (
          <div>
            <span className="text-gray-500 line-through border-r pr-4">
              {product.price}$
            </span>
            <span className="text-red-500 pl-4">
              {product.price - (product.price * product.discount) / 100}$
            </span>
          </div>
        ) : (
          <span className="text-gray-500 border-r pr-4">{product.price}$</span>
        )}
        <button className="gradient-purple hover:drop-shadow-[0_0_3px_#fff] hover:underline active:scale-95 font-bold p-2 rounded transition-all duration-200">
          Add To Cart
        </button>
      </div>
      <span className="text-xs absolute top-[10px] right-[10px] px-2 py-1 flex justify-center items-center bg-red-500 text-white rounded-full">
        -{product.discount}%
      </span>
      {product.popular && (
        <span className="uppercase text-xs absolute top-[10px] left-[10px] px-2 py-1 flex justify-center items-center bg-green-500 text-white rounded-full">
          Popular
        </span>
      )}
    </div>
  );
};

export default ProductCard;
