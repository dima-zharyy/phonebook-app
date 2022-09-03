import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = { value: 'light' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.value = action.payload;
    },
  },
});

const persistConfig = {
  key: 'theme',
  storage,
};

export const themeReducer = persistReducer(persistConfig, themeSlice.reducer);
export const { changeTheme } = themeSlice.actions;
export const getTheme = state => state.theme.value;
