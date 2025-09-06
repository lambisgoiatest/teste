"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/types";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.product_id}`}
      className="group relative flex flex-col border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square">
        <Image
          src={product.image_url}
          alt={product.product_name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p className="mt-1 text-sm font-semibold">Details</p>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold truncate group-hover:text-green-600">
          {product.product_name}
        </h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <div className="mt-auto pt-4">
          <AddToCartButton product={product} />
        </div>
      </div>
    </Link>
  );
}
