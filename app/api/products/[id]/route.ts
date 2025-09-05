import { NextResponse } from "next/server";
import allProducts from "@/app/test_data_large.json";
import { Product } from "@/app/types";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  const id = params.id;
  const productId = parseInt(id, 10);

  const product = allProducts.find((p) => p.product_id === productId);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Find related products (from the same category, excluding the current one)
  const relatedProducts = allProducts
    .filter(
      (p) => p.category === product.category && p.product_id !== productId
    )
    .slice(0, 4); // Limit to 4 related products

  return NextResponse.json({
    product,
    relatedProducts,
  });
}
