export interface ILoginAuthProps {
  loginType: "auth" | "forgotPassword" | "createAccount";
  text: string;
  title: string;
  divider: string;
}

export default ILoginAuthProps;
