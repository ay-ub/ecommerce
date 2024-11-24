import create from "zustand";

const useStore = create((set) => ({
  user: {
    name: "Ahmed",
    age: 25,
    country: "Egypt",
  },

  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),

  products: [],
  setProducts: (products) => set({ products }),
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),

  cart: {
    products: [],
    total: 0,
  },
  setCart: (cart) => set({ cart }),
  addProductToCart: (product) =>
    set((state) => ({
      cart: {
        products: [...state.cart.products, product],
        total: state.cart.total + product.price,
      },
    })),
  removeProductFromCart: (id) =>
    set((state) => ({
      cart: {
        products: state.cart.products.filter((product) => product.id !== id),
        total:
          state.cart.total -
          state.cart.products.find((product) => product.id === id).price,
      },
    })),
  clearCart: () => set((state) => ({ cart: { products: [], total: 0 } })),

  categories: [],
  setCategories: (categories) => set({ categories }),
  addCategory: (category) =>
    set((state) => ({ categories: [...state.categories, category] })),
  removeCategory: (id) =>
    set((state) => ({
      categories: state.categories.filter((category) => category.id !== id),
    })),

  orders: [],
  setOrders: (orders) => set({ orders }),
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
  removeOrder: (id) =>
    set((state) => ({
      orders: state.orders.filter((order) => order.id !== id),
    })),
}));

export default useStore;
