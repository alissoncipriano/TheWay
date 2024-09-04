import {
  finishLinearLoading,
  startLinearLoading,
} from 'components/LinearLoader/linearLoaderSlice';
import { LoginInputs } from 'components/LoginModal/LoginModal';
import { openSnackbar } from 'components/PositionedSnackbar/snackbarSlice';
import { authenticate } from 'models/User/userSlice';
import { useAppDispatch } from 'store/hooks';

const useLogin = (onLogin: () => void) => {
  const dispatch = useAppDispatch();

  const handleLogin = async (data: LoginInputs) => {
    const { email, password } = data;

    dispatch(startLinearLoading());

    dispatch(
      authenticate({
        email: email,
        password: password,
      })
    )
      .unwrap()
      .then((originalPromiseResult: any) => {
        if (originalPromiseResult.errorAuthenticationMessage) {
          dispatch(
            openSnackbar(originalPromiseResult.errorAuthenticationMessage)
          );
          return;
        }

        onLogin?.();
        dispatch(openSnackbar('Login efetuado com sucesso!'));
      })
      .catch((rejectedValueOrSerializedError: any) => {
        console.error(rejectedValueOrSerializedError);
      })
      .finally(() => {
        // Mock timeout temporário
        setTimeout(() => {
          dispatch(finishLinearLoading());
        }, 500);
      });
  };

  return { handleLogin };
};

export default useLogin;
