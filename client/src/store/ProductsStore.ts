import { create } from "zustand";
import { Product, ProductsStore } from "@/types/product";

const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  currentProduct: {
    id: 0,
    title: "",
    price: 0,
    image: "",
    description: "",
    category: "",
  },
  categories: [],
  loading: false,
  fetchProducts: async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    set({ products: data });
  },
  fetchProductById: async (productId: string) => {
    try {
      set({
        loading: true,
      });
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();
      set({
        currentProduct: data,
      });
      // scroll to top smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error);
    } finally {
      set({
        loading: false,
      });
    }
  },
  fetchProductByCategory: async (category: string): Promise<void> => {
    try {
      set({
        loading: true,
      });
      let response;
      if (category.toLowerCase() == "all") {
        response = await fetch(`/api/products`);
      } else {
        response = await fetch(`/api/products/category/${category}`);
      }
      const data = await response.json();
      set({
        products: data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      set({
        loading: false,
      });
    }
  },
  setCurrentProduct: (product: Product) => set({ currentProduct: product }),
}));

export default useProductsStore;
