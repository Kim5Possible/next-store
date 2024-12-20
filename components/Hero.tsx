import React from "react";
import HeroImage from "../public//hero-img.png";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="container flex flex-col-reverse sm:flex-row items-center justify-between pb-10  sm:pb-20">
      <div className="flex flex-col justify-between gap-10">
        <h1 className="text-center sm:text-left">Gear Up for the Future!</h1>
        <p className=" max-w-[400px] mx-auto sm:mx-0 text-center sm:text-left">
          Discover cutting-edge apparel and accessories designed for tech
          enthusiasts. From gaming gear to everyday essentials, our products
          blend style and functionality.
        </p>
        <button className="mx-auto sm:mx-0 max-w-44 flex justify-center p-1 rounded bg-gradient-to-r from-blue-500 to-fuchsia-700">
          <span className="p-2 tracking-widest rounded uppercase w-full bg-[--color-light] dark:bg-[--color-dark] hover:bg-transparent dark:hover:bg-transparent hover:text-[--color-light] transition-all duration-300">
            Explore Now
          </span>
        </button>
      </div>
      <div className="mb-5 p-10 sm:mb-0 bg-gradient-to-t from-violet-700 to-red-700  rounded-tl-[30%] rounded-br-[30%] rounded-bl-[10%] rounded-tr-[10%]">
        <Image
          priority
          src={HeroImage}
          alt="hero"
          className="max-w-[200px] sm:max-w-[350px]"
        />
      </div>
    </section>
  );
};

export default Hero;
