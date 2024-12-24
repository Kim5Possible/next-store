import { useCart } from "@/context/CartContext";
import { IProduct } from "@/types";
import React from "react";

type Props = {
  product: IProduct;
};

const AddToCart = ({ product }: Props) => {
  const { cart, addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <>
      <button onClick={handleAddToCart} className="button-cart">
        {isInCart ? "Added to cart" : "Add to cart"}
      </button>
    </>
  );
};

export default AddToCart;
