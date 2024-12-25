"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "@/utils";
import Loader from "./Loader";

type Props = {};

const Popular = ({}: Props) => {
  const { products, isLoading } = useProducts({});
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  if (!Array.isArray(products)) return <div>Unexpected response</div>;
  const productsPopular = products.filter(
    (product) => product.popular === true
  );

  const [currentRows, setCurrentRows] = useState(2);
  const productsPerRow = 4;

  const visibleProducts = productsPopular.slice(
    0,
    productsPerRow * currentRows
  );
  const hasMoreProducts = visibleProducts.length < productsPopular.length;

  const handleShowMore = async () => {
    setIsLoadingMore(true);

    // Create an array of promises for all images in the next batch
    const nextBatchProducts = productsPopular.slice(
      visibleProducts.length,
      productsPerRow * (currentRows + 2)
    );

    // Preload images
    const imagePromises = nextBatchProducts.map((product) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.src = product.image;
      });
    });

    // Wait for all images to load
    await Promise.all(imagePromises);

    setCurrentRows(currentRows + 2);
    setIsLoadingMore(false);
  };

  const isDataEmpty = !productsPopular || productsPopular.length === 0;

  return (
    <section className="bg-[--color-light-2] dark:bg-[--color-dark-2] py-20 shadow-[0_8px_15px_0px_rgba(255,255,255,0.5)_inset] dark:shadow-[0_8px_15px_0px_rgba(0,0,0,0.2)_inset]">
      <div className="container text-center">
        <h1 className="blue-text mb-5">Popular Now</h1>
        <p>Discover the latest and most popular products.</p>
      </div>
      {isLoading ? (
        <Loader />
      ) : !isDataEmpty ? (
        <div className="container grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-5 mt-10">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-8">No products available.</p>
      )}

      {hasMoreProducts && (
        <div className="text-center mt-8">
          {isLoadingMore ? (
            <Loader />
          ) : (
            <button
              onClick={handleShowMore}
              className="bg-[--blue] hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
            >
              Show More
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Popular;
