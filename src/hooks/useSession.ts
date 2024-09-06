import { useSessionStorage } from 'hooks/useSessionStorage';
import { useEffect } from 'react';
import { useAppSelector } from 'store/hooks';

const useSession = () => {
  const [logged, setLogged] = useSessionStorage('logged', false);

  const userLoggedIn = useAppSelector((state) => state.user.user.loggedIn);

  useEffect(() => {
    if (!userLoggedIn) return;

    setLogged(true);
  }, [userLoggedIn]);
};

export default useSession;
