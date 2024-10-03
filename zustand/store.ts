import { create } from "zustand";
import { persist } from "zustand/middleware";

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
