export interface IPasswordRecover {
  email: string;
}

export interface IPasswordConfirmChange {
  password: string;
  passwordConfirm: string;
  passwordResetToken: string;
}
