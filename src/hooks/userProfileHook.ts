/** @format */

import { create } from 'zustand';
import { UserProfileTypes } from '@/types';

type UserProfileStore = {
  userProfile: UserProfileTypes | null;
  setUserProfile: (profile: UserProfileTypes) => void;
  clearUserProfile: () => void;
};

export const useUserProfile = create<UserProfileStore>(set => ({
  userProfile: null,
  setUserProfile: profile => set({ userProfile: profile }),
  clearUserProfile: () => set({ userProfile: null }),
}));
