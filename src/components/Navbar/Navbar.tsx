import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import { theme } from 'theme/theme';

import useNavbar from './useNavbar';

import { StyledNavbar } from './Navbar.styles';

const Navbar = () => {
  const { isSelectedLink, navItems } = useNavbar();

  return (
    <StyledNavbar
      width='100%'
      height={60}
      paddingX='5vw'
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
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
