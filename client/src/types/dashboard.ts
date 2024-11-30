import { Category, Product } from "./product";

interface Order {
  id: string;
  productId: string;
  quantity: number;
  status: string;
  // Add other order fields as needed
}

interface Settings {
  theme: string;
  language: string;
  // Add other settings fields as needed
}

export interface DashboardStore {
  products: Product[];
  loading: boolean;
  category: Category[];
  statisticsData: unknown[]; // Adjust this type according to your data
  productForm: Product; // Adjust this type according to your form data
  orders: Order[];
  settingsData: Settings;
  fetchOrders: () => Promise<void>;
  fetchCategory: () => Promise<void>;
  fetchProducts: () => Promise<void>;
}
