import { useLocation } from 'react-router-dom';
import {
  homeRoute,
  routes as originalRoutes,
  routesLoggedIn,
  routesLoggedOut,
} from 'routes/routes';

import { useSessionStorage } from 'hooks/useSessionStorage';
import { useAppSelector } from 'store/hooks';

const useNavbar = () => {
  const [logged, setLogged] = useSessionStorage('logged', false);
  const userIsAdm = useAppSelector((state) => state.user.user.isAdmin);

  const routes = [...originalRoutes[0].children];
  const location = useLocation();

  const handleLogout = () => {
    setLogged(false);
    window.location.reload();
  };

  const isSelectedLink = (link: string) => {
    if (link === '') return location.pathname === '/';

    return location.pathname.includes(link);
  };

  let navItems = [...routes];

  if (logged) {
    if (userIsAdm) {
      navItems = navItems.filter((item) =>
        routesLoggedIn.isAdm.includes(item.path)
      );
    } else
      navItems = navItems.filter((item) =>
        routesLoggedIn.isNotAdm.includes(item.path)
      );
  } else
    navItems = navItems.filter((item) => routesLoggedOut.includes(item.path));

  return {
    location,
    isSelectedLink,
    navItems: [homeRoute, ...navItems],
    logged,
    handleLogout,
  };
};

export default useNavbar;
