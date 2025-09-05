"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
    shippingEstimate,
    taxEstimate,
    total,
  } = useCart();

  return (
    <main className="container mx-auto px-4 pt-24 pb-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
          <Link
            href="/collections"
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.product_id}
                  className="flex items-center border-b pb-4"
                >
                  <Image
                    src={item.image_url}
                    alt={item.product_name}
                    width={100}
                    height={100}
                    className="rounded-md object-cover"
                  />
                  <div className="ml-4 flex-grow">
                    <h2 className="font-semibold">{item.product_name}</h2>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <p className="text-lg font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.product_id,
                          parseInt(e.target.value, 10)
                        )
                      }
                      min="1"
                      max={item.quantity_in_stock}
                      className="w-16 p-1 border rounded-md text-center"
                    />
                    <button
                      onClick={() => removeFromCart(item.product_id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Estimate</span>
                  <span>${shippingEstimate.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Estimate</span>
                  <span>${taxEstimate.toFixed(2)}</span>
                </div>
                <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
