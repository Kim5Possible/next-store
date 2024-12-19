import React from "react";

type Props = {
  price: number;
  discount?: number;
};

const Price = ({ price, discount }: Props) => {
  return discount ? (
    <div>
      <span className="text-gray-500 line-through border-r pr-4">{price}$</span>
      <span className="text-red-500 pl-4">
        {price - (price * discount) / 100}$
      </span>
    </div>
  ) : (
    <span className="text-gray-500 border-r pr-4">{price}$</span>
  );
};

export default Price;
