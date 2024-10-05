'use client';

import { Sidebar } from '@/app/components/Sidebar';
import { RiGroupFill, RiStickyNoteAddFill } from 'react-icons/ri';
import { PiBookOpenFill } from 'react-icons/pi';
import { DynamicTable } from '@/app/components/Table';
import styles from './styles.module.scss';
import { Logout } from '@/app/_server_components/(users)/userActions';
import { pbUrl } from '@/app/lib/pBUrl';
import Pocketbase, { RecordModel } from 'pocketbase';
import { useQuery } from '@tanstack/react-query';
import { GetUserList } from '@/app/_server_components/(dashboard)/dashboardActions';

export interface SideBarOptions {
  onClick?: () => void;
  title: string;
  icon: JSX.Element;
  key: string;
  isAuthorized: boolean;
}

const pb = new Pocketbase(pbUrl);
function Dashboard() {
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

  const query = useQuery({
    queryKey: ['user'],
    queryFn: async () => GetUserList(),
  });

  return (
    <>
      <Sidebar sideBarOptions={options} />
      <div className={styles.table}>
        <div className={styles.user}>
          <span>{}</span>
          <button onClick={() => Logout()}>sair</button>
        </div>
        <DynamicTable data={query.data?.items} />
      </div>
    </>
  );
}

export default Dashboard;
