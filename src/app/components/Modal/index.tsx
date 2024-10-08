import * as Dialog from '@radix-ui/react-dialog';
import styles from './styles.module.scss';
import { useState } from 'react';

interface ModalProps {
  isModalOpen: boolean;
  title: string;
  description: string;
  confirmationFunction: () => void;
}

export function Modal({
  isModalOpen,
  description,
  title,
  confirmationFunction,
}: ModalProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Dialog.Root open={isModalOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
          <div className={styles.actions}>
            <Dialog.Close onClick={() => setOpenModal(!isModalOpen)}>
              Cancelar
            </Dialog.Close>
            <button onClick={confirmationFunction}>Excluir</button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
