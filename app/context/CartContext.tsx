"use client";

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { CartItem, Product } from "@/app/types";

// Define the shape of the context
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

// Create the context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create the Provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Simple guesstimates for tax and shipping
  const shippingEstimate = subtotal > 0 ? 5.0 : 0;
  const taxEstimate = subtotal * 0.08; // 8% tax
  const total = subtotal + shippingEstimate + taxEstimate;

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product_id === product.product_id
      );
      if (existingItem) {
        // Stock validation
        const newQuantity = existingItem.quantity + 1;
        if (newQuantity > existingItem.quantity_in_stock) {
          alert(
            `Cannot add more. Only ${existingItem.quantity_in_stock} in stock.`
          );
          return prevItems;
        }
        return prevItems.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== productId)
    );
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.product_id === productId) {
          // Stock validation
          if (newQuantity > item.quantity_in_stock) {
            alert(
              `Cannot set quantity. Only ${item.quantity_in_stock} in stock.`
            );
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

// Custom hook remains the same
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
