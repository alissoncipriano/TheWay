import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    primary: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#161724',
      light: '#252D3C',
      dark: '#000',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#E6C15B',
      light: '#FFD54F',
      dark: '#FFA000',
      contrastText: '#000',
    },
  },
});
