import { NextRequest, NextResponse } from "next/server";
import allProducts from "@/app/test_data_large.json";
import { Product } from "@/app/types";

export async function GET(request: NextRequest) {
  // Grabing query params from the URL
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const query = searchParams.get("query")?.toLowerCase();
  const category = searchParams.get("category");
  const brand = searchParams.get("brand");
  const sort = searchParams.get("sort");

  let filteredProducts: Product[] = allProducts;

  // Search and filtering
  if (query) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.product_name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
  }

  if (category) {
    filteredProducts = filteredProducts.filter((p) => p.category === category);
  }

  if (brand) {
    filteredProducts = filteredProducts.filter((p) => p.brand === brand);
  }

  // Sorting
  if (sort) {
    switch (sort) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filteredProducts.sort((a, b) =>
          a.product_name.localeCompare(b.product_name)
        );
        break;
      case "name-desc":
        filteredProducts.sort((a, b) =>
          b.product_name.localeCompare(a.product_name)
        );
        break;
    }
  }
  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return NextResponse.json({
    products: paginatedProducts,
    totalPages: Math.ceil(filteredProducts.length / limit),
    currentPage: page,
  });
}
