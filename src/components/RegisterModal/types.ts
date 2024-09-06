export type RegisterInputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type RegisterModalProps = {
  open: boolean;
  handleClose: () => void;
  onRegister: (data: RegisterInputs) => void;
  checkEmailInUse: (data: RegisterInputs) => void;
};
