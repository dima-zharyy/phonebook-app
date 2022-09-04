import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contacts/contactsApi";
import { authReducer } from "./auth/authSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { filterReducer } from "./filter/filterSlice";
import { themeReducer } from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    theme: themeReducer,
    auth: authReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
