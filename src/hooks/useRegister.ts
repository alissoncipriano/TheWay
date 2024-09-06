import {
  finishLinearLoading,
  startLinearLoading,
} from 'components/LinearLoader/linearLoaderSlice';
import { openSnackbar } from 'components/PositionedSnackbar/snackbarSlice';
import { RegisterInputs } from 'components/RegisterModal/types';
import { checkEmailInUse, register } from 'models/User/userSlice';
import { useAppDispatch } from 'store/hooks';

const useRegister = (onRegister: () => void) => {
  const dispatch = useAppDispatch();

  const handleCheckEmailInUse = async (
    data: RegisterInputs,
    callBack?: () => void
  ) => {
    const { email } = data;

    dispatch(startLinearLoading());

    dispatch(
      checkEmailInUse({
        email,
      })
    )
      .unwrap()
      .then((originalPromiseResult: any) => {
        if (originalPromiseResult?.errorAuthenticationMessage) {
          const { errorAuthenticationMessage, emailInUse } =
            originalPromiseResult;

          dispatch(
            openSnackbar(originalPromiseResult.errorAuthenticationMessage)
          );

          if (emailInUse) return;
        }

        callBack?.();
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

  const handleRegister = async (data: RegisterInputs) => {
    const { name, email, password, passwordConfirmation } = data;

    dispatch(startLinearLoading());

    dispatch(
      register({
        name,
        email,
        password,
        passwordConfirmation,
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

        onRegister?.();
        dispatch(openSnackbar('Usuário cadastrado com sucesso!'));
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

  return { handleRegister, handleCheckEmailInUse };
};

export default useRegister;
