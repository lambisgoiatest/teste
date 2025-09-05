import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/ui/Header"; // Make sure Header is imported

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fun Ecommerce Co.",
  description: "A fun place to buy things!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <CartProvider>
          <Header /> {/* Add the Header here, just inside the provider */}
          <main>{children}</main>{" "}
          {/* It's good practice to wrap page content in a <main> tag */}
        </CartProvider>
      </body>
    </html>
  );
}
