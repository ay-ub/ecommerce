import { create } from "zustand";
const useUserStore = create((set) => ({
  userInfo: null,
  isLoggedIn: false,
  login: (userData) => set({ userInfo: userData, isLoggedIn: true }),
  logout: () => set({ userInfo: null, isLoggedIn: false }),
}));
export default useUserStore;
