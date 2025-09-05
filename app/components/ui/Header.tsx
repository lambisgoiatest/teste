"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="absolute inset-x-0 top-0 z-50 sticky border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <nav
        className="container mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 text-xl font-bold text-gray-900"
          >
            Fun Ecommerce Co.
          </Link>
        </div>
        <div className="flex gap-x-8">
          <Link
            href="/collections"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Products
          </Link>
          <Link href="/cart" className="relative text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.838-5.513A1.875 1.875 0 0 0 18.225 6H5.832a1.875 1.875 0 0 0-1.838 2.335L5.25 14.25Z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
