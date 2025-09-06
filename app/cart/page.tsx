"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Modal from "@/app/components/ui/Modal";
import { CartItem } from "@/app/types";
import { useDebouncedCallback } from "use-debounce";
import toast from "react-hot-toast";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<CartItem | null>(null);

  // Debounced function for when changing amounts with arrows
  const debouncedSuccessToast = useDebouncedCallback(() => {
    toast.success("Cart updated!");
  }, 800);

  const handleOpenDeleteModal = (item: CartItem) => {
    setItemToDelete(item);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      removeFromCart(itemToDelete.product_id);
    }
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  return (
    <>
      <main className="container mx-auto px-6 py-12 sm:px-8 lg:px-10">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500 text-lg">Your cart is empty :(</p>
            <Link
              href="/collections"
              className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white py-2 px-8 rounded-md hover:bg-primary-green transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* List */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.product_id}
                    className="flex items-center border-b pb-4 gap-4"
                  >
                    <Link
                      href={`/products/${item.product_id}`}
                      className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border"
                    >
                      <Image
                        src={item.image_url}
                        alt={item.product_name}
                        fill
                        className="object-cover"
                      />
                    </Link>
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
                        onChange={(e) => {
                          const newQuantity = parseInt(e.target.value, 10);
                          // Update the state immediately for instant feedback and error checks!
                          updateQuantity(item.product_id, newQuantity);
                          debouncedSuccessToast();
                        }}
                        min="1"
                        max={item.quantity_in_stock}
                        className="w-16 p-1 border rounded-md text-center"
                      />
                      <button
                        onClick={() => handleOpenDeleteModal(item)}
                        className="rounded-lg hover:text-red-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.134H8.09a2.09 2.09 0 0 0-2.09 2.134v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shippingEstimate.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${taxEstimate.toFixed(2)}</span>
                  </div>
                  <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Remove Item"
      >
        <p>
          Are you sure you want to remove{" "}
          <strong>{itemToDelete?.product_name}</strong> from your cart?
        </p>
      </Modal>
    </>
  );
}
