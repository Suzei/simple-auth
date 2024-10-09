'use client';

import { Sidebar, SideBarOptions } from '@/app/components/Sidebar';
import styles from './styles.module.scss';
import { RiGroupFill, RiStickyNoteAddFill } from 'react-icons/ri';
import { PiBookOpenFill } from 'react-icons/pi';
import { Logout } from '@/app/_server_components/(login)/userActions';
import { pbUrl } from '@/app/lib/pBUrl';
import Pocketbase from 'pocketbase';

function DashboardTemplate({ children }: { children: React.ReactNode }) {
  const client = new Pocketbase(pbUrl);
  const user = client.authStore.model;

  const options: SideBarOptions[] = [
    {
      key: 'users',
      title: 'Usuários',
      icon: <RiGroupFill />,
      isAuthorized: !user?.type,
    },

    {
      key: 'categories',
      title: 'Categorias',
      icon: <RiStickyNoteAddFill />,
      isAuthorized: user?.type !== 'student',
    },

    {
      key: 'courses',
      title: 'Cursos',
      icon: <PiBookOpenFill />,
      isAuthorized: true,
    },
  ];

  return (
    <main id={styles.container}>
      <Sidebar sideBarOptions={options} />
      <div className={styles.user}>
        <div onClick={() => Logout()} className={styles.userLogin}>
          {user?.name}
        </div>
        {children}
      </div>
    </main>
  );
}

export default DashboardTemplate;
