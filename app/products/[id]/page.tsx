import { notFound } from "next/navigation";
import { Product } from "@/app/types";
import ProductImage from "@/app/components/products/ProductImage";
import AddToCartButton from "@/app/components/products/AddToCartButton";
import ProductCard from "@/app/components/products/ProductCard";

interface PageProps {
  params: {
    id: string;
  };
}

interface ApiResponse {
  product: Product;
  relatedProducts: Product[];
}

async function getProductData(id: string): Promise<ApiResponse> {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    throw new Error("Failed to fetch product data");
  }

  return res.json();
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { product, relatedProducts } = await getProductData(params.id);

  return (
    <main className="container mx-auto px-4 pt-24 pb-12 sm:px-6 lg:px-8">
      {/* Main Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <ProductImage
            imageUrl={product.image_url}
            altText={product.product_name}
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.product_name}</h1>
          <p className="text-lg text-gray-500 mt-1">{product.brand}</p>
          <p className="text-2xl font-semibold my-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <div className="mt-auto">
            <p className="text-sm text-gray-600 mt-4">
              {product.quantity_in_stock > 0
                ? `${product.quantity_in_stock} in stock`
                : "Out of stock"}
            </p>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.product_id}
              product={relatedProduct}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
