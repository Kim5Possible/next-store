"use client";
import { useEffect, useState } from "react";
import { IProduct } from "@/types";

type Props = {
  id?: number;
};

export const useProducts = ({ id }: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.in/api/products${id ? `/${id}` : ""}?limit=150`
        );
        const data = await response.json();
        id ? setProducts(data.product) : setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return { products, isLoading };
};
