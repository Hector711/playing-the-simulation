/** @format */

import { create } from 'zustand';
import { DocumentData } from 'firebase/firestore';

type Store = {
  items: DocumentData[];
  setItems: (items: DocumentData[]) => void;
};

export const useStore = create<Store>(set => ({
  items: [],
  setItems: state => set({ items: [...state.items, {}] }),
}));
