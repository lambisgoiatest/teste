import { Product } from "@/app/types";
import ProductCard from "@/app/components/products/ProductCard";
import Pagination from "@/app/components/ui/Pagination";
import SearchBar from "@/app/components/products/SearchBar";
import ProductFilters from "@/app/components/products/ProductFilters";
import allProducts from "@/app/test_data_large.json";

interface ApiResponse {
  products: Product[];
  totalPages: number;
  currentPage: number;
}

const PER_PAGE = [10, 20, 50, 100];

async function getProducts(searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<ApiResponse> {
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) {
      params.append(key, Array.isArray(value) ? value.join(",") : value);
    }
  });

  const res = await fetch(
    `http://localhost:3000/api/products?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

// Filters
function getFilterOptions() {
  const categories = [...new Set(allProducts.map((p) => p.category))];
  const brands = [...new Set(allProducts.map((p) => p.brand))];
  return { categories, brands };
}

export default async function CollectionsPage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    query?: string;
    category?: string;
    brand?: string;
    sort?: string;
    limit?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const limit = searchParams?.limit || PER_PAGE[0];

  const { products, totalPages } = await getProducts({
    page: currentPage.toString(),
    limit: limit.toString(),
    query: searchParams?.query,
    category: searchParams?.category,
    brand: searchParams?.brand,
    sort: searchParams?.sort,
  });

  const { categories, brands } = getFilterOptions();

  return (
    <>
      <main className="container mx-auto px-4 pt-24 pb-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/3">
            <SearchBar />
          </div>
          <div className="w-full md:w-2/3">
            <ProductFilters
              categories={categories}
              brands={brands}
              perPageOptions={PER_PAGE}
            />
          </div>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-12">
            No products found matching your criteria.
          </p>
        )}

        {totalPages > 1 && (
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        )}
      </main>
    </>
  );
}
