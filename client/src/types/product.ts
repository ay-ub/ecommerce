export interface Product {
  id?: number;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
  category: string;
  stockQuantity?: number;
  images?: File[];
}

export interface Category {
  id: string;
  name: string;
}
export interface ProductsStore {
  products: Product[];
  currentProduct: Product;
  categories: Category[];
  loading: boolean;
  fetchProducts: () => Promise<void>;
  fetchProductById: (id: string) => Promise<void>;
  fetchProductByCategory: (category: string) => Promise<void>;
  setCurrentProduct: (product: Product) => void;
}
