import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'user-storage', // unique name for the storage
      getStorage: () => localStorage, // use localStorage as the storage
    }
  )
);

export default useStore;
