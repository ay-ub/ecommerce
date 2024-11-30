import { Product } from "./product";

export interface CartState {
  cartItems: Product[];
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}
