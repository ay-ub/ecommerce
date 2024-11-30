import { create } from "zustand";

const useOrdersStore = create((set) => ({
  orders: [],
  fetchOrders: async () => {
    const response = await fetch("/api/orders");
    const data = await response.json();
    set({ orders: data });
  },
  addOrder: (order) =>
    set((state) => ({
      orders: [...state.orders, order],
    })),
}));

export default useOrdersStore;
