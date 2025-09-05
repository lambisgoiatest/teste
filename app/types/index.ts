export interface Product {
  product_id: number;
  product_name: string;
  description: string;
  price: number;
  quantity_in_stock: number;
  category: string;
  brand: string;
  color: string;
  size: string;
  release_date: string;
  image_url: string;
}

export interface CartItem extends Product {
  quantity: number;
}
