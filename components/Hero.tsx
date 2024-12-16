import React from "react";
import HeroImage from "../public//hero-lady.png";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="container flex flex-col-reverse sm:flex-row items-center justify-between py-10  sm:py-20">
      <div className="flex flex-col justify-between gap-10 max-w-[600px]">
        <h1 className="text-center sm:text-left">
          Discover and Find Your Own Fashion!
        </h1>
        <p className=" max-w-[300px] mx-auto sm:mx-0 text-center sm:text-left">
          Explore our curated collection of stylish clothing and accessories
          tailored to your unique taste.
        </p>
        <button className="mx-auto sm:mx-0 max-w-44 flex justify-center p-1 rounded bg-gradient-to-r from-blue-500 to-fuchsia-700">
          <span className="p-2 tracking-widest rounded uppercase w-full bg-[--color-light] dark:bg-[--color-dark] hover:bg-transparent dark:hover:bg-transparent hover:text-[--color-light] transition-all duration-300">
            Explore Now
          </span>
        </button>
      </div>
      <div className="mb-5 sm:mb-0 bg-violet-800 rounded-tl-[30%] rounded-br-[30%] rounded-bl-[10%] rounded-tr-[10%]">
        <Image
          priority
          src={HeroImage}
          alt="hero"
          className="max-w-[300px] sm:max-w-[450px]"
        />
      </div>
    </section>
  );
};

export default Hero;
