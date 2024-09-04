import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../models/User/userSlice';
import snackbarReducer from '../components/PositionedSnackbar/snackbarSlice';
import linearLoaderSlice from '../components/LinearLoader/linearLoaderSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    snackbar: snackbarReducer,
    linearLoader: linearLoaderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
