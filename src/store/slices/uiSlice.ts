import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isLoading: boolean;
  animationsEnabled: boolean;
}

const initialState: UIState = {
  isLoading: false,
  animationsEnabled: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAnimationsEnabled: (state, action: PayloadAction<boolean>) => {
      state.animationsEnabled = action.payload;
    },
  },
});

export const { setLoading, setAnimationsEnabled } = uiSlice.actions;
export default uiSlice.reducer;