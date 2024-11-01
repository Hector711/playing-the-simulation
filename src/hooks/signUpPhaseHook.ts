import { create } from 'zustand';

type SignUpPhase = 0 | 1 | 2 | 3 | 10;

type SignUpPhaseStore = {
  signUpPhase: SignUpPhase;
  setSignUpPhase: (phase: SignUpPhase) => void;
};

export const useSignUpPhase = create<SignUpPhaseStore>((set) => ({
  signUpPhase: 0, // Estado inicial
  setSignUpPhase: (phase) => set({ signUpPhase: phase }),
})); 
