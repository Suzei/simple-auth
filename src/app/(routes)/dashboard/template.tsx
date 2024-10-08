'use client';

import { Sidebar, SideBarOptions } from '@/app/components/Sidebar';
import styles from './styles.module.scss';
import { RiGroupFill, RiStickyNoteAddFill } from 'react-icons/ri';
import { PiBookOpenFill } from 'react-icons/pi';

function DashboardTemplate({ children }: { children: React.ReactNode }) {
  const options: SideBarOptions[] = [
    {
      key: 'users',
      title: 'Usuários',
      icon: <RiGroupFill />,
      isAuthorized: false,
    },

    {
      key: 'categories',
      title: 'Categorias',
      icon: <RiStickyNoteAddFill />,
      isAuthorized: false,
    },

    {
      key: 'courses',
      title: 'Cursos',
      icon: <PiBookOpenFill />,
      isAuthorized: false,
    },
  ];

  return (
    <main id={styles.container}>
      <Sidebar sideBarOptions={options} />
      {children}
    </main>
  );
}

export default DashboardTemplate;
