import React from "react";

type Props = {
  price: number;
  discount?: number;
};

const Price = ({ price, discount }: Props) => {
  return discount ? (
    <div className="font-bold">
      <span className="text-gray-500 line-through border-r pr-2">{price}$</span>
      <span className="text-red-500 pl-2">
        {(price - (price * discount) / 100).toFixed(2)}$
      </span>
    </div>
  ) : (
    <span className="font-bold text-[--blue]">{price}$</span>
  );
};

export default Price;
