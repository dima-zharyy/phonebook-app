import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "redux/axiosSetup";
import { notify } from "components";
import { IUser } from "./authSlice";
import { RootState } from "redux/store";
interface IReturnedData {
  token: string;
  user: IUser;
}

interface IReturnedCurrentUser extends IUser {}

interface ISignPayload {
  name?: string;
  email: string;
  password: string;
}

export const signUp = createAsyncThunk<
  IReturnedData,
  ISignPayload,
  { rejectValue: void }
>("auth/signup", async (credentials: ISignPayload, thunkAPI) => {
  try {
    const response = await axios.post("/users/signup", credentials);
    const data: IReturnedData = response.data;

    token.set(data.token);
    notify(
      `👋 Welcome ${data.user.name},! Now you can use your Phonebook!`,
      "ok"
    );
    return data;
  } catch (error) {
    notify(`Something went wrong! Try again`, "fail");
    return thunkAPI.rejectWithValue();
  }
});

export const signIn = createAsyncThunk<
  IReturnedData,
  ISignPayload,
  { rejectValue: void }
>("auth/login", async (credentials: ISignPayload, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", credentials);
    const data: IReturnedData = response.data;

    token.set(data.token);
    notify(`👋 Welcome ${data.user.name}! Nice to see you again!`, "default");
    return data;
  } catch (error) {
    console.log(error);
    notify(`Wrong username or password! Try again`, "fail");
    return thunkAPI.rejectWithValue();
  }
});

export const signOut = createAsyncThunk<void, void, { rejectValue: void }>(
  "auth/logout",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    try {
      await axios.post("/users/logout");
      token.unset();
      notify(`👋 Have a good one, ${state.auth.user.name}!`, "default");
    } catch (error) {
      notify(`Something went wrong! Try again`, "fail");
      return thunkAPI.rejectWithValue();
    }
  }
);

export const fetchCurrentUser = createAsyncThunk<
  IReturnedCurrentUser,
  void,
  { rejectValue: void }
>("auth/current", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const response = await axios.get("/users/current");
    const data: IReturnedCurrentUser = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue();
  }
});
