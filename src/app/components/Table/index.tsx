'use client';

import { RiAddFill, RiDeleteBin7Fill, RiEdit2Fill } from 'react-icons/ri';
import styles from './styles.module.scss';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Modal } from '../Modal';
import { useState } from 'react';
import Loading from '@/app/loading';
import Link from 'next/link';
import { Navigation } from '@/app/types/NavigationType';
import { navigationsKeys } from '@/app/utils/navigationPatterns';
import { TableColumns } from '@/app/interfaces/ITableColumns';

interface TableProps {
  deleteAction?: (id: string) => void;
  populateTable: () => void;
  navigationTo: Navigation;
}

export function Table({
  populateTable,
  deleteAction,
  navigationTo,
}: TableProps) {
  const query = useQuery({
    queryKey: ['table'],
    queryFn: async () => await populateTable(),
  });

  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>({});

  function OpenModal(id: string) {
    setSelectedOption(id);
    setOpen(!open);
  }

  const mutation = useMutation({
    mutationFn: async () => {
      console.log('????');
      deleteAction(selectedOption.id);
    },

    onSuccess: () => {
      setOpen(false);
    },
  });

  return (
    <div className={styles.tableWrapper}>
      {query.isLoading ? (
        <Loading />
      ) : (
        <>
          <div>
            <h2>{navigationsKeys[navigationTo].title}</h2>
            <Link href={`/${navigationsKeys[navigationTo].goTo}`}>
              <button>
                <RiAddFill />
                {navigationsKeys[navigationTo].button}
              </button>
            </Link>
          </div>
          <table className={styles.tableDefault}>
            <thead>
              <tr>
                <th>{query.data?.items[0]}</th>
              </tr>
            </thead>

            <tbody>
              {query.data?.items?.map((item: any) => (
                <tr>
                  {item.name && <td>{item.name}</td>}{' '}
                  {item.email && <td>{item.email}</td>}{' '}
                  {item.category && <td>{item.category_mother}</td>}
                  {item.isPublished && <td>{item.isPublished}</td>}
                  <td>
                    <Link href={`${navigationTo}/${item.id}`}>
                      <RiEdit2Fill color="#0088FF" />
                    </Link>
                    <button onClick={() => OpenModal(item.id)}>
                      <RiDeleteBin7Fill color="#FF3333" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal
            confirmationFunction={mutation.mutate}
            description="Esta ação não pode ser desfeita. Ao prosseguir, o item será permanentemente excluído do sistema."
            title="Tem certeza que deseja deletar?"
            isModalOpen={open}
          />
        </>
      )}
    </div>
  );
}
