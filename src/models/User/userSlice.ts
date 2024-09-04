import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from 'constants/API';
import { IUser } from './types';

// thunks
export const authenticate = createAsyncThunk(
  'users/authenticate',
  async ({ email, password, rejectWithValue }: any) => {
    try {
      const response = await fetch(API.user.authenticate, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log(response);

      if (!response.ok) {
        if (response.status === 401)
          return { errorAuthenticationMessage: 'Credenciais inválidas' };

        return { errorAuthenticationMessage: 'Usuário não encontrado' };
      }

      const data = await response.json();

      const { id, name, isAdmin } = data;

      return { id, name, email, isAdmin, loggedIn: true };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState: { user: IUser } = {
  user: {
    id: 0,
    name: '',
    email: '',
    isAdmin: false,
    loggedIn: false,
    errorAuthenticationMessage: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload };
    });
  },
  selectors: {
    getLoggedIn: (state) => state.user.loggedIn,
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
