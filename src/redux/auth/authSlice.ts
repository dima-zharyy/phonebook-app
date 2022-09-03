import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { signIn, signOut, signUp, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isSignedIn: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isSignedIn = true;
    },
    [signIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isSignedIn = true;
    },
    [signOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isSignedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isSignedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

export const getSignStatus = state => state.auth.isSignedIn;

export const getUsername = state => state.auth.user.name;

export const getFetchingStatus = state => state.auth.isFetchingCurrentUser;
