import React from "react";
import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <nav className=" p-5 flex justify-between items-center font-interTight mx-16 border-2  ">
      {/* Logo */}
      <div className="w-[200px]  h-[36.2px] mx-3">
        <Image src="/logo/websitelogo.svg" alt="logo" width={200} height={36.2} />
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center items-center gap-10">
        <ul className="flex gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-corporateBlack font">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button */}
        <Button className="text-white bg-corporateBlack h-[40px] w-[200px] rounded-[50px]">
          Get a Free e-Book
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
