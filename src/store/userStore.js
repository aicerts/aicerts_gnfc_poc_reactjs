import {create} from 'zustand';

const userStore = create((set) => ({
  user: null, // Stores the user data
  setUser: (userData) => set({ user: userData }), // Function to set user data
  clearUser: () => set({ user: null }), // Function to clear user data
}));

export default userStore;
