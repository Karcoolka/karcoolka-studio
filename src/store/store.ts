import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './slices/navigationSlice';
import uiReducer from './slices/uiSlice';
import portfolioReducer from './slices/portfolioSlice';
import languageReducer from './slices/languageSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    ui: uiReducer,
    portfolio: portfolioReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;