import { productType } from "@/schemas/product";
import { create } from "zustand";

type useLogInModalType = {
  isClickedLogInModal: boolean;
  setIsClickedLogInModal: () => void;
};

export const useLogInModalStore = create<useLogInModalType>((set) => ({
  isClickedLogInModal: false,
  setIsClickedLogInModal: () =>
    set((state) => ({
      isClickedLogInModal: !state.isClickedLogInModal,
    })),
}));

type useAuthStoreType = {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

export const useAuthStore = create<useAuthStoreType>((set) => ({
  isLoggedIn: false,
  logIn: () => set(() => ({ isLoggedIn: true })),
  logOut: () => set(() => ({ isLoggedIn: false })),
}));

type CartproductsStoreType = {
  containedCartProducts: productType[];
  addProductsInCart: (newCartProduct: productType) => void;
};

export const useCartproductsStore = create<CartproductsStoreType>((set) => ({
  containedCartProducts: [],
  addProductsInCart: (newCartProduct: productType) =>
    set((state) => ({
      containedCartProducts: [...state.containedCartProducts, newCartProduct],
    })),
}));
