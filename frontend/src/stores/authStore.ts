import { create } from "zustand";
import { supabase } from "../lib/supabase";
import type { User } from "../types";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
  initialize: async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      set({
        user: { id: user.id, email: user.email || "" },
        isLoading: false,
      });
    } else {
      set({ isLoading: false });
    }

    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        set({
          user: { id: session.user.id, email: session.user.email || "" },
          isLoading: false,
        });
      } else {
        set({ user: null, isLoading: false });
      }
    });
  },
}));
