import { DashboardStore } from "@/types/dashboard";
import { create } from "zustand";

const useDashboardStore = create<DashboardStore>((set) => ({
  products: [],
  loading: false,
  category: [],
  statisticsData: [],
  productForm: {
    id: 0,
    title: "",
    price: 0,
    image: "",
    description: "",
    category: "",
  },
  orders: [],
  settingsData: {
    theme: "string",
    language: "en",
    // Add other settings fields as needed
  },
  fetchOrders: async () => {
    try {
      console.log("fetch orders");
    } catch (error) {
      console.log(error);
    }
  },
  fetchCategory: async () => {
    try {
      console.log("fetchCategory");
    } catch (error) {
      console.log(error);
    }
  },
  fetchProducts: async () => {
    try {
      console.log("fetchProducts");
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useDashboardStore;
