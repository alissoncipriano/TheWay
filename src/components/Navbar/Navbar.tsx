import { useState } from 'react';

import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Login from 'components/LoginModal';

import { theme } from 'theme/theme';

import useNavbar from './useNavbar';
import useLogin from 'hooks/useLogin';

import { StyledNavbar } from './Navbar.styles';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { authenticate } from 'models/User/userSlice';

const Navbar = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const loginCallback = () => setOpenLoginModal(false);

  const { handleLogin } = useLogin(loginCallback);
  const { isSelectedLink, navItems } = useNavbar();

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const userLoggedIn = useAppSelector((state) => state.user.user.loggedIn);

  const dispatch = useAppDispatch();

  return (
    <>
      <Login
        open={openLoginModal}
        handleClose={handleCloseLoginModal}
        onLogin={handleLogin}
      />

      <StyledNavbar
        width='100%'
        height={60}
        paddingX='2rem'
        boxSizing='border-box'
        bgcolor={theme.palette.primary.dark}
      >
        <ul className='Navbar-ul'>
          {navItems.map((link) => (
            <li key={link.path} className='Navbar-li'>
              <Link
                style={{
                  color: '#FFF',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  backgroundColor: isSelectedLink(link.path)
                    ? theme.palette.primary.light
                    : theme.palette.primary.dark,
                }}
                to={link.path}
              >
                <Typography fontFamily='Poppins' fontWeight={500}>
                  {link.tag}
                </Typography>
              </Link>
            </li>
          ))}

          {!userLoggedIn && (
            <Box className='Navbar-login-wrapper'>
              <li className='Navbar-li'>
                <Button
                  className='Navbar-login-button'
                  variant='contained'
                  onClick={handleOpenLoginModal}
                >
                  <Typography fontFamily='Poppins' fontWeight={600}>
                    Login
                  </Typography>
                </Button>
              </li>

              <li className='Navbar-li'>
                <Button
                  onClick={() => {
                    dispatch(
                      authenticate({
                        email: 'alisson-cipriano@email.com',
                        password: '123456',
                      }) as any
                    );
                  }}
                >
                  <Typography
                    color='#FFF'
                    fontFamily='Poppins'
                    fontWeight={500}
                  >
                    Registrar
                  </Typography>
                </Button>
              </li>
            </Box>
          )}
        </ul>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
