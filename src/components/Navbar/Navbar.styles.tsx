import { Box, styled, darken } from '@mui/material';

import { theme } from 'theme/theme';

export const StyledNavbar = styled(Box)(() => ({
  position: 'relative',
  zIndex: '1000',

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
    },

    '& .Navbar-login-wrapper': {
      display: 'flex',
      marginLeft: 'auto',
      gap: 20,

      '& .Navbar-login-button': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        borderRadius: 3,
        padding: '8px 15px 8px 15px',
        transition: '0.1s',
      },
    },
  },
}));
