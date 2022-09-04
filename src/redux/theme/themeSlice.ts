import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootState } from "redux/store";

type TValue = "light" | "dark";

interface IThemeState {
  value: TValue;
}

const initialState: IThemeState = { value: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<TValue>) {
      state.value = action.payload;
    },
  },
});

const persistConfig = {
  key: "theme",
  storage,
};

export const themeReducer = persistReducer(persistConfig, themeSlice.reducer);
export const { changeTheme } = themeSlice.actions;
export const getTheme = (state: RootState) => state.theme.value;
