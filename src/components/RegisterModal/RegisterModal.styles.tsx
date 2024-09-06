import { Dialog, styled, darken } from '@mui/material';

import { theme } from 'theme/theme';

export const StyledRegisterModal = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    backgroundColor: '#040409',
    border: '1px solid #1e1f2c',
    overflow: 'visible',
  },

  '& .RegisterModal-content': {
    display: 'flex',
    gap: 20,
    padding: 0,
    position: 'relative',
    height: 550,
    transition: 'all 0.3s',
  },

  '& .RegisterModal-close-button': {
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

    '& input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
      {
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': '#ffffff',
        transition: 'background-color 5000s ease-in-out 0s',
        boxShadow: 'inset 0 0 20px 20px #23232329',
      },

    '& fieldset': {
      borderColor: '#222228',
    },

    '&:hover fieldset': {
      borderColor: '#222228',
    },
  },

  '& .RegisterModal-background': {
    display: 'flex',
    flex: 1 / 1.5,
    width: '100%',
    overflow: 'hidden',
    borderRadius: '3px 0px 0px 3px',
    zIndex: 10,

    '& img': {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
  },

  '& .RegisterModal-stepper': {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
    padding: 80,
    paddingLeft: 65,
  },
}));
