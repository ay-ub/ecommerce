import Notify from "@/lib/Notify";
import { CartState } from "@/types/cart";
import { Product } from "@/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      totalPrice: 0,
      addToCart: (product: Product) =>
        set((state) => {
          const exists = state.cartItems.find((item) => item.id === product.id);
          if (exists) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: (item.quantity || 1) + 1 }
                  : item
              ),
              totalPrice: state.totalPrice + product.price,
            };
          }
          Notify(`${product.title} added to your cart!`, "success");
          return {
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
            totalPrice: state.totalPrice + product.price,
          };
        }),
      removeFromCart: (productId: number) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== productId),
          totalPrice:
            state.totalPrice -
              state.cartItems.find((item) => item.id === productId)?.price || 0,
        })),
      clearCart: () => set({ cartItems: [], totalPrice: 0 }),
    }),
    {
      name: "CartStore", // Key for localStorage/sessionStorage
    }
  )
);

export default useCartStore;
