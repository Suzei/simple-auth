export interface ILoginAuthProps {
  loginType: 'auth' | 'forgotPassword' | 'createAccount';
  text: string;
  title: string;
  divider: string;
  goTo: {
    text: string;
    href: string;
  };
}

export default ILoginAuthProps;
