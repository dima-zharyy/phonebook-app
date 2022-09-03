import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'redux/axiosSetup';
import { notify } from 'components';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      notify(
        `👋 Welcome ${data.user.name},! Now you can use your Phonebook!`,
        'ok'
      );
      return data;
    } catch (error) {
      notify(`Something went wrong! Try again`, 'fail');
      return thunkAPI.rejectWithValue();
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      notify(`👋 Welcome ${data.user.name}! Nice to see you again!`, 'default');
      return data;
    } catch (error) {
      console.log(error);
      notify(`Wrong username or password! Try again`, 'fail');
      return thunkAPI.rejectWithValue();
    }
  }
);

export const signOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  try {
    await axios.post('/users/logout');
    token.unset();
    notify(`👋 Have a good one, ${state.auth.user.name}!`, 'default');
  } catch (error) {
    notify(`Something went wrong! Try again`, 'fail');
    return thunkAPI.rejectWithValue();
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
