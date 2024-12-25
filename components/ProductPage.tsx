"use client";
import { useProducts } from "@/utils";
import AddToCart from "@/components/AddToCart";
import Loader from "@/components/Loader";
import Price from "@/components/Price";

type Props = {
  params: { id: number };
};

export default function ProductPage({ params }: Props) {
  const { products, isLoading } = useProducts({ id: params.id });
  if (isLoading) return <Loader />;
  if (Array.isArray(products)) return <div>Unexpected response</div>;
  return (
    <main className="container pb-10">
      <button
        onClick={() => history.back()}
        className="opacity-80 text-sm mb-2"
      >
        {`<`} Back
      </button>
      <div className="relative border rounded-lg border-black/30 dark:border-white/30 bg-[--color-light-2] dark:bg-[--color-dark-2] p-7 flex flex-col lg:flex-row justify-between gap-5">
        <div className="basis-1/4 flex flex-col gap-2">
          <img
            src={products.image}
            alt={products.title}
            className="w-full object-cover rounded-lg mb-3"
          />
          <div className="flex gap-2 flex-wrap">
            <div className="text-sm flex flex-col bg-[--color-light] dark:bg-[--color-dark] px-5 py-2 w-fit rounded-lg">
              <span className="font-bold capitalize">{products.model}</span>
              <span className="opacity-60">Model</span>
            </div>
            <div className="text-sm flex flex-col bg-[--color-light] dark:bg-[--color-dark] px-5 py-2 w-fit rounded-lg">
              <span className="font-bold capitalize">{products.brand}</span>
              <span className="opacity-60">Brand {`>`}</span>
            </div>
          </div>
        </div>
        <div className="basis-3/4 flex flex-col gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-3 leading-normal">
              {products.title}{" "}
            </h3>
            <span className="px-4 py-1 ml-3 w-fit bg-blue-400 text-[--color-light] rounded-full mr-3">
              {products.category}
            </span>
            {products.color && (
              <span className="px-4 py-1 w-fit bg-gray-500 text-[--color-light] rounded-full">
                {products.color}
              </span>
            )}
          </div>
          <p>{products.description}</p>

          <div className="flex justify-between items-center">
            <Price price={products.price} discount={products.discount} />
            <AddToCart product={products} />
          </div>
        </div>
        {products.discount && (
          <span className="text-xs absolute top-[10px] right-[10px] px-2 py-1 flex justify-center items-center bg-red-500 text-white rounded-full">
            -{products.discount}%
          </span>
        )}
        {products.popular && (
          <span className="uppercase text-xs absolute top-[10px] left-[10px] px-2 py-1 flex justify-center items-center bg-green-500 text-white rounded-full">
            Popular
          </span>
        )}
      </div>
    </main>
  );
}
