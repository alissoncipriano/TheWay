import { useState } from 'react';

import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import LoginModal from 'components/LoginModal';
import RegisterModal from 'components/RegisterModal';

import { theme } from 'theme/theme';

import useNavbar from './useNavbar';
import useLogin from 'hooks/useLogin';
import useRegister from 'hooks/useRegister';

import { StyledNavbar } from './Navbar.styles';
import LinearLoader from 'components/LinearLoader';

const Navbar = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const loginCallback = () => setOpenLoginModal(false);
  const registerCallback = () => setOpenRegister(false);

  const { handleLogin } = useLogin(loginCallback);
  const { handleRegister, handleCheckEmailInUse } =
    useRegister(registerCallback);

  const { isSelectedLink, navItems, logged, handleLogout } = useNavbar();

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const handleOpenRegisterModal = () => {
    setOpenRegister(true);
  };

  const handleCloseRegisterModal = () => {
    setOpenRegister(false);
  };

  return (
    <>
      <LoginModal
        open={openLoginModal}
        handleClose={handleCloseLoginModal}
        onLogin={handleLogin}
        onRegisterClick={() => {
          handleCloseLoginModal();
          handleOpenRegisterModal();
        }}
      />

      <RegisterModal
        open={openRegister}
        handleClose={handleCloseRegisterModal}
        onRegister={handleRegister}
        checkEmailInUse={handleCheckEmailInUse}
      />

      <LinearLoader />

      <StyledNavbar
        width='100%'
        height={60}
        paddingX='5rem'
        paddingTop={7}
        paddingBottom={3}
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

          {!logged && (
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
                <Button onClick={handleOpenRegisterModal}>
                  <Typography
                    color='#FFF'
                    fontFamily='Poppins'
                    fontWeight={500}
                    sx={{
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Registrar
                  </Typography>
                </Button>
              </li>
            </Box>
          )}

          {logged && (
            <Box className='Navbar-login-wrapper'>
              <li className='Navbar-li'>
                <Button
                  variant='text'
                  onClick={handleLogout}
                  sx={{ color: '#FFF' }}
                >
                  <Typography
                    fontFamily='Poppins'
                    fontWeight={500}
                    sx={{
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Sair
                  </Typography>
                </Button>
              </li>{' '}
            </Box>
          )}
        </ul>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
