import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import AuthButton from "./AuthButton";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-3">
      {/* Right: Logo*/}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="E-commerce shop"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />

        <p className="hidden md:block text-lg xl:text-2xl font-black tracking-widest self-end text-orange-500">
          دیجی مد
        </p>
      </Link>
      {/* Left: searchBar + navLinks + signin */}
      <div className="flex items-center gap-6">
        <SearchBar />
        {/* NavLinks */}
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCart className="w-4 h-4 text-gray-600" />
        {/* AuthButton  */}
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;
