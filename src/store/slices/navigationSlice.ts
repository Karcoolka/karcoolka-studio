import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  activeSection: string;
  isMobileMenuOpen: boolean;
}

const initialState: NavigationState = {
  activeSection: '/',
  isMobileMenuOpen: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
  },
});

export const { setActiveSection, toggleMobileMenu, closeMobileMenu } = navigationSlice.actions;
export default navigationSlice.reducer;