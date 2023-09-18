import { useLocation } from 'react-router-dom';
import { routes as originalRoutes } from 'routes/routes';

const useNavbar = () => {
  const routes = [...originalRoutes[0].children];
  const location = useLocation();

  const isSelectedLink = (link: string) => {
    if (link === '') return location.pathname === '/';

    return location.pathname.includes(link);
  };

  let navItems = [...routes];

  return { location, isSelectedLink, navItems };
};

export default useNavbar;
