import { Box, styled, darken } from '@mui/material';

export const StyledNavbar = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: '1000000',

  '& .Navbar-ul': {
    width: '100%',
    height: '100%',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    gap: 20,

    '& .Navbar-li': {
      display: 'flex',
      alignItems: 'center',

      '& a': {
        padding: '8px 15px 8px 15px',
        borderRadius: 3,
        transition: '0.1s',

        '&:hover': {
          backgroundColor: `${darken(
            theme.palette.primary.light,
            0.5
          )} !important`,
        },
      },

      // '&:hover a': {
      //   backgroundColor: `${theme.palette.primary.light} !important`,
      // },
    },
  },
}));
