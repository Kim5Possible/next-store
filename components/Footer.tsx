import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className="mt-5">
    <div className="container flex flex-col md:flex-row  justify-between ">
      <Link
        href="/"
        className="font-[geist-sans] mb-5 w-full text-2xl sm:text-4xl font-bold gradient-purple bg-clip-text text-transparent"
      >
        Super Store
      </Link>

      <div className="flex w-full justify-between items-center">
        {footerLinks.map((item) => (
          <div key={item.title}>
            <h3 className="font-bold mb-3">{item.title}</h3>
            <div className="flex flex-col gap-3">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="opacity-60 hover:opacity-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-t-gray-400 dark:border-t-gray-500 sm:px-16 px-6 py-10">
      <p>@2024 Super Store. All rights reserved</p>

      <div className="flex gap-4">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
