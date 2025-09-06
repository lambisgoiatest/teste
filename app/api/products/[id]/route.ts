import { NextResponse } from "next/server";
import allProducts from "@/app/test_data_large.json";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const productId = parseInt(id, 10);

  const product = allProducts.find((p) => p.product_id === productId);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Related products! (same category, excluding the current one)
  const relatedProducts = allProducts
    .filter(
      (p) => p.category === product.category && p.product_id !== productId
    )
    .slice(0, 4); // Limit to 4

  return NextResponse.json({
    product,
    relatedProducts,
  });
}
