import React from "react";
import heroImg from "@/assets/hero-lady.png";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="container flex items-center justify-between py-20">
      <div className="flex flex-col justify-between gap-10 max-w-[600px]">
        <h1 className="blue-text">Discover and Find Your Own Fashion!</h1>
        <p className=" max-w-[300px]">
          Explore our curated collection of stylish clothing and accessories
          tailored to your unique taste.
        </p>
        <button className="max-w-44 flex justify-center p-1 rounded bg-gradient-to-r from-blue-500 to-fuchsia-700">
          <span className="py-2 tracking-widest rounded uppercase w-full bg-[--color-light] dark:bg-[--color-dark] hover:bg-transparent dark:hover:bg-transparent hover:text-[--color-light] transition-all duration-300">
            Explore Now
          </span>
        </button>
      </div>
      <div className="bg-violet-800 rounded-tl-[30%] rounded-br-[30%] rounded-bl-[10%] rounded-tr-[10%]">
        <Image src={heroImg} alt="hero" className="w-[450px]" />
      </div>
    </section>
  );
};

export default Hero;
