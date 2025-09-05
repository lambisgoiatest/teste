"use client";

import { useCart } from "@/app/context/CartContext";
import { Product } from "@/app/types";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full mt-6 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors"
    >
      Add to Cart
    </button>
  );
}
