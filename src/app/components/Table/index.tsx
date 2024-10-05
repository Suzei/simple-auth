'use client';

import {
  RiAddFill,
  RiDeleteBin7Fill,
  RiDeleteBinFill,
  RiEdit2Fill,
} from 'react-icons/ri';
import styles from './styles.module.scss';
import { User } from '@/app/entities/User';
import { RecordModel } from 'pocketbase';

interface DynamicTableProps {
  data: RecordModel[];
  deleteAction: (id: string) => void;
  createAction: () => void;
}

export function DynamicTable({ data }: DynamicTableProps) {
  return (
    <div className={styles.tableWrapper}>
      <div>
        <h2>Usuários</h2>
        <button>
          Novo usuário <RiAddFill />
        </button>
      </div>
      <table className={styles.tableDefault}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button>
                  <RiEdit2Fill color="#0088FF" />
                </button>
                <button>
                  <RiDeleteBin7Fill color="#FF3333" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
