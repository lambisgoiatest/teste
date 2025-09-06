"use client";

import { useCart } from "@/app/context/CartContext";
import { Product } from "@/app/types";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full mt-1 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
    >
      Add to Cart
    </button>
  );
}
