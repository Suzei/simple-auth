import styles from './styles.module.scss';
import { AuthType } from '@/app/types/AuthType';
import { LoginText } from '@/app/utils/LoginDinamicText';
import { Divider } from '../Divider';
import Link from 'next/link';

interface BoxType {
  children: React.ReactNode;
  authOption: AuthType;
}

export function Box({ children, authOption }: BoxType) {
  const LoginTextDynamic = LoginText(authOption);
  return (
    <div className={styles.box}>
      <>
        <header>
          <h2>{LoginTextDynamic?.title}</h2>
          <span>{LoginTextDynamic?.text}</span>
        </header>

        <div>{children}</div>

        <footer>
          <Divider text={LoginTextDynamic?.divider} />
          <Link href={LoginTextDynamic?.goTo.href || '/'}>
            {LoginTextDynamic?.goTo.text}
          </Link>
        </footer>
      </>
    </div>
  );
}
