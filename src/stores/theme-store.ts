import { create } from "zustand";

interface ThemeStore {
  isDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDark: true,
  toggleTheme: () =>
    set((state) => {
      const newDark = !state.isDark;
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", newDark);
      }
      return { isDark: newDark };
    }),
}));
