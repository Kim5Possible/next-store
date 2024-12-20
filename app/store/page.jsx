"use client";
import { categories, sortList } from "@/constants";
import { useProducts } from "@/utils";
import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import CategoryIcon from "@mui/icons-material/Category";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Loader from "@/components/Loader";

export default function Store() {
  const hoverStyle =
    "hover:text-[--color-light] hover:bg-gradient-to-r hover:from-violet-700 dark:hover:from-violet-700 ";
  const { products, isLoading } = useProducts({});
  const [openFilters, setOpenFilters] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const [sort, setSort] = useState("");
  const [openBrand, setOpenBrand] = useState(false);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  // Filter products based on search, brand, and category
  const filteredProducts = products.filter((product) => {
    const brandMatch =
      brand === "" || product.brand.toLowerCase() === brand.toLowerCase();
    const categoryMatch =
      category === "" ||
      product.category.toLowerCase() === category.toLowerCase();

    // Check if the product matches the search query
    const searchMatch =
      search === "" ||
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    // Sort products based on the selected sort option
    if (sort === "Price: Low to High") {
      products.sort((a, b) => a.price - b.price);
    } else if (sort === "Price: High to Low") {
      products.sort((a, b) => b.price - a.price);
    } else if (sort === "Popular") {
      products.sort((a) => (a.popular ? -1 : 1));
    }

    return brandMatch && categoryMatch && searchMatch;
  });

  return (
    <div className="container">
      <div className="relative w-96 mb-3">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="block p-2.5 w-full text-sm bg-[--color-light-2] rounded-e-lg dark:bg-[--color-dark-2]  dark:placeholder-opacity-50 border border-black/30 dark:border-white/30 focus:outline-none focus:border-transparent"
          placeholder="Search Products..."
          required
        />
        <button
          type="submit"
          className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white gradient-purple rounded-e-lg hover:from-[--blue]"
        >
          <SearchIcon />
        </button>
      </div>
      <div className="flex justify-between mb-4">
        <span
          onClick={() => setOpenSort(!openSort)}
          className="relative cursor-pointer"
        >
          <FilterListIcon className="text-[#3b82f6]" />
          {openSort && (
            <ul className="absolute z-20 top-7 left-0 flex flex-col gap-2 bg-[--color-light-2] dark:bg-[--color-dark-2] p-3 border rounded-lg border-black/30 dark:border-white/30 w-[160px]">
              {sortList.map((option) => (
                <li
                  onClick={() => setSort(option)}
                  key={option}
                  className={`flex items-center justify-between gap-3 cursor-pointer  text-sm ${
                    sort === option &&
                    "after:block after:rounded-full after:bg-[--blue] after:h-2 after:w-2"
                  } `}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </span>
        <span
          onClick={() => setOpenFilters(!openFilters)}
          className="sm:hidden cursor-pointer flex items-center gap-2 text-sm"
        >
          <FilterAltIcon className="text-violet-700" />
          Filters
        </span>
      </div>
      <div className="relative flex gap-5">
        <div
          className={`absolute z-20 top-0 right-0 ${
            openFilters ? "" : "hidden sm:block"
          } sm:static h-fit border rounded-lg border-black/30 dark:border-white/30 bg-[--color-light-2] dark:bg-[--color-dark-2] py-7 pl-4 pr-10`}
        >
          {categories.map((option) => (
            <div key={option.title}>
              <h2 className="text-lg font-bold mb-5 flex items-center gap-2">
                <CategoryIcon /> {option.title}:
              </h2>
              {option.title === "Brand" ? (
                <div
                  onClick={() => setOpenBrand(!openBrand)}
                  className="relative h-9 w-36 rounded-lg bg-[--color-light] dark:bg-[--color-dark] flex items-center justify-between px-2 cursor-pointer"
                >
                  <span className="text-nowrap overflow-hidden mr-2">
                    {brand ? brand : "All"}
                  </span>
                  {openBrand ? (
                    <KeyboardArrowDownIcon className=" right-2 top-2 rotate-180" />
                  ) : (
                    <KeyboardArrowDownIcon className=" right-2 top-2" />
                  )}
                  {openBrand && (
                    <ul className="absolute top-full left-0 rounded-lg bg-[--color-light] dark:bg-[--color-dark] border border-black/30 dark:border-white/30 w-full max-h-[250px] overflow-y-auto overflow-x-hidden">
                      {option.name.map(
                        (name) =>
                          (filteredProducts.some(
                            (product) => product.brand === name
                          ) ||
                            name === "All") && (
                            <li
                              onClick={() => {
                                setBrand(name === "All" ? "" : name);
                                setOpenFilters(!openFilters);
                              }}
                              key={name}
                              className={`py-2 px-3 cursor-pointer text-nowrap ${hoverStyle} ${
                                name.toLowerCase() === brand.toLowerCase() ||
                                (name === "All" && brand === "")
                                  ? "bg-gradient-to-r from-violet-700 dark:from-violet-700 text-[--color-light]"
                                  : ""
                              }`}
                            >
                              {name}
                            </li>
                          )
                      )}
                    </ul>
                  )}
                </div>
              ) : (
                <ul className="relative flex flex-col gap-3 py-2 border-b border-black/30 dark:border-white/30 mb-5">
                  {option.name.map((name) => (
                    <li
                      onClick={() => {
                        setCategory(name === "All" ? "" : name);
                        setOpenFilters(!openFilters);
                      }}
                      key={name}
                      className={`py-2 px-3 bg-gradient-to-r from-[--color-light] dark:bg-gradient-to-r dark:from-[--color-dark] rounded-lg cursor-pointer ${hoverStyle} ${
                        name.toLowerCase() === category.toLowerCase() ||
                        (name === "All" && category === "")
                          ? "bg-gradient-to-r from-violet-700 dark:from-violet-700 text-[--color-light]"
                          : ""
                      }`}
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-5 mx-auto">
          {isLoading ? (
            <Loader />
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
