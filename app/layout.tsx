import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/ui/Header";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

// SEO stuff!
export const metadata: Metadata = {
  title: "Fun Ecommerce Co.",
  description: "Ecommerce to buy things!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <Toaster position="top-right" />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
