"use client";
import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const linkStyle = "hover:underline opacity-80 hover:opacity-100";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("dark");

  // set theme on load
  useEffect(() => {
    const root = document.getElementsByTagName("html")[0];
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
    const root = document.getElementsByTagName("html")[0];
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
    <header className="mb-10 py-5 border-b border-b-gray-400 dark:border-b-gray-500">
      <div className="relative container flex justify-between items-center text-lg">
        <Link
          href="/"
          className="font-[geist-sans] text-2xl sm:text-4xl font-bold gradient-purple bg-clip-text text-transparent"
        >
          Super Store
        </Link>
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
                ? "flex-col gap-3 rounded-lg px-3 py-2 bg-[--color-light] dark:bg-[--color-dark]"
                : "gap-16 rounded-full px-5 py-2"
            } flex border border-gray-500`}
          >
            <li>
              <Link onClick={toggleMenu} href="/" className={linkStyle}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href="/store" className={linkStyle}>
                Store
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href="/cart" className={linkStyle}>
                Cart <ShoppingCartOutlinedIcon />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5 items-center">
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
