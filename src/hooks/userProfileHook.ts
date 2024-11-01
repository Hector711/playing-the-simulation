/** @format */

import { create } from 'zustand';
import { UserProfileTypes } from '@/types/userTypes';

type UserProfileStore = {
  userProfile: UserProfileTypes | null;
  setUserProfile: (profile: UserProfileTypes) => void;
  clearUserProfile: () => void;
  loadUserProfile: () => void;
};

export const useUserProfile = create<UserProfileStore>((set) => ({
  userProfile: null,
  setUserProfile: (profile) => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
    set({ userProfile: profile });
  },
  clearUserProfile: () => {
    localStorage.removeItem('userProfile');
    set({ userProfile: null });
  },
  loadUserProfile: () => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      set({ userProfile: JSON.parse(storedProfile) });
    }
  },
}));
