import { IPasswordConfirmChange } from '@/app/interfaces/IPasswordChange';
import { pbUrl } from '@/app/lib/pBUrl';
import Pocketbase from 'pocketbase';

export async function CreatePasswordRecovery({ email }: { email: string }) {
  const pb = new Pocketbase(pbUrl);

  await pb.collection('users').requestPasswordReset(email);
}

export async function ConfirmPasswordChange({
  passwordResetToken,
  password,
  passwordConfirm,
}: IPasswordConfirmChange) {
  const pb = new Pocketbase(pbUrl);

  await pb
    .collection('users')
    .confirmPasswordReset(passwordResetToken, password, passwordConfirm);
}
