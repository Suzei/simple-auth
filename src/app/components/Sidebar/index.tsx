'use client';

import Image from 'next/image';
import styles from './styles.module.scss';
import logoAlt from '../../assets/logo-alt.svg';
import Link from 'next/link';
import { useParams, useSelectedLayoutSegment } from 'next/navigation';

export interface SideBarOptions {
  onClick?: () => void;
  title: string;
  icon: JSX.Element;
  key: string;
  isAuthorized?: boolean;
}
interface SideBarProps {
  sideBarOptions: SideBarOptions[];
}

export function Sidebar({ sideBarOptions }: SideBarProps) {
  const segment = useSelectedLayoutSegment();

  //   const isActive = segment === key;
  return (
    <aside className={styles.sidebar}>
      <header>
        <Image
          height={60}
          width={170}
          src={logoAlt}
          alt="Logo alternativa, branca, com animal ao lado"
        />
      </header>
      <hr />
      <nav>
        {sideBarOptions?.map(({ icon, isAuthorized, key, title, onClick }) => (
          <Link key={key} href={`/dashboard/${key}`}>
            <button
              className={segment === key ? styles.isActive : ''}
              disabled={!isAuthorized}
              type="button"
              onClick={onClick}
            >
              {icon}
              {title}
            </button>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
