import { AuthType } from "../types/AuthType";
import LoginType from "../types/LoginType";

const BoxWithFormFormattedTexts: LoginType[] = [
  {
    loginType: "auth",
    title: "Login da plataforma",
    text: "Olá! Seja muito bem vindo(a) a nossa plataforma. Para ter acesso basta efetuar o seu login.",
    divider: "Não possui conta?",
  },

  {
    loginType: "createAccount",
    title: "Vamos criar uma conta?",
    text: "Preencha os campos a baixo para que possamos criar sua conta na plataforma.",
    divider: "Já possui conta?",
  },

  {
    loginType: "forgotPassword",
    title: "Esqueceu sua senha?",
    text: "Digite seu email no campo para receber um email para  criação de um uma nova senha.",
    divider: "Lembrou da sua senha?",
  },
];

export function LoginText(key: AuthType) {
  const findByLoginType = BoxWithFormFormattedTexts.find(
    (value) => value.loginType === key
  );

  return findByLoginType;
}
