import { Dialog, styled, darken } from '@mui/material';

import { theme } from 'theme/theme';

export const StyledLoginModal = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    backgroundColor: '#040409',
    border: '1px solid #1e1f2c',
    overflow: 'visible',
  },

  '& .LoginModal-title': {
    color: '#FFF',
    fontWeight: 'bold',
  },

  '& .LoginModal-content': {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 30,
    gap: 20,
  },

  '& .LoginModal-close-button': {
    backgroundColor: '#950000',
    color: '#FFF',
    width: 25,
    height: 25,
    position: 'absolute',
    right: 5,
    top: 5,

    '&:hover': {
      backgroundColor: darken('#950000', 0.2),
    },

    '& svg': {
      fontSize: 15,
    },
  },

  '& .MuiTextField-root': {
    '& label, input': {
      color: '#FFF',
    },

    '& fieldset': {
      borderColor: '#222228',
    },

    '&:hover fieldset': {
      borderColor: '#222228',
    },
  },

  '& .LoginModal-login-button': {
    '&:hover': {
      backgroundColor: darken(theme.palette.secondary.light, 0.4),
    },
  },

  '& .LoginModal-register': {
    color: '#FFF',
    textAlign: 'center',
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
