"use client";
import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("dark");
  const root = document.getElementsByTagName("html")[0];

  // set theme on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);

      if (savedTheme === "light") {
        root.classList.remove("dark");
      }
    }
  }, []);

  // toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header className="py-5 border-b border-b-gray-400 dark:border-b-gray-500">
      <div className="relative container flex justify-between items-center text-lg">
        <h1 className="font-[geist-sans] text-2xl sm:text-4xl font-bold gradient-purple bg-clip-text text-transparent">
          Super Store
        </h1>
        <nav
          className={
            isMobile
              ? isMenuOpen
                ? "absolute z-10 top-16 right-2"
                : "hidden"
              : ""
          }
        >
          <ul
            className={`${
              isMenuOpen && isMobile
                ? "flex-col gap-3 border border-gray-500 rounded-lg px-3 py-2 bg-[--color-light] dark:bg-[--color-dark]"
                : "gap-10"
            } flex`}
          >
            <li>Home</li>
            <li>Store</li>
            <li>
              Cart <ShoppingCartOutlinedIcon />
            </li>
          </ul>
        </nav>
        <div className="flex gap-2 items-center">
          <button className="gradient-purple px-2 py-1 rounded-lg text-[--color-light] hover:drop-shadow-[0_0_4px_#b61aff] transition-all duration-200">
            Sign In
          </button>
          <button
            onClick={toggleTheme}
            className="h-full aspect-square border border-gray-500 rounded-lg px-1"
          >
            <div className="flex justify-center items-center hover:rotate-[360deg] transition-all duration-500">
              {theme === "light" ? <WbSunnyIcon /> : <BedtimeIcon />}
            </div>
          </button>
          {isMobile && (
            <button onClick={toggleMenu}>
              {" "}
              <MenuIcon />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
