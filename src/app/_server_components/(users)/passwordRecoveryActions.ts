import { ForgotPassword } from "@/app/components/ForgotPasswordForm";
import {
  IPasswordConfirmChange,
  IPasswordRecover,
} from "@/app/interfaces/IPasswordChange";
import { pbUrl } from "@/app/lib/pBUrl";
import Pocketbase from "pocketbase";

const pb = new Pocketbase(pbUrl);

export async function CreatePasswordRecovery({ email }: { email: string }) {
  await pb.collection("users").requestPasswordReset(email);
}

export async function ConfirmPasswordChange({
  passwordResetToken,
  password,
  passwordConfirm,
}: IPasswordConfirmChange) {
  await pb
    .collection("users")
    .confirmPasswordReset(passwordResetToken, password, passwordConfirm);
}
