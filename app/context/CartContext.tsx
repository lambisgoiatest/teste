"use client";

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { CartItem, Product } from "@/app/types";
import toast from "react-hot-toast";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  cartCount: number;
  subtotal: number;
  shippingEstimate: number;
  taxEstimate: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Seeing if there's a cart saved in localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculations and estimates
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingEstimate = subtotal > 0 ? 5.0 : 0;
  const taxEstimate = subtotal * 0.08; // 8% tax
  const total = subtotal + shippingEstimate + taxEstimate;

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product_id === product.product_id
      );

      if (existingItem) {
        // If item is already in the cart, check stock before adding
        const newQuantity = existingItem.quantity + 1;
        if (newQuantity > existingItem.quantity_in_stock) {
          toast.error(
            `Sorry, we only have ${existingItem.quantity_in_stock} in stock!`
          );
          return prevItems;
        }

        toast.success(`${product.product_name} added to cart!`);
        return prevItems.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }

      // ... or add 1
      toast.success(`${product.product_name} added to cart!`);
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find(
        (item) => item.product_id === productId
      );

      if (itemToRemove) {
        toast.success(`${itemToRemove.product_name} removed from cart.`);
      }
      return prevItems.filter((item) => item.product_id !== productId);
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.product_id === productId) {
          // Stock check
          if (newQuantity > item.quantity_in_stock) {
            toast.error(`Only ${item.quantity_in_stock} in stock!`);
            return { ...item, quantity: item.quantity_in_stock };
          }
          if (newQuantity < 1) {
            return { ...item, quantity: 1 };
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartCount,
    subtotal,
    shippingEstimate,
    taxEstimate,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
