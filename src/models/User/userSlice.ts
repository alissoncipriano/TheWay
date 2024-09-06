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

export const register = createAsyncThunk(
  'users/register',
  async ({
    name,
    email,
    password,
    passwordConfirmation,
    rejectWithValue,
  }: any) => {
    try {
      const response = await fetch(API.user.register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          passwordConfirmation,
        }),
      });

      if (!response.ok) {
        if (response.status === 422)
          return {
            errorAuthenticationMessage: 'O email digitado já está em uso.',
          };

        if (response.status === 401)
          return { errorAuthenticationMessage: 'Senhas não conferem.' };
      }

      const data = await response.json();

      const { id, name: nameUser, email: emailUser, isAdmin } = data;

      return { id, name: nameUser, email: emailUser, isAdmin, loggedIn: true };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const checkEmailInUse = createAsyncThunk(
  'users/exists',
  async ({ email, rejectWithValue }: any) => {
    try {
      const response = await fetch(API.user.exists, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (!response.ok)
        return {
          errorAuthenticationMessage: 'O email digitado já está em uso.',
          emailInUse: true,
        };

      return { loggedIn: false };
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
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload };
    });
  },
  selectors: {
    getLoggedIn: (state) => state.user.loggedIn,
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
