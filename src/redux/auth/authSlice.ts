import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootState } from "redux/store";
import { signIn, signOut, signUp, fetchCurrentUser } from "./authOperations";

export interface IUser {
  name: string | null;
  email: string | null;
}

interface IUserState {
  user: IUser;
  token: string | null;
  isSignedIn: boolean;
  isFetchingCurrentUser: boolean;
}

const initialState: IUserState = {
  user: { name: null, email: null },
  token: null,
  isSignedIn: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isSignedIn = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isSignedIn = true;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isSignedIn = false;
    });
    builder.addCase(fetchCurrentUser.pending, (state) => {
      state.isFetchingCurrentUser = true;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isSignedIn = true;
      state.isFetchingCurrentUser = false;
    });
    builder.addCase(fetchCurrentUser.rejected, (state) => {
      state.isFetchingCurrentUser = false;
    });
  },
});

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

export const getSignStatus = (state: RootState) => state.auth.isSignedIn;

export const getUsername = (state: RootState) => state.auth.user.name;

export const getFetchingStatus = (state: RootState) =>
  state.auth.isFetchingCurrentUser;
