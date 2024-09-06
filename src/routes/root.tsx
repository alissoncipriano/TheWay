import PositionedSnackbar from 'components/PositionedSnackbar';
import Navbar from 'components/Navbar';

import { Outlet } from 'react-router-dom';
import useSession from 'hooks/useSession';

export default function Root() {
  useSession();

  return (
    <>
      <PositionedSnackbar />
      <Navbar />
      <Outlet />
    </>
  );
}
